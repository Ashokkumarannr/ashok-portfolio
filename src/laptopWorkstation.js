/**
 * ASHOK PORTFOLIO - 3D LAPTOP WORKSTATION & SCREEN DIVE-IN EXPERIENCE
 * ==========================================================================
 * Strict Minimalist White Theme (#FFFFFF, #FAFAFA, #111111, #777777, #EAEAEA, #3528E8):
 * 1. Initial Hero: Seated voxel character working at desk (rear-view, facing laptop).
 *    Desk contains books, stationery stand, documents, coffee mug, 16:9 widescreen laptop,
 *    and studio wall clock in a clean white environment (#FFFFFF).
 *    Includes bottom scroll indicator: "SCROLL TO EXPLORE".
 * 2. Scroll-based cinematic camera movement:
 *    - Scroll down: Camera moves smoothly over character's shoulders directly into the screen.
 *    - Laptop bezel gradually disappears beyond viewport as screen expands to full desktop.
 *    - Scroll up: Reverse zooms back out to character working at desk.
 * 3. Inside the screen: Clean Apple-inspired white desktop with 6 interactive folders:
 *    - UI/UX DESIGN
 *    - LOGO DESIGN
 *    - PITCH DECK
 *    - SOCIAL MEDIA DESIGN
 *    - BRANDING
 *    - VIDEO & MOTION
 * 4. Interactive File Explorer Window (Finder) + Dedicated Project Preview modal.
 * 5. Minimal Desktop Taskbar at bottom (#FFFFFF with #EAEAEA border):
 *    - Portfolio / Home | About | UI/UX Design | Graphic Design | Branding | Contact
 * 6. About Me window & Contact window accessible directly from desktop & taskbar.
 * ==========================================================================
 */

import { dynamicFolderData } from "./dynamicFolders.js";

export const desktopCategories = [
  {
    id: "uiux",
    name: "UI/UX DESIGN",
    folderLabel: "UI/UX DESIGN",
    icon: "📱",
    color: "#3528E8",
    description: "Featured brand design, identity systems, packaging, and digital experiences.",
    projects: [
      {
        id: "theunoia",
        title: "Hunhar",
        handle: "@hunhar",
        subtitle: "A modern freelancing platform connecting global creative talent with forward-thinking brands.",
        desc: "A modern freelancing platform connecting global creative talent with forward-thinking brands.",
        tags: ["Freelancing", "UI/UX Design", "Platform"],
        website: "hunhar.in",
        url: "https://www.hunhar.in/"
      },
      {
        id: "samino",
        title: "Samino",
        handle: "@saminokids",
        subtitle: "A premium kidswear brand offering soft, breathable muslin & cotton clothing for little ones.",
        desc: "A premium kidswear brand offering soft, breathable muslin & cotton clothing for little ones.",
        tags: ["Branding", "Social Media", "Campaign"],
        website: "samino.ae",
        url: "https://samino.ae/"
      },
      {
        id: "sambhar-tales",
        title: "Sambhar Tales",
        handle: "@sambhartales",
        subtitle: "A South Indian restaurant brand that celebrates authentic flavors with a modern, hygienic experience.",
        desc: "A South Indian restaurant brand that celebrates authentic flavors with a modern, hygienic experience.",
        tags: ["Branding", "Menu Design", "Social Media"],
        website: "sambhartales.com",
        url: "https://www.sambhartales.com/"
      },
      {
        id: "kalki-millets",
        title: "Kalki Millets",
        handle: "@kalkimillets",
        subtitle: "A wholesome millet brand promoting healthy, traditional and sustainable living.",
        desc: "A wholesome millet brand promoting healthy, traditional and sustainable living.",
        tags: ["Branding", "Packaging", "Social Media"],
        website: "kalkimillets.in",
        url: "https://kalkimillets.in/"
      }
    ]
  },
  {
    id: "logo",
    name: "LOGO DESIGN",
    folderLabel: "LOGO DESIGN",
    icon: "✦",
    color: "#111111",
    description: "Logo-Folio collection, client brandmarks, geometric monograms, and responsive visual identities.",
    projects: [
      {
        id: "logo-folio-showcase",
        title: "Logo-Folio Client Showcase",
        subtitle: "Multi-Industry Visual Identity & Brandmark Collection",
        category: "Logo Folio",
        year: "2026",
        accent: "#111111",
        behanceUrl: "https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX",
        desc: "A comprehensive logo-folio featuring 9 client brand identities across food & beverage, technology, sports, and retail (ATM Fish Shop, Sambhar Tales, TMG, Sri Velavan Chips, Team Diverse, Genzo, Zendo, Kalki Millets, Remora).",
        process: "Client requirement analysis & design thinking → Conceptual sketches on grid → Vectorization & optical balance in Illustrator → Export standards across digital and print.",
        outcome: "Delivered distinctive, versatile visual identities aligning with client business goals and market positioning.",
        tags: ["Logo-Folio", "Brand Identity", "Client Logos", "Geometric Marks"],
        image: "/assets/logo.png",
        img: "/assets/logo.png",
        isLogo: true
      },
      {
        id: "genzo-brandmark",
        title: "Genzo Sports & Lifestyle Script",
        subtitle: "Dynamic Fluid Script Wordmark & Brand Identity",
        category: "Script & Wordmark",
        year: "2026",
        accent: "#1E40AF",
        behanceUrl: "https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX",
        desc: "High-energy baseball script wordmark engineered with bold two-tone drop shadow and sweeping baseline motion for an active lifestyle brand.",
        process: "Calligraphic brush pen sketches → Precise Bézier curve vectorization → Dual-tone offset path creation.",
        outcome: "Created an iconic athletic wordmark suitable for embroidery, apparel tags, and digital storefronts.",
        tags: ["Genzo", "Script Wordmark", "Athletic Brand", "Typography"],
        image: "/assets/logo.png",
        img: "/assets/logo.png",
        isLogo: true
      },
      {
        id: "zendo-mark",
        title: "Zendo Mindfulness Brandmark",
        subtitle: "Minimal Geometric Folded-Ribbon Emblem",
        category: "Geometric Monogram",
        year: "2026",
        accent: "#3528E8",
        behanceUrl: "https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX",
        desc: "Minimalist geometric emblem constructed from continuous folded ribbons forming the letter Z, communicating harmony and mental clarity.",
        process: "Grid construction on isometric axes → Golden ratio proportions → Micro-scale favicon optimization.",
        outcome: "Scales flawlessly down to 16px iOS app icons and up to large-scale signage.",
        tags: ["Zendo", "Ribbon Emblem", "Minimal Geometry", "App Mark"],
        image: "/assets/logo.png",
        img: "/assets/logo.png",
        isLogo: true
      },
      {
        id: "kalki-millets-brand",
        title: "Kalki Millets Organic Identity",
        subtitle: "Organic Handcrafted Typography & Warm Palette",
        category: "F&B Brand Identity",
        year: "2026",
        accent: "#EA580C",
        behanceUrl: "https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX",
        desc: "Vibrant and approachable organic food identity featuring custom rounded typography and warm harvest tones for healthy millet products.",
        process: "Organic letterform drafting → Food packaging color psychology → Compostable pouch print proofs.",
        outcome: "Established an approachable, premium presence on retail grocery shelves across South India.",
        tags: ["Kalki Millets", "Organic F&B", "Custom Type", "Packaging Mark"],
        image: "/assets/logo.png",
        img: "/assets/logo.png",
        isLogo: true
      },
      {
        id: "remora-focus-mark",
        title: "Remora Camera & Tech Emblem",
        subtitle: "Precision Viewfinder Focus Optical Identity",
        category: "Tech Identity",
        year: "2026",
        accent: "#111111",
        behanceUrl: "https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX",
        desc: "Modern high-contrast tech logotype with integrated camera autofocus bracket glyph, communicating precision optics and computational capture.",
        process: "Camera viewfinder optics research → Modular typography alignment → High-contrast monochrome testing.",
        outcome: "Selected as primary brandmark for next-generation mobile cinematography hardware suite.",
        tags: ["Remora", "Camera Optics", "Tech Identity", "Monochrome"],
        image: "/assets/logo.png",
        img: "/assets/logo.png",
        isLogo: true
      }
    ]
  },
  {
    id: "pitchdeck",
    name: "PITCH DECK",
    folderLabel: "PITCH DECK",
    icon: "📊",
    color: "#3528E8",
    description: "Startup pitch decks, business presentations, and keynote decks.",
    folderDir: "presentation",
    files: dynamicFolderData["presentation"] || [],
    projects: []
  },
  {
    id: "social-media",
    name: "SOCIAL MEDIA",
    folderLabel: "SOCIAL MEDIA",
    icon: "📁",
    color: "#FA8F19",
    description: "Sport Brand, Freelancing Platform, Education, Restaurant, Tour, Stockmarket & Kids Cloth",
    isSocialMediaRoot: true,
    subfolders: [
      {
        id: "sport-brand",
        name: "Sport Brand",
        folderTitle: "Sport Brand",
        folderDir: "cricketer",
        categoryName: "Social Media",
        badge: String((dynamicFolderData["cricketer"] || []).length),
        files: dynamicFolderData["cricketer"] || []
      },
      {
        id: "freelancing-platform",
        name: "Freelancing Platform",
        folderTitle: "Freelancing Platform",
        folderDir: "theunioa",
        categoryName: "Social Media",
        badge: String((dynamicFolderData["theunioa"] || []).length),
        files: dynamicFolderData["theunioa"] || []
      },
      {
        id: "education-industry",
        name: "Education Industry",
        folderTitle: "Education Industry",
        folderDir: "education",
        categoryName: "Social Media",
        badge: String((dynamicFolderData["education"] || []).length),
        files: dynamicFolderData["education"] || []
      },
      {
        id: "restaurant-industry",
        name: "Restaurant Industry",
        folderTitle: "Restaurant Industry",
        folderDir: "resturant",
        categoryName: "Social Media",
        badge: String((dynamicFolderData["resturant"] || []).length),
        files: dynamicFolderData["resturant"] || []
      },
      {
        id: "tour-industry",
        name: "Tour Industry",
        folderTitle: "Tour Industry",
        folderDir: "teal holidyas",
        categoryName: "Social Media",
        badge: String((dynamicFolderData["teal holidyas"] || []).length),
        files: dynamicFolderData["teal holidyas"] || []
      },
      {
        id: "stockmarket",
        name: "Stockmarket",
        folderTitle: "Stockmarket",
        folderDir: "stockmarket",
        categoryName: "Social Media",
        badge: String((dynamicFolderData["stockmarket"] || []).length),
        files: dynamicFolderData["stockmarket"] || []
      },
      {
        id: "kids-cloth",
        name: "Kids Cloth",
        folderTitle: "Kids Cloth",
        folderDir: "kids cloth",
        categoryName: "Social Media",
        badge: String((dynamicFolderData["kids cloth"] || []).length),
        files: dynamicFolderData["kids cloth"] || []
      }
    ],
    projects: []
  },
  {
    id: "branding",
    name: "BRANDING",
    folderLabel: "BRANDING",
    icon: "🏷️",
    color: "#3528E8",
    description: "Brand guidelines, visual identity, Zendo & Genzo documents.",
    subfolders: [
      {
        id: "genzo",
        name: "Genzo Brand Document",
        folderTitle: "Genzo Brand Document",
        folderDir: "brand detail",
        categoryName: "Branding",
        badge: String((dynamicFolderData["brand detail"] || []).length),
        files: dynamicFolderData["brand detail"] || []
      },
      {
        id: "zendo",
        name: "Zendo",
        folderTitle: "Zendo",
        folderDir: "p2",
        categoryName: "Branding",
        badge: String((dynamicFolderData["p2"] || []).length),
        files: dynamicFolderData["p2"] || []
      }
    ],
    projects: []
  },
  {
    id: "packaging",
    name: "PACKAGING",
    folderLabel: "PACKAGING",
    icon: "📁",
    color: "#3528E8",
    description: "Packaging design showcase and brand box prototypes.",
    folderDir: "package",
    files: dynamicFolderData["package"] || [],
    projects: []
  }
];

let workstationResizeFn = null;

export function refreshWorkstation() {
  if (typeof workstationResizeFn === "function") {
    workstationResizeFn();
  }
}

export function initLaptopWorkstation() {
  const container = document.getElementById("laptopWorkstationSection");
  const canvas = document.getElementById("laptopCanvas");
  if (!container || !canvas) return;

  // Ensure Three.js is loaded
  if (typeof window.THREE === "undefined") {
    setTimeout(initLaptopWorkstation, 80);
    return;
  }

  const THREE = window.THREE;

  // --- STATE ---
  let targetProgress = 0.0;
  let currentProgress = 0.0;
  let activeCategoryId = "uiux";
  let isDiveInside = false;

  // DOM Elements
  const stageViewport = document.getElementById("laptopStageViewport");
  const screenPortal = document.getElementById("laptopScreenPortal");
  const diveToggleBtn = document.getElementById("btnLaptopDiveToggle");
  const zoomBackBtn = document.getElementById("btnOsZoomBack");
  const scrollIndicator = document.getElementById("scrollExploreIndicator");

  // Windows & Modals
  const finderWindow = document.getElementById("osFinderWindow");
  const finderGrid = document.getElementById("finderProjectsGrid");
  const windowHeading = document.getElementById("osWindowHeading");
  const pathCrumb = document.getElementById("finderPathCrumb");
  const itemCountEl = document.getElementById("finderItemCount");
  const clockEl = document.getElementById("osClockTime");

  const previewModal = document.getElementById("osProjectPreviewModal");
  const previewBody = document.getElementById("previewModalBody");
  const btnPreviewClose = document.getElementById("btnPreviewClose");
  const btnBackToFolder = document.getElementById("btnBackToFolder");

  const aboutWindow = document.getElementById("osAboutWindow");
  const btnAboutClose = document.getElementById("btnAboutClose");
  const btnAboutExploreWork = document.getElementById("btnAboutExploreWork");

  const contactWindow = document.getElementById("osContactWindow");
  const btnContactClose = document.getElementById("btnContactClose");
  const btnCopyEmail = document.getElementById("btnCopyEmail");

  // Taskbar Buttons
  const taskbarBtnHome = document.getElementById("taskbarBtnHome");
  const taskbarBtnAbout = document.getElementById("taskbarBtnAbout");
  const taskbarBtnContact = document.getElementById("taskbarBtnContact");

  // Top Menu Bar items
  const menuItemFinder = document.getElementById("menuItemFinder");
  const menuItemAbout = document.getElementById("menuItemAbout");
  const menuItemContact = document.getElementById("menuItemContact");

  // --- THREE.JS SCENE SETUP (PREMIUM SLEEK BLACK THEME STUDIO) ---
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0A0C10); // SLEEK BLACK THEME BACKGROUND
  scene.fog = new THREE.Fog(0x0A0C10, 28, 75);

  let width = stageViewport.clientWidth || window.innerWidth;
  let height = stageViewport.clientHeight || 720;

  const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: false,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setClearColor(0x0A0C10, 1);
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  // --- LIGHTING (CINEMATIC BLACK STUDIO WITH VIBRANT SCREEN ILLUMINATION) ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 0.85);
  mainLight.position.set(12, 22, -14);
  scene.add(mainLight);

  const softFillLight = new THREE.DirectionalLight(0x818cf8, 0.55);
  softFillLight.position.set(-14, 16, 16);
  scene.add(softFillLight);

  // Cinematic Rim Light from behind
  const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.65);
  rimLight.position.set(0, 12, -22);
  scene.add(rimLight);

  // Screen glow light casting electric blue highlight on laptop keyboard
  const screenGlowLight = new THREE.PointLight(0x3528E8, 2.4, 8.5);
  screenGlowLight.position.set(0, 2.2, 0.4);
  scene.add(screenGlowLight);

  // --- WORKSTATION ROOT GROUP ---
  const workstationGroup = new THREE.Group();
  workstationGroup.position.set(0, -0.6, 0);
  scene.add(workstationGroup);

  // Modern Architectural Black Studio Materials
  const deskTopMat = new THREE.MeshLambertMaterial({ color: 0x1E222D }); // Sleek Dark Studio Top
  const deskBevelMat = new THREE.MeshLambertMaterial({ color: 0x2A303E });
  const deskLegMat = new THREE.MeshLambertMaterial({ color: 0x334155 }); // Matte Architectural Dark Steel
  const laptopMetalMat = new THREE.MeshLambertMaterial({ color: 0x2A2D35 });
  const keyboardMat = new THREE.MeshLambertMaterial({ color: 0x111215 });
  const trackpadMat = new THREE.MeshLambertMaterial({ color: 0x1E2026 });
  const screenGlowMat = new THREE.MeshBasicMaterial({ color: 0x3528E8 });
  const screenBezelMat = new THREE.MeshLambertMaterial({ color: 0x0A0B0E });

  // 1. Ashok's Primary Executive Studio Desk (Centered)
  const deskTopGeo = new THREE.BoxGeometry(7.6, 0.35, 4.4);
  const deskTopMesh = new THREE.Mesh(deskTopGeo, deskTopMat);
  deskTopMesh.position.set(0, 0, 0);
  workstationGroup.add(deskTopMesh);

  const deskTrimGeo = new THREE.BoxGeometry(7.64, 0.37, 0.1);
  const deskTrimMesh = new THREE.Mesh(deskTrimGeo, deskBevelMat);
  deskTrimMesh.position.set(0, 0, -2.2);
  workstationGroup.add(deskTrimMesh);

  // Modern Trestle Legs (Matte dark architectural steel)
  const legGeo = new THREE.BoxGeometry(0.24, 6.2, 0.24);
  const legPositions = [
    [-3.4, -3.2, -1.8],
    [3.4, -3.2, -1.8],
    [-3.4, -3.2, 1.8],
    [3.4, -3.2, 1.8]
  ];
  legPositions.forEach(([lx, ly, lz]) => {
    const leg = new THREE.Mesh(legGeo, deskLegMat);
    leg.position.set(lx, ly, lz);
    workstationGroup.add(leg);
  });

  // Trestle horizontal bottom crossbars
  const crossbarMat = deskLegMat;
  const crossL = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.20, 3.8), crossbarMat);
  crossL.position.set(-3.4, -6.1, 0);
  workstationGroup.add(crossL);
  const crossR = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.20, 3.8), crossbarMat);
  crossR.position.set(3.4, -6.1, 0);
  workstationGroup.add(crossR);

  // Soft Studio Contact Shadow
  const shadowGeo = new THREE.PlaneGeometry(54, 40);
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.06,
    depthWrite: false
  });
  const deskShadow = new THREE.Mesh(shadowGeo, shadowMat);
  deskShadow.rotation.x = -Math.PI / 2;
  deskShadow.position.set(0, -6.28, 0);
  workstationGroup.add(deskShadow);

  // --------------------------------------------------------------------------
  // REAL ARCHITECTURAL CREATIVE STUDIO: PARQUET FLOOR, AREA RUGS, WHITEBOARD,
  // BREAKOUT LOUNGE, GLASS CONFERENCE CABIN, OAK DETAILS & PENDANT LIGHTS
  // --------------------------------------------------------------------------

  const frameOakMat = new THREE.MeshLambertMaterial({ color: 0x333846 }); // Sleek dark charcoal architectural framing
  const glassMat = new THREE.MeshBasicMaterial({ color: 0x38BDF8, transparent: true, opacity: 0.10 });
  const frostedBandMat = new THREE.MeshBasicMaterial({ color: 0x1A1D27, transparent: true, opacity: 0.40 });

  // 1. Studio Floor: Deep Midnight Agency Black Floor
  const floorTileMat = new THREE.MeshLambertMaterial({ color: 0x11131A });
  const officeFloor = new THREE.Mesh(new THREE.PlaneGeometry(74, 74), floorTileMat);
  officeFloor.rotation.x = -Math.PI / 2;
  officeFloor.position.set(0, -6.30, 0);
  workstationGroup.add(officeFloor);

  // Subtle Area Rugs Defining Workstation Zones (Deep Charcoal/Slate)
  const rugMatLeft = new THREE.MeshLambertMaterial({ color: 0x171A23 });
  const rugLeft = new THREE.Mesh(new THREE.BoxGeometry(17.5, 0.04, 15.0), rugMatLeft);
  rugLeft.position.set(-10.2, -6.28, 0.5);
  workstationGroup.add(rugLeft);

  const rugMatRight = new THREE.MeshLambertMaterial({ color: 0x171A23 });
  const rugRight = new THREE.Mesh(new THREE.BoxGeometry(17.5, 0.04, 15.0), rugMatRight);
  rugRight.position.set(10.2, -6.28, 0.5);
  workstationGroup.add(rugRight);

  const rugMatCenter = new THREE.MeshLambertMaterial({ color: 0x1B1F2A }); // Center zone slate rug
  const rugCenter = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.04, 9.0), rugMatCenter);
  rugCenter.position.set(0, -6.28, -0.6);
  workstationGroup.add(rugCenter);

  // 2. Rear Studio Architectural Glass Partition Wall & Doors (z = 7.5)
  const glassBack = new THREE.Mesh(new THREE.PlaneGeometry(52, 10.5), glassMat);
  glassBack.position.set(0, 4.0, 7.5);
  workstationGroup.add(glassBack);

  const frostedBand = new THREE.Mesh(new THREE.PlaneGeometry(52, 2.6), frostedBandMat);
  frostedBand.position.set(0, 4.0, 7.51);
  workstationGroup.add(frostedBand);

  // Oak Framing Posts & Mullions
  const mullionPositionsX = [-22.0, -14.5, -7.0, 0, 7.0, 14.5, 22.0];
  mullionPositionsX.forEach((mx) => {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.24, 10.5, 0.24), frameOakMat);
    post.position.set(mx, 4.0, 7.5);
    workstationGroup.add(post);
  });
  const horizBarTop = new THREE.Mesh(new THREE.BoxGeometry(52, 0.28, 0.28), frameOakMat);
  horizBarTop.position.set(0, 9.1, 7.5);
  workstationGroup.add(horizBarTop);

  // 3. Conference Room Inside Glass Cabin (z = 8.5 to 16.0)
  const confTableTop = new THREE.Mesh(new THREE.BoxGeometry(12.0, 0.35, 4.2), frameOakMat);
  confTableTop.position.set(0, 0, 12.0);
  workstationGroup.add(confTableTop);

  // Conference table legs
  const confLegPositions = [[-5.2, -3.15, 10.3], [5.2, -3.15, 10.3], [-5.2, -3.15, 13.7], [5.2, -3.15, 13.7]];
  confLegPositions.forEach(([cx, cy, cz]) => {
    const cleg = new THREE.Mesh(new THREE.BoxGeometry(0.3, 6.3, 0.3), deskLegMat);
    cleg.position.set(cx, cy, cz);
    workstationGroup.add(cleg);
  });

  // Pendant Chandelier Lamps over Conference Table
  const pendantMat = new THREE.MeshLambertMaterial({ color: 0xD97706 }); // Brass
  [-3.0, 3.0].forEach((px) => {
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 3.5, 8), deskLegMat);
    cord.position.set(px, 7.2, 12.0);
    workstationGroup.add(cord);

    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.9, 0.6, 16, 1, true), pendantMat);
    shade.position.set(px, 5.4, 12.0);
    workstationGroup.add(shade);

    const plight = new THREE.PointLight(0xF59E0B, 1.5, 8.0);
    plight.position.set(px, 5.1, 12.0);
    workstationGroup.add(plight);
  });

  // 4. Creative Agency Design Moodboard & Whiteboard (Left Side, x = -20.5)
  const boardFrameMat = new THREE.MeshLambertMaterial({ color: 0x242834 });
  const boardFaceMat = new THREE.MeshBasicMaterial({ color: 0x141722 });

  const moodboardFrame = new THREE.Mesh(new THREE.BoxGeometry(0.15, 6.2, 14.0), boardFrameMat);
  moodboardFrame.position.set(-20.5, 2.5, 0.5);
  workstationGroup.add(moodboardFrame);

  const moodboardFace = new THREE.Mesh(new THREE.BoxGeometry(0.16, 5.8, 13.6), boardFaceMat);
  moodboardFace.position.set(-20.48, 2.5, 0.5);
  workstationGroup.add(moodboardFace);

  // Colorful sticky notes & UI wireframes on moodboard
  const stickyColors = [0xFBBF24, 0xF43F5E, 0x3B82F6, 0x10B981, 0x8B5CF6, 0xFA8F19];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 6; col++) {
      const stickyColor = stickyColors[(row * 6 + col) % stickyColors.length];
      const sticky = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 1.2),
        new THREE.MeshBasicMaterial({ color: stickyColor })
      );
      sticky.rotation.y = Math.PI / 2;
      sticky.position.set(-20.38, 1.2 + row * 1.5, -4.5 + col * 1.8);
      workstationGroup.add(sticky);
    }
  }

  // 5. Executive Breakout Lounge Zone (Right Side, x = 19.5, z = -2.0)
  const sofaFabricMat = new THREE.MeshLambertMaterial({ color: 0x334155 }); // Slate modular sofa
  const sofaCushionMat = new THREE.MeshLambertMaterial({ color: 0x475569 });

  const sofaBase = new THREE.Mesh(new THREE.BoxGeometry(4.0, 1.0, 7.5), sofaFabricMat);
  sofaBase.position.set(19.5, -4.8, -2.0);
  workstationGroup.add(sofaBase);

  const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.4, 7.5), sofaFabricMat);
  sofaBack.position.set(21.0, -3.6, -2.0);
  workstationGroup.add(sofaBack);

  const sofaCushion1 = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.45, 3.4), sofaCushionMat);
  sofaCushion1.position.set(19.2, -4.1, -3.8);
  workstationGroup.add(sofaCushion1);

  const sofaCushion2 = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.45, 3.4), sofaCushionMat);
  sofaCushion2.position.set(19.2, -4.1, -0.2);
  workstationGroup.add(sofaCushion2);

  // Round Scandinavian Birch Coffee Table with Magazine
  const coffeeTableMat = frameOakMat;
  const coffeeTable = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.16, 24), coffeeTableMat);
  coffeeTable.position.set(15.2, -4.8, -2.0);
  workstationGroup.add(coffeeTable);

  const tableLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.4, 8), deskLegMat);
  tableLeg.position.set(15.2, -5.5, -2.0);
  workstationGroup.add(tableLeg);

  const magazine = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.04, 1.3), new THREE.MeshLambertMaterial({ color: 0x3528E8 }));
  magazine.position.set(15.2, -4.7, -2.0);
  magazine.rotation.y = 0.25;
  workstationGroup.add(magazine);

  // 6. Architectural Trees in Dark Ceramic Pots
  function createStudioTree(tx, tz) {
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 0.85, 2.4, 20), new THREE.MeshLambertMaterial({ color: 0x242834 }));
    pot.position.set(tx, -5.1, tz);
    workstationGroup.add(pot);

    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 5.5, 10), new THREE.MeshLambertMaterial({ color: 0x5C4033 }));
    trunk.position.set(tx, -1.8, tz);
    workstationGroup.add(trunk);

    const foliageMat = new THREE.MeshLambertMaterial({ color: 0x059669 });
    const leaf1 = new THREE.Mesh(new THREE.SphereGeometry(1.6, 12, 10), foliageMat);
    leaf1.position.set(tx, 1.2, tz);
    workstationGroup.add(leaf1);
    const leaf2 = new THREE.Mesh(new THREE.SphereGeometry(1.2, 10, 8), foliageMat);
    leaf2.position.set(tx + 0.6, 2.1, tz - 0.3);
    workstationGroup.add(leaf2);
  }
  createStudioTree(-18.5, 5.5);
  createStudioTree(15.2, -5.5);
  createStudioTree(18.5, 5.5);

  // Suspended Architectural Linear Office LED Light Fixture
  const lightBarMat = new THREE.MeshLambertMaterial({ color: 0x181A20 });
  const lightBar = new THREE.Mesh(new THREE.BoxGeometry(18.0, 0.14, 0.38), lightBarMat);
  lightBar.position.set(0, 7.6, 0);
  workstationGroup.add(lightBar);

  const lightGlowMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const lightGlow = new THREE.Mesh(new THREE.PlaneGeometry(17.8, 0.30), lightGlowMat);
  lightGlow.rotation.x = Math.PI / 2;
  lightGlow.position.set(0, 7.52, 0);
  workstationGroup.add(lightGlow);

  // --- REALISTIC DYNAMIC WORKSTATION SCREEN TEXTURES (CODING, DESIGN, VIDEO EDITING, 3D, ANALYTICS) ---
  function drawRoundedRect(ctx, x, y, width, height, radius = 6) {
    if (ctx.roundRect) {
      ctx.roundRect(x, y, width, height, radius);
    } else {
      ctx.rect(x, y, width, height);
    }
  }

  // 1. Coding Screen (VS Code / WebStorm Dark IDE)
  function createCodeScreenTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");

    // Dark IDE Background
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(0, 0, 512, 320);

    // Top Window Bar
    ctx.fillStyle = "#252526";
    ctx.fillRect(0, 0, 512, 28);
    // macOS dots
    ctx.fillStyle = "#FF5F56"; ctx.beginPath(); ctx.arc(14, 14, 4.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#FFBD2E"; ctx.beginPath(); ctx.arc(28, 14, 4.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#27C93F"; ctx.beginPath(); ctx.arc(42, 14, 4.5, 0, Math.PI * 2); ctx.fill();

    // Active Tab
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(60, 4, 120, 24);
    ctx.fillStyle = "#38BDF8";
    ctx.font = "bold 11px monospace";
    ctx.fillText("⚛ AppHero.tsx", 68, 20);

    // Inactive Tab
    ctx.fillStyle = "#94A3B8";
    ctx.font = "11px monospace";
    ctx.fillText("styles.css", 195, 20);

    // Left Sidebar (File Explorer)
    ctx.fillStyle = "#252526";
    ctx.fillRect(0, 28, 95, 292);
    ctx.fillStyle = "#94A3B8";
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("EXPLORER", 10, 44);

    const files = ["📁 src", "  📁 components", "  📄 AppHero.tsx", "  📄 Workstation.ts", "  📄 store.ts", "  📄 theme.css", "📁 public", "📄 package.json"];
    ctx.font = "10px monospace";
    files.forEach((f, i) => {
      ctx.fillStyle = i === 2 ? "#38BDF8" : "#94A3B8";
      ctx.fillText(f, 8, 62 + i * 16);
    });

    // Line Numbers
    ctx.fillStyle = "#4B5563";
    ctx.font = "10px monospace";
    for (let l = 1; l <= 14; l++) {
      ctx.fillText(l.toString().padStart(2, " "), 104, 48 + l * 15);
    }

    // Syntax Highlighted Code Lines
    const codeLines = [
      [{ text: "import", color: "#C678DD" }, { text: " React, { useState } ", color: "#E5C07B" }, { text: "from", color: "#C678DD" }, { text: " 'react';", color: "#98C379" }],
      [{ text: "import", color: "#C678DD" }, { text: " { Canvas, useFrame } ", color: "#E5C07B" }, { text: "from", color: "#C678DD" }, { text: " 'three';", color: "#98C379" }],
      [{ text: "" }],
      [{ text: "export const", color: "#C678DD" }, { text: " WorkstationHero", color: "#61AFEF" }, { text: " = () => {", color: "#ABB2BF" }],
      [{ text: "  const", color: "#C678DD" }, { text: " [active, setActive] = ", color: "#ABB2BF" }, { text: "useState", color: "#61AFEF" }, { text: "(true);", color: "#ABB2BF" }],
      [{ text: "  const", color: "#C678DD" }, { text: " camera = ", color: "#ABB2BF" }, { text: "useCameraFlight", color: "#61AFEF" }, { text: "({ speed: ", color: "#ABB2BF" }, { text: "1.2", color: "#D19A66" }, { text: " });", color: "#ABB2BF" }],
      [{ text: "" }],
      [{ text: "  return", color: "#C678DD" }, { text: " (", color: "#ABB2BF" }],
      [{ text: "    <", color: "#ABB2BF" }, { text: "group", color: "#E06C75" }, { text: " position", color: "#D19A66" }, { text: "={[", color: "#ABB2BF" }, { text: "0, 0, 0", color: "#D19A66" }, { text: "]}>", color: "#ABB2BF" }],
      [{ text: "      <", color: "#ABB2BF" }, { text: "mesh", color: "#E06C75" }, { text: " geometry", color: "#D19A66" }, { text: "={geo} ", color: "#ABB2BF" }, { text: "material", color: "#D19A66" }, { text: "={mat} />", color: "#ABB2BF" }],
      [{ text: "      <", color: "#ABB2BF" }, { text: "StudioLights", color: "#E5C07B" }, { text: " intensity", color: "#D19A66" }, { text: "={", color: "#ABB2BF" }, { text: "1.4", color: "#D19A66" }, { text: "} />", color: "#ABB2BF" }],
      [{ text: "    </", color: "#ABB2BF" }, { text: "group", color: "#E06C75" }, { text: ">", color: "#ABB2BF" }],
      [{ text: "  );", color: "#ABB2BF" }],
      [{ text: "};", color: "#ABB2BF" }]
    ];

    codeLines.forEach((tokens, row) => {
      let x = 130;
      const y = 48 + (row + 1) * 15;
      tokens.forEach(({ text, color }) => {
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        x += ctx.measureText(text).width;
      });
    });

    // Terminal Panel at Bottom
    ctx.fillStyle = "#141414";
    ctx.fillRect(95, 275, 417, 45);
    ctx.strokeStyle = "#333333";
    ctx.strokeRect(95, 275, 417, 1);
    ctx.fillStyle = "#22C55E";
    ctx.font = "bold 9px monospace";
    ctx.fillText("➜ react-app", 105, 292);
    ctx.fillStyle = "#38BDF8";
    ctx.fillText(" git:(main)", 175, 292);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(" npm run build:vite", 248, 292);
    ctx.fillStyle = "#94A3B8";
    ctx.fillText("✓ compiled in 340ms (ready on http://localhost:5173)", 105, 308);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }

  // 2. UI/UX Design Screen (Figma Artboards & Wireframes)
  function createDesignScreenTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");

    // Figma Canvas
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(0, 0, 512, 320);

    // Top Figma Bar
    ctx.fillStyle = "#2C2C2C";
    ctx.fillRect(0, 0, 512, 28);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 10px sans-serif";
    ctx.fillText("❖ FinFlow Mobile • iOS 18 Design System", 24, 18);
    ctx.fillStyle = "#3528E8";
    ctx.beginPath();
    drawRoundedRect(ctx, 440, 5, 62, 18, 4);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("Share", 458, 17);

    // Left Layers Bar
    ctx.fillStyle = "#262626";
    ctx.fillRect(0, 28, 85, 292);
    ctx.fillStyle = "#9CA3AF";
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("LAYERS", 10, 44);
    const layers = ["❖ Mobile / Home", "  # Hero Card", "  # Quick Actions", "  # Recent TX", "❖ Mobile / Wallet", "  # Card Stack", "  # Analytics Ring"];
    ctx.font = "9px sans-serif";
    layers.forEach((l, i) => {
      ctx.fillStyle = i === 1 ? "#38BDF8" : "#9CA3AF";
      ctx.fillText(l, 8, 62 + i * 15);
    });

    // Artboard 1: Mobile App Dashboard
    ctx.fillStyle = "#0F172A";
    ctx.beginPath();
    drawRoundedRect(ctx, 105, 42, 115, 235, 12);
    ctx.fill();
    ctx.strokeStyle = "#38BDF8";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Dynamic Island
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    drawRoundedRect(ctx, 142, 46, 40, 9, 4);
    ctx.fill();

    // App Card in Artboard 1
    ctx.fillStyle = "#3528E8";
    ctx.beginPath();
    drawRoundedRect(ctx, 115, 66, 95, 52, 8);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 8px sans-serif";
    ctx.fillText("Total Balance", 122, 78);
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("$28,450.00", 122, 94);
    ctx.fillStyle = "#10B981";
    ctx.font = "bold 7px sans-serif";
    ctx.fillText("+ 14.8% this week", 122, 108);

    // Quick Action Pills
    const pColors = ["#2563EB", "#059669", "#7C3AED", "#EA580C"];
    for (let p = 0; p < 4; p++) {
      ctx.fillStyle = pColors[p];
      ctx.beginPath();
      drawRoundedRect(ctx, 115 + p * 24, 126, 20, 20, 6);
      ctx.fill();
    }

    // Transactions list
    for (let t = 0; t < 4; t++) {
      ctx.fillStyle = "#1E293B";
      ctx.beginPath();
      drawRoundedRect(ctx, 115, 155 + t * 24, 95, 18, 5);
      ctx.fill();
      ctx.fillStyle = "#F8FAFC";
      ctx.font = "bold 7px sans-serif";
      ctx.fillText(t === 0 ? "Stripe Payout" : t === 1 ? "Apple Store" : t === 2 ? "Figma Sub" : "AWS Cloud", 120, 167 + t * 24);
    }

    // Artboard 2: Analytics & Insights
    ctx.fillStyle = "#0F172A";
    ctx.beginPath();
    drawRoundedRect(ctx, 238, 42, 115, 235, 12);
    ctx.fill();
    ctx.strokeStyle = "#6366F1";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Dynamic Island
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    drawRoundedRect(ctx, 275, 46, 40, 9, 4);
    ctx.fill();

    // Bar Graph
    ctx.fillStyle = "#F8FAFC";
    ctx.font = "bold 8px sans-serif";
    ctx.fillText("Cash Flow Telemetry", 246, 70);
    const bars = [25, 42, 65, 50, 85, 70, 95];
    bars.forEach((b, i) => {
      ctx.fillStyle = i === 6 ? "#10B981" : "#38BDF8";
      ctx.fillRect(248 + i * 13, 140 - b * 0.6, 9, b * 0.6);
    });

    // Action Button
    ctx.fillStyle = "#3528E8";
    ctx.beginPath();
    drawRoundedRect(ctx, 248, 225, 95, 22, 6);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 8px sans-serif";
    ctx.fillText("Export Vector SVG", 258, 239);

    // Right Inspector Panel
    ctx.fillStyle = "#262626";
    ctx.fillRect(372, 28, 140, 292);
    ctx.fillStyle = "#E5E7EB";
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("DESIGN PROPERTIES", 380, 44);
    ctx.fillStyle = "#9CA3AF";
    ctx.fillText("Fill: #3528E8 (100%)", 380, 64);
    ctx.fillText("Radius: 12px", 380, 80);
    ctx.fillText("Auto-layout: Horizontal", 380, 96);
    ctx.fillText("Constraints: Scale", 380, 112);

    // Figma Cursor Arrow
    ctx.fillStyle = "#F43F5E";
    ctx.beginPath();
    ctx.moveTo(310, 175);
    ctx.lineTo(310, 195);
    ctx.lineTo(316, 189);
    ctx.lineTo(323, 198);
    ctx.lineTo(327, 195);
    ctx.lineTo(320, 186);
    ctx.lineTo(326, 186);
    ctx.closePath();
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }

  // 3. Video & Motion Editing Screen (Premiere / After Effects)
  function createVideoScreenTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");

    // NLE Workspace Background
    ctx.fillStyle = "#181818";
    ctx.fillRect(0, 0, 512, 320);

    // Top Menu
    ctx.fillStyle = "#222222";
    ctx.fillRect(0, 0, 512, 24);
    ctx.fillStyle = "#E5E7EB";
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("Premiere Pro • Brand_Campaign_4K_Final.prproj", 16, 16);

    // Top Left: Project Media Bin
    ctx.fillStyle = "#1C1C1C";
    ctx.fillRect(8, 30, 140, 130);
    ctx.strokeStyle = "#2E2E2E";
    ctx.strokeRect(8, 30, 140, 130);
    ctx.fillStyle = "#9CA3AF";
    ctx.font = "bold 8px sans-serif";
    ctx.fillText("PROJECT MEDIA (12 clips)", 16, 44);
    const clips = ["🎬 Scene_01_Intro.mp4", "🎬 Scene_02_Drone.mov", "🎬 Ashok_Bust_3D.exr", "🎵 Synth_Waveform.wav", "✨ Optical_Flare.mov"];
    ctx.font = "8px monospace";
    clips.forEach((c, i) => {
      ctx.fillStyle = i === 1 ? "#38BDF8" : "#9CA3AF";
      ctx.fillText(c, 16, 60 + i * 16);
    });

    // Top Right: Program Monitor (Live Video Preview)
    ctx.fillStyle = "#000000";
    ctx.fillRect(156, 30, 348, 130);
    const grad = ctx.createLinearGradient(156, 30, 504, 160);
    grad.addColorStop(0, "#312E81");
    grad.addColorStop(0.5, "#E11D48");
    grad.addColorStop(1, "#F59E0B");
    ctx.fillStyle = grad;
    ctx.fillRect(160, 34, 340, 110);

    // Video graphic inside monitor
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 15px sans-serif";
    ctx.fillText("ASHOK CREATIVE STUDIO", 215, 85);
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("4K • 60FPS • PRORES 4444 COLOR GRADE", 218, 105);

    // Monitor Transport Controls
    ctx.fillStyle = "#111111";
    ctx.fillRect(156, 146, 348, 18);
    ctx.fillStyle = "#38BDF8";
    ctx.font = "bold 9px monospace";
    ctx.fillText("00:01:42:18 / 00:03:00:00", 170, 159);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("⏮  ◀  ▶  ⏸  ▶  ⏭", 380, 159);

    // Bottom: Multi-Track Timeline
    ctx.fillStyle = "#161616";
    ctx.fillRect(8, 168, 496, 144);
    ctx.strokeStyle = "#2E2E2E";
    ctx.strokeRect(8, 168, 496, 144);

    // Time Ruler
    ctx.fillStyle = "#222222";
    ctx.fillRect(8, 168, 496, 20);
    ctx.fillStyle = "#9CA3AF";
    ctx.font = "8px monospace";
    for (let s = 0; s < 7; s++) {
      ctx.fillText(`00:0${s * 15}:00`, 70 + s * 65, 182);
    }

    // Video Track 2 (Overlay/Titles)
    ctx.fillStyle = "#7C3AED";
    ctx.fillRect(70, 194, 180, 22);
    ctx.fillRect(260, 194, 140, 22);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 8px sans-serif";
    ctx.fillText("Title_Sequence.mov", 75, 208);

    // Video Track 1 (Main Footage)
    ctx.fillStyle = "#2563EB";
    ctx.fillRect(70, 222, 120, 24);
    ctx.fillStyle = "#DB2777";
    ctx.fillRect(195, 222, 150, 24);
    ctx.fillStyle = "#0284C7";
    ctx.fillRect(350, 222, 130, 24);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("A-Roll_4K.mov", 75, 238);
    ctx.fillText("Drone_Landscape.mov", 200, 238);

    // Audio Track 1 (Waveforms)
    ctx.fillStyle = "#059669";
    ctx.fillRect(70, 252, 410, 22);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Master_Audio_Mix.wav (L/R)", 75, 266);
    ctx.strokeStyle = "#34D399";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let w = 70; w < 480; w += 3) {
      const h = Math.sin(w * 0.15) * 6 + 4;
      ctx.moveTo(w, 263 - h);
      ctx.lineTo(w, 263 + h);
    }
    ctx.stroke();

    // Red Playhead Needle
    ctx.strokeStyle = "#EF4444";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(225, 168);
    ctx.lineTo(225, 312);
    ctx.stroke();
    ctx.fillStyle = "#EF4444";
    ctx.beginPath();
    ctx.moveTo(220, 168);
    ctx.lineTo(230, 168);
    ctx.lineTo(225, 178);
    ctx.closePath();
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }

  // 4. SaaS Analytics & Realtime Telemetry Dashboard Screen
  function createAnalyticsScreenTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");

    // Modern Dark SaaS Dashboard
    ctx.fillStyle = "#0B0F19";
    ctx.fillRect(0, 0, 512, 320);

    // Top Nav
    ctx.fillStyle = "#111827";
    ctx.fillRect(0, 0, 512, 28);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 10px sans-serif";
    ctx.fillText("📊 FinFlow Realtime Treasury Telemetry • Live Production", 16, 18);
    ctx.fillStyle = "#10B981";
    ctx.beginPath(); ctx.arc(485, 14, 4, 0, Math.PI * 2); ctx.fill();

    // 3 Metric Cards across top
    const metrics = [
      { title: "ANNUAL RECURRING REVENUE", val: "$3.42M", change: "+32.4%", color: "#10B981" },
      { title: "ACTIVE MAU ENGAGEMENT", val: "148,290", change: "+18.1%", color: "#38BDF8" },
      { title: "SYSTEM LATENCY (P99)", val: "14.2ms", change: "Optimal", color: "#8B5CF6" }
    ];

    metrics.forEach((m, i) => {
      ctx.fillStyle = "#1F2937";
      ctx.beginPath();
      drawRoundedRect(ctx, 14 + i * 162, 38, 154, 58, 8);
      ctx.fill();
      ctx.fillStyle = "#9CA3AF";
      ctx.font = "bold 7px sans-serif";
      ctx.fillText(m.title, 24 + i * 162, 52);
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(m.val, 24 + i * 162, 74);
      ctx.fillStyle = m.color;
      ctx.font = "bold 9px sans-serif";
      ctx.fillText(m.change, 115 + i * 162, 74);
    });

    // Large Growth Curve Chart (Left)
    ctx.fillStyle = "#111827";
    ctx.beginPath();
    drawRoundedRect(ctx, 14, 106, 310, 198, 8);
    ctx.fill();
    ctx.fillStyle = "#F3F4F6";
    ctx.font = "bold 10px sans-serif";
    ctx.fillText("Institutional Liquidity Curve (2025 - 2026)", 26, 126);

    // Chart Grid
    ctx.strokeStyle = "#1F2937";
    ctx.lineWidth = 1;
    for (let g = 0; g < 4; g++) {
      ctx.beginPath();
      ctx.moveTo(26, 150 + g * 35);
      ctx.lineTo(310, 150 + g * 35);
      ctx.stroke();
    }

    // Neon Gradient Curve
    ctx.beginPath();
    ctx.moveTo(35, 250);
    ctx.bezierCurveTo(90, 240, 140, 200, 180, 180);
    ctx.bezierCurveTo(220, 160, 260, 140, 305, 135);
    ctx.strokeStyle = "#10B981";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Area under curve glow
    ctx.lineTo(305, 260);
    ctx.lineTo(35, 260);
    ctx.closePath();
    const areaGrad = ctx.createLinearGradient(0, 140, 0, 260);
    areaGrad.addColorStop(0, "rgba(16, 185, 129, 0.35)");
    areaGrad.addColorStop(1, "rgba(16, 185, 129, 0.0)");
    ctx.fillStyle = areaGrad;
    ctx.fill();

    // Right Side Bar Chart
    ctx.fillStyle = "#111827";
    ctx.beginPath();
    drawRoundedRect(ctx, 334, 106, 164, 198, 8);
    ctx.fill();
    ctx.fillStyle = "#F3F4F6";
    ctx.font = "bold 10px sans-serif";
    ctx.fillText("Traffic by Sector", 346, 126);

    const sectorBars = [
      { label: "FinTech", val: 85, color: "#3B82F6" },
      { label: "SaaS", val: 65, color: "#10B981" },
      { label: "AI Infra", val: 95, color: "#8B5CF6" },
      { label: "Design", val: 50, color: "#F59E0B" }
    ];

    sectorBars.forEach((sb, i) => {
      ctx.fillStyle = "#9CA3AF";
      ctx.font = "bold 8px sans-serif";
      ctx.fillText(sb.label, 346, 152 + i * 36);
      ctx.fillStyle = "#1F2937";
      ctx.beginPath();
      drawRoundedRect(ctx, 346, 158 + i * 36, 140, 12, 6);
      ctx.fill();
      ctx.fillStyle = sb.color;
      ctx.beginPath();
      drawRoundedRect(ctx, 346, 158 + i * 36, (140 * sb.val) / 100, 12, 6);
      ctx.fill();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }

  // 5. 3D Viewport Modeling Screen (Blender / Cinema 4D)
  function create3DScreenTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");

    // 3D Viewport Charcoal
    ctx.fillStyle = "#22262C";
    ctx.fillRect(0, 0, 512, 320);

    // Top Viewport Header
    ctx.fillStyle = "#1C1F24";
    ctx.fillRect(0, 0, 512, 24);
    ctx.fillStyle = "#E5E7EB";
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("Blender 4.2 • Studio_Workstation_Render.blend [Cycles GPU]", 14, 16);

    // Perspective 3D Grid
    ctx.strokeStyle = "#323842";
    ctx.lineWidth = 1;
    const cx = 220, cy = 180;
    for (let i = -8; i <= 8; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * 32 - 120, cy + 90);
      ctx.lineTo(cx + i * 10, cy - 80);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 200 + i * 8, cy + i * 10);
      ctx.lineTo(cx + 200 + i * 8, cy + i * 10);
      ctx.stroke();
    }

    // Red & Green Axis Lines
    ctx.strokeStyle = "#EF4444"; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(cx - 180, cy); ctx.lineTo(cx + 180, cy); ctx.stroke();
    ctx.strokeStyle = "#10B981";
    ctx.beginPath(); ctx.moveTo(cx, cy - 110); ctx.lineTo(cx, cy + 90); ctx.stroke();

    // 3D Geometric Shaded Object
    ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
    ctx.strokeStyle = "#38BDF8";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(220, 110);
    ctx.lineTo(270, 135);
    ctx.lineTo(270, 195);
    ctx.lineTo(220, 225);
    ctx.lineTo(170, 195);
    ctx.lineTo(170, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Isometric Top face
    ctx.beginPath();
    ctx.moveTo(220, 110);
    ctx.lineTo(270, 135);
    ctx.lineTo(220, 160);
    ctx.lineTo(170, 135);
    ctx.closePath();
    ctx.fillStyle = "rgba(129, 140, 248, 0.4)";
    ctx.fill();
    ctx.stroke();

    // Center seam
    ctx.beginPath();
    ctx.moveTo(220, 160);
    ctx.lineTo(220, 225);
    ctx.stroke();

    // 3D Transform Gizmo (RGB Arrows)
    ctx.strokeStyle = "#EF4444"; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(220, 160); ctx.lineTo(255, 150); ctx.stroke();
    ctx.strokeStyle = "#10B981";
    ctx.beginPath(); ctx.moveTo(220, 160); ctx.lineTo(220, 120); ctx.stroke();
    ctx.strokeStyle = "#3B82F6";
    ctx.beginPath(); ctx.moveTo(220, 160); ctx.lineTo(190, 175); ctx.stroke();

    // Right Outliner Panel
    ctx.fillStyle = "#181A1F";
    ctx.fillRect(400, 24, 112, 296);
    ctx.fillStyle = "#9CA3AF";
    ctx.font = "bold 8px sans-serif";
    ctx.fillText("SCENE OUTLINER", 408, 40);
    const objs = ["📁 Scene Collection", "  💡 Key Light 1200W", "  💡 Rim Neon Light", "  📷 Hero Camera", "  👁 Workstation_Mesh", "  👁 Character_Model", "  👁 Floor_Parquet"];
    ctx.font = "8px monospace";
    objs.forEach((o, i) => {
      ctx.fillStyle = i === 4 ? "#38BDF8" : "#9CA3AF";
      ctx.fillText(o, 406, 56 + i * 15);
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }

  // Pre-generate dynamic canvas textures for all workstations
  const codeTexture = createCodeScreenTexture();
  const designTexture = createDesignScreenTexture();
  const videoTexture = createVideoScreenTexture();
  const analyticsTexture = createAnalyticsScreenTexture();
  const threeDTexture = create3DScreenTexture();

  // MULTIPLE WORKING CHARACTERS (COLLEAGUES) & VISITOR CHAIRS IN THE OFFICE
  const animatedColleagues = [];

  // Function to create a realistic seated coworker at their workstation desk
  function createOfficeColleague({
    posX,
    posZ,
    rotY = 0,
    topColor = 0x141519, // All agency staff in sleek black!
    pantsColor = 0x0E0F12,
    discipline = "coding", // "coding" | "design" | "video" | "3d" | "analytics"
    skinColor = 0xF5C29F,
    hairColor = 0x111216,
    hasHeadphones = false,
    screenType = "dual"
  }) {
    const colGroup = new THREE.Group();
    colGroup.position.set(posX, 0, posZ);
    colGroup.rotation.y = rotY;
    workstationGroup.add(colGroup);

    // 1. Colleague's Workstation Desk (Sleek Dark Theme)
    const cDeskMat = new THREE.MeshLambertMaterial({ color: 0x1A1D27 });
    const cDeskLegMat = new THREE.MeshLambertMaterial({ color: 0x334155 });

    const cDeskMesh = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.32, 3.8), cDeskMat);
    cDeskMesh.position.set(0, 0, 0);
    colGroup.add(cDeskMesh);

    // Modern acoustic desk divider screen
    const dividerMat = new THREE.MeshLambertMaterial({ color: 0x2A303F });
    const cDivider = new THREE.Mesh(new THREE.BoxGeometry(6.6, 1.8, 0.10), dividerMat);
    cDivider.position.set(0, 0.95, 1.9);
    colGroup.add(cDivider);

    // Desk Legs
    const cLegGeo = new THREE.BoxGeometry(0.24, 6.2, 0.24);
    const cLegPositions = [
      [-3.1, -3.1, -1.6],
      [3.1, -3.1, -1.6],
      [-3.1, -3.1, 1.6],
      [3.1, -3.1, 1.6]
    ];
    cLegPositions.forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(cLegGeo, cDeskLegMat);
      leg.position.set(lx, ly, lz);
      colGroup.add(leg);
    });

    // 2. Colleague's Ergonomic Office Chair (Resting firmly on floor, perfectly positioned)
    const cChairSeatMat = new THREE.MeshLambertMaterial({ color: 0x181A20 });
    const cChairBackMat = new THREE.MeshLambertMaterial({ color: 0x2D333B });
    const cCasterMat = new THREE.MeshLambertMaterial({ color: 0x94A3B8 });
    const cWheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });

    const cChair = new THREE.Group();
    cChair.position.set(0, 0, -1.5);
    colGroup.add(cChair);

    // 5-Star Caster Base on Floor (y = -6.20)
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5;
      const legArm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 1.2), cCasterMat);
      legArm.position.set(Math.sin(angle) * 0.65, -6.1, Math.cos(angle) * 0.65);
      legArm.rotation.y = angle;
      cChair.add(legArm);

      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.10, 0.08, 8), cWheelMat);
      wheel.position.set(Math.sin(angle) * 1.15, -6.2, Math.cos(angle) * 1.15);
      wheel.rotation.z = Math.PI / 2;
      cChair.add(wheel);
    }

    const cPole = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 5.0, 12), cCasterMat);
    cPole.position.set(0, -3.6, 0);
    cChair.add(cPole);

    const cSeat = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.35, 2.0), cChairSeatMat);
    cSeat.position.set(0, -1.0, 0);
    cChair.add(cSeat);

    // Ergonomic Low-to-Mid Backrest (Supports lower back while shoulders & white collars remain fully visible!)
    const cBack = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.15, 0.14), cChairBackMat);
    cBack.position.set(0, 0.05, -0.85);
    cBack.rotation.x = -0.05;
    cChair.add(cBack);

    // 3. Colleague 3D Character (Seated in chair with hands on desk typing, in sleek agency black!)
    const cSkinMat = new THREE.MeshLambertMaterial({ color: skinColor });
    const cHairMat = new THREE.MeshLambertMaterial({ color: hairColor });
    const cTopMat = new THREE.MeshLambertMaterial({ color: topColor }); // Sleek Black
    const cPantsMat = new THREE.MeshLambertMaterial({ color: pantsColor });
    const cCollarMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); // Crisp White Collar
    const cShoeMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

    const personGroup = new THREE.Group();
    personGroup.position.set(0, -0.82, -1.35);
    colGroup.add(personGroup);

    // Torso
    const cBodyPivot = new THREE.Group();
    cBodyPivot.position.set(0, 0, 0);
    cBodyPivot.rotation.x = 0.08;
    personGroup.add(cBodyPivot);

    const cTorso = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.0, 1.1), cTopMat);
    cTorso.position.set(0, 1.0, 0);
    cBodyPivot.add(cTorso);

    // White Shirt Collar Band (Crisp white contrast at neck visible from back, sides, and front!)
    const cCollar = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.22, 0.85), cCollarMat);
    cCollar.position.set(0, 1.95, 0);
    cBodyPivot.add(cCollar);

    // Head
    const cHeadGroup = new THREE.Group();
    cHeadGroup.position.set(0, 2.0, 0);
    cBodyPivot.add(cHeadGroup);

    const cFace = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), cSkinMat);
    cFace.position.set(0, 0.6, 0);
    cHeadGroup.add(cFace);

    const cHair = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.65, 1.3), cHairMat);
    cHair.position.set(0, 1.0, 0);
    cHeadGroup.add(cHair);

    if (hasHeadphones) {
      const phoneMat = new THREE.MeshLambertMaterial({ color: 0xCBD5E1 });
      const phoneL = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.18, 10), phoneMat);
      phoneL.position.set(0.72, 0.6, 0);
      phoneL.rotation.z = Math.PI / 2;
      cHeadGroup.add(phoneL);
      const phoneR = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.18, 10), phoneMat);
      phoneR.position.set(-0.72, 0.6, 0);
      phoneR.rotation.z = Math.PI / 2;
      cHeadGroup.add(phoneR);
    }

    // Arms resting on desk
    const cLeftArmPivot = new THREE.Group();
    cLeftArmPivot.position.set(0.85, 1.7, 0);
    cLeftArmPivot.rotation.x = -1.15;
    cLeftArmPivot.rotation.z = -0.15;
    cBodyPivot.add(cLeftArmPivot);

    const cLeftArm = new THREE.Mesh(new THREE.BoxGeometry(0.48, 1.5, 0.48), cTopMat);
    cLeftArm.position.set(0, -0.6, 0);
    cLeftArmPivot.add(cLeftArm);

    // Crisp White Cuffs at wrists
    const cLeftCuff = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.15, 0.50), cCollarMat);
    cLeftCuff.position.set(0, -1.2, 0);
    cLeftArmPivot.add(cLeftCuff);

    const cLeftHand = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.35, 0.45), cSkinMat);
    cLeftHand.position.set(0, -1.4, 0);
    cLeftArmPivot.add(cLeftHand);

    const cRightArmPivot = new THREE.Group();
    cRightArmPivot.position.set(-0.85, 1.7, 0);
    cRightArmPivot.rotation.x = -1.18;
    cRightArmPivot.rotation.z = 0.15;
    cBodyPivot.add(cRightArmPivot);

    const cRightArm = new THREE.Mesh(new THREE.BoxGeometry(0.48, 1.5, 0.48), cTopMat);
    cRightArm.position.set(0, -0.6, 0);
    cRightArmPivot.add(cRightArm);

    const cRightCuff = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.15, 0.50), cCollarMat);
    cRightCuff.position.set(0, -1.2, 0);
    cRightArmPivot.add(cRightCuff);

    const cRightHand = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.35, 0.45), cSkinMat);
    cRightHand.position.set(0, -1.4, 0);
    cRightArmPivot.add(cRightHand);

    // Legs
    const cLegL = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.0, 0.75), cPantsMat);
    cLegL.position.set(0.55, -1.1, 0);
    cLegL.rotation.x = -Math.PI / 2 + 0.1;
    personGroup.add(cLegL);

    const cFootL = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.45, 1.2), cShoeMat);
    cFootL.position.set(0.55, -1.9, 0.3);
    personGroup.add(cFootL);

    const cLegR = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.0, 0.75), cPantsMat);
    cLegR.position.set(-0.55, -1.1, 0);
    cLegR.rotation.x = -Math.PI / 2 + 0.1;
    personGroup.add(cLegR);

    const cFootR = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.45, 1.2), cShoeMat);
    cFootR.position.set(-0.55, -1.9, 0.3);
    personGroup.add(cFootR);

    // 4. Colleague's Screens & Workstation Tech (Dynamic Workflows Facing Camera & Colleague)
    let primaryTex, secondaryTex;
    if (discipline === "coding") {
      primaryTex = codeTexture;
      secondaryTex = analyticsTexture;
    } else if (discipline === "design") {
      primaryTex = designTexture;
      secondaryTex = codeTexture;
    } else if (discipline === "video") {
      primaryTex = videoTexture;
      secondaryTex = designTexture;
    } else if (discipline === "3d") {
      primaryTex = threeDTexture;
      secondaryTex = codeTexture;
    } else { // "analytics"
      primaryTex = analyticsTexture;
      secondaryTex = designTexture;
    }

    if (screenType === "dual") {
      // Primary Monitor (Facing -z towards Colleague & Camera!)
      const monBase = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.05, 0.9), deskLegMat);
      monBase.position.set(-0.6, 0.20, 0.6);
      colGroup.add(monBase);

      const mon1Frame = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.0, 0.10), screenBezelMat);
      mon1Frame.position.set(-0.6, 1.45, 0.6);
      colGroup.add(mon1Frame);

      const mon1Mat = new THREE.MeshBasicMaterial({ map: primaryTex, side: THREE.DoubleSide });
      const mon1Screen = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 1.85), mon1Mat);
      mon1Screen.position.set(-0.6, 1.45, 0.54);
      mon1Screen.rotation.y = Math.PI; // Face towards camera (-z)!
      colGroup.add(mon1Screen);

      // Secondary Preview Monitor (Angled slightly inward)
      const mon2Frame = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.8, 0.10), screenBezelMat);
      mon2Frame.position.set(2.2, 1.45, 0.75);
      mon2Frame.rotation.y = -0.22;
      colGroup.add(mon2Frame);

      const mon2Mat = new THREE.MeshBasicMaterial({ map: secondaryTex, side: THREE.DoubleSide });
      const mon2Screen = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.65), mon2Mat);
      mon2Screen.position.set(2.2, 1.45, 0.69);
      mon2Screen.rotation.y = Math.PI - 0.22; // Face towards camera (-z) with inward angle!
      colGroup.add(mon2Screen);
    } else {
      // Laptop on Aluminum Stand
      const lBase = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.08, 1.7), laptopMetalMat);
      lBase.position.set(0, 0.22, 0.3);
      colGroup.add(lBase);

      const lLid = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.6, 0.06), screenBezelMat);
      lLid.position.set(0, 1.0, 1.0);
      lLid.rotation.x = 0.25;
      colGroup.add(lLid);

      const lMat = new THREE.MeshBasicMaterial({ map: primaryTex, side: THREE.DoubleSide });
      const lScr = new THREE.Mesh(new THREE.PlaneGeometry(2.35, 1.45), lMat);
      lScr.position.set(0, 1.0, 0.94);
      lScr.rotation.y = Math.PI; // Face towards camera (-z)!
      lScr.rotation.x = -0.25; // Tilted back
      colGroup.add(lScr);
    }

    // Keyboard & Coffee mug on colleague desk
    const cKb = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.04, 0.9), keyboardMat);
    cKb.position.set(0, 0.20, -0.3);
    colGroup.add(cKb);

    const cMug = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 0.55, 12), new THREE.MeshLambertMaterial({ color: 0x38BDF8 }));
    cMug.position.set(2.2, 0.48, 0.3);
    colGroup.add(cMug);

    animatedColleagues.push({
      leftArm: cLeftArmPivot,
      rightArm: cRightArmPivot,
      head: cHeadGroup,
      baseRotLeft: cLeftArmPivot.rotation.x,
      baseRotRight: cRightArmPivot.rotation.x,
      baseRotHead: cHeadGroup.rotation.x,
      baseRotHeadY: 0
    });
  }

  // --- 9 ACTIVE COWORKERS WORKING ACROSS LEFT, RIGHT, AND BACKGROUND BAYS ---
  // ALL DRESSED IN SLEEK AGENCY BLACK, ALL SCREENS ACTIVE WITH REAL WORK (CODING, DESIGN, EDITING, 3D, ANALYTICS)

  // Colleague 1: Left Bay Front (Senior Fullstack Architect - VS Code Coding)
  createOfficeColleague({
    posX: -9.5,
    posZ: -1.8,
    rotY: 0.08,
    topColor: 0x141519,
    pantsColor: 0x0E0F12,
    discipline: "coding",
    skinColor: 0xF5C29F,
    hairColor: 0x0A0A0D,
    hasHeadphones: true,
    screenType: "dual"
  });

  // Colleague 2: Left Bay Mid (UI/UX Product Designer - Figma Wireframes)
  createOfficeColleague({
    posX: -9.5,
    posZ: 3.2,
    rotY: 0.05,
    topColor: 0x18191E,
    pantsColor: 0x101115,
    discipline: "design",
    skinColor: 0xFCD34D,
    hairColor: 0x271912,
    hasHeadphones: false,
    screenType: "laptop"
  });

  // Colleague 3: Far Left Window Desk (Video & Motion Director - Premiere Pro Multi-track)
  createOfficeColleague({
    posX: -15.5,
    posZ: 0.8,
    rotY: 0.25,
    topColor: 0x121316,
    pantsColor: 0x0E0F12,
    discipline: "video",
    skinColor: 0xF5C29F,
    hairColor: 0x111216,
    hasHeadphones: true,
    screenType: "dual"
  });

  // Colleague 4: Right Bay Front (Core Frontend Engineer - VS Code TypeScript)
  createOfficeColleague({
    posX: 9.5,
    posZ: -1.8,
    rotY: -0.08,
    topColor: 0x16171D,
    pantsColor: 0x101115,
    discipline: "coding",
    skinColor: 0xFCD34D,
    hairColor: 0x271912,
    hasHeadphones: false,
    screenType: "laptop"
  });

  // Colleague 5: Right Bay Mid (Lead Brand & Design Systems - Figma Design Architecture)
  createOfficeColleague({
    posX: 9.5,
    posZ: 3.2,
    rotY: -0.05,
    topColor: 0x111215,
    pantsColor: 0x0E0F12,
    discipline: "design",
    skinColor: 0xD97706,
    hairColor: 0x0A0A0D,
    hasHeadphones: true,
    screenType: "dual"
  });

  // Colleague 6: Far Right Studio Desk (3D & Spatial Designer - Blender 3D Viewport)
  createOfficeColleague({
    posX: 15.5,
    posZ: 0.8,
    rotY: -0.25,
    topColor: 0x15161B,
    pantsColor: 0x0F1014,
    discipline: "3d",
    skinColor: 0xF5C29F,
    hairColor: 0x121317,
    hasHeadphones: false,
    screenType: "dual"
  });

  // Colleague 7: Collaborative Glass Cabin (Lead Strategist - SaaS Growth Analytics)
  createOfficeColleague({
    posX: 0,
    posZ: 9.5,
    rotY: 0.0,
    topColor: 0x131418,
    pantsColor: 0x0E0F12,
    discipline: "analytics",
    skinColor: 0xD97706,
    hairColor: 0x0A0A0D,
    hasHeadphones: false,
    screenType: "laptop"
  });

  // Colleague 8: Left Bay Front Desk (Design Systems Lead - Figma UI Library)
  createOfficeColleague({
    posX: -9.5,
    posZ: -5.8,
    rotY: 0.06,
    topColor: 0x17181E,
    pantsColor: 0x0F1014,
    discipline: "design",
    skinColor: 0xF5C29F,
    hairColor: 0x15161B,
    hasHeadphones: true,
    screenType: "dual"
  });

  // Colleague 9: Right Bay Front Desk (Motion & Reel Specialist - Premiere Pro 4K Editing)
  createOfficeColleague({
    posX: 9.5,
    posZ: -5.8,
    rotY: -0.06,
    topColor: 0x14151A,
    pantsColor: 0x0E0F12,
    discipline: "video",
    skinColor: 0xFCD34D,
    hairColor: 0x0A0A0D,
    hasHeadphones: false,
    screenType: "laptop"
  });

  // B. Large Widescreen Studio Display Monitor (16:9 - Crystal-Clear, Elevated Above Seated Ashok!)
  const monitorGroup = new THREE.Group();
  monitorGroup.position.set(0, 0, 1.2);
  workstationGroup.add(monitorGroup);

  // Sculpted Aluminum Monitor Stand Base & Arm
  const standBase = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 1.8), deskLegMat);
  standBase.position.set(0, 0.20, 0.2);
  monitorGroup.add(standBase);

  const standArm = new THREE.Mesh(new THREE.BoxGeometry(0.55, 2.6, 0.3), deskLegMat);
  standArm.position.set(0, 1.55, 0.2);
  monitorGroup.add(standArm);

  // Monitor Housing (27" / 32" Widescreen Studio Display, elevated cleanly at Y = 3.25)
  const monitorBezelGeo = new THREE.BoxGeometry(8.20, 4.65, 0.18);
  const monitorBezelMesh = new THREE.Mesh(monitorBezelGeo, screenBezelMat);
  monitorBezelMesh.position.set(0, 3.25, 0);
  monitorGroup.add(monitorBezelMesh);

  // Live Figma UI Screen Canvas Texture
  const figmaScreenCanvas = document.createElement("canvas");
  figmaScreenCanvas.width = 1024;
  figmaScreenCanvas.height = 576;
  const fctx = figmaScreenCanvas.getContext("2d");

  function drawFigmaScreen(cursorX = 540, cursorY = 230) {
    // Canvas background
    fctx.fillStyle = "#0F1117";
    fctx.fillRect(0, 0, 1024, 576);

    // Top Figma Toolbar
    fctx.fillStyle = "#181A20";
    fctx.fillRect(0, 0, 1024, 40);
    fctx.fillStyle = "#262933";
    fctx.fillRect(0, 39, 1024, 1);

    // Window controls
    fctx.fillStyle = "#EF4444"; fctx.beginPath(); fctx.arc(20, 20, 5, 0, Math.PI * 2); fctx.fill();
    fctx.fillStyle = "#F59E0B"; fctx.beginPath(); fctx.arc(36, 20, 5, 0, Math.PI * 2); fctx.fill();
    fctx.fillStyle = "#10B981"; fctx.beginPath(); fctx.arc(52, 20, 5, 0, Math.PI * 2); fctx.fill();

    // Tools
    fctx.fillStyle = "#94A3B8";
    fctx.font = "bold 12px sans-serif";
    fctx.fillText("❖  Figma — Ashok Creative Portfolio Workspace", 80, 25);

    // Left Layers Panel
    fctx.fillStyle = "#14161C";
    fctx.fillRect(0, 40, 190, 536);
    fctx.fillStyle = "#262933";
    fctx.fillRect(189, 40, 1, 536);

    fctx.fillStyle = "#64748B";
    fctx.font = "bold 10px sans-serif";
    fctx.fillText("LAYERS", 18, 65);
    fctx.fillStyle = "#CBD5E1";
    fctx.font = "11px sans-serif";
    fctx.fillText("# 01_Mobile_App_Zendo", 22, 95);
    fctx.fillText("# 02_Design_System_Tokens", 22, 125);
    fctx.fillText("# 03_Analytics_Dashboard", 22, 155);
    fctx.fillText("# 04_Packaging_3D_Mockup", 22, 185);
    fctx.fillText("# 05_Brand_Guidelines", 22, 215);

    // Center Canvas: Artboard 1 (Mobile App)
    fctx.fillStyle = "#FFFFFF";
    fctx.fillRect(235, 75, 175, 360);
    fctx.fillStyle = "#3528E8";
    fctx.fillRect(235, 75, 175, 105);
    fctx.fillStyle = "#FFFFFF";
    fctx.font = "bold 14px sans-serif";
    fctx.fillText("Zendo UI", 252, 130);
    fctx.fillStyle = "#94A3B8";
    fctx.fillRect(252, 210, 140, 10);
    fctx.fillRect(252, 235, 100, 10);
    fctx.fillStyle = "#3528E8";
    fctx.fillRect(252, 280, 140, 36);

    // Artboard 2: Analytics Dashboard (Center Big Screen)
    fctx.fillStyle = "#FFFFFF";
    fctx.fillRect(445, 75, 260, 360);
    fctx.fillStyle = "#FA8F19";
    fctx.fillRect(470, 105, 95, 26);
    fctx.fillStyle = "#0F172A";
    fctx.font = "bold 15px sans-serif";
    fctx.fillText("Design Metrics Hub", 470, 160);
    fctx.fillStyle = "#E2E8F0";
    fctx.fillRect(470, 185, 210, 14);
    fctx.fillRect(470, 210, 150, 12);
    // Colorful visual bars
    fctx.fillStyle = "#3528E8"; fctx.fillRect(470, 310, 30, 85);
    fctx.fillStyle = "#FA8F19"; fctx.fillRect(515, 275, 30, 120);
    fctx.fillStyle = "#10B981"; fctx.fillRect(560, 250, 30, 145);
    fctx.fillStyle = "#F76A8D"; fctx.fillRect(605, 290, 30, 105);

    // Artboard 3: Brand Identity
    fctx.fillStyle = "#FFFFFF";
    fctx.fillRect(735, 75, 150, 360);
    fctx.fillStyle = "#10B981";
    fctx.fillRect(750, 100, 120, 60);
    fctx.fillStyle = "#0F172A";
    fctx.font = "bold 12px sans-serif";
    fctx.fillText("Brand Identity", 750, 185);

    // Animated Designer Cursor
    fctx.fillStyle = "#3528E8";
    fctx.beginPath();
    fctx.moveTo(cursorX, cursorY);
    fctx.lineTo(cursorX, cursorY + 18);
    fctx.lineTo(cursorX + 6, cursorY + 14);
    fctx.lineTo(cursorX + 13, cursorY + 22);
    fctx.lineTo(cursorX + 16, cursorY + 20);
    fctx.lineTo(cursorX + 9, cursorY + 12);
    fctx.lineTo(cursorX + 15, cursorY + 12);
    fctx.closePath();
    fctx.fill();

    // Cursor name tag
    fctx.fillStyle = "#3528E8";
    fctx.fillRect(cursorX + 14, cursorY + 18, 54, 18);
    fctx.fillStyle = "#FFFFFF";
    fctx.font = "bold 10px sans-serif";
    fctx.fillText("Ashok", cursorX + 20, cursorY + 31);
  }

  drawFigmaScreen(540, 230);

  const screenTexture = new THREE.CanvasTexture(figmaScreenCanvas);
  screenTexture.minFilter = THREE.LinearFilter;
  screenTexture.magFilter = THREE.LinearFilter;

  const screenGeo = new THREE.PlaneGeometry(7.80, 4.35); // 16:9 Widescreen Display
  const screenMesh = new THREE.Mesh(screenGeo, new THREE.MeshBasicMaterial({ map: screenTexture }));
  screenMesh.position.set(0, 3.25, -0.10);
  screenMesh.rotation.y = Math.PI; // Face towards camera (-z)
  monitorGroup.add(screenMesh);

  // Soft ambient screen illumination
  const displayGlow = new THREE.PointLight(0x3528E8, 2.4, 9.0);
  displayGlow.position.set(0, 3.25, -0.6);
  monitorGroup.add(displayGlow);

  // C. Secondary Compact MacBook on Left Side of Desk
  const secLaptopGroup = new THREE.Group();
  secLaptopGroup.position.set(-2.5, 0.22, 0.4);
  secLaptopGroup.rotation.y = 0.35;
  workstationGroup.add(secLaptopGroup);

  const secBase = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 1.2), laptopMetalMat);
  secLaptopGroup.add(secBase);

  const secLidGroup = new THREE.Group();
  secLidGroup.position.set(0, 0.05, 0.6);
  secLidGroup.rotation.x = 0.32;
  secLaptopGroup.add(secLidGroup);

  const secLidFrame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.1, 0.05), screenBezelMat);
  secLidFrame.position.set(0, 0.55, 0);
  secLidGroup.add(secLidFrame);

  const secScreen = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.0), new THREE.MeshBasicMaterial({ color: 0x181A20 }));
  secScreen.position.set(0, 0.55, -0.04);
  secScreen.rotation.y = Math.PI;
  secLidGroup.add(secScreen);

  // D. Desk Mat, Wireless Keyboard & Precision Mouse
  const deskMatGeo = new THREE.BoxGeometry(5.2, 0.03, 2.2);
  const deskMatMat = new THREE.MeshLambertMaterial({ color: 0x1E2026 });
  const deskMatMesh = new THREE.Mesh(deskMatGeo, deskMatMat);
  deskMatMesh.position.set(0, 0.20, -0.3);
  workstationGroup.add(deskMatMesh);

  // Apple-style Keyboard
  const kbGeo = new THREE.BoxGeometry(2.4, 0.05, 0.9);
  const kbMesh = new THREE.Mesh(kbGeo, keyboardMat);
  kbMesh.position.set(-0.3, 0.23, -0.3);
  workstationGroup.add(kbMesh);

  // Precision Mouse
  const mouseGeo = new THREE.BoxGeometry(0.5, 0.12, 0.8);
  const mouseMat = new THREE.MeshLambertMaterial({ color: 0xE2E8F0 });
  const mouseMesh = new THREE.Mesh(mouseGeo, mouseMat);
  mouseMesh.position.set(1.5, 0.25, -0.3);
  workstationGroup.add(mouseMesh);

  // Potted Succulent Plant on Desk (Right side)
  const potGeo = new THREE.CylinderGeometry(0.35, 0.28, 0.65, 16);
  const potMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
  const potMesh = new THREE.Mesh(potGeo, potMat);
  potMesh.position.set(2.9, 0.52, 1.2);
  workstationGroup.add(potMesh);

  const plantGeo = new THREE.SphereGeometry(0.40, 12, 10);
  const plantMat = new THREE.MeshLambertMaterial({ color: 0x10B981 });
  const plantMesh = new THREE.Mesh(plantGeo, plantMat);
  plantMesh.position.set(2.9, 0.98, 1.2);
  workstationGroup.add(plantMesh);

  // Modern Curved Task Desk Lamp
  const lampGroup = new THREE.Group();
  lampGroup.position.set(-3.2, 0.22, 1.2);
  workstationGroup.add(lampGroup);

  const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.06, 18), deskLegMat);
  lampGroup.add(lampBase);

  const lampPole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 12), deskLegMat);
  lampPole.position.set(0, 1.6, 0);
  lampGroup.add(lampPole);

  const lampHead = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 0.3), deskLegMat);
  lampHead.position.set(0.7, 3.2, 0.3);
  lampHead.rotation.z = -0.22;
  lampGroup.add(lampHead);

  const lampLight = new THREE.PointLight(0xFFFBEB, 1.2, 5.0);
  lampLight.position.set(1.1, 3.0, 0.35);
  lampGroup.add(lampLight);

  // Stack of 3 Books on desk (left side)
  const bookMat1 = new THREE.MeshLambertMaterial({ color: 0x3528E8 }); // Blue spine
  const bookMat2 = new THREE.MeshLambertMaterial({ color: 0xF5F5F7 }); // Pure white
  const bookMat3 = new THREE.MeshLambertMaterial({ color: 0xE2E8F0 }); // Slate

  const book1 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.22, 1.2), bookMat1);
  book1.position.set(-2.8, 0.30, -1.0);
  book1.rotation.y = 0.08;
  workstationGroup.add(book1);

  const book2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.20, 1.1), bookMat2);
  book2.position.set(-2.8, 0.50, -1.0);
  book2.rotation.y = -0.05;
  workstationGroup.add(book2);

  const book3 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.18, 1.0), bookMat3);
  book3.position.set(-2.8, 0.68, -1.0);
  book3.rotation.y = 0.12;
  workstationGroup.add(book3);

  // Stationery Pen Stand with Styluses
  const penCupMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
  const penCup = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 0.75, 16), penCupMat);
  penCup.position.set(-2.0, 0.55, 1.2);
  workstationGroup.add(penCup);

  const penMat = new THREE.MeshLambertMaterial({ color: 0x3528E8 });
  const pen1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 8), penMat);
  pen1.position.set(-2.0, 0.9, 1.2);
  pen1.rotation.z = 0.14;
  workstationGroup.add(pen1);

  // Amber Ceramic Coffee Mug
  const mugGeo = new THREE.CylinderGeometry(0.32, 0.28, 0.65, 16);
  const mugMat = new THREE.MeshLambertMaterial({ color: 0xFA8F19 });
  const mug = new THREE.Mesh(mugGeo, mugMat);
  mug.position.set(1.8, 0.52, 0.8);
  workstationGroup.add(mug);
  const mugMesh = new THREE.Mesh(mugGeo, mugMat);
  mugMesh.position.set(4.0, 0.62, 0.4);
  workstationGroup.add(mugMesh);

  // Minimalist Wall Clock on office partition (at z = 4.15)
  const clockGroup = new THREE.Group();
  clockGroup.position.set(0, 5.2, 4.0);
  clockGroup.rotation.y = Math.PI; // Face towards camera (-z)
  workstationGroup.add(clockGroup);

  const clockRimMat = new THREE.MeshLambertMaterial({ color: 0x2A2E3D });
  const clockFaceMat = new THREE.MeshBasicMaterial({ color: 0x141722 });
  const clockRim = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.10, 32), clockRimMat);
  clockRim.rotation.x = Math.PI / 2;
  clockGroup.add(clockRim);

  const clockFace = new THREE.Mesh(new THREE.CylinderGeometry(0.98, 0.98, 0.12, 32), clockFaceMat);
  clockFace.rotation.x = Math.PI / 2;
  clockFace.position.set(0, 0, 0.01);
  clockGroup.add(clockFace);

  const handMat = new THREE.MeshBasicMaterial({ color: 0xF8FAFC });
  const hourHand = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.45, 0.02), handMat);
  hourHand.position.set(0.10, 0.14, 0.08);
  hourHand.rotation.z = -0.7;
  clockGroup.add(hourHand);

  const minHand = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.68, 0.02), handMat);
  minHand.position.set(0, 0.28, 0.08);
  clockGroup.add(minHand);

  // Ergonomic Designer Office Task Chair (Resting firmly on the floor at Y = -6.20)
  const chairGroup = new THREE.Group();
  chairGroup.position.set(0, 0, -1.8);
  workstationGroup.add(chairGroup);

  // 5-Star Chrome Caster Base on the floor
  const casterMat = new THREE.MeshLambertMaterial({ color: 0xCBD5E1 });
  const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });

  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5;
    const legArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.10, 1.4), casterMat);
    legArm.position.set(Math.sin(angle) * 0.7, -6.1, Math.cos(angle) * 0.7);
    legArm.rotation.y = angle;
    chairGroup.add(legArm);

    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.10, 10), wheelMat);
    wheel.position.set(Math.sin(angle) * 1.3, -6.2, Math.cos(angle) * 1.3);
    wheel.rotation.z = Math.PI / 2;
    chairGroup.add(wheel);
  }

  // Chrome Gas Cylinder Pole (from floor up to seat)
  const chairPole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 5.0, 16), casterMat);
  chairPole.position.set(0, -3.6, 0);
  chairGroup.add(chairPole);

  // Ergonomic Padded Seat Cushion
  const chairSeatMat = new THREE.MeshLambertMaterial({ color: 0x181A20 });
  const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.38, 2.6), chairSeatMat);
  chairSeat.position.set(0, -0.95, 0);
  chairGroup.add(chairSeat);

  // Mesh Ergonomic Backrest with Lumbar Curve (Proportionally sized, low-to-mid back)
  // Low-to-mid height allows Ashok's broad shoulders, jacket, crisp white collar, and stylish hair to be 100% visible!
  const chairBackMat = new THREE.MeshLambertMaterial({ color: 0x2D333B });
  const chairBack = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.25, 0.16), chairBackMat);
  chairBack.position.set(0, 0.15, -0.95);
  chairBack.rotation.x = -0.05;
  chairGroup.add(chairBack);

  // Armrests
  const armLeft = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 1.6), chairSeatMat);
  armLeft.position.set(1.55, -0.15, 0);
  chairGroup.add(armLeft);

  const armLeftPost = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.8, 8), casterMat);
  armLeftPost.position.set(1.55, -0.55, 0);
  chairGroup.add(armLeftPost);

  const armRight = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 1.6), chairSeatMat);
  armRight.position.set(-1.55, -0.15, 0);
  chairGroup.add(armRight);

  const armRightPost = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.8, 8), casterMat);
  armRightPost.position.set(-1.55, -0.55, 0);
  chairGroup.add(armRightPost);

  // 4. The 3D Character (Ashok) Seated at Desk (Hero scale, clearly visible and prominent!)
  const skinMat = new THREE.MeshLambertMaterial({ color: 0xF5C29F, transparent: true, opacity: 1 });
  const hairMat = new THREE.MeshLambertMaterial({ color: 0x0A0A0D, transparent: true, opacity: 1 });
  const suitMat = new THREE.MeshLambertMaterial({ color: 0x1E212B, transparent: true, opacity: 1 }); // Sleek Agency Midnight Blazer
  const collarMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 1 }); // Crisp White Collar
  const tieMat = new THREE.MeshLambertMaterial({ color: 0x3528E8, transparent: true, opacity: 1 }); // Royal Blue Tie Accent
  const pantsMat = new THREE.MeshLambertMaterial({ color: 0x12141B, transparent: true, opacity: 1 }); // Deep Black Trousers
  const shoeMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 1 }); // Crisp White Sneakers
  const headsetMat = new THREE.MeshLambertMaterial({ color: 0x38BDF8, transparent: true, opacity: 1 }); // Cyan Pro Headset

  const characterGroup = new THREE.Group();
  characterGroup.position.set(0, -0.75, -1.65);
  characterGroup.rotation.y = 0; // Facing +z forward into desk
  workstationGroup.add(characterGroup);

  // Torso & Upper Body
  const bodyPivot = new THREE.Group();
  bodyPivot.position.set(0, 0, 0);
  bodyPivot.rotation.x = 0.08; // Leaning attentively toward monitor
  characterGroup.add(bodyPivot);

  // Broad, well-structured designer suit jacket (width 2.45, height 2.50, depth 1.45)
  const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(2.45, 2.50, 1.45), suitMat);
  torsoMesh.position.set(0, 1.25, 0);
  bodyPivot.add(torsoMesh);

  // Crisp White Shirt Collar (Prominent contrast around neck visible from behind, front, and sides)
  const collarMesh = new THREE.Mesh(new THREE.BoxGeometry(1.30, 0.32, 1.30), collarMat);
  collarMesh.position.set(0, 2.45, 0);
  bodyPivot.add(collarMesh);

  // Tie Accent
  const tieMesh = new THREE.Mesh(new THREE.BoxGeometry(0.38, 1.70, 0.12), tieMat);
  tieMesh.position.set(0, 1.60, 0.76);
  bodyPivot.add(tieMesh);

  // Head Group (Elevated so head sits proudly at Y = 2.55, reaching up to Y = ~3.75)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 2.55, 0);
  headGroup.rotation.x = 0.10; // Gaze angled toward the screen
  bodyPivot.add(headGroup);

  // Neck (visible skin tone below collar)
  const neckMesh = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.50, 0.85), skinMat);
  neckMesh.position.set(0, 0.20, 0);
  headGroup.add(neckMesh);

  // Head / Face
  const faceMesh = new THREE.Mesh(new THREE.BoxGeometry(1.65, 1.65, 1.65), skinMat);
  faceMesh.position.set(0, 0.90, 0);
  headGroup.add(faceMesh);

  // Layered Hair Helmet (Stylish, voluminous modern cut)
  const hairTop = new THREE.Mesh(new THREE.BoxGeometry(1.80, 0.85, 1.80), hairMat);
  hairTop.position.set(0, 1.45, 0);
  headGroup.add(hairTop);

  const hairBack = new THREE.Mesh(new THREE.BoxGeometry(1.80, 1.15, 0.65), hairMat);
  hairBack.position.set(0, 0.90, -0.70);
  headGroup.add(hairBack);

  const bangs = new THREE.Mesh(new THREE.BoxGeometry(1.80, 0.45, 0.45), hairMat);
  bangs.position.set(0, 1.05, 0.70);
  headGroup.add(bangs);

  // Sculpted Ears in Skin Tone (Gives distinct human silhouette from rear/side)
  const leftEar = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.45, 0.35), skinMat);
  leftEar.position.set(0.90, 0.90, 0);
  headGroup.add(leftEar);

  const rightEar = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.45, 0.35), skinMat);
  rightEar.position.set(-0.90, 0.90, 0);
  headGroup.add(rightEar);

  // Studio Audio Headset (Modern designer headphones over ears)
  const phoneL = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.22, 12), headsetMat);
  phoneL.position.set(1.02, 0.90, 0);
  phoneL.rotation.z = Math.PI / 2;
  headGroup.add(phoneL);

  const phoneR = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.22, 12), headsetMat);
  phoneR.position.set(-1.02, 0.90, 0);
  phoneR.rotation.z = Math.PI / 2;
  headGroup.add(phoneR);

  const phoneBand = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.12, 0.30), headsetMat);
  phoneBand.position.set(0, 1.90, 0);
  headGroup.add(phoneBand);

  // Left Arm (bent forward resting on desk keyboard)
  const leftArmPivot = new THREE.Group();
  leftArmPivot.position.set(1.35, 2.15, 0);
  leftArmPivot.rotation.x = -1.15;
  leftArmPivot.rotation.z = -0.15;
  bodyPivot.add(leftArmPivot);

  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.85, 0.65), suitMat);
  leftArm.position.set(0, -0.75, 0);
  leftArmPivot.add(leftArm);

  // White cuff at left wrist
  const leftCuff = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.20, 0.68), collarMat);
  leftCuff.position.set(0, -1.45, 0);
  leftArmPivot.add(leftCuff);

  const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.60, 0.42, 0.60), skinMat);
  leftHand.position.set(0, -1.70, 0);
  leftArmPivot.add(leftHand);

  // Right Arm (bent forward resting on mouse)
  const rightArmPivot = new THREE.Group();
  rightArmPivot.position.set(-1.35, 2.15, 0);
  rightArmPivot.rotation.x = -1.18;
  rightArmPivot.rotation.z = 0.15;
  bodyPivot.add(rightArmPivot);

  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.85, 0.65), suitMat);
  rightArm.position.set(0, -0.75, 0);
  rightArmPivot.add(rightArm);

  // White cuff at right wrist
  const rightCuff = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.20, 0.68), collarMat);
  rightCuff.position.set(0, -1.45, 0);
  rightArmPivot.add(rightCuff);

  const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.60, 0.42, 0.60), skinMat);
  rightHand.position.set(0, -1.70, 0);
  rightArmPivot.add(rightHand);

  // Legs (seated firmly on the chair)
  const leftLegPivot = new THREE.Group();
  leftLegPivot.position.set(0.75, 0.1, 0);
  leftLegPivot.rotation.x = -Math.PI / 2 + 0.10;
  characterGroup.add(leftLegPivot);

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.95, 2.2, 0.95), pantsMat);
  leftLeg.position.set(0, -0.9, 0);
  leftLegPivot.add(leftLeg);

  const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.6, 1.6), shoeMat);
  leftFoot.position.set(0, -2.0, 0.2);
  leftLegPivot.add(leftFoot);

  const rightLegPivot = new THREE.Group();
  rightLegPivot.position.set(-0.75, 0.1, 0);
  rightLegPivot.rotation.x = -Math.PI / 2 + 0.10;
  characterGroup.add(rightLegPivot);

  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.95, 2.2, 0.95), pantsMat);
  rightLeg.position.set(0, -0.9, 0);
  rightLegPivot.add(rightLeg);

  const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.6, 1.6), shoeMat);
  rightFoot.position.set(0, -2.0, 0.2);
  rightLegPivot.add(rightFoot);

  // --- CINEMATIC ARCHITECTURAL TOP-ANGLE CAMERA PATH ---
  // Start: Elevated architectural top-angle studio view overlooking the bustling creative office
  const camStartPos = new THREE.Vector3(0, 13.5, -19.5);
  const camStartLook = new THREE.Vector3(0, 1.2, -0.5);

  // Mid-flight: Swooping down gracefully through the studio directly behind Ashok at his desk
  const camMidPos = new THREE.Vector3(0, 4.8, -7.2);
  const camMidLook = new THREE.Vector3(0, 3.2, 1.0);

  // End: Camera zooms smoothly over Ashok's shoulders right into the Studio Display screen
  const camEndPos = new THREE.Vector3(0, 3.35, -0.15);
  const camEndLook = new THREE.Vector3(0, 3.35, 1.20);

  const currentCamPos = camStartPos.clone();
  const currentCamLook = camStartLook.clone();

  // --- RENDER LOOP & CAMERA LERP ---
  let animId = null;

  function updateWorkstationFrames(now) {
    // Ultra-smooth physical lerp on scroll progress (Damped 0.065 for silky response)
    currentProgress += (targetProgress - currentProgress) * 0.065;

    // Cosine ease for smooth camera movement
    const p = 0.5 - 0.5 * Math.cos(Math.PI * currentProgress);
    const oneMinusP = 1.0 - p;

    // Curved Bezier flight path
    const posX = oneMinusP * oneMinusP * camStartPos.x + 2 * oneMinusP * p * camMidPos.x + p * p * camEndPos.x;
    const posY = oneMinusP * oneMinusP * camStartPos.y + 2 * oneMinusP * p * camMidPos.y + p * p * camEndPos.y;
    const posZ = oneMinusP * oneMinusP * camStartPos.z + 2 * oneMinusP * p * camMidPos.z + p * p * camEndPos.z;
    currentCamPos.set(posX, posY, posZ);

    const lookX = oneMinusP * oneMinusP * camStartLook.x + 2 * oneMinusP * p * camMidLook.x + p * p * camEndLook.x;
    const lookY = oneMinusP * oneMinusP * camStartLook.y + 2 * oneMinusP * p * camMidLook.y + p * p * camEndLook.y;
    const lookZ = oneMinusP * oneMinusP * camStartLook.z + 2 * oneMinusP * p * camMidLook.z + p * p * camEndLook.z;
    currentCamLook.set(lookX, lookY, lookZ);

    camera.position.copy(currentCamPos);
    camera.lookAt(currentCamLook);

    // Subtle typing micro-animation on Ashok (Hero Character)
    const time = now * 0.003;
    leftArmPivot.rotation.x = -1.15 + Math.sin(time * 6.5) * 0.035;
    rightArmPivot.rotation.x = -1.18 + Math.cos(time * 7.8) * 0.038;
    headGroup.rotation.x = 0.14 + Math.sin(time * 2.2) * 0.015;

    // Animate all coworkers actively typing and working in the office
    animatedColleagues.forEach((c, idx) => {
      const colTime = now * 0.0028 + idx * 1.6;
      c.leftArm.rotation.x = c.baseRotLeft + Math.sin(colTime * 5.2) * 0.038;
      c.rightArm.rotation.x = c.baseRotRight + Math.cos(colTime * 6.4) * 0.040;
      c.head.rotation.x = c.baseRotHead + Math.sin(colTime * 1.8) * 0.018;
      c.head.rotation.y = Math.cos(colTime * 1.3) * 0.025;
    });

    // Active cursor micro-movement on 3D system screen
    if (Math.floor(now / 80) % 2 === 0) {
      const curX = 520 + Math.sin(now * 0.002) * 75;
      const curY = 220 + Math.cos(now * 0.0016) * 45;
      drawFigmaScreen(curX, curY);
      screenTexture.needsUpdate = true;
    }

    // Smoothly dissolve hero character when camera swoops over the shoulder into the monitor screen
    if (currentProgress > 0.58) {
      const dissolve = Math.max(0, 1.0 - (currentProgress - 0.58) / 0.18);
      characterGroup.traverse((obj) => {
        if (obj.isMesh && obj.material) {
          obj.material.opacity = dissolve;
        }
      });
    } else {
      characterGroup.traverse((obj) => {
        if (obj.isMesh && obj.material && obj.material.opacity !== 1.0) {
          obj.material.opacity = 1.0;
        }
      });
    }

    renderer.render(scene, camera);

    // Transition into / out of the laptop screen OS portal (Zero-glitch alpha blend)
    updateScreenPortalTransition(currentProgress);

    animId = requestAnimationFrame(updateWorkstationFrames);
  }

  function updateScreenPortalTransition(prog) {
    if (!screenPortal) return;

    // Scroll explore indicator fades as user starts scrolling
    if (scrollIndicator) {
      const indOpacity = Math.max(0, 1 - prog * 5.0);
      scrollIndicator.style.opacity = indOpacity.toFixed(2);
      scrollIndicator.style.pointerEvents = indOpacity <= 0.05 ? "none" : "auto";
    }

    if (prog <= 0.78) {
      // Completely in the 3D office workstation
      screenPortal.style.opacity = "0";
      screenPortal.style.visibility = "hidden";
      screenPortal.style.pointerEvents = "none";
      isDiveInside = false;
      if (diveToggleBtn) {
        diveToggleBtn.querySelector(".zoom-btn-text").textContent = "DIVE INTO SCREEN";
      }
    } else {
      // 100% solid, fully opaque desktop with zero ghosting, low-opacity, or background bleed-through
      screenPortal.style.opacity = "1";
      screenPortal.style.visibility = "visible";
      screenPortal.style.pointerEvents = "auto";
      isDiveInside = true;
      if (diveToggleBtn) {
        diveToggleBtn.querySelector(".zoom-btn-text").textContent = "BACK TO DESK";
      }
    }
  }

  // --- SCROLL ZOOM INTERACTIONS (SYNCED WITH USER SCROLL & TRACK) ---
  const scrollTrack = document.getElementById("laptopScrollTrack");
  const viewProject = document.getElementById("view-project");

  function handleViewProjectScroll() {
    if (!scrollTrack || !viewProject) return;
    const trackRect = scrollTrack.getBoundingClientRect();
    const trackHeight = scrollTrack.offsetHeight;
    const viewportH = window.innerHeight || 800;
    const scrollableDistance = Math.max(100, trackHeight - viewportH);
    const scrolled = -trackRect.top;
    const ratio = Math.max(0, Math.min(1.0, scrolled / scrollableDistance));
    targetProgress = ratio;
  }

  if (viewProject) {
    viewProject.addEventListener("scroll", handleViewProjectScroll, { passive: true });
  }
  window.addEventListener("scroll", handleViewProjectScroll, { passive: true });

  stageViewport.addEventListener("wheel", (e) => {
    // If inside a scrollable window inside the OS, allow normal scrolling inside that window
    if (e.target.closest("#laptopOsScreen") || e.target.closest(".finder-main-content") || e.target.closest(".logo-viewer-canvas-wrap") || e.target.closest(".logo-direct-viewer") || e.target.closest(".file-manager-grid") || e.target.closest(".preview-modal-body") || e.target.closest(".os-finder-window") || e.target.closest(".about-window-content") || e.target.closest(".contact-window-content")) {
      return;
    }

    if (viewProject && scrollTrack) {
      const trackHeight = scrollTrack.offsetHeight;
      const viewportH = window.innerHeight || 800;
      const maxScroll = Math.max(100, trackHeight - viewportH);
      const delta = e.deltaY;
      const newScroll = Math.max(0, Math.min(maxScroll, viewProject.scrollTop + delta * 1.5));
      viewProject.scrollTop = newScroll;
      targetProgress = newScroll / maxScroll;
    } else {
      const delta = e.deltaY;
      if (delta > 0) {
        targetProgress = Math.min(1.0, targetProgress + delta * 0.0022);
      } else {
        targetProgress = Math.max(0.0, targetProgress + delta * 0.0022);
      }
    }
  }, { passive: true });

  // Touch Swipe for Mobile / Tablet
  let touchStartY = 0;
  stageViewport.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  stageViewport.addEventListener("touchmove", (e) => {
    if (e.target.closest("#laptopOsScreen") || e.target.closest(".finder-main-content") || e.target.closest(".preview-modal-body") || e.target.closest(".logo-direct-viewer")) return;
    const currentY = e.touches[0].clientY;
    const deltaY = touchStartY - currentY;
    touchStartY = currentY;

    if (viewProject && scrollTrack) {
      const trackHeight = scrollTrack.offsetHeight;
      const viewportH = window.innerHeight || 800;
      const maxScroll = Math.max(100, trackHeight - viewportH);
      const newScroll = Math.max(0, Math.min(maxScroll, viewProject.scrollTop + deltaY * 2.2));
      viewProject.scrollTop = newScroll;
      targetProgress = newScroll / maxScroll;
    } else {
      if (deltaY > 0 && targetProgress < 0.98) {
        targetProgress = Math.min(1.0, targetProgress + deltaY * 0.0035);
      } else if (deltaY < 0 && targetProgress > 0.02) {
        targetProgress = Math.max(0.0, targetProgress + deltaY * 0.0035);
      }
    }
  }, { passive: true });

  // Scroll Indicator Click ("SCROLL TO EXPLORE")
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      if (viewProject && scrollTrack) {
        const targetY = scrollTrack.offsetTop + (scrollTrack.offsetHeight - window.innerHeight);
        viewProject.scrollTo({ top: targetY, behavior: "smooth" });
      }
      targetProgress = 1.0;
    });
  }

  // Dive Toggle Button (if present)
  if (diveToggleBtn) {
    diveToggleBtn.addEventListener("click", () => {
      if (viewProject && scrollTrack) {
        const targetY = isDiveInside ? 0 : scrollTrack.offsetTop + (scrollTrack.offsetHeight - window.innerHeight);
        viewProject.scrollTo({ top: targetY, behavior: "smooth" });
      }
      targetProgress = isDiveInside ? 0.0 : 1.0;
    });
  }

  // OS "Step Back to Desk" button
  if (zoomBackBtn) {
    zoomBackBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (viewProject) {
        viewProject.scrollTo({ top: 0, behavior: "smooth" });
      }
      targetProgress = 0.0;
    });
  }

  // --- FULL-SCREEN GALLERY SHOWCASE LIGHTBOX (Zero White-Space, Never Cuts Visual) ---
  let activeGallerySubfolder = null;
  let activeGalleryIndex = 0;

  function openGalleryFullscreen(subfolder, initialIdx) {
    if (!subfolder || !subfolder.files || subfolder.files.length === 0) return;
    activeGallerySubfolder = subfolder;
    activeGalleryIndex = Math.max(0, Math.min(subfolder.files.length - 1, initialIdx || 0));

    const modal = document.getElementById("galleryFullscreenModal");
    if (!modal) return;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    updateGalleryFullscreenView();
  }

  function closeGalleryFullscreen() {
    const modal = document.getElementById("galleryFullscreenModal");
    if (modal) {
      modal.classList.add("hidden");
    }
    document.body.style.overflow = "";
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => { });
    }
  }

  function updateGalleryFullscreenView() {
    if (!activeGallerySubfolder) return;
    const files = activeGallerySubfolder.files;
    const current = files[activeGalleryIndex];
    if (!current) return;

    const titleEl = document.getElementById("galleryFsTitle");
    const folderPillEl = document.getElementById("galleryFsFolderPill");
    const counterEl = document.getElementById("galleryFsCounter");
    const imgEl = document.getElementById("galleryFsImg");
    const thumbsEl = document.getElementById("galleryFsThumbs");

    if (folderPillEl) folderPillEl.textContent = activeGallerySubfolder.categoryName || activeGallerySubfolder.name || "Portfolio";
    if (titleEl) titleEl.textContent = activeGallerySubfolder.name || "Showcase";
    if (counterEl) counterEl.textContent = `${activeGalleryIndex + 1} / ${files.length}`;
    if (imgEl) {
      imgEl.src = encodeURI(current.fullPath || current.path);
      imgEl.alt = current.title || `Visual ${activeGalleryIndex + 1}`;
    }

    if (thumbsEl) {
      thumbsEl.innerHTML = files.map((f, i) => `
        <div class="gallery-fs-thumb ${i === activeGalleryIndex ? 'active' : ''}" data-thumb-idx="${i}" title="View visual ${i + 1}">
          <img src="${encodeURI(f.thumb || f.path)}" alt="${f.title}" loading="lazy" decoding="async" />
        </div>
      `).join("");

      thumbsEl.querySelectorAll(".gallery-fs-thumb").forEach((th) => {
        th.addEventListener("click", (e) => {
          e.stopPropagation();
          activeGalleryIndex = parseInt(th.dataset.thumbIdx, 10) || 0;
          updateGalleryFullscreenView();
        });
      });

      const activeThumb = thumbsEl.querySelector(".gallery-fs-thumb.active");
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }

  function galleryNext() {
    if (!activeGallerySubfolder) return;
    activeGalleryIndex = (activeGalleryIndex + 1) % activeGallerySubfolder.files.length;
    updateGalleryFullscreenView();
  }

  function galleryPrev() {
    if (!activeGallerySubfolder) return;
    activeGalleryIndex = (activeGalleryIndex - 1 + activeGallerySubfolder.files.length) % activeGallerySubfolder.files.length;
    updateGalleryFullscreenView();
  }

  // Hook global gallery controls once
  document.getElementById("btnGalleryFsClose")?.addEventListener("click", closeGalleryFullscreen);
  document.getElementById("galleryFsBackdrop")?.addEventListener("click", closeGalleryFullscreen);
  document.getElementById("btnGalleryFsPrev")?.addEventListener("click", (e) => {
    e.stopPropagation();
    galleryPrev();
  });
  document.getElementById("btnGalleryFsNext")?.addEventListener("click", (e) => {
    e.stopPropagation();
    galleryNext();
  });
  document.getElementById("btnGalleryFsToggle")?.addEventListener("click", () => {
    const modal = document.getElementById("galleryFullscreenModal");
    if (!modal) return;
    if (!document.fullscreenElement) {
      modal.requestFullscreen?.().catch(() => { });
    } else {
      document.exitFullscreen?.().catch(() => { });
    }
  });

  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("galleryFullscreenModal");
    if (!modal || modal.classList.contains("hidden")) return;

    if (e.key === "Escape") {
      closeGalleryFullscreen();
    } else if (e.key === "ArrowLeft") {
      galleryPrev();
    } else if (e.key === "ArrowRight") {
      galleryNext();
    }
  });

  // --- DESKTOP OS & FINDER LOGIC ---
  function renderInnerSubfolderViewer(subfolder, currentIdx) {
    if (!finderGrid || !subfolder) return;
    const files = subfolder.files || [];
    const idx = Math.max(0, Math.min(files.length - 1, currentIdx));
    const currentFile = files[idx];

    closeProjectPreview();
    if (finderGrid) finderGrid.scrollTop = 0;

    finderGrid.innerHTML = `
      <div class="inner-image-viewer">
        <div class="inner-image-viewer-toolbar">
          <button type="button" class="btn-inner-back" id="btnBackToSubfolder">
            <span>← Back to ${escapeHtml(subfolder.name)}</span>
          </button>
          <div class="inner-viewer-nav-actions">
            ${files.length > 1 ? `
              <button type="button" class="btn-inner-nav" id="btnPrevImg" title="Previous Image">‹</button>
              <span class="inner-image-counter">${idx + 1} / ${files.length}</span>
              <button type="button" class="btn-inner-nav" id="btnNextImg" title="Next Image">›</button>
            ` : ''}
            <button type="button" class="btn-inner-expand" id="btnInnerExpand" title="Open Fullscreen Gallery">
              <span>⛶ Fullscreen</span>
            </button>
          </div>
        </div>
        <div class="inner-image-canvas">
          <img src="${encodeURI(currentFile.path)}" alt="${currentFile.title}" class="inner-image-full" id="innerFullImg" title="Click to open Fullscreen Gallery" />
        </div>
      </div>
    `;

    document.getElementById("btnBackToSubfolder")?.addEventListener("click", () => {
      renderFinderProjects("social-media", subfolder.id);
    });

    document.getElementById("btnInnerExpand")?.addEventListener("click", () => {
      openGalleryFullscreen(subfolder, idx);
    });

    document.getElementById("innerFullImg")?.addEventListener("click", () => {
      openGalleryFullscreen(subfolder, idx);
    });

    if (files.length > 1) {
      document.getElementById("btnPrevImg")?.addEventListener("click", () => {
        const prevIdx = (idx - 1 + files.length) % files.length;
        renderInnerSubfolderViewer(subfolder, prevIdx);
      });

      document.getElementById("btnNextImg")?.addEventListener("click", () => {
        const nextIdx = (idx + 1) % files.length;
        renderInnerSubfolderViewer(subfolder, nextIdx);
      });
    }
  }

  function renderInnerImageViewer(catId, currentIdx) {
    const cat = desktopCategories.find((c) => c.id === catId);
    if (!cat || !finderGrid) return;
    const files = cat.files || [{ path: "/assets/logo.png", title: "1" }];
    const idx = Math.max(0, Math.min(files.length - 1, currentIdx));
    const currentFile = files[idx];

    closeProjectPreview();
    if (finderGrid) finderGrid.scrollTop = 0;

    finderGrid.innerHTML = `
      <div class="inner-image-viewer">
        <div class="inner-image-viewer-toolbar">
          <button type="button" class="btn-inner-back" id="btnBackToGrid">
            <span>← Back to ${cat.name}</span>
          </button>
          <div class="inner-viewer-nav-actions">
            ${files.length > 1 ? `
              <button type="button" class="btn-inner-nav" id="btnPrevImg" title="Previous Image">‹</button>
              <span class="inner-image-counter">${idx + 1} / ${files.length}</span>
              <button type="button" class="btn-inner-nav" id="btnNextImg" title="Next Image">›</button>
            ` : ''}
          </div>
        </div>
        <div class="inner-image-canvas" id="innerImageCanvas">
          <img src="${encodeURI(currentFile.path)}" alt="" class="inner-image-full" id="innerFullImg" title="Click to return to gallery" />
        </div>
      </div>
    `;

    document.getElementById("btnBackToGrid")?.addEventListener("click", () => {
      renderFinderProjects(catId);
    });

    document.getElementById("innerFullImg")?.addEventListener("click", () => {
      renderFinderProjects(catId);
    });

    if (files.length > 1) {
      document.getElementById("btnPrevImg")?.addEventListener("click", () => {
        const prevIdx = (idx - 1 + files.length) % files.length;
        renderInnerImageViewer(catId, prevIdx);
      });

      document.getElementById("btnNextImg")?.addEventListener("click", () => {
        const nextIdx = (idx + 1) % files.length;
        renderInnerImageViewer(catId, nextIdx);
      });
    }
  }

  function renderFinderProjects(catId, subFolderId) {
    activeCategoryId = catId;
    const cat = desktopCategories.find((c) => c.id === catId) || desktopCategories[0];

    // Ensure preview is closed when switching folders
    closeProjectPreview();

    // Reset scroll position on container
    if (finderGrid) finderGrid.scrollTop = 0;

    // Highlight desktop folder
    document.querySelectorAll(".os-folder-item").forEach((f) => {
      f.classList.toggle("selected", f.dataset.category === catId);
    });

    // 1. Categories with Subfolders (Social Media & Branding)
    if (cat.subfolders && cat.subfolders.length > 0) {
      const subfolders = cat.subfolders;
      const activeSub = subfolders.find((s) => s.id === subFolderId);

      // Highlight active category & tree sub-items in sidebar
      document.querySelectorAll(".sidebar-nav-item").forEach((item) => {
        item.classList.toggle("active", item.dataset.category === catId && !subFolderId);
      });
      document.querySelectorAll(".sidebar-tree-sub-item").forEach((item) => {
        item.classList.toggle("active", item.dataset.category === catId && item.dataset.sub === subFolderId);
      });

      if (!activeSub) {
        // Root view: Shows subfolders in Windows 11 File Explorer style
        if (windowHeading) {
          windowHeading.textContent = cat.name;
        }
        if (pathCrumb) {
          pathCrumb.textContent = `Portfolio > ${cat.name}`;
        }
        if (itemCountEl) {
          itemCountEl.textContent = `${subfolders.length} folders`;
        }

        finderGrid.innerHTML = `
          <div class="win-explorer-container">
            <div class="win-explorer-header">
              <span class="win-section-label">Folders (${subfolders.length})</span>
            </div>
            <div class="win-folders-grid">
              ${subfolders.map((sf) => `
                <div class="win-folder-card" data-open-sub="${sf.id}" role="button" tabindex="0" title="Open ${escapeHtml(sf.name)}">
                  <div class="win-folder-icon-wrap">
                    <svg class="win-folder-svg" viewBox="0 0 48 48" width="48" height="48">
                      <path fill="#FFA000" d="M40 12H22l-4-4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4z"/>
                      <path fill="#FFCA28" d="M40 16H8c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4z"/>
                    </svg>
                    <span class="win-folder-badge">${sf.files.length}</span>
                  </div>
                  <div class="win-folder-info">
                    <span class="win-folder-name">${escapeHtml(sf.name)}</span>
                    <span class="win-folder-meta">${sf.files.length} items</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `;

        finderGrid.querySelectorAll("[data-open-sub]").forEach((card) => {
          card.addEventListener("click", () => {
            renderFinderProjects(catId, card.dataset.openSub);
          });
        });
        return;
      } else {
        // Subfolder view: 3-column numbered grid
        if (windowHeading) {
          windowHeading.textContent = activeSub.name;
        }
        if (pathCrumb) {
          pathCrumb.textContent = `Portfolio > ${cat.name} > ${activeSub.name}`;
        }
        if (itemCountEl) {
          itemCountEl.textContent = `${activeSub.files.length} items`;
        }

        finderGrid.innerHTML = `
          <div class="win-explorer-container">
            <div class="win-subfolder-header-bar">
              <button type="button" class="btn-win-sub-back" id="btnBackToCatRoot" title="Back to ${escapeHtml(cat.name)}">
                <span class="sub-back-arrow">←</span>
                <span>Back to ${escapeHtml(cat.name)}</span>
              </button>
              <div class="win-subfolder-crumb">
                <span class="crumb-cat-name">${escapeHtml(cat.name)}</span>
                <span class="crumb-slash">/</span>
                <span class="crumb-sub-name">${escapeHtml(activeSub.name)}</span>
              </div>
            </div>

            ${activeSub.files.length > 0 ? `
              <div class="win-files-grid">
                ${activeSub.files.map((f, idx) => `
                  <div class="win-file-card" data-idx="${idx}" role="button" tabindex="0" title="Click to view image ${f.title}">
                    <div class="win-file-thumb-wrap">
                      <img src="${encodeURI(f.thumb || f.path)}" alt="${f.title}" class="win-file-img" loading="${idx < 9 ? 'eager' : 'lazy'}" decoding="async" onerror="if(!this.dataset.retried){this.dataset.retried='1';this.src='${encodeURI(f.fullPath || f.path)}';}" />
                    </div>
                    <div class="win-file-caption">${f.title}</div>
                  </div>
                `).join("")}
              </div>
            ` : `
              <div class="win-empty-folder">
                <div class="empty-folder-icon">📁</div>
                <h4 class="empty-folder-title">This folder is empty</h4>
                <p class="empty-folder-desc">Place image files into <code>${activeSub.folderDir || activeSub.id}</code> to showcase them here.</p>
              </div>
            `}
          </div>
        `;

        document.getElementById("btnBackToCatRoot")?.addEventListener("click", () => {
          renderFinderProjects(catId);
        });

        finderGrid.querySelectorAll(".win-file-card").forEach((card) => {
          card.addEventListener("click", () => {
            const idx = parseInt(card.dataset.idx, 10) || 0;
            openGalleryFullscreen(activeSub, idx);
          });
        });
        return;
      }
    }

    // 2. Direct-File Categories (Pitch Deck & Packaging) - Direct 3-column image grid without inner folder nesting
    if (cat.files && Array.isArray(cat.files)) {
      document.querySelectorAll(".sidebar-nav-item").forEach((item) => {
        item.classList.toggle("active", item.dataset.category === catId);
      });
      document.querySelectorAll(".sidebar-tree-sub-item").forEach((item) => {
        item.classList.remove("active");
      });

      if (windowHeading) {
        windowHeading.textContent = cat.name;
      }
      if (pathCrumb) {
        pathCrumb.textContent = `Portfolio > ${cat.name}`;
      }
      if (itemCountEl) {
        itemCountEl.textContent = `${cat.files.length} items`;
      }

      finderGrid.innerHTML = `
        <div class="win-explorer-container">
          ${cat.files.length > 0 ? `
            <div class="win-files-grid">
              ${cat.files.map((f, idx) => `
                <div class="win-file-card" data-idx="${idx}" role="button" tabindex="0" title="Click to view image ${f.title}">
                  <div class="win-file-thumb-wrap">
                    <img src="${encodeURI(f.thumb || f.path)}" alt="${f.title}" class="win-file-img" loading="${idx < 9 ? 'eager' : 'lazy'}" decoding="async" onerror="if(!this.dataset.retried){this.dataset.retried='1';this.src='${encodeURI(f.fullPath || f.path)}';}" />
                  </div>
                  <div class="win-file-caption">${f.title}</div>
                </div>
              `).join("")}
            </div>
          ` : `
            <div class="win-empty-folder">
              <div class="empty-folder-icon">${cat.icon || '📁'}</div>
              <h4 class="empty-folder-title">This folder is empty</h4>
              <p class="empty-folder-desc">Place image files into <code>${cat.folderDir || cat.id}</code> to showcase them here.</p>
            </div>
          `}
        </div>
      `;

      finderGrid.querySelectorAll(".win-file-card").forEach((card) => {
        card.addEventListener("click", () => {
          const idx = parseInt(card.dataset.idx, 10) || 0;
          openGalleryFullscreen(cat, idx);
        });
      });
      return;
    }

    // Highlight active category in sidebar for other categories
    document.querySelectorAll(".sidebar-nav-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.category === catId);
    });
    document.querySelectorAll(".sidebar-tree-sub-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Update window title and path for other categories
    const count = cat.id === "logo" ? 1 : cat.projects.length;
    if (windowHeading) {
      windowHeading.textContent = `${cat.name} — Selected Projects`;
    }
    if (pathCrumb) {
      pathCrumb.textContent = `Portfolio > ${cat.name}`;
    }
    if (itemCountEl) {
      itemCountEl.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
    }

    // Render other categories (Logo viewer or project cards)
    if (finderGrid) {
      if (catId === "logo") {
        if (itemCountEl) {
          itemCountEl.textContent = "1 item (Logo-Folio Collection — 9 Client Logos)";
        }
        finderGrid.innerHTML = `
          <div class="logo-direct-viewer" role="region" aria-label="Logo-Folio Showcase">
            <div class="logo-viewer-toolbar">
              <div class="logo-viewer-title-group">
                <span class="logo-viewer-pill">LOGO-FOLIO</span>
                <span class="logo-viewer-sub">Brand Identity &amp; Client Collection</span>
              </div>
              <div class="logo-viewer-actions">
                <a href="/assets/logo.png" target="_blank" download="ashok-logo-folio.png" class="btn-viewer-action" title="Download Full-Res Logo-Folio">
                  <span>Download HD ⤓</span>
                </a>
                <a href="https://www.behance.net/gallery/215689011/Zendo-Mindfulness-App-UIUX" target="_blank" rel="noopener noreferrer" class="btn-viewer-behance" title="View on Behance">
                  <span class="behance-tag">Bē</span>
                  <span>BEHANCE</span>
                </a>
              </div>
            </div>
            <div class="logo-viewer-canvas-wrap" id="logoViewerCanvasWrap">
              <img src="/assets/logo.png" alt="Ashok Kumaran - Logo-Folio Collection (9 Client Logos)" class="logo-viewer-image" id="logoFolioDirectImg" loading="eager" decoding="async" onerror="if(!this.dataset.retried){this.dataset.retried='1';this.src='/assets/logo.jpg';}" />
            </div>
          </div>
        `;

        const directImg = document.getElementById("logoFolioDirectImg");
        if (directImg) {
          directImg.addEventListener("click", () => {
            renderInnerImageViewer("logo", 0);
          });
        }
        return;
      }

      // UI/UX Design Custom Brand Showcase Cards (Order: 1. Hunhar, 2. Samino, 3. Sambhar Tales, 4. Kalki Millets)
      if (catId === "uiux") {
        finderGrid.classList.add("is-uiux-grid");
        finderGrid.innerHTML = `
          <!-- Card 1: Hunhar -->
          <article class="uiux-brand-card" data-project-id="theunoia" tabindex="0" role="button" title="View Hunhar Project" onclick="window.open('https://www.hunhar.in/', '_blank')">
            <div class="uiux-banner banner-theunoia">
              <svg class="uiux-banner-wave" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0,0 C150,90 250,20 500,100 L500,150 L0,150 Z" fill="rgba(255,255,255,0.4)"></path>
                <path d="M0,40 C180,120 320,60 500,130 L500,150 L0,150 Z" fill="rgba(0,0,0,0.04)"></path>
              </svg>
              <div class="uiux-banner-logo-wrap logo-theunoia-wrap">
                <div class="theunoia-banner-logo">
                  <span class="hunhar-text">hunh<span class="char-a-accent">a</span>r</span>
                </div>
              </div>
              <div class="uiux-banner-tagline-wrap">
                <div class="sparkle-rays-wrap">
                  <svg class="sparkle-rays" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFCA28" stroke-width="2.6" stroke-linecap="round">
                    <line x1="16" y1="5" x2="19" y2="2"></line>
                    <line x1="11" y1="8" x2="8" y2="3"></line>
                    <line x1="9" y1="13" x2="4" y2="11"></line>
                  </svg>
                </div>
                <div class="uiux-tagline tagline-navy">
                  <div>Empowering</div>
                  <div>Freelancers &amp;</div>
                  <div>Global Creators.</div>
                </div>
              </div>
              <div class="uiux-floating-avatar avatar-theunoia" style="background: #FAF4E8; border: 3px solid #FFFFFF;">
                <img src="/assets/hunhar-logo.png" alt="Hunhar Logo" style="width: 36px; height: 36px; object-fit: contain;" />
              </div>
            </div>

            <div class="uiux-card-content">
              <div class="uiux-header-row">
                <div class="uiux-title-wrap">
                  <h3 class="uiux-card-title">Hunhar</h3>
                  <span class="uiux-card-handle">@hunhar</span>
                </div>
                <a href="https://www.hunhar.in/" target="_blank" rel="noopener noreferrer" class="btn-uiux-view" title="View Project" onclick="event.stopPropagation();">
                  <span>View Project</span>
                  <span class="arrow-up-right">↗</span>
                </a>
              </div>

              <p class="uiux-card-desc">A modern freelancing platform connecting global creative talent with forward-thinking brands.</p>

              <div class="uiux-footer-meta">
                <div class="uiux-pill-tags">
                  <span class="uiux-tag">Freelancing</span>
                  <span class="uiux-tag">UI/UX Design</span>
                  <span class="uiux-tag">Platform</span>
                </div>
                <span class="uiux-divider">|</span>
                <a href="https://www.hunhar.in/" target="_blank" rel="noopener noreferrer" class="uiux-web-link" title="Visit hunhar.in" onclick="event.stopPropagation();">
                  <svg class="globe-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>hunhar.in</span>
                  <span class="arrow-up-right-sm">↗</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Card 2: Samino -->
          <article class="uiux-brand-card" data-project-id="samino" tabindex="0" role="button" title="View Samino Project" onclick="window.open('https://samino.ae/', '_blank')">
            <div class="uiux-banner banner-samino">
              <svg class="uiux-banner-wave" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0,0 C150,90 250,20 500,100 L500,150 L0,150 Z" fill="rgba(255,255,255,0.06)"></path>
                <path d="M0,40 C180,120 320,60 500,130 L500,150 L0,150 Z" fill="rgba(0,0,0,0.14)"></path>
              </svg>
              <div class="uiux-banner-logo-wrap logo-samino-wrap">
                <div class="samino-banner-logo">
                  <span class="samino-white">SA</span><span class="samino-ribbon-text">M</span><span class="samino-white">INO</span>
                </div>
              </div>
              <div class="uiux-banner-tagline-wrap">
                <div class="sparkle-rays-wrap">
                  <svg class="sparkle-rays" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFCA28" stroke-width="2.6" stroke-linecap="round">
                    <line x1="16" y1="5" x2="19" y2="2"></line>
                    <line x1="11" y1="8" x2="8" y2="3"></line>
                    <line x1="9" y1="13" x2="4" y2="11"></line>
                  </svg>
                </div>
                <div class="uiux-tagline tagline-white">
                  <div>Soft. Stylish.</div>
                  <div>Made for</div>
                  <div>Little Explorers.</div>
                </div>
              </div>
              <div class="uiux-floating-avatar avatar-samino">
                <div class="av-samino-wrap">
                  <span style="color:#FFF;">SA</span><span style="color:#FF6B4A;">M</span><span style="color:#FFF;">INO</span>
                </div>
              </div>
            </div>

            <div class="uiux-card-content">
              <div class="uiux-header-row">
                <div class="uiux-title-wrap">
                  <h3 class="uiux-card-title">Samino</h3>
                  <span class="uiux-card-handle">@saminokids</span>
                </div>
                <a href="https://samino.ae/" target="_blank" rel="noopener noreferrer" class="btn-uiux-view" title="View Project" onclick="event.stopPropagation();">
                  <span>View Project</span>
                  <span class="arrow-up-right">↗</span>
                </a>
              </div>

              <p class="uiux-card-desc">A premium kidswear brand offering soft, breathable muslin & cotton clothing for little ones.</p>

              <div class="uiux-footer-meta">
                <div class="uiux-pill-tags">
                  <span class="uiux-tag">Branding</span>
                  <span class="uiux-tag">Social Media</span>
                  <span class="uiux-tag">Campaign</span>
                </div>
                <span class="uiux-divider">|</span>
                <a href="https://samino.ae/" target="_blank" rel="noopener noreferrer" class="uiux-web-link" title="Visit samino.ae" onclick="event.stopPropagation();">
                  <svg class="globe-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>samino.ae</span>
                  <span class="arrow-up-right-sm">↗</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Card 3: Sambhar Tales -->
          <article class="uiux-brand-card" data-project-id="sambhar-tales" tabindex="0" role="button" title="View Sambhar Tales Project" onclick="window.open('https://www.sambhartales.com/', '_blank')">
            <div class="uiux-banner banner-sambhartales">
              <svg class="uiux-banner-wave" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0,0 C150,90 250,20 500,100 L500,150 L0,150 Z" fill="rgba(255,255,255,0.03)"></path>
                <path d="M0,40 C180,120 320,60 500,130 L500,150 L0,150 Z" fill="rgba(0,0,0,0.18)"></path>
              </svg>
              <div class="uiux-banner-logo-wrap logo-sambhar-wrap">
                <img src="/assets/sambhar-tales-logo-transparent.png" alt="Sambhar Tales Logo" class="sambhar-banner-logo-img" style="height: 38px; object-fit: contain; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));" />
              </div>
              <div class="uiux-banner-tagline-wrap">
                <div class="sparkle-rays-wrap">
                  <svg class="sparkle-rays" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFCA28" stroke-width="2.6" stroke-linecap="round">
                    <line x1="16" y1="5" x2="19" y2="2"></line>
                    <line x1="11" y1="8" x2="8" y2="3"></line>
                    <line x1="9" y1="13" x2="4" y2="11"></line>
                  </svg>
                </div>
                <div class="uiux-tagline tagline-white">
                  <div>Where Hygiene</div>
                  <div>Meets Heritage.</div>
                </div>
              </div>
              <div class="uiux-floating-avatar avatar-sambhartales" style="background: #1A1D23; border: 3px solid #FFFFFF;">
                <img src="/assets/sambhar-tales-logo-transparent.png" alt="Sambhar Tales" style="width: 44px; object-fit: contain;" />
              </div>
            </div>

            <div class="uiux-card-content">
              <div class="uiux-header-row">
                <div class="uiux-title-wrap">
                  <h3 class="uiux-card-title">Sambhar Tales</h3>
                  <span class="uiux-card-handle">@sambhartales</span>
                </div>
                <a href="https://www.sambhartales.com/" target="_blank" rel="noopener noreferrer" class="btn-uiux-view" title="View Project" onclick="event.stopPropagation();">
                  <span>View Project</span>
                  <span class="arrow-up-right">↗</span>
                </a>
              </div>

              <p class="uiux-card-desc">A South Indian restaurant brand that celebrates authentic flavors with a modern, hygienic experience.</p>

              <div class="uiux-footer-meta">
                <div class="uiux-pill-tags">
                  <span class="uiux-tag">Branding</span>
                  <span class="uiux-tag">Menu Design</span>
                  <span class="uiux-tag">Social Media</span>
                </div>
                <span class="uiux-divider">|</span>
                <a href="https://www.sambhartales.com/" target="_blank" rel="noopener noreferrer" class="uiux-web-link" title="Visit sambhartales.com" onclick="event.stopPropagation();">
                  <svg class="globe-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>sambhartales.com</span>
                  <span class="arrow-up-right-sm">↗</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Card 4: Kalki Millets -->
          <article class="uiux-brand-card" data-project-id="kalki-millets" tabindex="0" role="button" title="View Kalki Millets Project" onclick="window.open('https://kalkimillets.in/', '_blank')">
            <div class="uiux-banner banner-kalki">
              <svg class="uiux-banner-wave" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0,0 C150,90 250,20 500,100 L500,150 L0,150 Z" fill="rgba(255,255,255,0.08)"></path>
                <path d="M0,40 C180,120 320,60 500,130 L500,150 L0,150 Z" fill="rgba(0,0,0,0.06)"></path>
              </svg>
              <div class="uiux-banner-logo-wrap logo-kalki-wrap">
                <div class="kalki-pill-logo">
                  <span class="kalki-word-red">KaLKi</span>
                  <span class="kalki-word-orange">MiLLeTS</span>
                </div>
              </div>
              <div class="uiux-banner-tagline-wrap">
                <div class="sparkle-rays-wrap">
                  <svg class="sparkle-rays" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFCA28" stroke-width="2.6" stroke-linecap="round">
                    <line x1="16" y1="5" x2="19" y2="2"></line>
                    <line x1="11" y1="8" x2="8" y2="3"></line>
                    <line x1="9" y1="13" x2="4" y2="11"></line>
                  </svg>
                </div>
                <div class="uiux-tagline tagline-white">
                  <div>Naturally</div>
                  <div>Nutritious,</div>
                  <div>Traditionally Ours.</div>
                </div>
              </div>
              <div class="uiux-floating-avatar avatar-kalki">
                <div class="avatar-kalki-inner">
                  <span class="av-kalki-red">KaLKi</span>
                  <span class="av-kalki-orange">MiLLeTS</span>
                </div>
              </div>
            </div>

            <div class="uiux-card-content">
              <div class="uiux-header-row">
                <div class="uiux-title-wrap">
                  <h3 class="uiux-card-title">Kalki Millets</h3>
                  <span class="uiux-card-handle">@kalkimillets</span>
                </div>
                <a href="https://kalkimillets.in/" target="_blank" rel="noopener noreferrer" class="btn-uiux-view" title="View Project" onclick="event.stopPropagation();">
                  <span>View Project</span>
                  <span class="arrow-up-right">↗</span>
                </a>
              </div>

              <p class="uiux-card-desc">A wholesome millet brand promoting healthy, traditional and sustainable living.</p>

              <div class="uiux-footer-meta">
                <div class="uiux-pill-tags">
                  <span class="uiux-tag">Branding</span>
                  <span class="uiux-tag">Packaging</span>
                  <span class="uiux-tag">Social Media</span>
                </div>
                <span class="uiux-divider">|</span>
                <a href="https://kalkimillets.in/" target="_blank" rel="noopener noreferrer" class="uiux-web-link" title="Visit kalkimillets.in" onclick="event.stopPropagation();">
                  <svg class="globe-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>kalkimillets.in</span>
                  <span class="arrow-up-right-sm">↗</span>
                </a>
              </div>
            </div>
          </article>
        `;
        return;
      }

      finderGrid.classList.remove("is-uiux-grid");

      finderGrid.innerHTML = cat.projects
        .map((p) => {
          return `
            <article class="finder-project-card" data-project-id="${p.id}" style="--card-accent: ${p.accent};" tabindex="0" role="button" title="Click to view case study: ${escapeHtml(p.title)}">
              <div class="project-card-media ${catId === 'logo' || p.isLogo ? 'is-logo-media' : ''}">
                <img src="${p.image || p.img}" alt="${escapeHtml(p.title)}" class="project-card-img ${catId === 'logo' || p.isLogo ? 'is-logo-img' : ''}" loading="eager" decoding="async" onerror="if(!this.dataset.retried){this.dataset.retried='1';this.src='/assets/logo.png';}" />
                <div class="project-card-badge-tag">${escapeHtml(p.category)}</div>
                <div class="project-card-year">${p.year}</div>
                <div class="project-card-hover-overlay">
                  <span class="preview-hover-pill">View Case Study ↗</span>
                </div>
              </div>

              <div class="project-card-info">
                <h3 class="project-card-title">${escapeHtml(p.title)}</h3>
                <p class="project-card-subtitle">${escapeHtml(p.subtitle)}</p>
                <p class="project-card-desc">${escapeHtml(p.desc)}</p>

                <div class="project-card-tags">
                  ${p.tags.map((t) => `<span class="p-tag">${escapeHtml(t)}</span>`).join("")}
                </div>

                <div class="card-bottom-actions">
                  <span class="btn-card-preview">OPEN PREVIEW ↗</span>
                  <a href="${p.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-behance" title="Open ${escapeHtml(p.title)} on Behance" onclick="event.stopPropagation();">
                    <span class="behance-tag">Bē</span>
                    <span>BEHANCE</span>
                  </a>
                </div>
              </div>
            </article>
          `;
        })
        .join("");

      // Add click listeners to project cards for dedicated preview modal
      finderGrid.querySelectorAll(".finder-project-card").forEach((card) => {
        card.addEventListener("click", () => {
          const projId = card.dataset.projectId;
          openProjectPreview(projId);
        });
      });
    }
  }

  // Dedicated Project Preview Modal Functionality
  function openProjectPreview(projId) {
    const cat = desktopCategories.find((c) => c.projects.some((p) => p.id === projId));
    if (!cat) return;
    const p = cat.projects.find((item) => item.id === projId);
    if (!p || !previewModal || !previewBody) return;

    previewBody.innerHTML = `
      <div class="preview-layout-grid">
        <div class="preview-media-pane">
          <img src="${p.image || p.img}" alt="${escapeHtml(p.title)}" class="preview-hero-image ${cat.id === 'logo' || p.isLogo ? 'is-logo-img' : ''}" loading="eager" decoding="async" onerror="if(!this.dataset.retried){this.dataset.retried='1';this.src='/assets/logo.png';}" />
          <div class="preview-media-meta">
            <span class="preview-meta-pill">${escapeHtml(p.category)}</span>
            <span class="preview-meta-pill font-mono">${p.year}</span>
            <span class="preview-meta-pill accent-pill">${cat.name}</span>
          </div>
        </div>

        <div class="preview-content-pane">
          <div class="preview-header">
            <h2 class="preview-title" id="previewProjectTitle">${escapeHtml(p.title)}</h2>
            <p class="preview-subtitle">${escapeHtml(p.subtitle)}</p>
          </div>

          <div class="preview-section-block">
            <h4 class="preview-sec-label">PROJECT OVERVIEW</h4>
            <p class="preview-text">${escapeHtml(p.desc)}</p>
          </div>

          <div class="preview-section-block">
            <h4 class="preview-sec-label">DESIGN PROCESS & ARCHITECTURE</h4>
            <div class="preview-process-box">
              <p class="preview-text">${escapeHtml(p.process)}</p>
            </div>
          </div>

          <div class="preview-section-block">
            <h4 class="preview-sec-label">MEASURABLE OUTCOME</h4>
            <div class="preview-outcome-box">
              <span class="outcome-checkmark">✓</span>
              <p class="preview-text">${escapeHtml(p.outcome)}</p>
            </div>
          </div>

          <div class="preview-section-block">
            <h4 class="preview-sec-label">DELIVERABLES & DISCIPLINES</h4>
            <div class="preview-tags-row">
              ${p.tags.map((t) => `<span class="p-tag-large">${escapeHtml(t)}</span>`).join("")}
            </div>
          </div>

          <div class="preview-action-row">
            <a href="${p.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-preview-behance-primary">
              <span class="be-logo-pill">Bē</span>
              <span>VIEW FULL CASE STUDY ON BEHANCE</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <button type="button" class="btn-preview-back-ghost" id="btnPreviewBackGhost">
              <span>← Back to Folder</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // Hook back button inside modal
    previewBody.querySelector("#btnPreviewBackGhost")?.addEventListener("click", closeProjectPreview);

    // Show preview modal
    previewModal.style.display = "flex";
    if (finderWindow) finderWindow.classList.add("modal-open-blur");
  }

  function closeProjectPreview() {
    if (previewModal) previewModal.style.display = "none";
    if (finderWindow) finderWindow.classList.remove("modal-open-blur");
  }

  btnPreviewClose?.addEventListener("click", closeProjectPreview);
  btnBackToFolder?.addEventListener("click", closeProjectPreview);

  // About Window Handlers
  function openAboutWindow() {
    closeContactWindow();
    closeProjectPreview();
    if (aboutWindow) aboutWindow.style.display = "flex";
  }

  function closeAboutWindow() {
    if (aboutWindow) aboutWindow.style.display = "none";
  }

  btnAboutClose?.addEventListener("click", closeAboutWindow);
  taskbarBtnAbout?.addEventListener("click", openAboutWindow);
  menuItemAbout?.addEventListener("click", openAboutWindow);
  btnAboutExploreWork?.addEventListener("click", () => {
    closeAboutWindow();
    if (finderWindow) finderWindow.classList.remove("minimized");
  });

  // Contact Window Handlers
  function openContactWindow() {
    closeAboutWindow();
    closeProjectPreview();
    if (contactWindow) contactWindow.style.display = "flex";
  }

  function closeContactWindow() {
    if (contactWindow) contactWindow.style.display = "none";
  }

  btnContactClose?.addEventListener("click", closeContactWindow);
  taskbarBtnContact?.addEventListener("click", openContactWindow);
  menuItemContact?.addEventListener("click", openContactWindow);

  btnCopyEmail?.addEventListener("click", () => {
    navigator.clipboard.writeText("ashokkumaran.nr@gmail.com").then(() => {
      btnCopyEmail.textContent = "Copied!";
      setTimeout(() => {
        btnCopyEmail.textContent = "Copy";
      }, 2000);
    });
  });

  // Taskbar Home / Category Buttons
  taskbarBtnHome?.addEventListener("click", () => {
    closeAboutWindow();
    closeContactWindow();
    closeProjectPreview();
    if (finderWindow) finderWindow.classList.remove("minimized");
    renderFinderProjects("uiux");
  });

  menuItemFinder?.addEventListener("click", () => {
    closeAboutWindow();
    closeContactWindow();
    closeProjectPreview();
    if (finderWindow) finderWindow.classList.remove("minimized");
  });

  document.querySelectorAll("[data-open-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeAboutWindow();
      closeContactWindow();
      closeProjectPreview();
      const catId = btn.dataset.openCat;
      if (finderWindow) finderWindow.classList.remove("minimized");
      renderFinderProjects(catId);
    });
  });

  // Folder Click on Desktop
  document.querySelectorAll(".os-folder-item").forEach((folder) => {
    folder.addEventListener("click", () => {
      const catId = folder.dataset.category;
      closeAboutWindow();
      closeContactWindow();
      closeProjectPreview();
      if (finderWindow) finderWindow.classList.remove("minimized");
      renderFinderProjects(catId);
    });
  });

  // Sidebar navigation in Finder
  document.querySelectorAll(".sidebar-nav-item[data-category]").forEach((item) => {
    item.addEventListener("click", () => {
      renderFinderProjects(item.dataset.category);
    });
  });

  document.querySelectorAll(".sidebar-tree-sub-item[data-sub]").forEach((item) => {
    item.addEventListener("click", () => {
      renderFinderProjects(item.dataset.category || "social-media", item.dataset.sub);
    });
  });

  // Window Controls (Traffic Lights)
  document.getElementById("btnFinderClose")?.addEventListener("click", () => {
    if (finderWindow) finderWindow.classList.add("minimized");
  });
  document.getElementById("btnFinderMin")?.addEventListener("click", () => {
    if (finderWindow) finderWindow.classList.toggle("minimized");
  });
  document.getElementById("btnFinderMax")?.addEventListener("click", () => {
    if (finderWindow) finderWindow.classList.toggle("maximized");
  });

  // Live OS Clock
  function updateOsClock() {
    if (!clockEl) return;
    const now = new Date();
    const hrs = now.getHours();
    const mins = String(now.getMinutes()).padStart(2, "0");
    const ampm = hrs >= 12 ? "PM" : "AM";
    const formattedHrs = hrs % 12 || 12;
    clockEl.textContent = `${formattedHrs}:${mins} ${ampm}`;
  }
  updateOsClock();
  setInterval(updateOsClock, 10000);

  // Resize handler
  function onWorkstationResize() {
    width = stageViewport.clientWidth || window.innerWidth;
    height = stageViewport.clientHeight || window.innerHeight;
    if (width < 10) width = window.innerWidth;
    if (height < 10) height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  workstationResizeFn = onWorkstationResize;
  window.addEventListener("resize", onWorkstationResize);

  // Initial render
  renderFinderProjects("uiux");
  animId = requestAnimationFrame(updateWorkstationFrames);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
