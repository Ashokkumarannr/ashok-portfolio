/**
 * ASHOK PORTFOLIO - INTERACTIVE WORKSPACE PROJECT DATA
 * ==========================================================================
 * Easily add, remove, and update projects, categories, artboards, layers,
 * and Behance links without rebuilding any interface.
 * ==========================================================================
 */

export const uiuxProjects = [
  {
    id: "savulo-brand",
    tabTitle: "brand",
    title: "brand",
    subtitle: "Savulo — Visual Identity, Brand System & Editorial Guidelines",
    category: "Brand Identity • Design System",
    client: "Savulo Artisan Collective",
    year: "2026",
    behanceUrl: "https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX",
    description: "Savulo is born from an obsession with authentic craft and timeless design. A comprehensive visual identity system spanning editorial art direction, typography hierarchy, packaging, and digital touchpoints.",
    tags: ["Brand Guidelines", "Visual Identity", "Slide 16:9", "Typography"],
    screens: [
      {
        id: "slide-1",
        name: "Slide 16:9 - 1",
        label: "Slide 16:9 - 1",
        type: "Slide 16:9 (1920 × 1080)",
        width: 1920,
        height: 1080,
        accentColor: "#671D27",
        badge: "Hero Artisan Slide",
        description: "Editorial photography of workshop hands weaving raw textile with central burgundy SAVULO brandmark.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, serif",
            display: "48px / 900 Bold",
            body: "15px / 400 Regular",
            tracking: "0.12em"
          },
          layout: {
            mode: "Fixed 16:9 Frame",
            padding: "48px",
            itemSpacing: "32px",
            alignment: "Center Center"
          },
          colors: [
            { name: "Savulo Crimson", hex: "#671D27" },
            { name: "Pure White", hex: "#FFFFFF" },
            { name: "Artisan Noir", hex: "#111111" },
            { name: "Warm Flax", hex: "#E8DEC8" }
          ],
          components: ["Savulo Central Badge", "Artisan Photography Layer", "Corner Framing", "Slide Index 01"]
        },
        slideContent: {
          variant: "hero-photo",
          badgeText: "SAVULO",
          photoUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
          alt: "Savulo Artisan Hands Weaving Craft"
        }
      },
      {
        id: "slide-3",
        name: "Slide 16:9 - 3",
        label: "Slide 16:9 - 3",
        type: "Slide 16:9 (1920 × 1080)",
        width: 1920,
        height: 1080,
        accentColor: "#671D27",
        badge: "Brand Story & Mission",
        description: "Crimson editorial narrative detailing brand philosophy, heritage craftsmanship, and design mission.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "28px / 800 Bold",
            body: "13px / 400 Regular",
            tracking: "0.04em"
          },
          layout: {
            mode: "Auto Layout (Horizontal Grid)",
            padding: "40px 48px",
            itemSpacing: "40px",
            alignment: "Top Left"
          },
          colors: [
            { name: "Deep Crimson", hex: "#671D27" },
            { name: "Flax White", hex: "#F5F0EB" },
            { name: "Muted Crimson", hex: "#852633" },
            { name: "Gold Foil", hex: "#D4AF37" }
          ],
          components: ["Story Header Column", "Mission Block", "Typography System", "Brandmark Footer"]
        },
        slideContent: {
          variant: "story",
          storyTitle: "BRAND STORY",
          storyBody: "Savulo is born from an obsession with authentic craft and timeless design. Every material is curated to forge an emotional connection.",
          missionTitle: "OUR MISSION",
          missionBody: "Crafting visual identities and digital experiences that resonate with elegance and uncompromising precision.",
          tag: "SAVULO a visual identity 2026"
        }
      },
      {
        id: "slide-4",
        name: "Slide 16:9 - 4",
        label: "Slide 16:9 - 4",
        type: "Slide 16:9 (1920 × 1080)",
        width: 1920,
        height: 1080,
        accentColor: "#671D27",
        badge: "Brand Elements & Badge",
        description: "Embossed burgundy patch with stitched border, typography lockups, and hand-drawn illustrated assets.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, monospace",
            display: "36px / 800 Bold",
            body: "12px / 500 Medium",
            tracking: "0.15em"
          },
          layout: {
            mode: "Flex Center",
            padding: "36px",
            itemSpacing: "24px",
            alignment: "Center Center"
          },
          colors: [
            { name: "Crimson Patch", hex: "#671D27" },
            { name: "Stitch Beige", hex: "#F2ECE1" },
            { name: "Terra Cotta", hex: "#C86446" },
            { name: "Canvas Warm", hex: "#FAF8F5" }
          ],
          components: ["Stitched Leather Badge", "Brandmark Variations", "Editorial Illustration", "Color Palette Swatches"]
        },
        slideContent: {
          variant: "badge-illustration",
          badgeText: "SAVULO",
          illustrationUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=85"
        }
      },
      {
        id: "slide-2",
        name: "Slide 16:9 - 2",
        label: "Slide 16:9 - 2",
        type: "Slide 16:9 (1920 × 1080)",
        width: 1920,
        height: 1080,
        accentColor: "#671D27",
        badge: "Logo Variations",
        description: "Primary brandmark, secondary wordmark, horizontal scale, and minimum clear-space standards.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "32px / 800 Bold",
            body: "13px / 400 Regular",
            tracking: "0.08em"
          },
          layout: {
            mode: "Grid 2x2",
            padding: "36px",
            itemSpacing: "28px",
            alignment: "Center"
          },
          colors: [
            { name: "Savulo Crimson", hex: "#671D27" },
            { name: "Charcoal", hex: "#1A1A1A" },
            { name: "Milk White", hex: "#FCFCFC" }
          ],
          components: ["Scale Grid", "Wordmark Row", "Clearspace Guides", "Monochrome Inversions"]
        },
        slideContent: {
          variant: "variations",
          badgeText: "SAVULO"
        }
      }
    ]
  },
  {
    id: "library-app",
    tabTitle: "Library Management App",
    title: "Library Management App",
    subtitle: "Modern Academic Resource & Archival Management System",
    category: "Desktop & Web System",
    client: "National Archive Foundation",
    year: "2026",
    behanceUrl: "https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX",
    description: "A centralized library operating system featuring catalog discovery, digital lending rights, and automated overdue circulation alerts with zero-latency full-text indexing.",
    tags: ["Enterprise UI", "Dashboard", "Archival UX", "Data Density"],
    screens: [
      {
        id: "lib-01",
        name: "Catalog Index & Search",
        label: "Desktop 1440 — Catalog",
        type: "Desktop 1440 Frame",
        width: 1440,
        height: 900,
        accentColor: "#0D99FF",
        badge: "Archival Catalog",
        description: "Multi-parameter boolean search query with live facet counters and digital checkout queue.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, monospace",
            display: "24px / 700 Bold",
            body: "13px / 400 Regular",
            tracking: "-0.01em"
          },
          layout: {
            mode: "Three-Column Master Detail",
            padding: "24px 32px",
            itemSpacing: "20px",
            alignment: "Top Left"
          },
          colors: [
            { name: "Figma Blue", hex: "#0D99FF" },
            { name: "Clean Slate", hex: "#F8FAFC" },
            { name: "Border Light", hex: "#E2E8F0" },
            { name: "Dark Text", hex: "#0F172A" }
          ],
          components: ["Faceted Filter Rail", "Inventory Table Grid", "Barcode Scanner Status", "Pagination Controls"]
        },
        slideContent: {
          variant: "desktop-app",
          title: "Library Management App",
          stat: "148,200 Titles Archived",
          badgeText: "ONLINE"
        }
      }
    ]
  },
  {
    id: "zendo-app",
    tabTitle: "Untitled",
    title: "Zendo App",
    subtitle: "Mindfulness, Meditation & Breathwork iOS Application",
    category: "Mobile Application • iOS",
    client: "Zendo Wellness Labs",
    year: "2026",
    behanceUrl: "https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX",
    description: "An ultra-minimalist meditation application designed around cognitive ease, organic haptics, and generative circadian soundscapes. Featuring custom dark mode depth and fluid typography.",
    tags: ["iOS 18", "Design System", "Soundscapes", "Cognitive UX"],
    screens: [
      {
        id: "zendo-01",
        name: "01 — Onboarding & Intent",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#6366F1",
        badge: "Intro Flow",
        description: "Adaptive goal-calibration screen featuring soft atmospheric lighting and micro-haptic slider.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "34px / 800 Bold",
            body: "15px / 400 Regular",
            tracking: "-0.025em"
          },
          layout: {
            mode: "Auto Layout (Vertical)",
            padding: "24px 20px",
            itemSpacing: "20px",
            alignment: "Top Center"
          },
          colors: [
            { name: "Atmosphere Indigo", hex: "#6366F1" },
            { name: "Void Dark", hex: "#090D16" },
            { name: "Starlight White", hex: "#FFFFFF" },
            { name: "Subtle Glow", hex: "#A5B4FC" }
          ],
          components: ["Glass Pill Switcher", "Ambient Mesh Gradient", "Primary Intent CTA", "Indicator Dots"]
        },
        preview: {
          tagline: "FIND YOUR CENTER",
          heading: "Breathe in Clarity.\nExhale Chaos.",
          meta: "Tailored to your circadian rhythm",
          stat: "14-Day Reset Journey",
          pill: "✦ Recommended for Evening",
          primaryBtn: "Begin Practice"
        }
      },
      {
        id: "zendo-02",
        name: "02 — Daily Practice Hub",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#10B981",
        badge: "Core Session",
        description: "Minimalist breathing dial with dynamic organic wave visualizer that tracks diaphragmatic pacing.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "40px / 800 Bold",
            body: "14px / 500 Medium",
            tracking: "-0.03em"
          },
          layout: {
            mode: "Auto Layout (Vertical)",
            padding: "28px 22px",
            itemSpacing: "24px",
            alignment: "Center"
          },
          colors: [
            { name: "Emerald Calm", hex: "#10B981" },
            { name: "Deep Charcoal", hex: "#0B0E14" },
            { name: "Mint Breath", hex: "#A7F3D0" },
            { name: "Border Glass", hex: "#1E293B" }
          ],
          components: ["Organic Breathing Ring", "Tempo Meter (4-7-8)", "Biometric Heart Sync", "Floating Pause Pill"]
        },
        preview: {
          tagline: "4-7-8 TECHNIQUE",
          heading: "Deep Resonance",
          meta: "Session • 12 of 20 mins remaining",
          stat: "62 BPM • Steady State",
          pill: "● Live Biometric Sync",
          primaryBtn: "Hold Breath (4s)"
        }
      },
      {
        id: "zendo-03",
        name: "03 — Generative Soundscapes",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#F59E0B",
        badge: "Audio Suite",
        description: "Spatial audio mixing matrix allowing users to blend rain, singing bowls, and delta binaural waves.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "28px / 800 Bold",
            body: "13.5px / 400 Regular",
            tracking: "-0.015em"
          },
          layout: {
            mode: "Grid 2x2 + Sliders",
            padding: "24px 20px",
            itemSpacing: "16px",
            alignment: "Top Left"
          },
          colors: [
            { name: "Sunset Amber", hex: "#F59E0B" },
            { name: "Obsidian", hex: "#080B11" },
            { name: "Warm Mist", hex: "#FDE68A" },
            { name: "Card Surface", hex: "#151B26" }
          ],
          components: ["Spatial Audio Mixer", "Channel Volume Sliders", "Faceted Sound Tile", "Dolby Atmos Badge"]
        },
        preview: {
          tagline: "SPATIAL ACOUSTICS",
          heading: "Nordic Rain & Pine",
          meta: "Delta Waves • 432 Hz Solfeggio",
          stat: "3 Active Layers Playing",
          pill: "♫ Binaural Beats Active",
          primaryBtn: "Save Custom Preset"
        }
      },
      {
        id: "zendo-04",
        name: "04 — Mindful Streaks & Metrics",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#EC4899",
        badge: "Analytics",
        description: "Non-punitive progression tracker highlighting streaks, heart-rate variability drops, and calm minutes.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "36px / 900 Black",
            body: "14px / 400 Regular",
            tracking: "-0.02em"
          },
          layout: {
            mode: "Auto Layout (Vertical)",
            padding: "24px 20px",
            itemSpacing: "18px",
            alignment: "Top Center"
          },
          colors: [
            { name: "Lotus Pink", hex: "#EC4899" },
            { name: "Card Matte", hex: "#111827" },
            { name: "Soft Lilac", hex: "#FBCFE8" },
            { name: "Success Green", hex: "#34D399" }
          ],
          components: ["Radial Streak Wheel", "HRV Delta Chart", "Milestone Badge Grid", "Export Health Data"]
        },
        preview: {
          tagline: "28-DAY JOURNEY",
          heading: "Mindful Momentum",
          meta: "840 Calm Minutes Logged",
          stat: "HRV +18% Improvement",
          pill: "★ Perfect Week Achieved",
          primaryBtn: "Share Milestone"
        }
      },
      {
        id: "zendo-05",
        name: "05 — Circadian Profile & Sync",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#8B5CF6",
        badge: "Settings & AI",
        description: "Smart ambient scheduler synchronizing with Apple Watch Sleep and Daylight sensors.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "28px / 800 Bold",
            body: "13px / 400 Regular",
            tracking: "-0.01em"
          },
          layout: {
            mode: "Auto Layout (Vertical)",
            padding: "24px 20px",
            itemSpacing: "16px",
            alignment: "Top Left"
          },
          colors: [
            { name: "Violet Horizon", hex: "#8B5CF6" },
            { name: "Void Dark", hex: "#090D16" },
            { name: "Lavender Tint", hex: "#DDD6FE" },
            { name: "Toggle Active", hex: "#10B981" }
          ],
          components: ["Apple Health Sync Card", "Bedtime Wind-Down Toggle", "Haptic Strength Dial", "Dark Theme Mode"]
        },
        preview: {
          tagline: "CIRCADIAN INTELLIGENCE",
          heading: "Ambient Schedule",
          meta: "Synced with Apple Health & Sleep",
          stat: "Auto-Wind Down at 10:15 PM",
          pill: "✓ HealthKit Connected",
          primaryBtn: "Update Routine"
        }
      }
    ]
  },
  {
    id: "finflow-dashboard",
    title: "FinFlow Analytics",
    subtitle: "Enterprise FinTech Treasury & Real-time Cashflow Suite",
    category: "Desktop Web SaaS • FinTech",
    client: "FinFlow Technologies UK",
    year: "2025",
    behanceUrl: "https://www.behance.net/gallery/209124583/FinFlow-Enterprise-Treasury-Dashboard",
    description: "Modern enterprise financial intelligence workspace. Clean data tables, multi-currency ledger tracking, sub-second latency charts, and automated cross-border reconciliation.",
    tags: ["SaaS Platform", "Data Viz", "FinTech", "Design Tokens"],
    screens: [
      {
        id: "finflow-01",
        name: "01 — Treasury Overview",
        type: "Desktop 1440 Frame",
        width: 820,
        height: 520,
        accentColor: "#38BDF8",
        badge: "Executive KPI",
        description: "Multi-currency balance aggregation with live ledger sync and predictive liquidity forecast.",
        specs: {
          typography: {
            fontFamily: "JetBrains Mono & Parkinsans",
            display: "26px / 800 Bold",
            body: "12.5px / 400 Mono",
            tracking: "-0.01em"
          },
          layout: {
            mode: "12-Col Responsive Grid",
            padding: "24px",
            itemSpacing: "18px",
            alignment: "Top"
          },
          colors: [
            { name: "Electric Cyan", hex: "#38BDF8" },
            { name: "Console Black", hex: "#0A0D14" },
            { name: "Positive Gain", hex: "#22C55E" },
            { name: "Border Slate", hex: "#1E293B" }
          ],
          components: ["KPI Metric Cards", "Live Candlestick Chart", "Multi-Currency Table", "Date Range Picker"]
        },
        preview: {
          tagline: "GLOBAL TREASURY",
          heading: "$24,850,240.00",
          meta: "Real-time Liquidity • +12.4% vs last quarter",
          stat: "EUR / USD / GBP / JPY Hedged",
          pill: "● Sub-second WebSocket Feed",
          primaryBtn: "Initiate Wire Transfer"
        }
      },
      {
        id: "finflow-02",
        name: "02 — FX Hedging & Orders",
        type: "Desktop 1440 Frame",
        width: 820,
        height: 520,
        accentColor: "#A855F7",
        badge: "FX Trading",
        description: "Automated foreign exchange forward contract execution and risk limit monitoring.",
        specs: {
          typography: {
            fontFamily: "JetBrains Mono & Parkinsans",
            display: "24px / 800 Bold",
            body: "12px / 400 Mono",
            tracking: "0.01em"
          },
          layout: {
            mode: "Split Screen Split-Pane",
            padding: "20px",
            itemSpacing: "14px",
            alignment: "Top"
          },
          colors: [
            { name: "Purple Hedge", hex: "#A855F7" },
            { name: "Dark Surface", hex: "#0F172A" },
            { name: "Amber Alert", hex: "#F59E0B" },
            { name: "Text Muted", hex: "#94A3B8" }
          ],
          components: ["Order Book Table", "Volatility Bands", "Depth Chart", "Instant Swap Widget"]
        },
        preview: {
          tagline: "CURRENCY PAIRS",
          heading: "EUR/USD Forward 90D",
          meta: "Spot: 1.0842 • Forward: 1.0876",
          stat: "Zero Slippage Execution",
          pill: "⚡ Smart Routing Active",
          primaryBtn: "Lock Forward Rate"
        }
      },
      {
        id: "finflow-03",
        name: "03 — Reconciliation Engine",
        type: "Desktop 1440 Frame",
        width: 820,
        height: 520,
        accentColor: "#22C55E",
        badge: "Audit & Ledger",
        description: "AI-assisted transaction matching with 99.8% auto-clearing confidence and audit-ready trails.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "22px / 800 Bold",
            body: "12px / 500 Medium",
            tracking: "-0.01em"
          },
          layout: {
            mode: "Data Grid Matrix",
            padding: "20px",
            itemSpacing: "12px",
            alignment: "Top"
          },
          colors: [
            { name: "Success Mint", hex: "#22C55E" },
            { name: "Panel Background", hex: "#0B1120" },
            { name: "Warning Orange", hex: "#FB923C" },
            { name: "Text White", hex: "#F8FAFC" }
          ],
          components: ["Matching Rule Builder", "Batch Processing Progress", "Audit Trail Log", "CSV/Plaid Importer"]
        },
        preview: {
          tagline: "AUTO-MATCHING",
          heading: "4,820 / 4,824 Cleared",
          meta: "99.91% Automated Reconciliation",
          stat: "4 Unmatched Flags for Review",
          pill: "✓ ISO 20022 Compliant",
          primaryBtn: "Auto-Resolve Items"
        }
      },
      {
        id: "finflow-04",
        name: "04 — Corporate Cards & Limits",
        type: "Desktop 1440 Frame",
        width: 820,
        height: 520,
        accentColor: "#F43F5E",
        badge: "Spend Control",
        description: "Dynamic virtual and physical card issuance with granular department budgets and merchant locks.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "24px / 800 Bold",
            body: "13px / 400 Regular",
            tracking: "-0.015em"
          },
          layout: {
            mode: "Card Grid + Drawer",
            padding: "22px",
            itemSpacing: "16px",
            alignment: "Top"
          },
          colors: [
            { name: "Rose Crimson", hex: "#F43F5E" },
            { name: "Midnight Navy", hex: "#020617" },
            { name: "Soft Slate", hex: "#CBD5E1" },
            { name: "Border Glass", hex: "#334155" }
          ],
          components: ["Virtual Card Stack", "Spend Velocity Bar", "Merchant Category Switch", "Issue New Card CTA"]
        },
        preview: {
          tagline: "TEAM BUDGETING",
          heading: "$182,400 Monthly Cap",
          meta: "Design & Product Team • 14 Cards Active",
          stat: "Real-time Receipt Scanning",
          pill: "🔒 Merchant Category Locked",
          primaryBtn: "Issue Virtual Card"
        }
      }
    ]
  },
  {
    id: "aura-ecommerce",
    title: "Aura Luxury",
    subtitle: "High-Fashion Minimalist E-Commerce Experience",
    category: "Mobile Web & E-Commerce",
    client: "Aura Atelier Paris",
    year: "2025",
    behanceUrl: "https://www.behance.net/gallery/198274191/Aura-Luxury-Fashion-Ecommerce-Platform",
    description: "High-fashion digital commerce featuring editorial typography, bespoke micro-interactions, seamless lookbook browsing, and 1-tap checkout flow.",
    tags: ["Editorial E-Com", "Luxury Branding", "Micro-Interactions", "Mobile UX"],
    screens: [
      {
        id: "aura-01",
        name: "01 — Editorial Lookbook",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#F59E0B",
        badge: "Storefront",
        description: "Full-bleed editorial runway visuals with interactive product hotspots and tactile transitions.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, serif",
            display: "36px / 300 Light",
            body: "13px / 400 Regular",
            tracking: "0.04em"
          },
          layout: {
            mode: "Full Bleed Scroll",
            padding: "20px 16px",
            itemSpacing: "14px",
            alignment: "Bottom"
          },
          colors: [
            { name: "Champagne Gold", hex: "#F59E0B" },
            { name: "Obsidian Black", hex: "#000000" },
            { name: "Off White", hex: "#FAFAFA" },
            { name: "Warm Greige", hex: "#D6D3D1" }
          ],
          components: ["Hotspot Tag Overlay", "Lookbook Slider", "Filter Drawer Button", "Bag Badge"]
        },
        preview: {
          tagline: "AUTUMN / WINTER 2026",
          heading: "The Sculpture of Silence",
          meta: "Limited Edition Handcrafted Outerwear",
          stat: "Piece No. 04 / 50 Made",
          pill: "✦ Hand-Stitched Cashmere",
          primaryBtn: "Shop Lookbook"
        }
      },
      {
        id: "aura-02",
        name: "02 — Product Narrative",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#E2E8F0",
        badge: "Product Detail",
        description: "Generous whitespace, fabric texture zooms, provenance disclosures, and size fit estimator.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "28px / 700 Bold",
            body: "14px / 400 Regular",
            tracking: "-0.01em"
          },
          layout: {
            mode: "Sticky Bottom Action",
            padding: "24px 20px",
            itemSpacing: "18px",
            alignment: "Top Left"
          },
          colors: [
            { name: "Pure Platinum", hex: "#E2E8F0" },
            { name: "Studio Charcoal", hex: "#18181B" },
            { name: "Accent Bronze", hex: "#B45309" },
            { name: "Paper Crisp", hex: "#FFFFFF" }
          ],
          components: ["Size Selector Pill", "Fabric Micro-Zoom", "Accordion Care Specs", "Add to Bag Bar"]
        },
        preview: {
          tagline: "MONOLITH OVERCOAT",
          heading: "€1,850.00",
          meta: "Double-Faced Wool & Silk Lining",
          stat: "Italian Mill Fabric • Free Global Express",
          pill: "● Only 3 Left in EU 48",
          primaryBtn: "Add to Wardrobe"
        }
      },
      {
        id: "aura-03",
        name: "03 — Tactile Drawer Cart",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#10B981",
        badge: "Bag & Delivery",
        description: "Gesture-dismissible cart sheet with complimentary luxury gift-wrapping toggle and carbon offset calculation.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "24px / 800 Bold",
            body: "13.5px / 500 Medium",
            tracking: "-0.01em"
          },
          layout: {
            mode: "Sheet Modal + Fixed Bar",
            padding: "24px 18px",
            itemSpacing: "16px",
            alignment: "Top"
          },
          colors: [
            { name: "Emerald Verified", hex: "#10B981" },
            { name: "Carbon Dark", hex: "#0F172A" },
            { name: "Warm Gold", hex: "#FDE68A" },
            { name: "Border Subtle", hex: "#334155" }
          ],
          components: ["Swipe to Delete Row", "Quantity Stepper", "Gift Packaging Toggle", "Apple Pay Fast Checkout"]
        },
        preview: {
          tagline: "YOUR SELECTION",
          heading: "2 Items Selected",
          meta: "Complimentary DHL Express Delivery",
          stat: "Subtotal: €2,480.00",
          pill: "✓ Complimentary Monogramming",
          primaryBtn: "Apple Pay • One-Tap"
        }
      },
      {
        id: "aura-04",
        name: "04 — Order Confirmation",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#F59E0B",
        badge: "Post-Purchase",
        description: "Delightful unboxing anticipation screen with real-time atelier crafting status and digital certificate.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "32px / 800 Bold",
            body: "14px / 400 Regular",
            tracking: "-0.02em"
          },
          layout: {
            mode: "Centered Celebration",
            padding: "32px 20px",
            itemSpacing: "20px",
            alignment: "Center"
          },
          colors: [
            { name: "Celebration Amber", hex: "#F59E0B" },
            { name: "Luxury Black", hex: "#09090B" },
            { name: "Soft Glow", hex: "#FEF3C7" },
            { name: "Muted Zinc", hex: "#71717A" }
          ],
          components: ["Digital Provenance Card", "Timeline Progress Step", "Add to Wallet Pass", "Order Tracking Link"]
        },
        preview: {
          tagline: "ATELIER CONFIRMED",
          heading: "Order #AR-8902",
          meta: "Estimated Delivery: Oct 28 • DHL Express",
          stat: "Digital Authenticity Token Minted",
          pill: "★ Personal Stylist Assigned",
          primaryBtn: "Add to Apple Wallet"
        }
      }
    ]
  },
  {
    id: "pulse-fitness",
    title: "Pulse Fitness",
    subtitle: "Real-time Telemetry & Heart Rate Training Companion",
    category: "Wearable & iOS App",
    client: "Pulse Health Technologies",
    year: "2025",
    behanceUrl: "https://www.behance.net/gallery/201847129/Pulse-Biometric-Workout-Telemetry-App",
    description: "Precision biometric fitness tracker built for marathon runners and functional athletes. Real-time zone training, VO2 max estimations, and recovery readiness radar.",
    tags: ["Biometrics", "High-Contrast UI", "Dark Theme", "Fitness UX"],
    screens: [
      {
        id: "pulse-01",
        name: "01 — Live Workout HUD",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#EF4444",
        badge: "Live Telemetry",
        description: "High-contrast glanceable exercise HUD with color-coded heart-rate zones and pace cadence.",
        specs: {
          typography: {
            fontFamily: "JetBrains Mono & Parkinsans",
            display: "48px / 900 Black",
            body: "14px / 600 Bold",
            tracking: "-0.03em"
          },
          layout: {
            mode: "3-Tier HUD Layout",
            padding: "24px 18px",
            itemSpacing: "20px",
            alignment: "Top"
          },
          colors: [
            { name: "Zone 5 Red", hex: "#EF4444" },
            { name: "Deep Obsidian", hex: "#030712" },
            { name: "Zone 4 Orange", hex: "#F97316" },
            { name: "Card Dark", hex: "#111827" }
          ],
          components: ["Zone Bar Graph", "Giant BPM Counter", "Kilometer Pace Tile", "Quick Lock Screen Button"]
        },
        preview: {
          tagline: "ZONE 4 • THRESHOLD",
          heading: "168 BPM",
          meta: "4.82 km • 24:12 mins • Pace 5:02 /km",
          stat: "Current Output: 342 Watts",
          pill: "⚡ High Energy Expenditure",
          primaryBtn: "Pause Workout"
        }
      },
      {
        id: "pulse-02",
        name: "02 — Recovery Radar",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#06B6D4",
        badge: "Physiology",
        description: "Morning readiness assessment combining resting heart rate, sleep debt, and autonomic balance.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "36px / 800 Bold",
            body: "13.5px / 400 Regular",
            tracking: "-0.02em"
          },
          layout: {
            mode: "Radar Chart Centered",
            padding: "26px 20px",
            itemSpacing: "18px",
            alignment: "Center"
          },
          colors: [
            { name: "Cyan Optimal", hex: "#06B6D4" },
            { name: "Space Black", hex: "#080C14" },
            { name: "Sky Tint", hex: "#BAE6FD" },
            { name: "Slate Grid", hex: "#1E293B" }
          ],
          components: ["Hexagonal Readiness Spider", "Sleep Quality Pill", "Resting HR Indicator", "Recommendation Card"]
        },
        preview: {
          tagline: "PHYSIOLOGICAL STATUS",
          heading: "92% Readiness",
          meta: "Prime State for High-Intensity Interval",
          stat: "RHR: 46 BPM • Sleep Score: 94",
          pill: "✓ Full System Recovery",
          primaryBtn: "Start Recommended Run"
        }
      },
      {
        id: "pulse-03",
        name: "03 — Route Elevation & GPS",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#F59E0B",
        badge: "Topography",
        description: "Dynamic elevation profile map with split segment timing and turn-by-turn vibration cues.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "28px / 800 Bold",
            body: "13px / 500 Medium",
            tracking: "-0.015em"
          },
          layout: {
            mode: "Split Map + Telemetry",
            padding: "20px 16px",
            itemSpacing: "14px",
            alignment: "Top"
          },
          colors: [
            { name: "Trail Amber", hex: "#F59E0B" },
            { name: "Topography Charcoal", hex: "#0C111D" },
            { name: "Elevation Green", hex: "#10B981" },
            { name: "Path Stroke", hex: "#38BDF8" }
          ],
          components: ["Vector Path Mini-Map", "Elevation Gradient Profile", "Kilometer Split Flags", "Re-center Button"]
        },
        preview: {
          tagline: "TRAIL SEGMENT #3",
          heading: "Alpine Ridge Climb",
          meta: "Grade: +8.4% • Remaining Climb: 210m",
          stat: "Estimated Summit in 14 Mins",
          pill: "▲ 420m Total Elevation Gained",
          primaryBtn: "View 3D Terrain"
        }
      },
      {
        id: "pulse-04",
        name: "04 — Athlete Bio & Badges",
        type: "iPhone 16 Pro Frame",
        width: 393,
        height: 852,
        accentColor: "#8B5CF6",
        badge: "Community",
        description: "Lifetime stats trophy showcase with monthly volume milestones and personal record trophies.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "32px / 800 Bold",
            body: "13px / 400 Regular",
            tracking: "-0.02em"
          },
          layout: {
            mode: "Profile Grid Matrix",
            padding: "24px 18px",
            itemSpacing: "16px",
            alignment: "Top"
          },
          colors: [
            { name: "Trophy Purple", hex: "#8B5CF6" },
            { name: "Black Void", hex: "#030712" },
            { name: "Gold Medal", hex: "#FBBF24" },
            { name: "Border Outline", hex: "#1F2937" }
          ],
          components: ["3D Shiny Medal Render", "VO2 Max Rating Pill", "Monthly Mileage Dial", "Export GPX File"]
        },
        preview: {
          tagline: "PERSONAL RECORD",
          heading: "Half Marathon • 1:28:44",
          meta: "VO2 Max: 58 • Top 3% of Age Group",
          stat: "1,240 km Total Year to Date",
          pill: "🏆 New Record Unlocked",
          primaryBtn: "Share to Strava"
        }
      }
    ]
  },
  {
    id: "nexus-system",
    title: "Nexus System",
    subtitle: "Scalable Multi-Brand Design Tokens & Component Architecture",
    category: "Design System & Architecture",
    client: "Nexus Global Platforms",
    year: "2025",
    behanceUrl: "https://www.behance.net/gallery/194829103/Nexus-Multi-Brand-Design-System-Architecture",
    description: "Enterprise design system documentation, token pipeline, component accessibility matrix, and theme engine supporting 12 sub-brands and web/iOS/Android targets.",
    tags: ["Design System", "WCAG AAA", "Design Tokens", "Architecture"],
    screens: [
      {
        id: "nexus-01",
        name: "01 — Token Foundations",
        type: "Desktop 1440 Frame",
        width: 820,
        height: 520,
        accentColor: "#6366F1",
        badge: "Tokens & Color",
        description: "Semantic color ramps, spacing scales, shadow elevations, and multi-brand token transforms.",
        specs: {
          typography: {
            fontFamily: "JetBrains Mono & Parkinsans",
            display: "26px / 800 Bold",
            body: "12px / 500 Mono",
            tracking: "-0.01em"
          },
          layout: {
            mode: "Color Swatch Grid",
            padding: "24px",
            itemSpacing: "16px",
            alignment: "Top"
          },
          colors: [
            { name: "Primary 500", hex: "#6366F1" },
            { name: "Surface Neutral", hex: "#0F172A" },
            { name: "Warning 500", hex: "#F59E0B" },
            { name: "Success 500", hex: "#10B981" }
          ],
          components: ["Token Value Pill", "Contrast Checker (WCAG AAA)", "Theme Switcher Dropdown", "JSON Export"]
        },
        preview: {
          tagline: "DESIGN TOKENS V4.2",
          heading: "Semantic Scale: 8pt Grid",
          meta: "420 Tokens Synced across Figma, React & Swift",
          stat: "100% WCAG AAA Compliant",
          pill: "● Zero Drift Auto-Sync",
          primaryBtn: "Export Tokens JSON"
        }
      },
      {
        id: "nexus-02",
        name: "02 — Component Matrix",
        type: "Desktop 1440 Frame",
        width: 820,
        height: 520,
        accentColor: "#10B981",
        badge: "UI Components",
        description: "State permutations (Default, Hover, Focus, Active, Disabled, Loading) for core interactive controls.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "24px / 800 Bold",
            body: "12.5px / 400 Regular",
            tracking: "-0.01em"
          },
          layout: {
            mode: "State Matrix Table",
            padding: "22px",
            itemSpacing: "14px",
            alignment: "Top"
          },
          colors: [
            { name: "Focus Ring", hex: "#38BDF8" },
            { name: "Dark Base", hex: "#090D16" },
            { name: "Success Mint", hex: "#10B981" },
            { name: "Border Glass", hex: "#1E293B" }
          ],
          components: ["Button Variants (Solid, Outline, Ghost)", "Input Fields & Validation", "Toggle Switch", "Badge Tags"]
        },
        preview: {
          tagline: "ATOMIC COMPONENTS",
          heading: "Button & Input Matrix",
          meta: "24 Variants with Built-in Keyboard Accessibility",
          stat: "Zero Layout Shift Guarantees",
          pill: "✓ ARIA Landmark Checked",
          primaryBtn: "Test Interactive States"
        }
      },
      {
        id: "nexus-03",
        name: "03 — Navigation & Modals",
        type: "Desktop 1440 Frame",
        width: 820,
        height: 520,
        accentColor: "#EC4899",
        badge: "Patterns",
        description: "Responsive top bars, progressive disclosure drawers, floating action menus, and modal dialogs.",
        specs: {
          typography: {
            fontFamily: "Parkinsans, sans-serif",
            display: "24px / 800 Bold",
            body: "13px / 400 Regular",
            tracking: "-0.01em"
          },
          layout: {
            mode: "Pattern Preview Window",
            padding: "24px",
            itemSpacing: "16px",
            alignment: "Top"
          },
          colors: [
            { name: "Pink Accent", hex: "#EC4899" },
            { name: "Deep Navy", hex: "#0B0F19" },
            { name: "Border Light", hex: "#334155" },
            { name: "White Muted", hex: "#F1F5F9" }
          ],
          components: ["Collapsible App Sidebar", "Tab Navigation Group", "Modal Overlay Backdrop", "Toast Notification Stack"]
        },
        preview: {
          tagline: "SYSTEM PATTERNS",
          heading: "Responsive Navigation",
          meta: "Fluidly adapts from 320px mobile to 4K ultra-wide",
          stat: "Sub-16ms Animation Framerate",
          pill: "★ Screen Reader Tested",
          primaryBtn: "Inspect Pattern Code"
        }
      },
      {
        id: "nexus-04",
        name: "04 — Multi-Brand Theme Engine",
        type: "Desktop 1440 Frame",
        width: 820,
        height: 520,
        accentColor: "#F59E0B",
        badge: "White-Label",
        description: "Instant theme compilation enabling enterprise clients to skin 150+ components in under 5 minutes.",
        specs: {
          typography: {
            fontFamily: "JetBrains Mono & Parkinsans",
            display: "24px / 800 Bold",
            body: "12px / 400 Mono",
            tracking: "0em"
          },
          layout: {
            mode: "Live Preview Splitter",
            padding: "20px",
            itemSpacing: "14px",
            alignment: "Top"
          },
          colors: [
            { name: "Brand Dynamic", hex: "#F59E0B" },
            { name: "Canvas Dark", hex: "#0D111A" },
            { name: "Contrast White", hex: "#FFFFFF" },
            { name: "Subtle Line", hex: "#1E293B" }
          ],
          components: ["Theme Parameter Controls", "Real-time CSS Variable Injector", "Light / Dark Comparator", "Token Diff Tool"]
        },
        preview: {
          tagline: "DYNAMIC THEMING",
          heading: "12 Brand Archetypes",
          meta: "CSS Variables • Zero Runtime Overhead",
          stat: "Dark Mode & High Contrast Included",
          pill: "⚡ 5-Minute Re-skinning Engine",
          primaryBtn: "Compile Brand Theme"
        }
      }
    ]
  }
];

export const graphicCategories = [
  {
    id: "social-media",
    name: "Social Media Designs",
    icon: "📱",
    description: "High-engagement Instagram carousels, kinetic launch drops, and editorial story systems.",
    count: 4,
    artworks: [
      {
        id: "sm-01",
        title: "Instagram Post 01 — Kinetic Typography Drop",
        category: "Social Media Designs",
        categoryLabel: "Instagram Grid • 1080 × 1350",
        behanceUrl: "https://www.behance.net/gallery/216892014/Kinetic-Typography-Social-Media-Series",
        dimensions: "1080 × 1350 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "18.4 MB",
        description: "Editorial kinetic poster designed for high swipe retention, balancing bold oversized glyphs with high-contrast neon accents.",
        palette: ["#FA8F19", "#0B0E14", "#FFFFFF", "#71717A"],
        layers: [
          { id: "l1-type", name: "Headline — Kinetic Typography [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l1-neon", name: "Orange Ambient Glow & Flare", type: "effect", visible: true, locked: false, opacity: 90, blendMode: "Screen" },
          { id: "l1-brand", name: "Brand Monogram Watermark", type: "vector", visible: true, locked: false, opacity: 80, blendMode: "Normal" },
          { id: "l1-model", name: "Editorial Silhouette Subject", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l1-grain", name: "35mm Analog Film Grain Overlay", type: "pattern", visible: true, locked: false, opacity: 35, blendMode: "Overlay" },
          { id: "l1-bg", name: "Matte Black Background [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "DESIGN FOR TOMORROW",
          subhead: "VOL. 09 // EDITORIAL SERIES",
          kicker: "ASHOK STUDIO © 2026",
          badgeText: "INSTAGRAM CAROUSEL 01",
          artStyle: "kinetic-poster",
          accentColor: "#FA8F19"
        }
      },
      {
        id: "sm-02",
        title: "Instagram Post 02 — Product Launch Visual",
        category: "Social Media Designs",
        categoryLabel: "Launch Creative • 1080 × 1350",
        behanceUrl: "https://www.behance.net/gallery/216892014/Kinetic-Typography-Social-Media-Series",
        dimensions: "1080 × 1350 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "22.1 MB",
        description: "Minimalist industrial 3D product showcase spotlighting ergonomic textures and titanium highlights.",
        palette: ["#38BDF8", "#050811", "#F1F5F9", "#475569"],
        layers: [
          { id: "l2-title", name: "Product Specs Typography [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l2-badge", name: "Limited Edition Hologram Badge", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l2-render", name: "Hardware 3D Render & Shadow", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l2-lighting", name: "Cyan Rim Light & Specular Glow", type: "effect", visible: true, locked: false, opacity: 85, blendMode: "Color Dodge" },
          { id: "l2-grid", name: "Isometric Alignment Grid Lines", type: "pattern", visible: true, locked: false, opacity: 20, blendMode: "Screen" },
          { id: "l2-bg", name: "Dark Titanium Studio Backdrop [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "THE SOUND OF PURITY",
          subhead: "TITANIUM WIRELESS EARPIECE",
          kicker: "LIMITED TO 500 UNITS",
          badgeText: "HARDWARE DROP 02",
          artStyle: "hardware-launch",
          accentColor: "#38BDF8"
        }
      },
      {
        id: "sm-03",
        title: "Instagram Carousel — 5 Design Principles",
        category: "Social Media Designs",
        categoryLabel: "Educational Carousel • 1080 × 1350",
        behanceUrl: "https://www.behance.net/gallery/216892014/Kinetic-Typography-Social-Media-Series",
        dimensions: "1080 × 1350 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "16.8 MB",
        description: "Swipe-through educational carousel breaking down optical kerning, baseline grids, and white space discipline.",
        palette: ["#10B981", "#090D16", "#FFFFFF", "#64748B"],
        layers: [
          { id: "l3-num", name: "Giant Number Marker '01' [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l3-desc", name: "Core Principle Body Copy [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l3-arrows", name: "Swipe Indicator & Micro Arrow", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l3-diagram", name: "Optical Kerning SVG Diagram", type: "image", visible: true, locked: false, opacity: 95, blendMode: "Normal" },
          { id: "l3-grid", name: "Swiss 8-Column Grid Overlay", type: "pattern", visible: true, locked: false, opacity: 25, blendMode: "Overlay" },
          { id: "l3-bg", name: "Clean Minimalist Dark Slate [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "RULE 01: OPTICAL KERNING",
          subhead: "Spacing is rhythm, not math.",
          kicker: "SWIPE FOR BREAKDOWN →",
          badgeText: "CAROUSEL SLIDE 01/05",
          artStyle: "swiss-diagram",
          accentColor: "#10B981"
        }
      },
      {
        id: "sm-04",
        title: "Instagram Story — Exclusive Drop Reveal",
        category: "Social Media Designs",
        categoryLabel: "Vertical Story • 1080 × 1920",
        behanceUrl: "https://www.behance.net/gallery/216892014/Kinetic-Typography-Social-Media-Series",
        dimensions: "1080 × 1920 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "26.4 MB",
        description: "High-intensity vertical teaser with countdown sticker zone, motion blur type, and tap-to-reveal sticker.",
        palette: ["#EC4899", "#000000", "#FBCFE8", "#A855F7"],
        layers: [
          { id: "l4-sticker", name: "Countdown Timer Target Zone", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l4-headline", name: "Neon Strobe Headline [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l4-abstract", name: "Dynamic 3D Iridescent Mesh", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Screen" },
          { id: "l4-particles", name: "Sparkle Dust Particle System", type: "effect", visible: true, locked: false, opacity: 70, blendMode: "Screen" },
          { id: "l4-vignette", name: "Radial Dark Vignette", type: "pattern", visible: true, locked: false, opacity: 60, blendMode: "Multiply" },
          { id: "l4-bg", name: "Pitch Black Canvas [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "24 HOURS ONLY",
          subhead: "THE SECRET ARCHIVE UNLOCKS",
          kicker: "OCTOBER 30 • 12:00 PM EST",
          badgeText: "STORY TEASER 04",
          artStyle: "neon-story",
          accentColor: "#EC4899"
        }
      }
    ]
  },
  {
    id: "logo-designs",
    name: "Logo Designs",
    icon: "◇",
    description: "Distinctive geometric marks, responsive brand lockups, and monograms crafted on mathematical grids.",
    count: 3,
    artworks: [
      {
        id: "logo-01",
        title: "Genzo Monogram Logo Design",
        category: "Logo Designs",
        categoryLabel: "Geometric Monogram • Precision Grid",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3000 × 3000 px",
        resolution: "300 DPI",
        colorMode: "CMYK / 8-bit",
        fileSize: "38.2 MB",
        description: "Constructed on a 12-circle golden ratio Fibonacci matrix, creating an interlocking letterform 'G' that communicates infinity and growth.",
        palette: ["#10B981", "#0F172A", "#FFFFFF", "#6EE7B7"],
        layers: [
          { id: "l-g-mark", name: "Master Vector Logo Symbol", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l-g-text", name: "Custom Logotype Wordmark [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l-g-circles", name: "Construction Arc Grid Lines", type: "vector", visible: true, locked: false, opacity: 45, blendMode: "Screen" },
          { id: "l-g-shadow", name: "Embossed Deboss Depth Shadow", type: "effect", visible: true, locked: false, opacity: 30, blendMode: "Multiply" },
          { id: "l-g-bg", name: "Uncoated Cotton Paper Texture [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "GENZO",
          subhead: "GEOMETRIC MONOGRAM",
          kicker: "GOLDEN RATIO RATIO 1:1.618",
          badgeText: "PRIMARY MARK",
          artStyle: "monogram-grid",
          accentColor: "#10B981",
          image: "/assets/logo.png",
          img: "/assets/logo.png"
        }
      },
      {
        id: "logo-02",
        title: "Apex Horizon Architectural Mark",
        category: "Logo Designs",
        categoryLabel: "Architectural Studio Mark",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3000 × 3000 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "29.4 MB",
        description: "Monolithic geometric chevron icon expressing spatial elevation, cantilever structures, and minimalist restraint.",
        palette: ["#FA8F19", "#0A0D14", "#FFFFFF", "#FCD34D"],
        layers: [
          { id: "l-a-symbol", name: "Apex Isometric Monolith", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l-a-type", name: "Bespoke Kerning Wordmark [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l-a-axis", name: "Axis Alignment Angles 45°", type: "vector", visible: true, locked: false, opacity: 35, blendMode: "Screen" },
          { id: "l-a-texture", name: "Cast Concrete Surface Scan", type: "pattern", visible: true, locked: false, opacity: 20, blendMode: "Overlay" },
          { id: "l-a-bg", name: "Studio Charcoal Slate [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "APEX HORIZON",
          subhead: "STUDIO ARCHITECTURE",
          kicker: "STRUCTURAL PURITY",
          badgeText: "ARCHITECTURAL EMBLEM",
          artStyle: "architectural-mark",
          accentColor: "#FA8F19"
        }
      },
      {
        id: "logo-03",
        title: "Voxel Studios Identity Mark",
        category: "Logo Designs",
        categoryLabel: "Game Studio & 3D Lab",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3000 × 3000 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "32.0 MB",
        description: "Isometric 3D cube deconstruction symbolizing game engine building blocks, modularity, and creative play.",
        palette: ["#8B5CF6", "#040711", "#C4B5FD", "#38BDF8"],
        layers: [
          { id: "l-v-cube", name: "3D Isometric Cube Facets", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l-v-text", name: "Voxel Bold Wordmark [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "l-v-edge", name: "Cyan Edge Wireframe Highlights", type: "effect", visible: true, locked: false, opacity: 80, blendMode: "Screen" },
          { id: "l-v-glow", name: "Center Volumetric Core Glow", type: "effect", visible: true, locked: false, opacity: 70, blendMode: "Screen" },
          { id: "l-v-bg", name: "Obsidian Canvas [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "VOXEL STUDIOS",
          subhead: "INTERACTIVE LABS",
          kicker: "PRECISION 3D WORLDS",
          badgeText: "ISOMETRIC LOGO",
          artStyle: "voxel-cube",
          accentColor: "#8B5CF6"
        }
      }
    ]
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    icon: "❖",
    description: "Holistic brand guidelines, typography hierarchies, and collateral systems built for scale.",
    count: 3,
    artworks: [
      {
        id: "brand-01",
        title: "Genzo Full Brand Identity System",
        category: "Brand Identity",
        categoryLabel: "Comprehensive Identity Guidelines",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3840 × 2160 px",
        resolution: "300 DPI",
        colorMode: "CMYK / 8-bit",
        fileSize: "64.8 MB",
        description: "Comprehensive 60-page brand manual covering typography hierarchies, clear-space rules, co-branding guidelines, and digital voice.",
        palette: ["#10B981", "#0F172A", "#F8FAFC", "#64748B"],
        layers: [
          { id: "lb1-type", name: "Typography Hierarchy Scale [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lb1-rules", name: "Clearspace & Safety Boundary Lines", type: "vector", visible: true, locked: false, opacity: 70, blendMode: "Normal" },
          { id: "lb1-swatches", name: "Pantone & CMYK Color Swatches", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lb1-stationery", name: "Stationery Envelope & Letterhead", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lb1-grid", name: "Swiss Modular Page Grid", type: "pattern", visible: true, locked: false, opacity: 15, blendMode: "Multiply" },
          { id: "lb1-bg", name: "Warm White Editorial Paper [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "GENZO BRAND STANDARDS",
          subhead: "IDENTITY MANUAL // 2026 EDITION",
          kicker: "COLOR, TYPE & FORM ARCHITECTURE",
          badgeText: "STYLE GUIDE VOL. 01",
          artStyle: "brand-manual",
          accentColor: "#10B981"
        }
      },
      {
        id: "brand-02",
        title: "Verve Architecture Stationery & Grid",
        category: "Brand Identity",
        categoryLabel: "Luxury Stationery Collateral",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3840 × 2160 px",
        resolution: "300 DPI",
        colorMode: "CMYK / 8-bit",
        fileSize: "52.4 MB",
        description: "Tactile business cards, embossed folder sleeves, letterpress watermarks, and architectural spec sheets.",
        palette: ["#FA8F19", "#111827", "#F5F5F4", "#78716C"],
        layers: [
          { id: "lb2-emboss", name: "Blind Letterpress Emboss Mask", type: "effect", visible: true, locked: false, opacity: 100, blendMode: "Multiply" },
          { id: "lb2-cards", name: "Duplex 600gsm Cotton Cards Mockup", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lb2-specs", name: "Technical Callouts & Type Specs [T]", type: "text", visible: true, locked: false, opacity: 90, blendMode: "Normal" },
          { id: "lb2-foil", name: "Warm Gold Foil Stamp Shimmer", type: "effect", visible: true, locked: false, opacity: 80, blendMode: "Color Dodge" },
          { id: "lb2-shadow", name: "Natural Ambient Sunbeam Shadow", type: "pattern", visible: true, locked: false, opacity: 25, blendMode: "Multiply" },
          { id: "lb2-bg", name: "Light Travertine Stone Texture [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "VERVE ARCHITECTURAL SUITE",
          subhead: "PHYSICAL COLLATERAL & STATIONERY",
          kicker: "G.F SMITH COLORPLAN 600GSM",
          badgeText: "STATIONERY SYSTEM",
          artStyle: "stationery-mockup",
          accentColor: "#FA8F19"
        }
      },
      {
        id: "brand-03",
        title: "Lumina Creative Studio Brand Collateral",
        category: "Brand Identity",
        categoryLabel: "Agency Brand Experience",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3840 × 2160 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "49.0 MB",
        description: "Full collateral package featuring digital proposal templates, employee badge lanyards, and custom icon sets.",
        palette: ["#38BDF8", "#020617", "#E0F2FE", "#0284C7"],
        layers: [
          { id: "lb3-lanyard", name: "Matte Silicone Badge Mockup", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lb3-deck", name: "Keynote Presentation Slide Grid", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lb3-icons", name: "24-Item Custom Iconography Set", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lb3-type", name: "Identity Guidelines Headline [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lb3-bg", name: "Matte Midnight Studio Base [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "LUMINA IDENTITY SUITE",
          subhead: "CROSS-PLATFORM BRAND GUIDELINES",
          kicker: "TOKENS, DECKS & DIGITAL ASSETS",
          badgeText: "AGENCY ECOSYSTEM",
          artStyle: "agency-collateral",
          accentColor: "#38BDF8"
        }
      }
    ]
  },
  {
    id: "posters-banners",
    name: "Posters and Banners",
    icon: "▤",
    description: "Swiss International typographic posters, experimental music festival visuals, and exhibition banners.",
    count: 3,
    artworks: [
      {
        id: "poster-01",
        title: "Swiss Style International Typographic Poster",
        category: "Posters and Banners",
        categoryLabel: "Exhibition Poster • 70 × 100 cm",
        behanceUrl: "https://www.behance.net/gallery/208394102/Swiss-Style-International-Typographic-Posters",
        dimensions: "2480 × 3508 px",
        resolution: "300 DPI",
        colorMode: "CMYK / 8-bit",
        fileSize: "41.5 MB",
        description: "Classic Swiss Neue Grafik homage with asymmetrical layout, Akzidenz-Grotesk display typography, and structured white space tension.",
        palette: ["#DC2626", "#000000", "#F5F5F4", "#52525B"],
        layers: [
          { id: "lp1-headline", name: "DIE NEUE TYPOGRAPHIE [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lp1-colophon", name: "Curator Dates & Colophon Info [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lp1-geo", name: "Swiss Red Diagonal Geometry", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lp1-grid", name: "Exhibition 12-Module Grid Lines", type: "vector", visible: true, locked: false, opacity: 30, blendMode: "Multiply" },
          { id: "lp1-fold", name: "Offset Screenprint Paper Crease", type: "pattern", visible: true, locked: false, opacity: 25, blendMode: "Multiply" },
          { id: "lp1-bg", name: "Natural Unbleached Offset Paper [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "DIE NEUE TYPOGRAPHIE",
          subhead: "ZÜRICH KUNSTHALLE // 2026",
          kicker: "ORDER, DISCIPLINE & FORM",
          badgeText: "SWISS POSTER 01",
          artStyle: "swiss-poster",
          accentColor: "#DC2626"
        }
      },
      {
        id: "poster-02",
        title: "Tokyo Cyberpunk Neon Event Visual",
        category: "Posters and Banners",
        categoryLabel: "Electronic Music Visual • 70 × 100 cm",
        behanceUrl: "https://www.behance.net/gallery/208394102/Swiss-Style-International-Typographic-Posters",
        dimensions: "2480 × 3508 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "58.0 MB",
        description: "Kinetic cyberpunk club night poster featuring chrome 3D Japanese glyphs, glitch scanlines, and optical dispersion.",
        palette: ["#06B6D4", "#EC4899", "#020617", "#F8FAFC"],
        layers: [
          { id: "lp2-kanji", name: "Chromed Japanese Glyphs [T]", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lp2-lineup", name: "Artist Lineup & Venue Specs [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lp2-glitch", name: "CRT Monitor Scanline Shader", type: "effect", visible: true, locked: false, opacity: 40, blendMode: "Screen" },
          { id: "lp2-prism", name: "Chromatic Aberration Offset", type: "effect", visible: true, locked: false, opacity: 75, blendMode: "Screen" },
          { id: "lp2-bg", name: "Deep Tokyo Rain Void [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "SYNTHESIS // TOKYO",
          subhead: "SHINJUKU UNDERGROUND 02:00 AM",
          kicker: "ANALOG SYNTH RESIDENCY",
          badgeText: "NEON EVENT POSTER",
          artStyle: "cyberpunk-poster",
          accentColor: "#06B6D4"
        }
      },
      {
        id: "poster-03",
        title: "Minimalist Sound Summit 2026",
        category: "Posters and Banners",
        categoryLabel: "Acoustic Conference Poster",
        behanceUrl: "https://www.behance.net/gallery/208394102/Swiss-Style-International-Typographic-Posters",
        dimensions: "2480 × 3508 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "36.8 MB",
        description: "Architectural soundwave visualization constructed from 100 ultra-fine concentric arcs over matte slate.",
        palette: ["#F59E0B", "#0B0E14", "#FEF3C7", "#334155"],
        layers: [
          { id: "lp3-arcs", name: "Vector Sound Frequency Arcs", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lp3-title", name: "Summit Title & Keynote List [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lp3-hologram", name: "Foiled Acoustic Frequency Stamp", type: "effect", visible: true, locked: false, opacity: 85, blendMode: "Color Dodge" },
          { id: "lp3-texture", name: "Fine Cotton Rag Paper Grain", type: "pattern", visible: true, locked: false, opacity: 20, blendMode: "Overlay" },
          { id: "lp3-bg", name: "Obsidian Deep Slate [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "SOUND SUMMIT 2026",
          subhead: "SPATIAL ACOUSTICS & ARCHITECTURE",
          kicker: "HELSINKI CONCERT HALL",
          badgeText: "ACOUSTIC POSTER",
          artStyle: "soundwave-poster",
          accentColor: "#F59E0B"
        }
      }
    ]
  },
  {
    id: "marketing-creatives",
    name: "Marketing Creatives",
    icon: "⚡",
    description: "High-performance digital ad suites, hero conversion banners, and promotional campaign assets.",
    count: 3,
    artworks: [
      {
        id: "mkt-01",
        title: "Q3 Growth Campaign — Digital Ad Suite",
        category: "Marketing Creatives",
        categoryLabel: "Multi-Format Ad Suite • 16:9 & 1:1",
        behanceUrl: "https://www.behance.net/gallery/203498119/SaaS-Performance-Marketing-Creative-Suite",
        dimensions: "1920 × 1080 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "28.5 MB",
        description: "High-converting SaaS acquisition banner set with modular copy swapping, value-proposition callouts, and animated metric tags.",
        palette: ["#6366F1", "#090D16", "#22C55E", "#FFFFFF"],
        layers: [
          { id: "lm1-cta", name: "Primary Conversion Button [T]", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm1-hook", name: "Value Prop Impact Headline [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm1-mockup", name: "Floating Dashboard Glass Mockup", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm1-stars", name: "5-Star Social Proof Review Pill", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm1-glow", name: "Indigo Backlight Ambient Bloom", type: "effect", visible: true, locked: false, opacity: 60, blendMode: "Screen" },
          { id: "lm1-bg", name: "Dark Modern Canvas [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "SCALE AT VELOCITY",
          subhead: "The Modern Engine for Creative Teams",
          kicker: "JOIN 12,000+ GLOBAL DESIGNERS",
          badgeText: "CAMPAIGN SUITE 01",
          artStyle: "saas-ad",
          accentColor: "#6366F1"
        }
      },
      {
        id: "mkt-02",
        title: "Product Launch Hero Banner",
        category: "Marketing Creatives",
        categoryLabel: "Homepage Hero Creative • 2560 × 1440",
        behanceUrl: "https://www.behance.net/gallery/203498119/SaaS-Performance-Marketing-Creative-Suite",
        dimensions: "2560 × 1440 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "44.0 MB",
        description: "Flagship homepage banner designed to maximize dwell time, featuring 3D voxel character integration and responsive headline scaling.",
        palette: ["#FA8F19", "#0A0D14", "#FDE68A", "#FFFFFF"],
        layers: [
          { id: "lm2-title", name: "Monumental Hero Typography [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm2-char", name: "Interactive 3D Voxel Hero Subject", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm2-beam", name: "Orange Volumetric Sun Spotlight", type: "effect", visible: true, locked: false, opacity: 80, blendMode: "Screen" },
          { id: "lm2-badge", name: "New Release 2.0 Feature Pill", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm2-bg", name: "Radial Vignette Matte Base [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "DESIGN WITHOUT LIMITS",
          subhead: "Interactive 3D Environments on Web",
          kicker: "ANTIGRAVITY 2.0 ARCHITECTURE",
          badgeText: "HERO BANNER",
          artStyle: "hero-banner",
          accentColor: "#FA8F19"
        }
      },
      {
        id: "mkt-03",
        title: "Email Newsletter Editorial System",
        category: "Marketing Creatives",
        categoryLabel: "Editorial Email Suite",
        behanceUrl: "https://www.behance.net/gallery/203498119/SaaS-Performance-Marketing-Creative-Suite",
        dimensions: "1200 × 1800 px",
        resolution: "300 DPI",
        colorMode: "RGB / 8-bit",
        fileSize: "22.0 MB",
        description: "Aesthetic email headers and product curations crafted with dark mode email client bulletproofing.",
        palette: ["#10B981", "#0D111A", "#ECFDF5", "#64748B"],
        layers: [
          { id: "lm3-header", name: "Newsletter Masthead Brand [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm3-hero", name: "Issue Spotlight Article Visual", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm3-body", name: "Curator Note & Micro Reads [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm3-button", name: "Read Full Dispatch CTA", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lm3-bg", name: "Clean Minimalist Email Canvas [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "THE WEEKLY DISPATCH",
          subhead: "ISSUE #48: CRAFT OVER SPEED",
          kicker: "BY ASHOK KUMARAN",
          badgeText: "NEWSLETTER TEMPLATE",
          artStyle: "newsletter-creative",
          accentColor: "#10B981"
        }
      }
    ]
  },
  {
    id: "packaging-designs",
    name: "Packaging Designs",
    icon: "📦",
    description: "Eco-friendly food & beverage packaging, tactile pouch mockups, and luxury unboxing experiences.",
    count: 3,
    artworks: [
      {
        id: "pkg-01",
        title: "Kalki Millets Eco Stand-Up Pouch",
        category: "Packaging Designs",
        categoryLabel: "Sustainable Stand-Up Pouch • 500g",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3000 × 3000 px",
        resolution: "300 DPI",
        colorMode: "CMYK / 8-bit",
        fileSize: "56.4 MB",
        description: "Zero-plastic biodegradable kraft paper pouch with blind debossing, botanical linework illustrations, and nutrition transparency layout.",
        palette: ["#15803D", "#D97706", "#FEF3C7", "#292524"],
        layers: [
          { id: "lpk1-dieline", name: "Packaging Dieline Cut & Crease", type: "vector", visible: true, locked: false, opacity: 60, blendMode: "Multiply" },
          { id: "lpk1-millet", name: "Botanical Millet Linework Vector", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lpk1-type", name: "Organic Nutrient Callouts [T]", type: "text", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lpk1-pouch", name: "3D Matte Kraft Pouch Render", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lpk1-shadow", name: "Drop Shadow & Table Reflection", type: "effect", visible: true, locked: false, opacity: 40, blendMode: "Multiply" },
          { id: "lpk1-bg", name: "Warm Studio Horizon [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "KALKI ORGANIC MILLETS",
          subhead: "ANCIENT GRAINS FOR MODERN VITALITY",
          kicker: "100% COMPOSTABLE PACKAGING",
          badgeText: "POUCH PACKAGING",
          artStyle: "eco-pouch",
          accentColor: "#15803D"
        }
      },
      {
        id: "pkg-02",
        title: "Nordic Cold Brew Glass Bottle Label",
        category: "Packaging Designs",
        categoryLabel: "Amber Glass Beverage Bottle • 330ml",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3000 × 3000 px",
        resolution: "300 DPI",
        colorMode: "CMYK / 8-bit",
        fileSize: "48.2 MB",
        description: "Minimalist apothecary amber bottle label featuring metallic bronze foil accents and waterproof uncoated textured label stock.",
        palette: ["#B45309", "#09090B", "#FDE68A", "#D4D4D8"],
        layers: [
          { id: "lpk2-label", name: "Front Adhesive Label Artwork", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lpk2-foil", name: "Hot Foil Metallic Stamping Mask", type: "effect", visible: true, locked: false, opacity: 90, blendMode: "Color Dodge" },
          { id: "lpk2-glass", name: "Amber Glass Bottle Refraction", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lpk2-drops", name: "Condensation Water Droplet Layer", type: "effect", visible: true, locked: false, opacity: 75, blendMode: "Screen" },
          { id: "lpk2-bg", name: "Dark Nordic Granite Surface [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "NORDIC COLD BREW",
          subhead: "SINGLE ORIGIN ETHIOPIAN YIRGACHEFFE",
          kicker: "SLOW STEEPED FOR 24 HOURS",
          badgeText: "BOTTLE LABEL",
          artStyle: "coldbrew-bottle",
          accentColor: "#B45309"
        }
      },
      {
        id: "pkg-03",
        title: "Minimalist Kraft Delivery Box System",
        category: "Packaging Designs",
        categoryLabel: "Corrugated E-Commerce Mailer Box",
        behanceUrl: "https://www.behance.net/gallery/214592039/Genzo-Kalki-Brand-Identity-Logo-System",
        dimensions: "3000 × 3000 px",
        resolution: "300 DPI",
        colorMode: "CMYK / 8-bit",
        fileSize: "51.0 MB",
        description: "Zero-glue interlocking corrugated shipping box with custom interior welcome reveal print and security tape design.",
        palette: ["#0284C7", "#44403C", "#FAFAF9", "#78716C"],
        layers: [
          { id: "lpk3-tape", name: "Reinforced Water-Activated Tape", type: "vector", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lpk3-inner", name: "Interior Cyan Pattern Print [T]", type: "pattern", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lpk3-box", name: "3D Interlocking Mailer Box Mockup", type: "image", visible: true, locked: false, opacity: 100, blendMode: "Normal" },
          { id: "lpk3-type", name: "Exterior Brand Monogram Stamp", type: "vector", visible: true, locked: false, opacity: 90, blendMode: "Multiply" },
          { id: "lpk3-bg", name: "Minimalist Studio Table [🔒]", type: "background", visible: true, locked: true, opacity: 100, blendMode: "Normal" }
        ],
        preview: {
          headline: "LUXURY UNBOXING SYSTEM",
          subhead: "100% RECYCLED CORRUGATED BOARD",
          kicker: "NO-PLASTIC SECURITY PACKING",
          badgeText: "MAILER BOX",
          artStyle: "mailer-box",
          accentColor: "#0284C7"
        }
      }
    ]
  }
];

