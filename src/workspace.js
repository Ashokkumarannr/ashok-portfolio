/**
 * ASHOK PORTFOLIO - FIGMA & PHOTOSHOP INTERACTIVE WORKSPACE ENGINE
 * ==========================================================================
 * Upgrades ONLY the Project Section into an interactive design software
 * experience without touching any other section of the website.
 * ==========================================================================
 */

import { uiuxProjects, graphicCategories } from "./projectsData.js";

export function initInteractiveWorkspace() {
  const container = document.getElementById("projectWorkspaceContainer");
  if (!container) return;

  // --- STATE ---
  let activeMode = "figma"; // "figma" | "photoshop"
  
  // Figma State
  let activeFigmaProjIndex = 0;
  let activeFigmaScreenId = uiuxProjects[0]?.screens[0]?.id || "";
  let figmaZoom = 1.0;
  let figmaPan = { x: 0, y: 0 };
  let isFigmaPanning = false;
  let figmaStartPan = { x: 0, y: 0 };
  let figmaActiveTool = "select";

  // Photoshop State
  let activeGraphicCatId = "social-media";
  let activeArtworkIndex = 0;
  let photoshopZoom = 1.0;
  let photoshopPan = { x: 0, y: 0 };
  let isPhotoshopPanning = false;
  let photoshopStartPan = { x: 0, y: 0 };
  let photoshopActiveTool = "move";
  let photoshopBlendMode = "Normal";
  let photoshopOpacity = 100;
  // Track visibility of layers per artwork
  const layerVisibilityState = {};

  // --- DOM REFERENCES ---
  const switcherBtns = document.querySelectorAll(".workspace-tab-btn");
  const figmaWorkspace = document.getElementById("workspaceFigma");
  const photoshopWorkspace = document.getElementById("workspacePhotoshop");

  // ==========================================================================
  // 1. WORKSPACE SWITCHER
  // ==========================================================================
  switcherBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.workspace;
      if (mode === activeMode) return;
      activeMode = mode;

      switcherBtns.forEach((b) => {
        const isActive = b.dataset.workspace === mode;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      if (mode === "figma") {
        figmaWorkspace?.classList.remove("workspace-hidden");
        photoshopWorkspace?.classList.add("workspace-hidden");
        renderFigmaWorkspace();
      } else {
        figmaWorkspace?.classList.add("workspace-hidden");
        photoshopWorkspace?.classList.remove("workspace-hidden");
        renderPhotoshopWorkspace();
      }
    });
  });

  // ==========================================================================
  // 2. FIGMA WORKSPACE RENDER & LOGIC (FIGMA UI3 LIGHT THEME)
  // ==========================================================================
  function renderFigmaWorkspace() {
    renderFigmaTabs();
    renderFigmaLeftSidebar();
    renderFigmaCanvas();
    renderFigmaRightSidebar();
    updateFigmaHeader();
  }

  function updateFigmaHeader() {
    const proj = uiuxProjects[activeFigmaProjIndex];
    if (!proj) return;

    // Active file name in header/sidebar
    const activeFileNameEl = document.getElementById("figmaActiveFileName");
    if (activeFileNameEl) {
      activeFileNameEl.textContent = proj.tabTitle || proj.title || "brand";
    }

    // Share / Behance button
    const shareBtn = document.getElementById("figmaTopBehanceBtn");
    if (shareBtn && proj.behanceUrl) {
      shareBtn.href = proj.behanceUrl;
      shareBtn.setAttribute("target", "_blank");
      shareBtn.setAttribute("rel", "noopener noreferrer");
    }

    // Zoom value display
    updateZoomDisplay();
  }

  function updateZoomDisplay() {
    const pct = `${Math.round(figmaZoom * 100)}%`;
    const zoomPill = document.getElementById("figmaZoomVal");
    if (zoomPill) zoomPill.textContent = pct;

    const inspectZoomVal = document.getElementById("figmaInspectZoomVal");
    if (inspectZoomVal) inspectZoomVal.textContent = `${pct} ▾`;
  }

  function renderFigmaTabs() {
    const tabsStrip = document.getElementById("figmaTabsStrip");
    if (!tabsStrip) return;

    tabsStrip.innerHTML = uiuxProjects
      .map((p, idx) => {
        const isActive = idx === activeFigmaProjIndex;
        const title = p.tabTitle || p.title || "Untitled";
        const icon = idx === 0 ? "❖" : (idx === 1 ? "❖" : (idx === 2 ? "📄" : "▷"));
        return `
          <button type="button" class="figma-tab-item ${isActive ? "active" : ""}" data-proj-index="${idx}" title="${escapeHtml(title)}">
            <span class="tab-icon">${icon}</span>
            <span class="tab-title">${escapeHtml(title)}</span>
            ${isActive ? `<span class="tab-close" title="Close Tab">&times;</span>` : ""}
          </button>
        `;
      })
      .join("") + `<button type="button" class="figma-tab-plus" title="New Tab">+</button>`;

    tabsStrip.querySelectorAll(".figma-tab-item").forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
        const idx = parseInt(tabBtn.dataset.projIndex, 10);
        if (idx !== activeFigmaProjIndex && !isNaN(idx)) {
          activeFigmaProjIndex = idx;
          activeFigmaScreenId = uiuxProjects[idx].screens[0]?.id || "";
          figmaPan = { x: 0, y: 0 };
          renderFigmaWorkspace();
        }
      });
    });
  }

  function renderFigmaLeftSidebar() {
    const frameListEl = document.getElementById("figmaFramesList");
    const activeProj = uiuxProjects[activeFigmaProjIndex];
    if (!activeProj) return;

    // Active project file title
    const activeFileNameEl = document.getElementById("figmaActiveFileName");
    if (activeFileNameEl) {
      activeFileNameEl.textContent = activeProj.tabTitle || activeProj.title;
    }

    // Frames / Layers list
    if (frameListEl) {
      frameListEl.innerHTML = activeProj.screens
        .map((s) => {
          const isSelected = s.id === activeFigmaScreenId;
          return `
            <button type="button" class="figma-frame-item ${isSelected ? "active" : ""}" data-screen-id="${s.id}">
              <span class="frame-item-caret">›</span>
              <span class="frame-item-icon">#</span>
              <span class="frame-item-name">${escapeHtml(s.name)}</span>
            </button>
          `;
        })
        .join("");

      frameListEl.querySelectorAll(".figma-frame-item").forEach((btn) => {
        btn.addEventListener("click", () => {
          const sId = btn.dataset.screenId;
          selectFigmaScreen(sId);
        });
      });
    }
  }

  function selectFigmaScreen(screenId) {
    activeFigmaScreenId = screenId;
    
    // Highlight sidebar items
    document.querySelectorAll(".figma-frame-item").forEach((b) => {
      b.classList.toggle("active", b.dataset.screenId === screenId);
    });

    // Highlight artboard / slide on canvas
    document.querySelectorAll(".figma-slide-card").forEach((card) => {
      const isSelected = card.dataset.screenId === screenId;
      card.classList.toggle("is-selected", isSelected);
    });

    renderFigmaRightSidebar();
  }

  function renderFigmaCanvas() {
    const artboardTrack = document.getElementById("figmaArtboardTrack");
    if (!artboardTrack) return;

    const proj = uiuxProjects[activeFigmaProjIndex];
    if (!proj) return;

    artboardTrack.innerHTML = proj.screens
      .map((s) => {
        const isSelected = s.id === activeFigmaScreenId;
        const isSlide = !!s.slideContent;

        if (isSlide) {
          // Render Presentation Slide (e.g. brand / Savulo slides from screenshot)
          let innerHtml = "";
          const sc = s.slideContent;

          if (sc.variant === "hero-photo") {
            innerHtml = `
              <div class="slide-photo-hero">
                <img src="${sc.photoUrl}" alt="${escapeHtml(sc.alt || s.name)}" class="slide-bg-img" loading="lazy" />
                <div class="slide-savulo-badge">${escapeHtml(sc.badgeText || "SAVULO")}</div>
              </div>
            `;
          } else if (sc.variant === "story") {
            innerHtml = `
              <div class="slide-story-layout">
                <div class="story-header">${escapeHtml(sc.storyTitle || "BRAND STORY")}</div>
                <div class="story-columns">
                  <div class="story-col">
                    <div class="col-heading">OUR STORY</div>
                    <p class="col-text">${escapeHtml(sc.storyBody || "")}</p>
                  </div>
                  <div class="story-col">
                    <div class="col-heading">${escapeHtml(sc.missionTitle || "OUR MISSION")}</div>
                    <p class="col-text">${escapeHtml(sc.missionBody || "")}</p>
                  </div>
                </div>
                <div class="story-footer-tag">${escapeHtml(sc.tag || "SAVULO 2026")}</div>
              </div>
            `;
          } else if (sc.variant === "badge-illustration") {
            innerHtml = `
              <div class="slide-badge-layout">
                <div class="badge-crimson-box">${escapeHtml(sc.badgeText || "SAVULO")}</div>
                <div class="badge-illustration-thumb">
                  <img src="${sc.illustrationUrl}" alt="Illustration" loading="lazy" />
                </div>
              </div>
            `;
          } else {
            innerHtml = `
              <div class="slide-badge-layout" style="background: #111111; color: #FFFFFF;">
                <div class="badge-crimson-box" style="border-color: #EF4444;">${escapeHtml(sc.badgeText || s.name)}</div>
              </div>
            `;
          }

          return `
            <div class="figma-slide-wrapper" data-screen-id="${s.id}">
              <div class="figma-slide-label">${escapeHtml(s.label || s.name)}</div>
              <div class="figma-slide-card ${isSelected ? "is-selected" : ""}" data-screen-id="${s.id}">
                ${innerHtml}
                <!-- Figma Selection Handles -->
                <div class="figma-handle handle-tl"></div>
                <div class="figma-handle handle-tr"></div>
                <div class="figma-handle handle-bl"></div>
                <div class="figma-handle handle-br"></div>
              </div>
            </div>
          `;
        }

        // Otherwise: Mobile / UI Frame
        const p = s.preview || {
          tagline: "MOBILE APP",
          heading: s.name,
          meta: s.description || "Designed for seamless mobile interaction",
          stat: "99.8% Efficiency",
          pill: "✦ Verified Flow",
          primaryBtn: "Continue"
        };

        return `
          <div class="figma-slide-wrapper" data-screen-id="${s.id}">
            <div class="figma-slide-label">${escapeHtml(s.name)} <span style="font-family: monospace; font-size: 9.5px; color: #888;">${s.width} × ${s.height}</span></div>
            <div class="figma-slide-card mobile-frame ${isSelected ? "is-selected" : ""}" 
                 data-screen-id="${s.id}" 
                 style="--artboard-accent: ${s.accentColor || "#0D99FF"};">
              
              <div class="figma-handle handle-tl"></div>
              <div class="figma-handle handle-tr"></div>
              <div class="figma-handle handle-bl"></div>
              <div class="figma-handle handle-br"></div>

              <!-- Phone Device Notch -->
              <div class="device-phone-notch">
                <span class="device-time">9:41</span>
                <span class="device-island"></span>
                <span class="device-icons">5G 100%</span>
              </div>

              <!-- Screen UI Mockup Stage -->
              <div class="screen-ui-body">
                <div class="screen-top-bar">
                  <span class="screen-pill-badge">${escapeHtml(p.tagline || "")}</span>
                  <span class="screen-badge-dot" style="background: ${s.accentColor || "#0D99FF"}"></span>
                </div>

                <div class="screen-hero-area">
                  <h3 class="screen-hero-heading">${escapeHtml(p.heading || s.name).replace(/\n/g, "<br>")}</h3>
                  <p class="screen-hero-meta">${escapeHtml(p.meta || "")}</p>
                </div>

                <div class="screen-widget-card" style="border-left: 3px solid ${s.accentColor || "#0D99FF"};">
                  <div class="widget-row">
                    <span class="widget-label">LIVE METRIC</span>
                    <span class="widget-stat" style="color: ${s.accentColor || "#0D99FF"}">${escapeHtml(p.stat || "")}</span>
                  </div>
                  <div class="widget-pill">${escapeHtml(p.pill || "")}</div>
                </div>

                <div class="screen-wireframe-bars">
                  <div class="wire-bar bar-long"></div>
                  <div class="wire-bar bar-medium" style="background: ${s.accentColor || "#0D99FF"}33;"></div>
                  <div class="wire-bar bar-short"></div>
                </div>

                <button type="button" class="screen-primary-btn" style="background: ${s.accentColor || "#0D99FF"}; color: #FFFFFF;">
                  <span>${escapeHtml(p.primaryBtn || "Action")}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>

            </div>
          </div>
        `;
      })
      .join("");

    // Click handler on artboard frames
    artboardTrack.querySelectorAll(".figma-slide-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        e.stopPropagation();
        const sId = card.dataset.screenId;
        if (sId) selectFigmaScreen(sId);
      });
    });

    applyFigmaTransform();
  }

  function renderFigmaRightSidebar() {
    const proj = uiuxProjects[activeFigmaProjIndex];
    if (!proj) return;
    const screen = proj.screens.find((s) => s.id === activeFigmaScreenId) || proj.screens[0];
    if (!screen) return;
    const specs = screen.specs || {
      layout: { mode: "Fixed Frame", padding: "32px", itemSpacing: "20px" },
      typography: { fontFamily: "Parkinsans", display: "32px Bold", body: "14px Regular", tracking: "-0.01em" },
      colors: [{ name: "Brand Color", hex: screen.accentColor || "#0D99FF" }, { name: "Canvas White", hex: "#FFFFFF" }],
      components: ["Header", "Content Box"]
    };

    const inspectBody = document.getElementById("figmaInspectBody");
    if (!inspectBody) return;

    inspectBody.innerHTML = `
      <!-- Page Swatch matching Figma UI3 screenshot -->
      <div class="figma-inspect-section">
        <div class="figma-section-title">Page</div>
        <div class="page-swatch-row">
          <span class="swatch-color-box"></span>
          <span class="swatch-hex">FFFFFF</span>
          <span class="swatch-pct">100 %</span>
          <span class="swatch-eye" title="Layer Visibility">👁</span>
        </div>
      </div>

      <!-- Frame Dimensions -->
      <div class="figma-inspect-section">
        <div class="figma-section-title">
          <span>Frame</span>
          <span style="font-size: 10px; color: #9CA3AF; font-weight: 500;">${escapeHtml(screen.name)}</span>
        </div>
        <div class="figma-dim-grid">
          <div class="dim-field"><span class="dim-label">X</span><span class="dim-val">240</span></div>
          <div class="dim-field"><span class="dim-label">Y</span><span class="dim-val">160</span></div>
          <div class="dim-field"><span class="dim-label">W</span><span class="dim-val">${screen.width}</span></div>
          <div class="dim-field"><span class="dim-label">H</span><span class="dim-val">${screen.height}</span></div>
        </div>
      </div>

      <!-- Auto Layout / Specs -->
      <div class="figma-inspect-section">
        <div class="figma-section-title">Layout &amp; Spacing</div>
        <div style="display: flex; flex-direction: column; gap: 4px; font-size: 11px;">
          <div style="display: flex; justify-content: space-between;"><span style="color: #6B7280;">Mode</span><span style="font-weight: 600;">${escapeHtml(specs.layout?.mode || "Frame")}</span></div>
          <div style="display: flex; justify-content: space-between;"><span style="color: #6B7280;">Padding</span><span style="font-family: monospace;">${escapeHtml(specs.layout?.padding || "0px")}</span></div>
          <div style="display: flex; justify-content: space-between;"><span style="color: #6B7280;">Item Gap</span><span style="font-family: monospace;">${escapeHtml(specs.layout?.itemSpacing || "0px")}</span></div>
        </div>
      </div>

      <!-- Typography -->
      <div class="figma-inspect-section">
        <div class="figma-section-title">Typography</div>
        <div style="display: flex; flex-direction: column; gap: 4px; font-size: 11px;">
          <div style="display: flex; justify-content: space-between;"><span style="color: #6B7280;">Font</span><span style="font-weight: 600;">${escapeHtml(specs.typography?.fontFamily || "Parkinsans")}</span></div>
          <div style="display: flex; justify-content: space-between;"><span style="color: #6B7280;">Display</span><span style="font-weight: 600;">${escapeHtml(specs.typography?.display || "32px Bold")}</span></div>
          <div style="display: flex; justify-content: space-between;"><span style="color: #6B7280;">Body</span><span style="color: #4B5563;">${escapeHtml(specs.typography?.body || "14px Regular")}</span></div>
        </div>
      </div>

      <!-- Color Swatches (Click to copy) -->
      <div class="figma-inspect-section">
        <div class="figma-section-title">
          <span>Colors</span>
          <span style="font-size: 9.5px; color: #9CA3AF;">Click to copy</span>
        </div>
        <div class="figma-colors-grid">
          ${(specs.colors || [])
            .map(
              (c) => `
              <div class="figma-color-pill" data-hex="${c.hex}" title="Click to copy ${c.hex}">
                <span class="color-dot" style="background: ${c.hex};"></span>
                <div class="color-meta">
                  <span class="color-name">${escapeHtml(c.name)}</span>
                  <span class="color-hex">${c.hex}</span>
                </div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>

      <!-- For More on Behance Button -->
      <div class="figma-inspect-section" style="border-bottom: none;">
        <div style="font-size: 11px; font-weight: 700; color: #374151; margin-bottom: 4px;">Project Archive</div>
        <div style="font-size: 10.5px; color: #6B7280; line-height: 1.4; margin-bottom: 10px;">${escapeHtml(proj.description || "")}</div>
        <a href="${proj.behanceUrl}" target="_blank" rel="noopener noreferrer" class="figma-inspect-behance-btn" title="View Full Project on Behance">
          <span class="behance-be-tag">Bē</span>
          <span>FOR MORE ON BEHANCE</span>
        </a>
      </div>
    `;

    // Copy hex to clipboard
    inspectBody.querySelectorAll(".figma-color-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const hex = pill.dataset.hex;
        navigator.clipboard?.writeText(hex);
        const hexEl = pill.querySelector(".color-hex");
        if (hexEl) {
          const orig = hexEl.textContent;
          hexEl.textContent = "COPIED!";
          hexEl.style.color = "#0D99FF";
          setTimeout(() => {
            hexEl.textContent = orig;
            hexEl.style.color = "";
          }, 1200);
        }
      });
    });
  }

  // --- FIGMA CANVAS PAN & ZOOM ---
  const figmaStage = document.getElementById("figmaCanvasStage");
  const figmaTrack = document.getElementById("figmaArtboardTrack");

  function applyFigmaTransform() {
    if (figmaTrack) {
      figmaTrack.style.transform = `translate(${figmaPan.x}px, ${figmaPan.y}px) scale(${figmaZoom})`;
    }
    updateZoomDisplay();
  }

  if (figmaStage) {
    // Mouse drag pan
    figmaStage.addEventListener("mousedown", (e) => {
      if (e.target.closest(".figma-slide-card") && figmaActiveTool !== "hand") {
        return;
      }
      isFigmaPanning = true;
      figmaStartPan = { x: e.clientX - figmaPan.x, y: e.clientY - figmaPan.y };
      figmaStage.classList.add("is-panning");
    });

    window.addEventListener("mousemove", (e) => {
      if (!isFigmaPanning) return;
      figmaPan = { x: e.clientX - figmaStartPan.x, y: e.clientY - figmaStartPan.y };
      applyFigmaTransform();
    });

    window.addEventListener("mouseup", () => {
      isFigmaPanning = false;
      figmaStage?.classList.remove("is-panning");
    });

    // Wheel zoom & pan
    figmaStage.addEventListener(
      "wheel",
      (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          const zoomDelta = e.deltaY < 0 ? 0.08 : -0.08;
          figmaZoom = Math.max(0.4, Math.min(2.0, figmaZoom + zoomDelta));
          applyFigmaTransform();
        } else {
          figmaPan.x -= e.deltaX * 0.8;
          figmaPan.y -= e.deltaY * 0.8;
          applyFigmaTransform();
        }
      },
      { passive: false }
    );
  }

  // Floating dock tools
  document.querySelectorAll(".dock-tool-btn").forEach((toolBtn) => {
    toolBtn.addEventListener("click", () => {
      const tool = toolBtn.dataset.tool;
      if (!tool) return;
      figmaActiveTool = tool;
      document.querySelectorAll(".dock-tool-btn").forEach((b) => b.classList.remove("active"));
      toolBtn.classList.add("active");
      if (figmaStage) {
        figmaStage.style.cursor = tool === "hand" ? "grab" : "default";
      }
    });
  });

  // Header Zoom Toggle (Cycles through 50%, 100%, 150%)
  document.getElementById("figmaHeaderZoomToggle")?.addEventListener("click", () => {
    if (figmaZoom < 0.8) figmaZoom = 1.0;
    else if (figmaZoom < 1.3) figmaZoom = 1.5;
    else figmaZoom = 0.6;
    figmaPan = { x: 0, y: 0 };
    applyFigmaTransform();
  });


  // ==========================================================================
  // 3. PHOTOSHOP WORKSPACE RENDER & LOGIC
  // ==========================================================================
  function renderPhotoshopWorkspace() {
    renderPhotoshopCategories();
    renderPhotoshopCanvas();
    renderPhotoshopLayersPanel();
    renderPhotoshopTopBar();
  }

  function getActiveArtwork() {
    const category = graphicCategories.find((c) => c.id === activeGraphicCatId) || graphicCategories[0];
    return category?.artworks[activeArtworkIndex] || category?.artworks[0] || null;
  }

  function renderPhotoshopTopBar() {
    const artwork = getActiveArtwork();
    if (!artwork) return;
    const tabNameEl = document.getElementById("psActiveDocName");
    if (tabNameEl) {
      tabNameEl.textContent = `${artwork.title.toLowerCase().replace(/\s+/g, "_")}.psd`;
    }
    const zoomValEl = document.getElementById("psZoomVal");
    if (zoomValEl) {
      zoomValEl.textContent = `${Math.round(photoshopZoom * 100)}%`;
    }
    const behanceBtn = document.getElementById("psTopBehanceBtn");
    if (behanceBtn) {
      behanceBtn.href = artwork.behanceUrl;
      behanceBtn.setAttribute("target", "_blank");
      behanceBtn.setAttribute("rel", "noopener noreferrer");
    }
  }

  function renderPhotoshopCategories() {
    const listEl = document.getElementById("psCategoriesList");
    if (!listEl) return;

    listEl.innerHTML = graphicCategories
      .map((cat) => {
        const isActive = cat.id === activeGraphicCatId;
        return `
          <button type="button" class="ps-cat-btn ${isActive ? "active" : ""}" data-cat-id="${cat.id}">
            <span class="cat-icon">🎨</span>
            <span class="cat-name">${escapeHtml(cat.name)}</span>
            <span class="cat-count">${cat.artworks.length}</span>
          </button>
        `;
      })
      .join("");

    listEl.querySelectorAll(".ps-cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = btn.dataset.catId;
        if (catId !== activeGraphicCatId) {
          activeGraphicCatId = catId;
          activeArtworkIndex = 0;
          photoshopPan = { x: 0, y: 0 };
          renderPhotoshopWorkspace();
        }
      });
    });

    // Render artwork strip for active category
    const artStrip = document.getElementById("psArtworkStrip");
    if (artStrip) {
      const cat = graphicCategories.find((c) => c.id === activeGraphicCatId) || graphicCategories[0];
      artStrip.innerHTML = cat.artworks
        .map((art, idx) => {
          const isAct = idx === activeArtworkIndex;
          return `
            <button type="button" class="ps-art-thumb-btn ${isAct ? "active" : ""}" data-art-index="${idx}">
              <div class="art-thumb-preview" style="background: ${art.accentColor};">
                <span class="thumb-ratio">${art.aspectRatio}</span>
              </div>
              <div class="art-thumb-info">
                <span class="art-thumb-title">${escapeHtml(art.title)}</span>
                <span class="art-thumb-dim">${art.dimensions}</span>
              </div>
            </button>
          `;
        })
        .join("");

      artStrip.querySelectorAll(".ps-art-thumb-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.dataset.artIndex, 10);
          if (idx !== activeArtworkIndex && !isNaN(idx)) {
            activeArtworkIndex = idx;
            renderPhotoshopWorkspace();
          }
        });
      });
    }
  }

  function renderPhotoshopCanvas() {
    const artwork = getActiveArtwork();
    if (!artwork) return;
    const canvasDoc = document.getElementById("psCanvasDocument");
    if (!canvasDoc) return;

    // Apply document aspect ratio
    const [wRatio, hRatio] = artwork.aspectRatio.split("/").map((v) => parseFloat(v.trim()));
    const isPortrait = hRatio > wRatio;

    canvasDoc.style.width = isPortrait ? "360px" : "480px";
    canvasDoc.style.height = isPortrait ? "450px" : "360px";

    // Initialize layer visibility
    if (!layerVisibilityState[artwork.id]) {
      layerVisibilityState[artwork.id] = {};
      artwork.layers.forEach((l) => {
        layerVisibilityState[artwork.id][l.id] = l.visible !== false;
      });
    }
    const currentVis = layerVisibilityState[artwork.id];

    canvasDoc.innerHTML = `
      <div class="ps-artwork-stage" style="background: ${artwork.accentColor};">
        
        <!-- Background Layer -->
        <div class="ps-layer-el layer-bg" data-layer-id="layer-bg" style="display: ${currentVis["layer-bg"] !== false ? "block" : "none"};">
          <div class="ps-bg-pattern"></div>
        </div>

        <!-- Graphic Element Layer -->
        <div class="ps-layer-el layer-graphic" data-layer-id="layer-graphic" style="display: ${currentVis["layer-graphic"] !== false ? "flex" : "none"};">
          <div class="ps-art-graphic-box">
            <span class="art-badge-symbol">✦</span>
            <span class="art-badge-tag">${escapeHtml(artwork.aspectRatio)}</span>
          </div>
        </div>

        <!-- Text Heading Layer -->
        <div class="ps-layer-el layer-text" data-layer-id="layer-text" style="display: ${currentVis["layer-text"] !== false ? "block" : "none"};">
          <h2 class="ps-art-title">${escapeHtml(artwork.title)}</h2>
          <p class="ps-art-subtitle">${escapeHtml(artwork.subtitle || "")}</p>
        </div>

        <!-- Brand Mark / Logo Layer -->
        <div class="ps-layer-el layer-logo" data-layer-id="layer-logo" style="display: ${currentVis["layer-logo"] !== false ? "flex" : "none"};">
          <span class="ps-art-brandmark">ASHOK • ${escapeHtml(artwork.category)}</span>
        </div>

      </div>
    `;

    applyPhotoshopTransform();
  }

  function renderPhotoshopLayersPanel() {
    const artwork = getActiveArtwork();
    if (!artwork) return;
    const layersListEl = document.getElementById("psLayersList");
    if (!layersListEl) return;

    if (!layerVisibilityState[artwork.id]) {
      layerVisibilityState[artwork.id] = {};
      artwork.layers.forEach((l) => {
        layerVisibilityState[artwork.id][l.id] = true;
      });
    }
    const currentVis = layerVisibilityState[artwork.id];

    layersListEl.innerHTML = artwork.layers
      .map((l) => {
        const isVis = currentVis[l.id] !== false;
        return `
          <div class="ps-layer-row" data-layer-id="${l.id}">
            <button type="button" class="layer-eye-btn ${isVis ? "visible" : "hidden"}" data-layer-id="${l.id}" title="Toggle Layer Visibility">
              <span class="eye-icon">${isVis ? "👁" : "○"}</span>
            </button>
            <div class="layer-thumb-icon">
              <span class="thumb-ico">${l.type === "text" ? "T" : (l.type === "vector" ? "⬡" : "▦")}</span>
            </div>
            <span class="layer-name-label">${escapeHtml(l.name)}</span>
            <span class="layer-type-tag">${l.type}</span>
          </div>
        `;
      })
      .join("");

    // Toggle layer visibility
    layersListEl.querySelectorAll(".layer-eye-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const lId = btn.dataset.layerId;
        const willBeVisible = currentVis[lId] === false;
        currentVis[lId] = willBeVisible;

        btn.classList.toggle("visible", willBeVisible);
        btn.classList.toggle("hidden", !willBeVisible);
        const eye = btn.querySelector(".eye-icon");
        if (eye) eye.textContent = willBeVisible ? "👁" : "○";

        // Toggle on canvas
        const canvasLayer = document.querySelector(`.ps-layer-el[data-layer-id="${lId}"]`);
        if (canvasLayer) {
          canvasLayer.style.display = willBeVisible ? "flex" : "none";
        }
      });
    });

    // Photoshop Document Info
    const docInfoEl = document.getElementById("psDocSpecsInfo");
    if (docInfoEl) {
      docInfoEl.innerHTML = `
        <div class="doc-info-row"><span>DIMENSIONS</span><strong>${artwork.dimensions}</strong></div>
        <div class="doc-info-row"><span>COLOR MODE</span><strong>${artwork.colorSpace}</strong></div>
        <div class="doc-info-row"><span>RESOLUTION</span><strong>${artwork.resolution}</strong></div>
        <div class="doc-info-row"><span>YEAR</span><strong>${artwork.year}</strong></div>
        <a href="${artwork.behanceUrl}" target="_blank" rel="noopener noreferrer" class="ps-spec-behance-btn" title="View on Behance">
          <span class="behance-be-tag">Bē</span>
          <span>VIEW ARTWORK ON BEHANCE</span>
        </a>
      `;
    }
  }

  // --- PHOTOSHOP CANVAS PAN & ZOOM ---
  const psStage = document.getElementById("psCanvasStage");
  const psDoc = document.getElementById("psCanvasDocument");

  function applyPhotoshopTransform() {
    if (psDoc) {
      psDoc.style.transform = `translate(${photoshopPan.x}px, ${photoshopPan.y}px) scale(${photoshopZoom})`;
    }
    const zoomValEl = document.getElementById("psZoomVal");
    if (zoomValEl) {
      zoomValEl.textContent = `${Math.round(photoshopZoom * 100)}%`;
    }
  }

  if (psStage) {
    psStage.addEventListener("mousedown", (e) => {
      isPhotoshopPanning = true;
      photoshopStartPan = { x: e.clientX - photoshopPan.x, y: e.clientY - photoshopPan.y };
      psStage.classList.add("is-panning");
    });

    window.addEventListener("mousemove", (e) => {
      if (!isPhotoshopPanning) return;
      photoshopPan = { x: e.clientX - photoshopStartPan.x, y: e.clientY - photoshopStartPan.y };
      applyPhotoshopTransform();
    });

    window.addEventListener("mouseup", () => {
      isPhotoshopPanning = false;
      psStage?.classList.remove("is-panning");
    });

    psStage.addEventListener(
      "wheel",
      (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          const delta = e.deltaY < 0 ? 0.08 : -0.08;
          photoshopZoom = Math.max(0.4, Math.min(2.0, photoshopZoom + delta));
          applyPhotoshopTransform();
        } else {
          photoshopPan.x -= e.deltaX * 0.8;
          photoshopPan.y -= e.deltaY * 0.8;
          applyPhotoshopTransform();
        }
      },
      { passive: false }
    );
  }

  // Photoshop Zoom Buttons
  document.getElementById("btnPsZoomIn")?.addEventListener("click", () => {
    photoshopZoom = Math.min(2.0, photoshopZoom + 0.15);
    applyPhotoshopTransform();
  });

  document.getElementById("btnPsZoomOut")?.addEventListener("click", () => {
    photoshopZoom = Math.max(0.4, photoshopZoom - 0.15);
    applyPhotoshopTransform();
  });

  document.getElementById("btnPsZoomReset")?.addEventListener("click", () => {
    photoshopZoom = 1.0;
    photoshopPan = { x: 0, y: 0 };
    applyPhotoshopTransform();
  });

  // Photoshop Tools Switcher
  document.querySelectorAll(".ps-tool-btn").forEach((toolBtn) => {
    toolBtn.addEventListener("click", () => {
      const tool = toolBtn.dataset.tool;
      photoshopActiveTool = tool;
      document.querySelectorAll(".ps-tool-btn").forEach((b) => b.classList.remove("active"));
      toolBtn.classList.add("active");
    });
  });

  // Photoshop Blend Mode Selector
  const blendSelect = document.getElementById("psBlendModeSelect");
  if (blendSelect) {
    blendSelect.addEventListener("change", (e) => {
      photoshopBlendMode = e.target.value;
      const docEl = document.getElementById("psCanvasDocument");
      if (docEl) {
        docEl.style.mixBlendMode = photoshopBlendMode.toLowerCase();
      }
    });
  }

  // Photoshop Opacity Slider
  const opacityInput = document.getElementById("psOpacityRange");
  const opacityValEl = document.getElementById("psOpacityVal");
  if (opacityInput) {
    opacityInput.addEventListener("input", (e) => {
      photoshopOpacity = parseInt(e.target.value, 10);
      if (opacityValEl) opacityValEl.textContent = `${photoshopOpacity}%`;
      const docEl = document.getElementById("psCanvasDocument");
      if (docEl) {
        docEl.style.opacity = (photoshopOpacity / 100).toFixed(2);
      }
    });
  }

  // --- INITIALIZE DEFAULT FIGMA WORKSPACE ---
  try {
    renderFigmaWorkspace();
  } catch (err) {
    console.error("renderFigmaWorkspace error:", err);
  }
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
