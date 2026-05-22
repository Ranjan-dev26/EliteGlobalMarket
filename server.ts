import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const fallbackNews = [
    {
      title: "US Dollar Index Vaults Higher on Strong Inflation Metrics",
      summary: "The dollar rallied across major sub-pairs as robust core service inflation fuels expectations of prolonged interest rate plateaus at the Fed treasury desks.",
      source: "Financial Times Grounding Indicator",
      url: "https://www.ft.com"
    },
    {
      title: "Gold Retests $2,420 Amid Heightened Geopolitical Safe Haven Flows",
      summary: "XAU/USD raw spot price surged as central bank demand combined with asset reallocation flows drive bullion towards long-term technical resistance blocks.",
      source: "Bloomberg Finance Core",
      url: "https://www.bloomberg.com"
    },
    {
      title: "ECB Signals Cautious Rate Adjustments Looking Towards Q3",
      summary: "Eurozone regional policymakers emphasize symmetric target band approaches, keeping regional sovereign spreads tight as growth forecasts stabilize.",
      source: "Reuters Forex Desk",
      url: "https://www.reuters.com"
    }
  ];

  // Simple in-memory cache and rate-limiting safeguards
  let cachedNews: any = null;
  let lastFetchTime = 0;
  let lastErrorTime = 0;
  const CACHE_DURATION = 30 * 60 * 1000; // Cache valid for 30 minutes
  const ERROR_THROTTLE_DURATION = 3 * 60 * 1000; // If Gemini fails with 429 or other, don't call it again for 3 minutes to preserve quota

  // API Route for search-grounded market news
  app.get("/api/news", async (req, res) => {
    const now = Date.now();
    const forceRefresh = req.query.refresh === "true";

    // 1. If cache is fresh and it is not a force refresh (or if force refresh is requested too quickly, e.g. < 2m), return cached.
    const isCacheValid = cachedNews && (now - lastFetchTime < CACHE_DURATION);
    const isThrottledAfterError = now - lastErrorTime < ERROR_THROTTLE_DURATION;

    if (isCacheValid && (!forceRefresh || (now - lastFetchTime < 1.5 * 60 * 1000))) {
      console.log("Serving grounded news from in-memory server cache...");
      return res.json({ 
        news: cachedNews, 
        source: "cached-grounding",
        cachedAt: new Date(lastFetchTime).toISOString()
      });
    }

    // 2. If Gemini failed recently (e.g. 429), throttled-fallback instantly to save user's quota.
    if (isThrottledAfterError && !cachedNews) {
      console.log("Gemini API call throttled due to recent rate limiting or exhaustion. Serving direct fallback news.");
      return res.json({ 
        news: fallbackNews, 
        source: "throttled-fallback",
        info: "Retrying Gemini API is temporarily restricted to prevent quota abuse."
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "" || apiKey.includes("MY_")) {
      console.log("No valid GEMINI_API_KEY found, returning premium mock news.");
      return res.json({ news: fallbackNews, source: "mock-grounding" });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      console.log("Fetching live news with Gemini-3.5-flash search grounding...");
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: "List the top 3 latest real-time news headlines of today regarding global finance, forex, currency trading, central banks, and commodities markets. Ensure they represent actual current real-world events.",
        config: {
          systemInstruction: "You are an expert institutional market news aggregator. Provide highly accurate, real-time news for traders. Return EXACTLY a JSON array containing the top 3 items. Each item must be an object with the properties: title, summary, source, and url. Set url to the actual news article URL (or domain e.g. https://www.bloomberg.com) found in web search grounding chunks. Return ONLY a parseable JSON array, nothing else.",
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "The news article title" },
                summary: { type: Type.STRING, description: "A 1-to-2 sentence detailed summary of the main news insight" },
                source: { type: Type.STRING, description: "The publisher or source (e.g., Bloomberg, Reuters, Financial Times)" },
                url: { type: Type.STRING, description: "The actual URL web link to the article or publisher source found in grounding" }
              },
              required: ["title", "summary", "source", "url"]
            }
          }
        }
      });

      const text = response?.text;
      if (text) {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          console.log("Live grounded news parsed successfully from Gemini:");
          cachedNews = parsed.slice(0, 3);
          lastFetchTime = Date.now();
          return res.json({ 
            news: cachedNews, 
            source: "real-time-grounding",
            fetchedAt: new Date(lastFetchTime).toISOString()
          });
        }
      }

      throw new Error("Empty or malformed JSON returned from model");
    } catch (error: any) {
      lastErrorTime = Date.now(); // Track when the error occurred to trigger throttling window
      
      const isRateLimit = error?.message?.includes("429") || error?.status === "RESOURCE_EXHAUSTED" || JSON.stringify(error).includes("429");
      if (isRateLimit) {
        console.warn("Gemini grounding API: Quota/Rate limit exceeded (429). Throttling next API attempts.");
      } else {
        console.error("Gemini grounding API failed, falling back to local news index:", error?.message || error);
      }
      
      // Serve cached news if we had it, even if expired, instead of complete static fallback
      if (cachedNews) {
        return res.json({
          news: cachedNews,
          source: "cached-fallback-after-error",
          error: error instanceof Error ? error.message : String(error)
        });
      }

      return res.json({
        news: fallbackNews,
        source: "failed-fallback",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
