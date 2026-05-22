import React, { useRef, useEffect, useState } from 'react';

// Define floating currencies that orbit the globe
const ORBIT_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'XAUUSD', 'CHF', 'AUD', 'CAD'];

interface OrbitParticle {
  angle: number;
  speed: number;
  radiusX: number;
  radiusY: number;
  tiltAngle: number;
  text: string;
  size: number;
  color: string;
  z: number;
  x3d: number;
  y3d: number;
  z3d: number;
}

interface GlobePoint {
  lat: number;
  lng: number;
  x: number;
  y: number;
  z: number;
  color: string;
}

export function ThreeDCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredSymbol, setHoveredSymbol] = useState<string | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Handle resizing beautifully
    const resize = () => {
      if (containerRef.current && canvas) {
        width = containerRef.current.clientWidth;
        height = containerRef.current.clientHeight || 500;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialise 3D points for the globe wireframe
    const globePoints: GlobePoint[] = [];
    const latLines = 14;
    const lngLines = 16;
    for (let i = 0; i < latLines; i++) {
      const lat = (Math.PI * i) / (latLines - 1) - Math.PI / 2; // from -PI/2 to PI/2
      for (let j = 0; j < lngLines; j++) {
        const lng = (Math.PI * 2 * j) / lngLines - Math.PI; // from -PI to PI
        // Sphere coordinate translation
        const r = 120; // globe radius
        const x = r * Math.cos(lat) * Math.cos(lng);
        const y = r * Math.sin(lat);
        const z = r * Math.cos(lat) * Math.sin(lng);
        globePoints.push({
          lat,
          lng,
          x,
          y,
          z,
          color: i % 2 === 0 ? '#06b6d4' : '#a855f7' // Cyan and Purple alternation
        });
      }
    }

    // Initialise orbiting currency particles
    const orbitParticles: OrbitParticle[] = ORBIT_CURRENCIES.map((symbol, idx) => {
      const tiltAngle = (idx * (Math.PI * 2)) / ORBIT_CURRENCIES.length;
      return {
        angle: Math.random() * Math.PI * 2,
        speed: 0.007 + Math.random() * 0.005,
        radiusX: 190 + Math.random() * 30,
        radiusY: 60 + Math.random() * 20,
        tiltAngle: -Math.PI / 6 + (idx * Math.PI) / 10,
        text: symbol,
        size: symbol === 'XAUUSD' ? 10 : 8,
        color: idx % 3 === 0 ? '#38bdf8' : idx % 3 === 1 ? '#c084fc' : '#22d3ee',
        z: 0,
        x3d: 0,
        y3d: 0,
        z3d: 0
      };
    });

    // Backing trading chart vectors in 3D
    let chartOffset = 0;
    const chartPoints: { x: number; y: number; z: number }[] = [];
    for (let idx = 0; idx < 15; idx++) {
      chartPoints.push({
        x: -220 + idx * 30,
        y: Math.sin(idx * 0.5) * 40 - 100, // floating elevated
        z: Math.cos(idx * 0.4) * 50
      });
    }

    // Dynamic digital trading particles floating in space
    const backgroundStars = Array.from({ length: 60 }, () => ({
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 500,
      z: (Math.random() - 0.5) * 400,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.3
    }));

    let globeYRotation = 0;
    let globeXRotation = 0.2; // slight tilted looking down

    // Trace mouse coordinates relative to center
    const onMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      mouseRef.current.targetX = x * 0.0015;
      mouseRef.current.targetY = y * 0.0015;
    };

    canvas.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    const draw = () => {
      if (!ctx || !canvas) return;

      // Clear with elegant translucent dark fintech background
      ctx.fillStyle = '#0a0a16';
      ctx.fillRect(0, 0, width, height);

      // Dampen mouse inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const dynamicXRot = globeXRotation + mouseRef.current.y;
      const dynamicYRot = globeYRotation + mouseRef.current.x;

      globeYRotation += 0.004; // steady spin
      chartOffset += 0.02;

      const cosX = Math.cos(dynamicXRot);
      const sinX = Math.sin(dynamicXRot);
      const cosY = Math.cos(dynamicYRot);
      const sinY = Math.sin(dynamicYRot);

      // 3D projection function
      const project = (x3d: number, y3d: number, z3d: number) => {
        // Apply responsive scale factor specifically tailored for mobile viewports
        const responsiveScaleFactor = width < 640 ? Math.max(0.6, width / 640) : 1.0;
        const scaledX = x3d * responsiveScaleFactor;
        const scaledY = y3d * responsiveScaleFactor;
        const scaledZ = z3d * responsiveScaleFactor;

        // Rotate around Y axis
        let x1 = scaledX * cosY - scaledZ * sinY;
        let z1 = scaledX * sinY + scaledZ * cosY;

        // Rotate around X axis
        let y2 = scaledY * cosX - z1 * sinX;
        let z2 = scaledY * sinX + z1 * cosX;

        // Perspective depth factors
        const focalLength = 340;
        const scale = focalLength / (focalLength + z2);
        const xProj = width / 2 + x1 * scale;
        const yProj = height / 2 + y2 * scale;

        return { x: xProj, y: yProj, scale, depth: z2 };
      };

      // 1. Draw glowing stars background
      backgroundStars.forEach((star) => {
        // Slowly update position for movement feel
        star.z -= 0.15;
        if (star.z < -200) star.z = 200;

        const proj = project(star.x, star.y, star.z);
        if (proj.x > 0 && proj.x < width && proj.y > 0 && proj.y < height) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, star.size * proj.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${star.opacity * proj.scale})`;
          ctx.fill();
        }
      });

      // 2. Compute background chart vector update and project
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const finalChartProjs: any[] = [];
      chartPoints.forEach((p, idx) => {
        // dynamic motion matching stock candles
        const flexY = p.y + Math.sin(chartOffset + idx) * 12;
        const proj = project(p.x, flexY, p.z);
        finalChartProjs.push({ ...proj, yVal: flexY });
        if (idx === 0) {
          ctx.moveTo(proj.x, proj.y);
        } else {
          ctx.lineTo(proj.x, proj.y);
        }
      });
      ctx.stroke();

      // Render glowing nodes and candlesticks mock projections
      finalChartProjs.forEach((p, idx) => {
        if (idx % 2 === 0) {
          ctx.beginPath();
          ctx.rect(p.x - 2, p.y - (8 * p.scale), 4, 16 * p.scale);
          ctx.fillStyle = idx % 4 === 0 ? 'rgba(34, 211, 238, 0.7)' : 'rgba(236, 72, 153, 0.7)';
          ctx.fill();
        }
      });

      // 3. Draw orbit rings guides
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.lineWidth = 1.5;
      for (let tiltIdx = -2; tiltIdx <= 2; tiltIdx++) {
        ctx.beginPath();
        const tiltStep = tiltIdx * (Math.PI / 6);
        for (let angle = 0; angle < Math.PI * 2; angle += 0.08) {
          const rx = 190;
          const ry = 80;
          const initialX = rx * Math.cos(angle);
          const initialY = ry * Math.sin(angle) * Math.sin(tiltStep);
          const initialZ = ry * Math.sin(angle) * Math.cos(tiltStep);
          const proj = project(initialX, initialY, initialZ);
          if (angle === 0) ctx.moveTo(proj.x, proj.y);
          else ctx.lineTo(proj.x, proj.y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // 4. Draw central 3D globe wireframe vertices & connectivity
      // Keep depth list to draw elements in order (painters algorithm)
      const renderList: { depth: number; draw: () => void }[] = [];

      // Sort & project globe points
      globePoints.forEach((point) => {
        const proj = project(point.x, point.y, point.z);

        // Grid lines drawing helper - connect with next longitude block
        renderList.push({
          depth: proj.depth,
          draw: () => {
            ctx.beginPath();
            ctx.arc(proj.x, proj.y, 1.8 * proj.scale, 0, Math.PI * 2);
            ctx.fillStyle = point.color;
            ctx.fill();

            // Glow core
            if (proj.scale > 1.1) {
              ctx.shadowColor = point.color;
              ctx.shadowBlur = 4 * proj.scale;
              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              ctx.arc(proj.x, proj.y, 0.7 * proj.scale, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0; // reset
            }
          }
        });
      });

      // 5. Update and project Orbit Currency Particles
      orbitParticles.forEach((p) => {
        p.angle += p.speed;

        // Translate around dynamic orbit trajectory
        const cosTilt = Math.cos(p.tiltAngle);
        const sinTilt = Math.sin(p.tiltAngle);

        // Simple orbit equations
        const rawX = p.radiusX * Math.cos(p.angle);
        const rawY = p.radiusY * Math.sin(p.angle);

        // Rotate in 3D around coordinate orientation
        const xOffset = rawX * cosTilt - rawY * sinTilt;
        const yOffset = rawX * sinTilt + rawY * cosTilt;
        const zOffset = p.radiusY * Math.cos(p.angle + Math.PI / 4) * 0.8;

        const proj = project(xOffset, yOffset, zOffset);
        p.z = proj.depth;
        p.x3d = proj.x;
        p.y3d = proj.y;

        renderList.push({
          depth: proj.depth,
          draw: () => {
            // Draw particle glowing line tail
            ctx.beginPath();
            ctx.moveTo(proj.x, proj.y);
            // Dynamic trail length
            const tailProj = project(
              p.radiusX * Math.cos(p.angle - 0.25) * cosTilt - p.radiusY * Math.sin(p.angle - 0.25) * sinTilt,
              p.radiusX * Math.sin(p.angle - 0.25) * sinTilt + p.radiusY * Math.sin(p.angle - 0.25) * cosTilt,
              p.radiusY * Math.cos(p.angle + Math.PI / 4 - 0.25) * 0.8
            );
            ctx.lineTo(tailProj.x, tailProj.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.45 * proj.scale})`;
            ctx.lineWidth = 1.2 * proj.scale;
            ctx.stroke();

            // Use mobile-optimized larger base fonts to ensure extreme readability
            const isMobile = width < 640;
            const baseFontSize = isMobile ? 11 : 10;
            const minFontSize = isMobile ? 9.5 : 8;

            // Set the font before measuring text width so it is accurately calculated
            ctx.font = `700 ${Math.max(minFontSize, baseFontSize * proj.scale)}px "JetBrains Mono", monospace`;
            const textWidth = ctx.measureText(p.text).width;

            // Bubble background glassmorphism tag
            ctx.fillStyle = 'rgba(7, 7, 20, 0.85)';
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = Math.max(3, 8 * proj.scale);

            // Rounded rect for badge
            ctx.beginPath();
            const bw = textWidth + (isMobile ? 12 : 14);
            const bh = isMobile ? 20 : 18;
            const bx = proj.x - bw / 2;
            const by = proj.y - bh / 2;
            ctx.roundRect(bx, by, bw, bh, 4);
            ctx.fill();
            ctx.stroke();
            ctx.shadowBlur = 0; // reset

            // Text tag
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(p.text, proj.x, proj.y + 0.5);
          }
        });
      });

      // Sort items by depth (largest depth draws first, meaning background, then foreground)
      renderList.sort((a, b) => b.depth - a.depth);

      // Execute drawing
      renderList.forEach((renderItem) => renderItem.draw());

      // Beautiful center ambient neon orb glow
      const radialGlow = ctx.createRadialGradient(width / 2, height / 2, 5, width / 2, height / 2, 160);
      radialGlow.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      radialGlow.addColorStop(0.5, 'rgba(124, 58, 237, 0.05)');
      radialGlow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 200, 0, Math.PI * 2);
      ctx.fill();

      // Simple mouse proximity checking to highlight symbol
      let foundHover: string | null = null;
      orbitParticles.forEach((p) => {
        const mouseDist = Math.hypot(p.x3d - (mouseRef.current.targetX * (height / 2 / 0.0015) + width / 2), p.y3d - (mouseRef.current.targetY * (height / 2 / 0.0015) + height / 2));
        if (mouseDist < 25) {
          foundHover = p.text;
        }
      });
      if (foundHover !== hoveredSymbol) {
        setHoveredSymbol(foundHover);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (canvas) {
        canvas.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, [hoveredSymbol]);

  return (
    <div ref={containerRef} className="relative w-full h-[280px] sm:h-[320px] md:h-[480px] lg:h-[500px] flex items-center justify-center bg-radial from-slate-950 to-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-white/5 my-4">
      {/* Title Watermark */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 select-none">
        <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-[#22d3ee] uppercase bg-cyan-950/40 border border-cyan-800/40 px-2 py-1 rounded">
          EGM Quant Engine L2
        </span>
      </div>

      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 select-none flex items-center gap-1.5 font-mono text-[8px] sm:text-[9px] text-gray-400">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="hidden sm:inline">LIQUIDITY MULTI-FEED ACTIVE</span>
        <span className="sm:hidden">FEED LIVE</span>
      </div>

      {/* Floating interactive helper */}
      <div className="absolute bottom-3 sm:bottom-4 z-10 transition-all text-[10px] sm:text-xs bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-gray-300 flex items-center gap-1.5 pointer-events-none max-w-[90%] justify-center select-none">
        <span className="font-mono text-cyan-400 hidden sm:inline">Orbital Data Nodes:</span>
        <span className="text-gray-100 font-medium truncate">
          {hoveredSymbol ? `Feed: ${hoveredSymbol} (Streaming Live)` : 'Hover orbits to inspect'}
        </span>
      </div>

      {/* Actual HTML Canvas */}
      <canvas id="forex-quantum-globe" ref={canvasRef} className="block w-full h-full cursor-crosshair" />
    </div>
  );
}
