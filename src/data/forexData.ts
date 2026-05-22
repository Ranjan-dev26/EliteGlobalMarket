export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  detailedPoints: string[];
  gradient: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix: string;
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'forex-crm',
    title: 'Forex CRM',
    iconName: 'Cpu',
    description: 'Enterprise client cabinet and multi-level IB management custom-built for scaling brokers.',
    detailedPoints: [
      'Multi-tier Introducing Broker (IB) portals',
      'Integrated payment gateways supporting 50+ fiat/crypto options',
      'Automated KYC & compliance workflows with OCR tracing'
    ],
    gradient: 'from-blue-600/30 via-cyan-500/10 to-transparent'
  },
  {
    id: 'forex-liquidity',
    title: 'Forex Liquidity',
    iconName: 'Activity',
    description: 'Ultra-low latency Tier-1 institutional liquidity pools aggregation with tight spreads.',
    detailedPoints: [
      'Direct Prime-of-Prime bridge setup',
      'Spreads starting from 0.0 pips on key majors',
      'Equinix LD4, NY4, and TY3 hosting cross-connects'
    ],
    gradient: 'from-cyan-600/30 via-purple-500/10 to-transparent'
  },
  {
    id: 'forex-web-design',
    title: 'Forex Web Design',
    iconName: 'Globe',
    description: 'Futuristic dynamic visual client portals, responsive conversion-optimized brand sites.',
    detailedPoints: [
      'Interactive live rate widgets and calendar integrations',
      'High conversion UX built to grab leads',
      'Fully localized multi-language content architectures'
    ],
    gradient: 'from-purple-600/30 via-blue-500/10 to-transparent'
  },
  {
    id: 'dedicated-server',
    title: 'Dedicated Server',
    iconName: 'Server',
    description: 'High-performance ultra-low ping trading servers optimized for low-latency terminal hosting.',
    detailedPoints: [
      '99.999% SLA uptime guarantee with redundant power feeds',
      'DDoS protection specifically engineered for FIX protocols',
      'Under 1ms execution bridge routing to major liquidity hubs'
    ],
    gradient: 'from-blue-600/30 via-purple-500/10 to-transparent'
  },
  {
    id: 'forex-copier',
    title: 'Forex Copier',
    iconName: 'Copy',
    description: 'Extremely fast server-side account copying system with zero-slippage execution.',
    detailedPoints: [
      'Under 50ms propagation latency across thousands of accounts',
      'Strict risk ratios, lot size overrides and partial copying triggers',
      'Detailed master/slave allocation configuration maps'
    ],
    gradient: 'from-purple-600/30 via-cyan-500/10 to-transparent'
  },
  {
    id: 'ai-trading-robot',
    title: 'AI Trading Robot',
    iconName: 'Bot',
    description: 'Advanced custom quantitative trading bots fueled by institutional machine learning algorithms.',
    detailedPoints: [
      'Sentiment analysis engine parsing global economic headlines',
      'Self-optimizing grid and trend-following parameters',
      'Rigorous visual backtesting dashboards verified over 15-year histories'
    ],
    gradient: 'from-cyan-600/30 via-blue-500/10 to-transparent'
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    iconName: 'ShieldAlert',
    description: 'Innovative real-time risk mitigation dashboards, exposure alerts and auto-hedging modules.',
    detailedPoints: [
      'Dynamic automated toxic flow identification markers',
      'B-Book exposure profiling and smart routing indicators',
      'Real-time automated margin margin-call safety bridges'
    ],
    gradient: 'from-blue-600/30 via-cyan-500/10 to-transparent'
  },
  {
    id: 'forex-consulting',
    title: 'Forex Consulting',
    iconName: 'Briefcase',
    description: 'A-to-Z Broker setup advisory, licensing acquisitions, company formations, and operational setup.',
    detailedPoints: [
      'Guidance through FSC, CySEC, FSA, and offshore jurisdiction pipelines',
      'Tailored white-label core product selection advice',
      'Risk desk modeling, dealer desks operational procedures'
    ],
    gradient: 'from-cyan-600/30 via-purple-500/10 to-transparent'
  },
  {
    id: 'custom-forex-tools',
    title: 'Custom Forex Tools',
    iconName: 'Terminal',
    description: 'Tailored plugins, FIX API wrappers, widgets, and calculation bridges designed for smart traders.',
    detailedPoints: [
      'Dynamic margin and pip value calculation widgets',
      'Custom technical indicator pipelines developed on demands',
      'Multi-asset bridge connectors linking external feeds'
    ],
    gradient: 'from-purple-600/30 via-blue-500/10 to-transparent'
  },
  {
    id: 'meta-trader',
    title: 'Meta Trader Integration',
    iconName: 'Layers',
    description: 'Seamless integration with industry-standard MT4 & MT5 platforms, utilizing our robust APIs for automated account management.',
    detailedPoints: [
      'Bidirectional real-time bridge synchronization',
      'Custom manager plugins and automated commission routing',
      'Complete compatibility with standard liquidity feeds'
    ],
    gradient: 'from-blue-600/30 via-cyan-500/10 to-transparent'
  },
  {
    id: 'android-app',
    title: 'Android Application',
    iconName: 'Smartphone',
    description: 'High-performance native-feeling B2B trading app designed for Android, ensuring zero-latency trade execution.',
    detailedPoints: [
      'Optimized interface for clean rendering and responsive charts',
      'Secure biometrics authentication and multi-mode wallets',
      'Instant mobile alerts for margin levels and execution results'
    ],
    gradient: 'from-cyan-600/30 via-purple-500/10 to-transparent'
  },
  {
    id: 'ios-app',
    title: 'iOS Application',
    iconName: 'Tablet',
    description: 'Premium trading terminal designed exclusively for Apple iOS, loaded with conversion-tuned client onboarding flows.',
    detailedPoints: [
      'Fully compliant with strict App Store financial app guidelines',
      'Secure FaceID logins and encrypted localized credentials storage',
      'Sub-millisecond rates updating with background socket connection recovery'
    ],
    gradient: 'from-purple-600/30 via-blue-500/10 to-transparent'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    iconName: 'ShoppingBag',
    description: 'Scalable custom commerce systems with fully integrated payment aggregators and automated reporting hubs.',
    detailedPoints: [
      'Automated crypto and fiat invoicing and settlement rails',
      'Optimized shopping cart, billing, and direct merchant APIs',
      'Direct synchronization with major business accounting engines'
    ],
    gradient: 'from-blue-600/30 via-purple-500/10 to-transparent'
  }
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Liquidity',
    question: 'How does EliteGlobal Market aggregate tier-1 forex liquidity?',
    answer: 'We connect directly to major global prime brokers, banks, and non-bank market makers. By routing these streams through our smart order router (SOR) in ultra-low latency Equinix datacenters, we compile a deep visual order book with spreads from 0.0 pips and near-instant execution profiles.'
  },
  {
    id: 'faq-2',
    category: 'CRM',
    question: 'Does your Forex CRM integrate with multiple external platforms?',
    answer: 'Yes! Our Forex CRM is platform-agnostic. It supports connection with MT4, MT5, cTrader, Vertex, and custom-built API trading systems through ready-to-use plug-ins. It also aggregates multi-level IB structures, support desk tickets, and payment rails natively.'
  },
  {
    id: 'faq-3',
    category: 'Hosting',
    question: 'What is the server latency to prime matching engines?',
    answer: 'Our dedicated hosting structures are stationed physically inside Equinix NY4 (New York), LD4 (London), and TY3 (Tokyo) facilities. With optical cross-connects, our client execution routes achieve outstanding latencies under 1.2ms to major liquidity pools.'
  },
  {
    id: 'faq-4',
    category: 'Automation',
    question: 'Can the AI Trading Robot adapt to volatile high-impact news cycles?',
    answer: 'Absolutely. The AI bot utilizes adaptive machine learning parameters and real-time news filters. During high-impact events (e.g., NFP, FOMC), the system can be configured to automatically tighten trailing-stop margins or pause entry signals to mitigate unnecessary B-Book-style risks.'
  },
  {
    id: 'faq-5',
    category: 'Licensing',
    question: 'Can you assist newly founded brokers with offshore or onshore licensing?',
    answer: 'Yes. Our consulting division offers years of expertise in global regulatory frameworks. We assist from offshore entities (St. Vincent, Seychelles, Mauritius) up to elite tier-1 regulatory submissions (CySEC, FCA, ASIC), complete with banking and payment provider setups.'
  },
  {
    id: 'faq-6',
    category: 'Copier',
    question: 'How fast does the Trade Forex Copier synchronise copying signals?',
    answer: 'Our copier is entirely server-side. Rather than executing locally through terminals, copy rules are synchronized via low-latency API connections. Trades trigger across all slave accounts in under 35 milliseconds, keeping slippage virtually non-existent.'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Elena Rostova',
    role: 'Chief Executive Officer',
    company: 'Vanguard Brokerage Group',
    rating: 5,
    quote: 'The multi-platform integration of EliteGlobal Market’s CRM changed our entire sales operations. The introducing broker tiered system works flawlessly with 2,500 active partners. Absolute fintech art.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't-2',
    name: 'Marcus Vance',
    role: 'Head of Trading Systems',
    company: 'Stellar Prime Liquidity',
    rating: 5,
    quote: 'EGM liquidity bridges inside Equinix LD4 reduced our slip margins by 42%. The aggregated spreads on major pairs consistently beat the standard market rates. An invaluable technical partner.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't-3',
    name: 'Kazuhiko Tanaka',
    role: 'Founder & Quantitative Lead',
    company: 'Apex Trading Laboratories',
    rating: 5,
    quote: 'Deploying the EGM AI algorithms onto our low-latency servers generated reliable parameters during extreme market swings. Service consulting was active 24/7 to fine-tune our custom execution models.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't-4',
    name: 'Sophia Lindqvist',
    role: 'Director of Risk Management',
    company: 'Nordic FX Clearing House',
    rating: 5,
    quote: 'The risk management panel provides dynamic monitoring. We are now capable of filtering toxic arbitrage instantly prior to routing. Highly recommend their smart bridges.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: '2018',
    title: 'Founding & Bridge Infrastructure',
    description: 'EliteGlobal Market was established by industry quantitative scientists. Launched our premier high-speed bridge and liquidity infrastructure in Equinix LD4.'
  },
  {
    year: '2020',
    title: 'Forex CRM & Client Cabinets Launch',
    description: 'Released our proprietary Broker CRM system complete with an multi-level IB management model, which quickly scaled to support 40+ broker brands globally.'
  },
  {
    year: '2022',
    title: 'AI Quantitative Models and Deep Aggregator',
    description: 'Introduced AI deep training trading robots and integrated prime of prime (PoP) aggregators, guaranteeing ultra-tight institutional raw spreads.'
  },
  {
    year: '2024',
    title: 'Global Compliance Advisory and Auto-Copiers',
    description: 'Developed server-side copy trade frameworks with under 35ms synchronization and extended consulting pipelines to cover multi-jurisdiction licensing.'
  },
  {
    year: '2026',
    title: 'Next-Generation Decentralized Liquidity Nodes',
    description: 'Expanding to high-speed hybrid liquidity models with real-time risk mitigation dashboards powered by deep quantitative forecasting models.'
  }
];

export const statsData: StatItem[] = [
  {
    label: 'Daily Trading Volume',
    value: '14.8',
    suffix: 'Billion+',
    icon: 'Activity'
  },
  {
    label: 'Execution Sub-Latency',
    value: '1.2',
    suffix: 'ms',
    icon: 'Zap'
  },
  {
    label: 'Broker Brands Powered',
    value: '180',
    suffix: '+',
    icon: 'Award'
  },
  {
    label: 'Active IB Affiliates',
    value: '35',
    suffix: 'K+',
    icon: 'TrendingUp'
  }
];
