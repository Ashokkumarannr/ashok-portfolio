import { initLaptopWorkstation, refreshWorkstation } from "./laptopWorkstation.js";
/**
 * ASHOK PORTFOLIO HERO - PARKINSANS ENGINE
 * Points centered with mathematical precision on letters h, o, and all characters
 */

// --- Base Geometry for 1200x480 Parkinsans Layouts ---
const layoutModes = {
  readable: {
    name: "Perfect Center Alignment",
    letters: {
      a: { x: 248, y: 400 },
      s: { x: 397, y: 400 },
      h: { x: 517, y: 400 },
      o: { x: 668, y: 400 },
      k: { x: 808, y: 400 }
    },
    pins: {
      about: { cx: 282, cy: 368 },
      experience: { cx: 432, cy: 306 },
      skills1: { cx: 602, cy: 304 },
      project: { cx: 723, cy: 304 },
      play: { cx: 914, cy: 314 }
    },
    pills: {
      about: { x: 240, y: 195, width: 84, height: 30, textX: 282, textY: 210 },
      experience: { x: 461, y: 95, width: 118, height: 30, textX: 520, textY: 110 },
      skills1: { x: 560, y: 175, width: 84, height: 30, textX: 602, textY: 190 },
      project: { x: 674, y: 130, width: 98, height: 30, textX: 723, textY: 145 },
      play: { x: 798, y: 180, width: 74, height: 30, textX: 835, textY: 195 }
    },
    connectors: {
      about: "M 282 225 L 282 368",
      experience: "M 432 306 L 432 124 Q 432 110 446 110 L 461 110",
      skills1: "M 602 205 L 602 304",
      project: "M 723 160 L 723 304",
      play: "M 914 314 L 914 209 Q 914 195 900 195 L 872 195"
    }
  },
  wide: {
    name: "Wide Spacing",
    letters: {
      a: { x: 218, y: 400 },
      s: { x: 387, y: 400 },
      h: { x: 527, y: 400 },
      o: { x: 698, y: 400 },
      k: { x: 858, y: 400 }
    },
    pins: {
      about: { cx: 252, cy: 368 },
      experience: { cx: 422, cy: 306 },
      skills1: { cx: 612, cy: 304 },
      project: { cx: 753, cy: 304 },
      play: { cx: 964, cy: 314 }
    },
    pills: {
      about: { x: 210, y: 195, width: 84, height: 30, textX: 252, textY: 210 },
      experience: { x: 451, y: 95, width: 118, height: 30, textX: 510, textY: 110 },
      skills1: { x: 570, y: 175, width: 84, height: 30, textX: 612, textY: 190 },
      project: { x: 704, y: 130, width: 98, height: 30, textX: 753, textY: 145 },
      play: { x: 848, y: 180, width: 74, height: 30, textX: 885, textY: 195 }
    },
    connectors: {
      about: "M 252 225 L 252 368",
      experience: "M 422 306 L 422 124 Q 422 110 436 110 L 451 110",
      skills1: "M 612 205 L 612 304",
      project: "M 753 160 L 753 304",
      play: "M 964 314 L 964 209 Q 964 195 950 195 L 922 195"
    }
  }
};

let currentSpacingKey = "readable";

// --- Apply Layout Coordinates to SVG ---
function applyLayout(modeKey) {
  const mode = layoutModes[modeKey] || layoutModes.readable;
  currentSpacingKey = modeKey;

  // Letters
  Object.keys(mode.letters).forEach((charKey) => {
    const el = document.getElementById(`char-${charKey}`);
    if (el) {
      el.setAttribute("x", mode.letters[charKey].x);
      el.setAttribute("y", mode.letters[charKey].y);
    }
  });

  // Pins
  Object.keys(mode.pins).forEach((pinKey) => {
    const el = document.getElementById(`dot-${pinKey}`);
    if (el) {
      el.setAttribute("cx", mode.pins[pinKey].cx);
      el.setAttribute("cy", mode.pins[pinKey].cy);
    }
  });

  // Connectors
  Object.keys(mode.connectors).forEach((connKey) => {
    const el = document.getElementById(`line-${connKey}`);
    if (el) {
      el.setAttribute("d", mode.connectors[connKey]);
    }
  });

  // Pills
  Object.keys(mode.pills).forEach((pillKey) => {
    const pillGroup = document.getElementById(`pill-${pillKey}`);
    if (pillGroup) {
      const rect = pillGroup.querySelector(".pill-rect");
      const wipe = pillGroup.querySelector(".pill-wipe");
      const label = pillGroup.querySelector(".pill-label");
      const clipRect = document.querySelector(`#clip-${pillGroup.id} rect`);
      const data = mode.pills[pillKey];
      if (rect) {
        rect.setAttribute("x", data.x);
        rect.setAttribute("y", data.y);
        rect.setAttribute("width", data.width);
        rect.setAttribute("height", data.height);
      }
      if (wipe) {
        wipe.setAttribute("x", data.x);
        wipe.setAttribute("y", data.y);
        wipe.setAttribute("width", data.width);
        wipe.setAttribute("height", data.height);
      }
      if (clipRect) {
        clipRect.setAttribute("x", data.x);
        clipRect.setAttribute("y", data.y);
        clipRect.setAttribute("width", data.width);
        clipRect.setAttribute("height", data.height);
      }
      if (label) {
        label.setAttribute("x", data.textX);
        label.setAttribute("y", data.textY);
      }
    }
  });
}

// --- Linked Hover & Click Handlers ---
const itemsMapping = [
  { key: "about", pillId: "pill-about", lineId: "line-about", dotId: "dot-about", letterId: "node-a", modalId: "about" },
  { key: "experience", pillId: "pill-experience", lineId: "line-experience", dotId: "dot-experience", letterId: "node-s", modalId: "experience" },
  { key: "skills1", pillId: "pill-skills1", lineId: "line-skills1", dotId: "dot-skills1", letterId: "node-h", modalId: "skills" },
  { key: "project", pillId: "pill-project", lineId: "line-project", dotId: "dot-project", letterId: "node-o", modalId: "project" },
  { key: "play", pillId: "pill-play", lineId: "line-play", dotId: "dot-play", letterId: "node-k", modalId: "play" },
];

function setupInteractiveLinks() {
  itemsMapping.forEach((item) => {
    const pill = document.getElementById(item.pillId);
    const line = document.getElementById(item.lineId);
    const dot = document.getElementById(item.dotId);
    const letter = document.getElementById(item.letterId);

    const activate = () => {
      if (pill) pill.classList.add("active");
      if (line) line.classList.add("highlighted");
      if (dot) dot.classList.add("highlighted");
      if (letter) letter.classList.add("active");
    };

    const deactivate = () => {
      if (pill) pill.classList.remove("active");
      if (line) line.classList.remove("highlighted");
      if (dot) dot.classList.remove("highlighted");
      if (letter) letter.classList.remove("active");
    };

    const handleAction = () => {
      if (currentInspectorMode) return;
      if (item.modalId === "skills") {
        switchView("skills");
      } else if (item.modalId === "about") {
        switchView("about");
      } else if (item.modalId === "experience") {
        switchView("experience");
      } else if (item.modalId === "project") {
        switchView("project");
      } else if (item.modalId === "play") {
        switchView("play");
      } else {
        openModal(item.modalId);
      }
    };

    // Pill Hover & Click
    if (pill) {
      pill.addEventListener("mouseenter", activate);
      pill.addEventListener("mouseleave", deactivate);
      pill.addEventListener("click", handleAction);
      pill.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleAction();
        }
      });
    }

    // Letter Hover & Click
    if (letter) {
      letter.addEventListener("mouseenter", activate);
      letter.addEventListener("mouseleave", deactivate);
      letter.addEventListener("click", handleAction);
      letter.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleAction();
        }
      });
    }
  });
}

// --- View Switching System (Home <-> Skills <-> About) ---
let currentView = "home";
let entranceTimer1 = null;
let entranceTimer2 = null;
let entranceTimer3 = null;
let aboutTimer1 = null;
let aboutTimer2 = null;

function switchView(viewName, animate = true) {
  if (typeof window.__initDeferredSystems === "function") {
    window.__initDeferredSystems();
  }
  currentView = viewName;
  const viewHome = document.getElementById("view-home");
  const viewSkills = document.getElementById("view-skills");
  const viewAbout = document.getElementById("view-about");
  const viewExperience = document.getElementById("view-experience");
  const viewProject = document.getElementById("view-project");
  const viewPlay = document.getElementById("view-play");
  const siteHeader = document.querySelector(".site-header");
  const skillsTitleContainer = document.getElementById("skillsTitleContainer");
  const skillsCluster = document.getElementById("skillsCluster");
  const aboutHeaderWrap = document.getElementById("aboutHeaderWrap");
  const aboutVisualContainer = document.getElementById("aboutVisualContainer");
  const navItems = document.querySelectorAll(".nav-item");

  // Clear pending animation timers
  clearTimeout(entranceTimer1);
  clearTimeout(entranceTimer2);
  clearTimeout(entranceTimer3);
  clearTimeout(aboutTimer1);
  clearTimeout(aboutTimer2);

  // Toggle body classes for views
  document.body.classList.toggle("home-view-active", viewName === "home" || !viewName);
  document.body.classList.toggle("skills-view-active", viewName === "skills");
  document.body.classList.toggle("about-view-active", viewName === "about");
  document.body.classList.toggle("experience-view-active", viewName === "experience");
  document.body.classList.toggle("project-view-active", viewName === "project");
  document.body.classList.toggle("play-view-active", viewName === "play");
  if (viewName !== "home") {
    document.body.classList.remove("intro-active", "intro-revealed");
  }

  // Update nav active states
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.nav === viewName);
  });

  if (viewName === "play") {
    // Switch View Containers for Play View
    if (viewHome) {
      viewHome.classList.remove("active");
      viewHome.setAttribute("aria-hidden", "true");
    }
    if (viewSkills) {
      viewSkills.classList.remove("active");
      viewSkills.setAttribute("aria-hidden", "true");
    }
    if (viewAbout) {
      viewAbout.classList.remove("active");
      viewAbout.setAttribute("aria-hidden", "true");
    }
    if (viewExperience) {
      viewExperience.classList.remove("active");
      viewExperience.setAttribute("aria-hidden", "true");
    }
    if (viewProject) {
      viewProject.classList.remove("active");
      viewProject.setAttribute("aria-hidden", "true");
    }
    if (viewPlay) {
      viewPlay.classList.add("active");
      viewPlay.removeAttribute("aria-hidden");
      viewPlay.scrollTop = 0;
      const hViewport = document.getElementById("playHorizontalViewport");
      if (hViewport) {
        hViewport.scrollLeft = 0;
      }
      if (typeof window.updatePlaygroundScrollProgress === "function") {
        setTimeout(window.updatePlaygroundScrollProgress, 60);
      }
    }

    if (siteHeader) {
      siteHeader.classList.remove("anim-header-hidden");
      siteHeader.classList.add("anim-header-enter");
    }

    try {
      history.replaceState(null, "", "#play");
    } catch (_) { }

  } else if (viewName === "project") {
    // 0. Switch View Containers for Project Page
    if (viewHome) {
      viewHome.classList.remove("active");
      viewHome.setAttribute("aria-hidden", "true");
    }
    if (viewSkills) {
      viewSkills.classList.remove("active");
      viewSkills.setAttribute("aria-hidden", "true");
    }
    if (viewAbout) {
      viewAbout.classList.remove("active");
      viewAbout.setAttribute("aria-hidden", "true");
    }
    if (viewExperience) {
      viewExperience.classList.remove("active");
      viewExperience.setAttribute("aria-hidden", "true");
    }
    if (viewPlay) {
      viewPlay.classList.remove("active");
      viewPlay.setAttribute("aria-hidden", "true");
    }
    if (viewProject) {
      viewProject.classList.add("active");
      viewProject.removeAttribute("aria-hidden");
      viewProject.scrollTop = 0;
      requestAnimationFrame(() => {
        refreshWorkstation();
      });
    }

    if (siteHeader) {
      siteHeader.classList.remove("anim-header-hidden");
      siteHeader.classList.add("anim-header-enter");
    }

    try {
      history.replaceState(null, "", "#project");
    } catch (_) { }

  } else if (viewName === "about") {
    // 1. Switch View Containers for About Page
    if (viewHome) {
      viewHome.classList.remove("active");
      viewHome.setAttribute("aria-hidden", "true");
    }
    if (viewSkills) {
      viewSkills.classList.remove("active");
      viewSkills.setAttribute("aria-hidden", "true");
    }
    if (viewExperience) {
      viewExperience.classList.remove("active");
      viewExperience.setAttribute("aria-hidden", "true");
    }
    if (viewProject) {
      viewProject.classList.remove("active");
      viewProject.setAttribute("aria-hidden", "true");
    }
    if (viewPlay) {
      viewPlay.classList.remove("active");
      viewPlay.setAttribute("aria-hidden", "true");
    }
    if (viewAbout) {
      viewAbout.classList.add("active");
      viewAbout.removeAttribute("aria-hidden");
    }

    if (siteHeader) {
      siteHeader.classList.remove("anim-header-hidden");
      siteHeader.classList.add("anim-header-enter");
    }

    // Start with compact photo stack in center, text 100% hidden until scrolled!
    photoStackTargetProgress = 0;
    photoStackProgress = 0;
    if (viewAbout) {
      viewAbout.scrollTop = 0;
      requestAnimationFrame(() => {
        if (viewAbout) viewAbout.scrollTop = 0;
      });
    }
    const edContent = document.getElementById("editorialContent");
    if (edContent) {
      edContent.style.opacity = "0";
      edContent.style.visibility = "hidden";
      edContent.style.pointerEvents = "none";
      edContent.style.transform = "translate(-50%, -50%) scale(0.92)";
    }
    const journeyDeck = document.getElementById("journeyCardsDeck");
    if (journeyDeck) journeyDeck.classList.remove("hover-blue", "hover-green", "hover-pink");

    try {
      history.replaceState(null, "", "#about");
    } catch (_) { }

  } else if (viewName === "experience") {
    // 2. Switch View Containers for Experience Page (Scroll-Driven 3D Voxel Runner)
    if (viewHome) {
      viewHome.classList.remove("active");
      viewHome.setAttribute("aria-hidden", "true");
    }
    if (viewSkills) {
      viewSkills.classList.remove("active");
      viewSkills.setAttribute("aria-hidden", "true");
    }
    if (viewAbout) {
      viewAbout.classList.remove("active");
      viewAbout.setAttribute("aria-hidden", "true");
    }
    if (viewProject) {
      viewProject.classList.remove("active");
      viewProject.setAttribute("aria-hidden", "true");
    }
    if (viewPlay) {
      viewPlay.classList.remove("active");
      viewPlay.setAttribute("aria-hidden", "true");
    }
    if (viewExperience) {
      viewExperience.classList.add("active");
      viewExperience.removeAttribute("aria-hidden");
    }

    if (siteHeader) {
      siteHeader.classList.remove("anim-header-hidden");
      siteHeader.classList.add("anim-header-enter");
    }

    if (viewExperience) viewExperience.scrollTop = 0;
    resetExperienceProgress();
    requestAnimationFrame(() => {
      resizeThreeExperienceRunner();
      resetExperienceProgress();
    });

    try {
      history.replaceState(null, "", "#experience");
    } catch (_) { }

  } else if (viewName === "skills") {
    // 3. Switch View Containers for Skills Page
    if (viewHome) {
      viewHome.classList.remove("active");
      viewHome.setAttribute("aria-hidden", "true");
    }
    if (viewAbout) {
      viewAbout.classList.remove("active");
      viewAbout.setAttribute("aria-hidden", "true");
    }
    if (viewExperience) {
      viewExperience.classList.remove("active");
      viewExperience.setAttribute("aria-hidden", "true");
    }
    if (viewProject) {
      viewProject.classList.remove("active");
      viewProject.setAttribute("aria-hidden", "true");
    }
    if (viewPlay) {
      viewPlay.classList.remove("active");
      viewPlay.setAttribute("aria-hidden", "true");
    }
    if (viewSkills) {
      viewSkills.classList.add("active");
      viewSkills.removeAttribute("aria-hidden");
    }

    if (animate) {
      // 2. Set Initial Hidden States for Header and Title
      if (siteHeader) {
        siteHeader.classList.add("anim-header-hidden");
        siteHeader.classList.remove("anim-header-enter");
      }
      if (skillsTitleContainer) {
        skillsTitleContainer.classList.add("anim-title-hidden");
        skillsTitleContainer.classList.remove("anim-title-enter");
      }

      // 3. STEP 1: Pills pour & scatter down from above
      if (skillsCluster) {
        const pills = skillsCluster.querySelectorAll(".skill-pill");
        pills.forEach((pill) => {
          const row = parseInt(pill.parentElement.dataset.row || 0, 10);
          const col = Array.from(pill.parentElement.children).indexOf(pill);
          const delay = row * 40 + col * 15 + Math.random() * 20;
          const randStartRot = -25 + Math.random() * 50;
          const randScatterX = (Math.random() - 0.5) * 220;

          pill.style.setProperty("--start-rot", `${randStartRot.toFixed(1)}deg`);
          pill.style.setProperty("--scatter-x", `${randScatterX.toFixed(1)}px`);
          pill.style.animationDelay = `${delay.toFixed(0)}ms`;
          pill.classList.remove("pill-pour");
          void pill.offsetWidth;
          pill.classList.add("pill-pour");
        });
      }

      // 4. STEP 2: Navbar slides down and fades into place
      entranceTimer1 = setTimeout(() => {
        if (siteHeader) {
          siteHeader.classList.remove("anim-header-hidden");
          siteHeader.classList.add("anim-header-enter");
        }
      }, 550);

      // 5. STEP 3: SKILLS & EXPERTISE title drops and fades in
      entranceTimer2 = setTimeout(() => {
        if (skillsTitleContainer) {
          skillsTitleContainer.classList.remove("anim-title-hidden");
          skillsTitleContainer.classList.add("anim-title-enter");
        }
      }, 850);

      // 6. Clean up pour class so natural hover scatter takes over smoothly
      entranceTimer3 = setTimeout(() => {
        if (skillsCluster) {
          const pills = skillsCluster.querySelectorAll(".skill-pill");
          pills.forEach((p) => {
            p.classList.remove("pill-pour");
            p.style.animationDelay = "";
          });
          window.dispatchEvent(new Event("resize"));
        }
      }, 1150);
    } else {
      if (siteHeader) {
        siteHeader.classList.remove("anim-header-hidden");
        siteHeader.classList.add("anim-header-enter");
      }
      if (skillsTitleContainer) {
        skillsTitleContainer.classList.remove("anim-title-hidden");
        skillsTitleContainer.classList.add("anim-title-enter");
      }
    }

    try {
      history.replaceState(null, "", "#skills");
    } catch (_) { }

  } else {
    // Switch to Home View
    if (viewSkills) {
      viewSkills.classList.remove("active");
      viewSkills.setAttribute("aria-hidden", "true");
    }
    if (viewAbout) {
      viewAbout.classList.remove("active");
      viewAbout.setAttribute("aria-hidden", "true");
    }
    if (viewExperience) {
      viewExperience.classList.remove("active");
      viewExperience.setAttribute("aria-hidden", "true");
    }
    if (viewProject) {
      viewProject.classList.remove("active");
      viewProject.setAttribute("aria-hidden", "true");
    }
    if (viewPlay) {
      viewPlay.classList.remove("active");
      viewPlay.setAttribute("aria-hidden", "true");
    }
    if (viewHome) {
      viewHome.classList.add("active");
      viewHome.removeAttribute("aria-hidden");
    }

    if (siteHeader) {
      siteHeader.classList.remove("anim-header-hidden");
      siteHeader.classList.add("anim-header-enter");
    }

    try {
      history.replaceState(null, "", "#home");
    } catch (_) { }
  }
}

// --- Natural & Realistic Hover Scatter Physics Engine ---
function setupSkillsHoverScatter() {
  const cluster = document.getElementById("skillsCluster");
  if (!cluster) return;

  const pills = cluster.querySelectorAll(".skill-pill");
  let pillCache = [];
  let rafId = null;
  let activeHoverPill = null;

  function refreshPillCache() {
    pillCache = Array.from(pills).map((pill) => {
      const rect = pill.getBoundingClientRect();
      return {
        el: pill,
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height,
        baseRot: parseFloat(pill.dataset.baseRot || 0)
      };
    });
  }

  window.addEventListener("resize", refreshPillCache);

  // Natural & Realistic Magnetic Cursor Field
  // As the pointer moves across the skills cloud, surrounding pills part naturally
  cluster.addEventListener("pointermove", (e) => {
    const mx = e.clientX;
    const my = e.clientY;

    if (!pillCache.length) refreshPillCache();

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      pillCache.forEach((item) => {
        if (item.el === activeHoverPill) return;

        const dx = item.cx - mx;
        const dy = item.cy - my;
        const dist = Math.hypot(dx, dy);
        const radius = 220; // Natural interaction radius

        if (dist < radius && dist > 0) {
          // Smooth physical falloff (smoothstep decay for natural deceleration)
          const norm = dist / radius; // 0 to 1
          const force = Math.pow(1 - norm, 1.5);
          const angle = Math.atan2(dy, dx);

          // Realistic lateral-biased dispersion (pills are horizontal capsules)
          const pushX = Math.cos(angle) * (force * 34);
          const pushY = Math.sin(angle) * (force * 18);
          const rotKick = (dx > 0 ? 1 : -1) * (force * 7.5);

          item.el.style.setProperty("--tx", `${pushX.toFixed(1)}px`);
          item.el.style.setProperty("--ty", `${pushY.toFixed(1)}px`);
          item.el.style.setProperty("--rot", `${(item.baseRot + rotKick).toFixed(1)}deg`);
        } else {
          item.el.style.removeProperty("--tx");
          item.el.style.removeProperty("--ty");
          item.el.style.removeProperty("--rot");
        }
      });
    });
  });

  // When pointer leaves the cluster, gently spring all pills back to resting alignment
  cluster.addEventListener("pointerleave", () => {
    if (rafId) cancelAnimationFrame(rafId);
    activeHoverPill = null;
    pills.forEach((p) => {
      p.classList.remove("is-hovered");
      p.style.removeProperty("--tx");
      p.style.removeProperty("--ty");
      p.style.removeProperty("--rot");
      p.style.removeProperty("--scale");
    });
  });

  // Individual Pill Hover: Natural lift, subtle scale, and color glow
  pills.forEach((pill) => {
    pill.addEventListener("pointerenter", () => {
      activeHoverPill = pill;
      pill.classList.add("is-hovered");
    });

    pill.addEventListener("pointerleave", () => {
      if (activeHoverPill === pill) activeHoverPill = null;
      pill.classList.remove("is-hovered");
    });
  });
}

// --- Setup Navigation Links ---
function setupNavigation() {
  // Brand logo click returns to Home view
  const brandLogo = document.getElementById("brandLogo");
  if (brandLogo) {
    brandLogo.addEventListener("click", () => {
      if (currentView !== "home") {
        switchView("home");
      }
    });
  }

  // Header Nav Items
  document.querySelectorAll(".nav-item").forEach((navBtn) => {
    navBtn.addEventListener("click", () => {
      navBtn.blur();
      const target = navBtn.dataset.nav;
      if (target === "about") {
        switchView("about");
      } else if (target === "skills") {
        switchView("skills");
      } else if (target === "experience") {
        switchView("experience");
      } else if (target === "project") {
        switchView("project");
      } else if (target === "play") {
        switchView("play");
      } else {
        openModal(target);
      }
    });

    navBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navBtn.click();
      }
    });
  });
}

// --- Interactive Photo Stack Animation Engine (Editorial Minimalist) ---
let photoStackProgress = 0;
let photoStackTargetProgress = 0;
let photoStackRafId = null;

const photoConfigs = [
  // 0: Main Portrait (Front & Center) -> Top-Left outer corner
  {
    stack: { x: 0, y: 0, rot: 0, scale: 1.0, z: 25 },
    scatter: { x: -38, y: -26, rot: -7, scale: 0.90, z: 12 }
  },
  // 1: Mid-Left Upper (Travel Landscape)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 24 },
    scatter: { x: -44, y: -9, rot: 6, scale: 0.86, z: 10 }
  },
  // 2: Top-Right Outer (Minimal Architecture)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 23 },
    scatter: { x: 38, y: -26, rot: 8, scale: 0.90, z: 9 }
  },
  // 3: Mid-Right Upper (Editorial Lifestyle)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 22 },
    scatter: { x: 44, y: -9, rot: -6, scale: 0.86, z: 8 }
  },
  // 4: Mid-Right Lower (Nature & Coastal)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 21 },
    scatter: { x: 44, y: 11, rot: 7, scale: 0.86, z: 7 }
  },
  // 5: Mid-Left Lower (Travel & Street)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 20 },
    scatter: { x: -44, y: 11, rot: -8, scale: 0.86, z: 6 }
  },
  // 6: Bottom-Left Outer (Classic Suit Detail)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 19 },
    scatter: { x: -38, y: 29, rot: 7, scale: 0.86, z: 5 }
  },
  // 7: Bottom-Right Outer (Modern Architecture)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 18 },
    scatter: { x: 38, y: 29, rot: -8, scale: 0.86, z: 5 }
  },
  // 8: Top-Left Perimeter (Studio Still Life - well clear of center)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 17 },
    scatter: { x: -20, y: -37, rot: -4, scale: 0.82, z: 4 }
  },
  // 9: Top-Right Perimeter (Sunrise Nature - well clear of center)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 16 },
    scatter: { x: 20, y: -37, rot: 5, scale: 0.82, z: 4 }
  },
  // 10: Bottom-Left Perimeter (Editorial Portrait - well clear of CTA)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 15 },
    scatter: { x: -20, y: 37, rot: 4, scale: 0.82, z: 4 }
  },
  // 11: Bottom-Right Perimeter (Alpine Lake - well clear of CTA)
  {
    stack: { x: 0, y: 0, rot: 0, scale: 0.96, z: 14 },
    scatter: { x: 20, y: 37, rot: -5, scale: 0.82, z: 4 }
  }
];

function updatePhotoStackFrames() {
  const stage = document.getElementById("photoStackStage");
  if (!stage) return;

  const photoCards = stage.querySelectorAll(".photo-card");
  const editorialContent = document.getElementById("editorialContent");
  const scrollHint = document.getElementById("scrollHint");

  // Smooth physical lerp
  photoStackProgress += (photoStackTargetProgress - photoStackProgress) * 0.14;

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  const scatterMult = isMobile ? 0.95 : (isTablet ? 0.98 : 1.0);
  const mobileScaleMult = isMobile ? 0.72 : (isTablet ? 0.88 : 1.0);

  photoCards.forEach((card) => {
    const idx = parseInt(card.dataset.index, 10);
    const cfg = photoConfigs[idx];
    if (!cfg) return;

    const curX = cfg.stack.x + (cfg.scatter.x * scatterMult - cfg.stack.x) * photoStackProgress;
    const curY = cfg.stack.y + (cfg.scatter.y * scatterMult - cfg.stack.y) * photoStackProgress;
    const curRot = cfg.stack.rot + (cfg.scatter.rot - cfg.stack.rot) * photoStackProgress;
    const targetScale = cfg.stack.scale + (cfg.scatter.scale - cfg.stack.scale) * photoStackProgress;
    const curScale = targetScale * (1 - (1 - mobileScaleMult) * photoStackProgress);

    card.style.transform = `translate(-50%, -50%) translate3d(${curX.toFixed(2)}vw, ${curY.toFixed(2)}vh, 0) rotate(${curRot.toFixed(2)}deg) scale(${curScale.toFixed(3)})`;
    card.style.zIndex = cfg.stack.z;

    // Photos behind are completely hidden (opacity 0) at start; they smoothly emerge only as scroll unpacking begins
    if (idx > 0) {
      if (photoStackProgress <= 0.04) {
        card.style.opacity = "0";
        card.style.visibility = "hidden";
      } else {
        const cardOpacity = Math.max(0, Math.min(1, (photoStackProgress - 0.04) / 0.20));
        card.style.opacity = cardOpacity.toFixed(3);
        card.style.visibility = cardOpacity > 0 ? "visible" : "hidden";
      }
    } else {
      // Front portrait photo card is always visible
      card.style.opacity = "1";
      card.style.visibility = "visible";
    }
  });

  // Reveal center editorial content ONLY after photos have scattered outward to the sides
  // When opening or closing, text is completely hidden until photos scatter!
  if (photoStackProgress <= 0.38) {
    if (editorialContent) {
      editorialContent.style.opacity = "0";
      editorialContent.style.visibility = "hidden";
      editorialContent.style.pointerEvents = "none";
    }
  } else {
    const textProgress = Math.max(0, Math.min(1, (photoStackProgress - 0.38) / 0.52));
    if (editorialContent) {
      editorialContent.style.visibility = "visible";
      editorialContent.style.opacity = textProgress.toFixed(3);
      editorialContent.style.transform = `translate(-50%, -50%) scale(${(0.92 + textProgress * 0.08).toFixed(3)})`;
      editorialContent.style.pointerEvents = textProgress > 0.85 ? "auto" : "none";
    }
  }

  // Fade out interaction hint as photos expand
  if (scrollHint) {
    scrollHint.style.opacity = Math.max(0, 1 - photoStackProgress * 2.8).toFixed(3);
  }

  photoStackRafId = requestAnimationFrame(updatePhotoStackFrames);
}

function setupAboutInteractions() {
  const stage = document.getElementById("photoStackStage");
  if (!stage) return;

  // Start continuous smooth render loop
  if (!photoStackRafId) {
    photoStackRafId = requestAnimationFrame(updatePhotoStackFrames);
  }

  // Wheel & Trackpad Scrolling with seamless progression into Journey section
  const viewAbout = document.getElementById("view-about");
  stage.addEventListener("wheel", (e) => {
    const delta = e.deltaY;
    if (delta > 0) {
      // Scrolling DOWN
      if (photoStackTargetProgress < 0.96) {
        e.preventDefault();
        photoStackTargetProgress = Math.min(1, photoStackTargetProgress + delta * 0.0022);
      } else {
        // Once photos are unpacked, natural scroll takes over into the journey section!
      }
    } else {
      // Scrolling UP
      if (viewAbout && viewAbout.scrollTop > 8) {
        // Allow natural scroll to top of view-about
      } else if (photoStackTargetProgress > 0) {
        e.preventDefault();
        photoStackTargetProgress = Math.max(0, photoStackTargetProgress + delta * 0.0022);
      }
    }
  }, { passive: false });

  // Touch Drag Interaction
  let touchStartY = 0;
  stage.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  stage.addEventListener("touchmove", (e) => {
    const deltaY = touchStartY - e.touches[0].clientY;
    touchStartY = e.touches[0].clientY;
    photoStackTargetProgress = Math.max(0, Math.min(1, photoStackTargetProgress + deltaY * 0.0035));
  }, { passive: true });

  // Mouse Drag Interaction on Stage
  let isDragging = false;
  let mouseStartY = 0;
  let hasDragged = false;

  stage.addEventListener("mousedown", (e) => {
    if (e.target.closest("#editorialCtaBtn") || e.target.closest("#editorialContent")) return;
    isDragging = true;
    hasDragged = false;
    mouseStartY = e.clientY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaY = mouseStartY - e.clientY;
    if (Math.abs(deltaY) > 5) {
      hasDragged = true;
    }
    mouseStartY = e.clientY;
    photoStackTargetProgress = Math.max(0, Math.min(1, photoStackTargetProgress + deltaY * 0.0032));
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Click on Stage or Photo Cards to Toggle Stack/Scatter
  stage.addEventListener("click", (e) => {
    if (hasDragged) {
      hasDragged = false;
      return;
    }
    if (e.target.closest("#editorialCtaBtn") || e.target.closest("#editorialContent")) return;

    if (photoStackTargetProgress < 0.4) {
      photoStackTargetProgress = 1.0;
    } else {
      photoStackTargetProgress = 0.0;
    }
  });

  // CTA Button Interaction ("Know more" scrolls down smoothly to journey cards)
  const ctaBtn = document.getElementById("editorialCtaBtn");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const journeySection = document.getElementById("journeySection");
      if (journeySection) {
        journeySection.scrollIntoView({ behavior: "smooth" });
      } else {
        openModal("about");
      }
    });
  }
}

// --- Section 2: Interactive 3-Card Journey Deck System ---
function setupJourneyCards() {
  const deck = document.getElementById("journeyCardsDeck");
  if (!deck) return;

  const cards = deck.querySelectorAll(".journey-card");

  function setHoveredCard(cardType) {
    deck.classList.remove("hover-blue", "hover-green", "hover-pink");
    if (cardType) {
      deck.classList.add(`hover-${cardType}`);
    }
  }

  cards.forEach((card) => {
    const cardType = card.dataset.card;

    // Hover brings the hovered card 1st to front, while remaining cards go to backside
    card.addEventListener("pointerenter", () => setHoveredCard(cardType));
    card.addEventListener("mouseenter", () => setHoveredCard(cardType));

    // Keyboard focus support
    card.addEventListener("focus", () => setHoveredCard(cardType));
    card.addEventListener("blur", () => setHoveredCard(null));

    // Tap / Click toggle on mobile/desktop
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      setHoveredCard(cardType);
    });
  });

  // When pointer leaves the cards deck, smoothly restore default resting state
  deck.addEventListener("pointerleave", () => setHoveredCard(null));
  deck.addEventListener("mouseleave", () => setHoveredCard(null));
}

// --- Section 3: Editorial Footer System ---
function setupCommonCtaForms() {
  document.querySelectorAll(".about-footer-form, .exp-footer-form, .proj-footer-form, .play-footer-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='text']");
      const btn = form.querySelector(".footer-action-btn");
      if (input && input.value.trim()) {
        if (btn) btn.innerHTML = "✓";
        if (typeof SoundEngine !== "undefined") SoundEngine.playSuccess();
        setTimeout(() => {
          if (btn) {
            btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
          }
          input.value = "";
        }, 2200);
      }
    });
  });
}

function setupFooterInteractions() {
  setupCommonCtaForms();
  const footer = document.getElementById("editorialFooter");
  if (!footer) return;

  // Footer Navigation buttons
  footer.querySelectorAll(".footer-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if (target === "home") {
        switchView("home");
      } else if (target === "about") {
        const viewAbout = document.getElementById("view-about");
        if (viewAbout) viewAbout.scrollTo({ top: 0, behavior: "smooth" });
      } else if (target === "skills") {
        switchView("skills");
      } else if (target === "experience") {
        switchView("experience");
      } else if (target === "project") {
        switchView("project");
      } else if (target === "play") {
        switchView("play");
      }
    });
  });

  // Footer Project Inquiries Form
  const form = document.getElementById("footerProjectForm");
  const input = document.getElementById("footerInput");
  const status = document.getElementById("footerFormStatus");

  if (form && input && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;

      status.textContent = "Thank you! Ashok will get in touch with you shortly.";
      status.style.color = "#4ade80";
      input.value = "";

      setTimeout(() => {
        status.textContent = "";
      }, 4500);
    });
  }
}

// --- Modal System ---
const modalBackdrop = document.getElementById("modalBackdrop");

function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;
  if (modalBackdrop) modalBackdrop.classList.remove("hidden");
  modal.showModal();

  if (id === "contact") {
    setTimeout(() => {
      resetScratchCard();
    }, 50);
  }
}

function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (modal) modal.close();
  if (modalBackdrop) modalBackdrop.classList.add("hidden");
}

// --- Interactive Scratch Card with Web Audio Synthesis ---
let scratchAudioCtx = null;
let scratchNoiseBuffer = null;
let lastScratchSoundTime = 0;

function initScratchAudio() {
  if (!scratchAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    scratchAudioCtx = new AudioCtx();

    // Create realistic abrasive granular noise buffer (1.5 seconds)
    const sampleRate = scratchAudioCtx.sampleRate;
    scratchNoiseBuffer = scratchAudioCtx.createBuffer(1, Math.floor(sampleRate * 1.5), sampleRate);
    const channelData = scratchNoiseBuffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < channelData.length; i++) {
      const white = Math.random() * 2 - 1;
      channelData[i] = (last + 0.03 * white) / 1.03;
      last = channelData[i];
      channelData[i] *= 3.8;
      if (Math.random() < 0.09) {
        channelData[i] += (Math.random() * 0.9 - 0.45);
      }
    }
  }
  if (scratchAudioCtx.state === "suspended") {
    scratchAudioCtx.resume().catch(() => {});
  }
}

function playScratchAcoustic(intensity = 1) {
  if (!scratchAudioCtx || !scratchNoiseBuffer) return;
  const now = scratchAudioCtx.currentTime;
  if (now - lastScratchSoundTime < 0.035) return;
  lastScratchSoundTime = now;

  try {
    const src = scratchAudioCtx.createBufferSource();
    src.buffer = scratchNoiseBuffer;
    src.loop = true;

    // Bandpass filter centered at coin scraping frequency (1600Hz - 2800Hz)
    const bandpass = scratchAudioCtx.createBiquadFilter();
    bandpass.type = "bandpass";
    const centerFreq = Math.min(3200, Math.max(1300, 1800 + intensity * 350 + (Math.random() * 300 - 150)));
    bandpass.frequency.setValueAtTime(centerFreq, now);
    bandpass.Q.setValueAtTime(4.2, now);

    // Highpass to eliminate boomy lows
    const highpass = scratchAudioCtx.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.setValueAtTime(900, now);

    // Snappy envelope for authentic tactile scrape
    const gain = scratchAudioCtx.createGain();
    const duration = Math.min(0.08, 0.03 + intensity * 0.02);
    const vol = Math.min(0.28, 0.07 + intensity * 0.06);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(vol, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    src.connect(bandpass);
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(scratchAudioCtx.destination);

    src.start(now, Math.random());
    src.stop(now + duration + 0.02);
  } catch (_) {}
}

function playRevealChime() {
  if (!scratchAudioCtx) return;
  try {
    const now = scratchAudioCtx.currentTime;
    const chords = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 sparkling arpeggio
    chords.forEach((freq, idx) => {
      const osc = scratchAudioCtx.createOscillator();
      const gain = scratchAudioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.001, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.45);

      osc.connect(gain);
      gain.connect(scratchAudioCtx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.5);
    });
  } catch (_) {}
}

let scratchState = {
  isScratching: false,
  isUnlocked: false,
  lastX: 0,
  lastY: 0,
  progress: 0,
  canvas: null,
  ctx: null,
  box: null,
  dpr: 1
};

function resetScratchCard() {
  const canvas = document.getElementById("scratchCanvas");
  const box = document.getElementById("scratchCardBox");
  if (!canvas || !box) return;

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  scratchState.canvas = canvas;
  scratchState.ctx = ctx;
  scratchState.box = box;
  scratchState.isUnlocked = false;
  scratchState.progress = 0;

  canvas.style.opacity = "1";
  canvas.style.pointerEvents = "auto";
  canvas.style.transition = "none";

  const meterFill = document.getElementById("scratchMeterFill");
  const meterText = document.getElementById("scratchMeterText");
  const guideText = document.getElementById("scratchInstructionText");
  if (meterFill) meterFill.style.width = "0%";
  if (meterText) meterText.textContent = "0%";
  if (guideText) {
    guideText.textContent = "Drag your finger or cursor to scratch the card";
    guideText.style.color = "#71717A";
  }

  // Sizing canvas to match exact bounding box
  const rect = box.getBoundingClientRect();
  const width = Math.max(300, Math.floor(rect.width || 530));
  const height = Math.max(240, Math.floor(rect.height || 280));
  const dpr = window.devicePixelRatio || 1;
  scratchState.dpr = dpr;

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  ctx.save();
  ctx.scale(dpr, dpr);

  // 1. Sleek metallic charcoal gradient background
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#1c1e24");
  grad.addColorStop(0.3, "#2d303b");
  grad.addColorStop(0.5, "#22252e");
  grad.addColorStop(0.7, "#353847");
  grad.addColorStop(1, "#181920");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // 2. Subtle luxury brushed foil speckles
  ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
  for (let i = 0; i < 400; i++) {
    const rx = Math.random() * width;
    const ry = Math.random() * height;
    const rw = Math.random() * 3 + 1;
    ctx.fillRect(rx, ry, rw, 1);
  }

  // 3. Gold Luxury Inset Border
  ctx.strokeStyle = "rgba(234, 179, 8, 0.28)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([8, 6]);
  ctx.strokeRect(14, 14, width - 28, height - 28);
  ctx.setLineDash([]);

  // 4. Center Gold Emblem Badge
  const cx = width / 2;
  const cy = height / 2;

  // Outer glow circle
  const badgeRadius = 36;
  const badgeGrad = ctx.createRadialGradient(cx, cy - 14, 4, cx, cy - 14, badgeRadius);
  badgeGrad.addColorStop(0, "#fbbf24");
  badgeGrad.addColorStop(0.7, "#d97706");
  badgeGrad.addColorStop(1, "#92400e");
  ctx.fillStyle = badgeGrad;
  ctx.beginPath();
  ctx.arc(cx, cy - 16, badgeRadius, 0, Math.PI * 2);
  ctx.fill();

  // Subtle inner border on badge
  ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy - 16, badgeRadius - 4, 0, Math.PI * 2);
  ctx.stroke();

  // Coin symbol in badge
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 22px -apple-system, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🪙", cx, cy - 15);

  // 5. Typography on foil
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "700 16px -apple-system, sans-serif";
  ctx.fillText("SCRATCH TO REVEAL", cx, cy + 36);

  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
  ctx.font = "500 12.5px -apple-system, sans-serif";
  ctx.fillText("Click & drag to scrape away the cover", cx, cy + 56);

  ctx.restore();
}

function getPointerPos(e) {
  const { canvas, dpr } = scratchState;
  const rect = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left) * dpr,
    y: (e.clientY - rect.top) * dpr
  };
}

function onScratchStart(e) {
  if (scratchState.isUnlocked) return;
  initScratchAudio();
  scratchState.isScratching = true;
  const pos = getPointerPos(e);
  scratchState.lastX = pos.x;
  scratchState.lastY = pos.y;
  scratchAt(pos.x, pos.y, pos.x, pos.y);
}

function onScratchMove(e) {
  if (!scratchState.isScratching || scratchState.isUnlocked) return;
  const pos = getPointerPos(e);
  const dist = Math.hypot(pos.x - scratchState.lastX, pos.y - scratchState.lastY);

  if (dist > 2) {
    scratchAt(scratchState.lastX, scratchState.lastY, pos.x, pos.y);
    scratchState.lastX = pos.x;
    scratchState.lastY = pos.y;

    // Trigger procedural scratch sound based on movement
    playScratchAcoustic(dist / (15 * scratchState.dpr));

    // Sample progress throttled
    checkScratchProgress();
  }
}

function onScratchEnd() {
  scratchState.isScratching = false;
}

function scratchAt(x1, y1, x2, y2) {
  const { ctx, dpr } = scratchState;
  if (!ctx) return;

  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineWidth = 44 * dpr;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.restore();
}

let lastCheckTime = 0;
function checkScratchProgress() {
  const now = performance.now();
  if (now - lastCheckTime < 80) return;
  lastCheckTime = now;

  const { canvas, ctx } = scratchState;
  if (!canvas || !ctx || scratchState.isUnlocked) return;

  const w = canvas.width;
  const h = canvas.height;
  const step = 16;
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  let totalSampled = 0;
  let transparentCount = 0;

  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      const idx = (y * w + x) * 4 + 3;
      totalSampled++;
      if (data[idx] < 128) {
        transparentCount++;
      }
    }
  }

  const percent = Math.min(100, Math.round((transparentCount / totalSampled) * 100));
  scratchState.progress = percent;

  const meterFill = document.getElementById("scratchMeterFill");
  const meterText = document.getElementById("scratchMeterText");
  if (meterFill) meterFill.style.width = `${percent}%`;
  if (meterText) meterText.textContent = `${percent}%`;

  if (percent >= 50 && !scratchState.isUnlocked) {
    scratchState.isUnlocked = true;
    playRevealChime();

    // Smoothly dissolve remaining foil
    canvas.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    canvas.style.opacity = "0";
    canvas.style.pointerEvents = "none";

    if (meterFill) meterFill.style.width = "100%";
    if (meterText) meterText.textContent = "100%";

    const guideText = document.getElementById("scratchInstructionText");
    if (guideText) {
      guideText.textContent = "🎉 Unlocked! Ashok's contact details are revealed.";
      guideText.style.color = "#16A34A";
    }
  }
}

function setupScratchCardEvents() {
  const canvas = document.getElementById("scratchCanvas");
  if (!canvas) return;

  canvas.addEventListener("pointerdown", onScratchStart);
  window.addEventListener("pointermove", onScratchMove);
  window.addEventListener("pointerup", onScratchEnd);
  window.addEventListener("pointercancel", onScratchEnd);

  // Scratch Again button
  const resetBtn = document.getElementById("btnScratchReset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetScratchCard();
    });
  }

  // Copy buttons
  document.querySelectorAll(".btn-copy-chip").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const text = btn.getAttribute("data-copy");
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = "Copied! ✓";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove("copied");
        }, 1600);
      }).catch(() => {});
    });
  });

  window.addEventListener("resize", () => {
    const modal = document.getElementById("modal-contact");
    if (modal && modal.open) {
      resetScratchCard();
    }
  });
}

function setupModals() {
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", () => {
      document.querySelectorAll(".clean-modal").forEach((m) => m.close());
      modalBackdrop.classList.add("hidden");
    });
  }

  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => openModal("contact"));
  }

  setupScratchCardEvents();
}

// --- Interactive Typography & Design Inspector System ---
let currentInspectorMode = null;

const inspectorConfigs = {
  colour: {
    name: "COLOUR",
    accent: "#5b7bfb",
    accentLight: "#93c5fd",
    codeHtml: '<span class="syn-prop">fill</span>: <span class="syn-fn">oklch</span>(<span class="syn-val">80% 0.166 137</span>);',
    annotation: "hover the letters<br />for a new hue",
    arrowD: "M 15 55 C 20 18, 65 14, 52 42 C 42 62, 75 42, 88 12",
    overlayId: "overlayColour"
  },
  type: {
    name: "TYPE",
    accent: "#c084fc",
    accentLight: "#d8b4fe",
    codeHtml: '<span class="syn-prop">font-size</span>: <span class="syn-val">240px</span>;',
    annotation: "drag a corner<br />through the scale",
    arrowD: "M 15 55 C 20 18, 65 14, 52 42 C 42 62, 75 42, 88 12",
    overlayId: "overlayType"
  },
  spacing: {
    name: "SPACING",
    accent: "#f06a4b",
    accentLight: "#fdba74",
    codeHtml: '<span class="syn-prop">gap</span>: <span class="syn-val">44px</span>;',
    annotation: "drag any gap,<br />all five move",
    arrowD: "M 15 55 C 20 18, 65 14, 52 42 C 42 62, 75 42, 88 12",
    overlayId: "overlaySpacing"
  },
  radius: {
    name: "RADIUS",
    accent: "#f59e0b",
    accentLight: "#fde047",
    codeHtml: '<span class="syn-prop">border-radius</span>: <span class="syn-val">24px</span>;',
    annotation: "drag to curve<br />the radius",
    arrowD: "M 15 55 C 20 18, 65 14, 52 42 C 42 62, 75 42, 88 12",
    overlayId: "overlayRadius"
  },
  opacity: {
    name: "OPACITY",
    accent: "#10b981",
    accentLight: "#6ee7b7",
    codeHtml: '<span class="syn-prop">opacity</span>: <span class="syn-val">0.4</span>;',
    annotation: "sweep the lens<br />to reveal opacity",
    arrowD: "M 15 55 C 20 18, 65 14, 52 42 C 42 62, 75 42, 88 12",
    overlayId: "overlayOpacity"
  }
};

// Live Dynamic Geometry Parameters (Exact home page size 240px and natural spacing)
let typeFontSize = 240;
let spacingGap = 44;
let pillRadius = 24;

function updateInspectorCode(prop, val, fnName) {
  const codeEl = document.getElementById("inspectorCode");
  if (!codeEl) return;
  if (fnName) {
    codeEl.innerHTML = `<span class="syn-prop">${prop}</span>: <span class="syn-fn">${fnName}</span>(<span class="syn-val">${val}</span>);`;
  } else {
    codeEl.innerHTML = `<span class="syn-prop">${prop}</span>: <span class="syn-val">${val}</span>;`;
  }
}

// Dynamically updates all real landing page SVG elements (letters, pins, connectors, bounding box)
function updateLiveGeometry() {
  const scale = typeFontSize / 240;
  let a_x, s_x, h_x, o_x, k_x, curY;

  if (currentInspectorMode) {
    // Natural home page letter spacing centered at (600, 400)
    a_x = Math.round(600 + (248 - 600) * scale);
    s_x = Math.round(600 + (397 - 600) * scale);
    h_x = Math.round(600 + (517 - 600) * scale);
    o_x = Math.round(600 + (668 - 600) * scale);
    k_x = Math.round(600 + (808 - 600) * scale);
    curY = Math.round(400 + (400 - 350) * (scale - 1));
  } else {
    // Original resting landing page hero layout
    a_x = 248;
    s_x = 397;
    h_x = 517;
    o_x = 668;
    k_x = 808;
    curY = 400;
  }

  const charsMap = { a: a_x, s: s_x, h: h_x, o: o_x, k: k_x };
  Object.keys(charsMap).forEach((char) => {
    const el = document.getElementById(`char-${char}`);
    if (el) {
      el.setAttribute("x", charsMap[char]);
      el.setAttribute("y", curY);
      el.style.fontSize = `${typeFontSize}px`;
    }
  });

  // Pins & Connectors for resting landing page
  if (!currentInspectorMode) {
    const pinsCoords = {
      about: { cx: a_x + Math.round(34 * scale), cy: curY - Math.round(32 * scale) },
      experience: { cx: s_x + Math.round(35 * scale), cy: curY - Math.round(94 * scale) },
      skills1: { cx: h_x + Math.round(85 * scale), cy: curY - Math.round(96 * scale) },
      project: { cx: o_x + Math.round(55 * scale), cy: curY - Math.round(96 * scale) },
      skills2: { cx: k_x + Math.round(106 * scale), cy: curY - Math.round(86 * scale) }
    };

    Object.keys(pinsCoords).forEach((pinKey) => {
      const dot = document.getElementById(`dot-${pinKey}`);
      if (dot) {
        dot.setAttribute("cx", pinsCoords[pinKey].cx);
        dot.setAttribute("cy", pinsCoords[pinKey].cy);
      }
    });

    const linesMap = {
      about: `M 282 225 L ${pinsCoords.about.cx} ${pinsCoords.about.cy}`,
      experience: `M ${pinsCoords.experience.cx} ${pinsCoords.experience.cy} L ${pinsCoords.experience.cx} 124 Q ${pinsCoords.experience.cx} 110 ${pinsCoords.experience.cx + 14} 110 L 461 110`,
      skills1: `M 602 205 L ${pinsCoords.skills1.cx} ${pinsCoords.skills1.cy}`,
      project: `M 723 160 L ${pinsCoords.project.cx} ${pinsCoords.project.cy}`,
      skills2: `M ${pinsCoords.skills2.cx} ${pinsCoords.skills2.cy} L ${pinsCoords.skills2.cx} 209 Q ${pinsCoords.skills2.cx} 195 ${pinsCoords.skills2.cx - 14} 195 L 872 195`
    };

    Object.keys(linesMap).forEach((lineKey) => {
      const line = document.getElementById(`line-${lineKey}`);
      if (line) {
        line.setAttribute("d", linesMap[lineKey]);
      }
    });
  }

  // TYPE Mode Bounding Box & Handles (Centered cleanly around word)
  const bbox_x = Math.round(a_x - 14 * scale);
  const bbox_y = Math.round(curY - 195 * scale);
  const bbox_w = Math.round((k_x + 140 * scale) - bbox_x + 6 * scale);
  const bbox_h = Math.round(210 * scale);

  const typeBBox = document.getElementById("typeBBox");
  if (typeBBox) {
    typeBBox.setAttribute("x", bbox_x);
    typeBBox.setAttribute("y", bbox_y);
    typeBBox.setAttribute("width", bbox_w);
    typeBBox.setAttribute("height", bbox_h);
  }

  const hTL = document.getElementById("handle-tl");
  const hTC = document.getElementById("handle-tc");
  const hTR = document.getElementById("handle-tr");
  const hML = document.getElementById("handle-ml");
  const hMR = document.getElementById("handle-mr");
  const hBL = document.getElementById("handle-bl");
  const hBC = document.getElementById("handle-bc");
  const hBR = document.getElementById("handle-br");

  const midX = Math.round(bbox_x + bbox_w / 2);
  const midY = Math.round(bbox_y + bbox_h / 2);

  if (hTL) { hTL.setAttribute("x", bbox_x - 4); hTL.setAttribute("y", bbox_y - 4); }
  if (hTC) { hTC.setAttribute("x", midX - 4); hTC.setAttribute("y", bbox_y - 4); }
  if (hTR) { hTR.setAttribute("x", bbox_x + bbox_w - 4); hTR.setAttribute("y", bbox_y - 4); }
  if (hML) { hML.setAttribute("x", bbox_x - 4); hML.setAttribute("y", midY - 4); }
  if (hMR) { hMR.setAttribute("x", bbox_x + bbox_w - 4); hMR.setAttribute("y", midY - 4); }
  if (hBL) { hBL.setAttribute("x", bbox_x - 4); hBL.setAttribute("y", bbox_y + bbox_h - 4); }
  if (hBC) { hBC.setAttribute("x", midX - 4); hBC.setAttribute("y", bbox_y + bbox_h - 4); }
  if (hBR) { hBR.setAttribute("x", bbox_x + bbox_w - 4); hBR.setAttribute("y", bbox_y + bbox_h - 4); }

  const guideTop = document.getElementById("guideTop");
  const guideBase = document.getElementById("guideBase");
  const guideBracket = document.getElementById("guideBracket");
  const guideXHeightLabel = document.getElementById("guideXHeightLabel");
  const guideTrackingLabel = document.getElementById("guideTrackingLabel");

  if (guideTop) { guideTop.setAttribute("y1", bbox_y); guideTop.setAttribute("y2", bbox_y); }
  if (guideBase) { guideBase.setAttribute("y1", curY); guideBase.setAttribute("y2", curY); }
  if (guideBracket) {
    guideBracket.setAttribute("d", `M ${bbox_x - 14} ${bbox_y} L ${bbox_x - 26} ${bbox_y} L ${bbox_x - 26} ${curY} L ${bbox_x - 14} ${curY}`);
  }
  if (guideXHeightLabel) {
    guideXHeightLabel.setAttribute("x", bbox_x - 34);
    guideXHeightLabel.setAttribute("y", Math.round(bbox_y + (curY - bbox_y) / 2 + 4));
  }
  if (guideTrackingLabel) {
    guideTrackingLabel.setAttribute("x", bbox_x + bbox_w - 18);
    guideTrackingLabel.setAttribute("y", curY + 24);
  }

  const typeDimBadge = document.getElementById("typeDimBadge");
  const typeDimText = document.getElementById("typeDimText");
  if (typeDimBadge) {
    typeDimBadge.setAttribute("transform", `translate(${midX - 31}, ${bbox_y + bbox_h + 16})`);
  }
  if (typeDimText) {
    typeDimText.textContent = `${typeFontSize}px`;
  }
}

function setInspectorMode(mode) {
  const inspectorStage = document.getElementById("inspectorStage");
  const annotationText = document.getElementById("annotationText");
  const arrowCurve = document.getElementById("arrowCurve");
  const modeBtns = document.querySelectorAll(".mode-btn");
  const lettersGroup = document.getElementById("lettersGroup");

  // Toggle off if clicking the active mode again
  if (mode && currentInspectorMode === mode) {
    mode = null;
  }

  currentInspectorMode = mode;

  // Hide all overlays first
  Object.values(inspectorConfigs).forEach((cfg) => {
    const el = document.getElementById(cfg.overlayId);
    if (el) el.style.display = "none";
  });

  // Update button active states
  modeBtns.forEach((btn) => {
    const isActive = mode && btn.dataset.mode === mode;
    btn.classList.toggle("is-active", isActive);
  });

  if (!mode || !inspectorConfigs[mode]) {
    // Mode is CLOSED -> Clean Pristine Landing Page Hero view (Image 1)
    document.body.classList.remove("mode-active");
    if (inspectorStage) inspectorStage.classList.add("hidden");

    if (lettersGroup) {
      lettersGroup.style.display = "";
      lettersGroup.querySelectorAll(".char").forEach((c) => {
        c.style.opacity = "";
        c.style.fill = "";
        c.style.fontSize = "";
      });
    }

    // Reset values to pristine base
    typeFontSize = 240;
    spacingGap = 44;
    pillRadius = 24;
    applyLayout(currentSpacingKey);
    return;
  }

  // Mode is ACTIVE
  document.body.classList.add("mode-active");
  const config = inspectorConfigs[mode];
  document.documentElement.style.setProperty("--mode-accent", config.accent);
  document.documentElement.style.setProperty("--mode-accent-light", config.accentLight);

  if (inspectorStage) inspectorStage.classList.remove("hidden");
  if (annotationText) annotationText.innerHTML = config.annotation;
  if (arrowCurve && config.arrowD) arrowCurve.setAttribute("d", config.arrowD);

  const codeEl = document.getElementById("inspectorCode");
  if (codeEl) codeEl.innerHTML = config.codeHtml;

  const activeOverlay = document.getElementById(config.overlayId);
  if (activeOverlay) activeOverlay.style.display = "";

  if (mode === "type") {
    if (lettersGroup) {
      lettersGroup.style.display = "";
      lettersGroup.querySelectorAll(".char").forEach((c) => {
        c.style.opacity = "";
      });
    }
    updateLiveGeometry();
    setupTypeOverlay();
  } else if (mode === "spacing") {
    // TEXT COMPLETELY HIDDEN as requested: "SPACING-la vanthu indha text-e irukkave koodadhu!"
    if (lettersGroup) lettersGroup.style.display = "none";
    setupSpacingOverlay();
  } else if (mode === "colour") {
    if (lettersGroup) {
      lettersGroup.style.display = "";
      lettersGroup.querySelectorAll(".char").forEach((c) => {
        c.style.opacity = "";
      });
    }
    updateLiveGeometry();
    setupColourOverlay();
  } else if (mode === "radius") {
    // 5 green boxes for ashok with interactive curve: "Ashok-ku vanthu 5 letters iruka, 5 box varanum"
    if (lettersGroup) lettersGroup.style.display = "none";
    setupRadiusOverlay();
  } else if (mode === "opacity") {
    if (lettersGroup) lettersGroup.style.display = "";
    updateLiveGeometry();
    setupOpacityOverlay();
  }
}

// 1. COLOUR Mode: Top ruler with 63% 69% 74% 80% 85% 91% and live hover hue shifts (Image 3)
function setupColourOverlay() {
  const container = document.getElementById("colourScaleTicks");
  const rulerLine = document.getElementById("colourRulerLine");
  const heroSvg = document.getElementById("heroSvg");
  if (!container || !heroSvg) return;

  const ticks = [63, 69, 74, 80, 85, 91];
  const startX = 248;
  const endX = 948;
  const lineY = 170;
  let currentPct = 80;
  let currentHue = 137;

  if (rulerLine) {
    rulerLine.setAttribute("x1", startX);
    rulerLine.setAttribute("x2", endX);
    rulerLine.setAttribute("y1", lineY);
    rulerLine.setAttribute("y2", lineY);
  }

  function renderTicks(activePct) {
    container.innerHTML = "";
    ticks.forEach((pct, idx) => {
      const x = Math.round(startX + (idx / (ticks.length - 1)) * (endX - startX));
      const isActive = pct === activePct;

      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "colour-scale-tick");

      // Label above line
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", x);
      text.setAttribute("y", lineY - 14);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("class", `colour-tick-text ${isActive ? "is-active" : ""}`);
      text.textContent = `${pct}%`;
      g.appendChild(text);

      // Dot on line
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", x);
      dot.setAttribute("cy", lineY);
      dot.setAttribute("r", isActive ? "7" : "3.5");
      dot.setAttribute("fill", isActive ? "#58a734" : "#64748b");
      g.appendChild(dot);

      g.onclick = (e) => {
        e.stopPropagation();
        applyColor(pct, currentHue);
      };

      container.appendChild(g);
    });
  }

  function applyColor(lightness, hue) {
    currentPct = lightness;
    currentHue = hue;
    renderTicks(lightness);

    // Apply distinct stepped gradient across letters matching Image 3
    const chars = ["a", "s", "h", "o", "k"];
    const charLightness = [
      Math.max(50, lightness - 17),
      Math.max(56, lightness - 10),
      lightness,
      Math.min(92, lightness + 5),
      Math.min(96, lightness + 11)
    ];
    chars.forEach((ch, i) => {
      const el = document.getElementById(`char-${ch}`);
      if (el) {
        el.style.fill = `oklch(${charLightness[i]}% 0.166 ${hue})`;
      }
    });

    updateInspectorCode("fill", `${lightness}% 0.166 ${hue}`, "oklch");
  }

  renderTicks(80);
  applyColor(80, 137);

  // Moving across letters shifts hue smoothly
  heroSvg.onpointermove = (e) => {
    if (currentInspectorMode !== "colour") return;
    const rect = heroSvg.getBoundingClientRect();
    const scaleX = 1200 / rect.width;
    const svgX = (e.clientX - rect.left) * scaleX;

    if (svgX >= 200 && svgX <= 1000) {
      const norm = Math.max(0, Math.min(1, (svgX - 248) / (948 - 248)));
      const targetL = Math.round(63 + norm * (91 - 63));
      const targetH = Math.round(115 + norm * 45); // Natural organic green around 137

      // Find closest tick
      let closest = ticks[0];
      let minDiff = 999;
      ticks.forEach((t) => {
        const diff = Math.abs(t - targetL);
        if (diff < minDiff) {
          minDiff = diff;
          closest = t;
        }
      });

      applyColor(closest, targetH);
    }
  };
}

// 2. TYPE Mode: Interactive Zoom In / Zoom Out with 8 Bounding Box Handles (Image 2)
function setupTypeOverlay() {
  const handles = document.querySelectorAll(".bbox-handle");
  const heroCanvas = document.getElementById("heroCanvas");

  let isDragging = false;
  let activeHandle = null;
  let startX = 0;
  let startY = 0;
  let startFontSize = typeFontSize;

  function setSize(sz) {
    typeFontSize = Math.min(310, Math.max(160, Math.round(sz)));
    updateLiveGeometry();
    updateInspectorCode("font-size", `${typeFontSize}px`);
  }

  handles.forEach((h) => {
    h.onpointerdown = (e) => {
      isDragging = true;
      activeHandle = h.id;
      startX = e.clientX;
      startY = e.clientY;
      startFontSize = typeFontSize;
      h.setPointerCapture(e.pointerId);
      e.stopPropagation();
      e.preventDefault();
    };

    h.onpointermove = (e) => {
      if (!isDragging || activeHandle !== h.id) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Directional sensitivity based on handle orientation
      let delta = 0;
      if (activeHandle === "handle-tr" || activeHandle === "handle-mr" || activeHandle === "handle-br") {
        delta = dx * 0.45;
      } else if (activeHandle === "handle-tl" || activeHandle === "handle-ml" || activeHandle === "handle-bl") {
        delta = -dx * 0.45;
      } else if (activeHandle === "handle-bc") {
        delta = dy * 0.45;
      } else if (activeHandle === "handle-tc") {
        delta = -dy * 0.45;
      }
      setSize(startFontSize + delta);
    };

    h.onpointerup = (e) => {
      isDragging = false;
      activeHandle = null;
      try { h.releasePointerCapture(e.pointerId); } catch (_) { }
    };
  });

  if (heroCanvas) {
    heroCanvas.onwheel = (e) => {
      if (currentInspectorMode !== "type") return;
      e.preventDefault();
      setSize(typeFontSize - Math.sign(e.deltaY) * 5);
    };
  }
}

// 3. SPACING Mode: 6 green blocks with 5 diagonal-hatched gap blocks & badges (Image 4)
function setupSpacingOverlay() {
  const container = document.getElementById("spacingStageContainer");
  const heroCanvas = document.getElementById("heroCanvas");
  if (!container || !heroCanvas) return;

  function render(gap) {
    container.innerHTML = "";
    // Harmonious blocks matching word span
    const blockW = 80;
    const blockH = 150;
    const blockY = 165;
    const numBlocks = 6;
    const numGaps = 5;
    const totalW = numBlocks * blockW + numGaps * gap;
    const startX = Math.round(600 - totalW / 2);
    const colors = ["#5ea83c", "#6bb73e", "#7cc644", "#90d750", "#a7e762", "#bcf09e"];

    // Render 6 blocks
    for (let i = 0; i < numBlocks; i++) {
      const x = Math.round(startX + i * (blockW + gap));
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", blockY);
      rect.setAttribute("width", blockW);
      rect.setAttribute("height", blockH);
      rect.setAttribute("fill", colors[i]);
      rect.setAttribute("rx", "3");
      rect.setAttribute("ry", "3");
      rect.setAttribute("class", "spacing-block-rect");
      container.appendChild(rect);
    }

    // Render 5 gap blocks with diagonal hatch & orange badges
    for (let i = 0; i < numGaps; i++) {
      const gapX = Math.round(startX + i * (blockW + gap) + blockW);
      if (gap > 0) {
        const gapRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        gapRect.setAttribute("x", gapX);
        gapRect.setAttribute("y", blockY);
        gapRect.setAttribute("width", gap);
        gapRect.setAttribute("height", blockH);
        gapRect.setAttribute("fill", "url(#spacingHatch)");
        gapRect.setAttribute("class", "spacing-gap-rect");
        container.appendChild(gapRect);
      }

      if (gap >= 16) {
        const badgeG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        badgeG.setAttribute("class", "gap-badge-group");
        badgeG.setAttribute("transform", `translate(${Math.round(gapX + gap / 2)}, ${Math.round(blockY + blockH / 2)})`);

        const badgeRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        badgeRect.setAttribute("x", "-18");
        badgeRect.setAttribute("y", "-13");
        badgeRect.setAttribute("width", "36");
        badgeRect.setAttribute("height", "26");
        badgeRect.setAttribute("rx", "4");
        badgeRect.setAttribute("class", "gap-badge-rect");
        badgeG.appendChild(badgeRect);

        const badgeText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        badgeText.setAttribute("y", "5");
        badgeText.setAttribute("text-anchor", "middle");
        badgeText.setAttribute("class", "gap-badge-text");
        badgeText.textContent = `${Math.round(gap)}`;
        badgeG.appendChild(badgeText);

        container.appendChild(badgeG);
      }
    }
  }

  render(spacingGap);
  updateInspectorCode("gap", `${Math.round(spacingGap)}px`);

  let isDragging = false;
  let startX = 0;
  let startGap = spacingGap;

  heroCanvas.onpointerdown = (e) => {
    if (currentInspectorMode !== "spacing") return;
    isDragging = true;
    startX = e.clientX;
    startGap = spacingGap;
    heroCanvas.setPointerCapture(e.pointerId);
  };

  heroCanvas.onpointermove = (e) => {
    if (!isDragging || currentInspectorMode !== "spacing") return;
    const dx = e.clientX - startX;
    spacingGap = Math.min(100, Math.max(0, Math.round(startGap + dx * 0.4)));
    render(spacingGap);
    updateInspectorCode("gap", `${Math.round(spacingGap)}px`);
  };

  heroCanvas.onpointerup = (e) => {
    isDragging = false;
    try { heroCanvas.releasePointerCapture(e.pointerId); } catch (_) { }
  };
}

// 4. RADIUS Mode: 5 green boxes for 'ashok' with interactive corner curve (0px sharp to 60px circle)
function setupRadiusOverlay() {
  const container = document.getElementById("radiusStageContainer");
  const heroCanvas = document.getElementById("heroCanvas");
  if (!container || !heroCanvas) return;

  function render(radius) {
    container.innerHTML = "";
    // 5 boxes matching word span
    const boxW = 120;
    const boxH = 120;
    const boxY = 180;
    const numBoxes = 5;
    const gap = 24;
    const totalW = numBoxes * boxW + (numBoxes - 1) * gap;
    const startX = Math.round(600 - totalW / 2);
    const colors = ["#5ea83c", "#6db93e", "#82cb48", "#9ce057", "#bcf09e"];

    for (let i = 0; i < numBoxes; i++) {
      const x = Math.round(startX + i * (boxW + gap));
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", boxY);
      rect.setAttribute("width", boxW);
      rect.setAttribute("height", boxH);
      rect.setAttribute("rx", radius);
      rect.setAttribute("ry", radius);
      rect.setAttribute("fill", colors[i]);
      rect.setAttribute("class", "radius-box-rect");
      g.appendChild(rect);

      // Figma-style corner radius handles inside box
      const rPad = Math.max(10, Math.min(boxW / 2 - 8, radius + 8));
      const corners = [
        [x + rPad, boxY + rPad],
        [x + boxW - rPad, boxY + rPad],
        [x + rPad, boxY + boxH - rPad],
        [x + boxW - rPad, boxY + boxH - rPad]
      ];
      corners.forEach(([cx, cy]) => {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("cx", cx);
        dot.setAttribute("cy", cy);
        dot.setAttribute("r", "3.2");
        dot.setAttribute("fill", "#1c1c21");
        dot.setAttribute("stroke", "#f59e0b");
        dot.setAttribute("stroke-width", "1.4");
        dot.setAttribute("opacity", "0.75");
        g.appendChild(dot);
      });

      container.appendChild(g);
    }
  }

  render(pillRadius);
  updateInspectorCode("border-radius", `${Math.round(pillRadius)}px`);

  let isDragging = false;
  let startX = 0;
  let startRadius = pillRadius;

  heroCanvas.onpointerdown = (e) => {
    if (currentInspectorMode !== "radius") return;
    isDragging = true;
    startX = e.clientX;
    startRadius = pillRadius;
    heroCanvas.setPointerCapture(e.pointerId);
  };

  heroCanvas.onpointermove = (e) => {
    if (!isDragging || currentInspectorMode !== "radius") return;
    const dx = e.clientX - startX;
    pillRadius = Math.min(60, Math.max(0, Math.round(startRadius + dx * 0.25)));
    render(pillRadius);
    updateInspectorCode("border-radius", `${Math.round(pillRadius)}px`);
  };

  heroCanvas.onpointerup = (e) => {
    isDragging = false;
    try { heroCanvas.releasePointerCapture(e.pointerId); } catch (_) { }
  };
}

// 5. OPACITY Mode: Sweeping lens revealing full opacity on letters
function setupOpacityOverlay() {
  const lens = document.getElementById("opacityLensCircle");
  const heroSvg = document.getElementById("heroSvg");
  const lettersGroup = document.getElementById("lettersGroup");
  if (!lens || !lettersGroup) return;

  const chars = lettersGroup.querySelectorAll(".char");

  function updateLens(svgX, svgY) {
    lens.setAttribute("cx", svgX);
    lens.setAttribute("cy", svgY);
    lens.setAttribute("r", "115");

    chars.forEach((c) => {
      const cx = parseFloat(c.getAttribute("x") || 517);
      const dist = Math.abs(cx - svgX);
      if (dist < 115) {
        c.style.opacity = "1";
      } else {
        c.style.opacity = "0.4";
      }
    });

    updateInspectorCode("opacity", "0.4");
  }

  updateLens(517, 350);

  if (heroSvg) {
    heroSvg.onpointermove = (e) => {
      if (currentInspectorMode !== "opacity") return;
      const rect = heroSvg.getBoundingClientRect();
      const scaleX = 1200 / rect.width;
      const scaleY = 480 / rect.height;
      const svgX = (e.clientX - rect.left) * scaleX;
      const svgY = (e.clientY - rect.top) * scaleY;
      updateLens(svgX, svgY);
    };
  }
}

function setupBottomDock() {
  // Mode selection buttons
  const modeBtns = document.querySelectorAll(".mode-btn");
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const mode = btn.dataset.mode;
      setInspectorMode(mode);
    });
  });

  // Close / Reset [X] Button
  const btnClose = document.getElementById("btnCloseMode");
  if (btnClose) {
    btnClose.addEventListener("click", (e) => {
      e.stopPropagation();
      setInspectorMode(null);
    });
  }

  // Initial state: Start with clean default landing page
  setInspectorMode(null);
}

// ==========================================================================
// SCROLL-DRIVEN 3D VOXEL MINECRAFT RUNNER & EXPERIENCE ENGINE
// ==========================================================================
let expProgress = 0;
let expRunCycle = 0;
let threeScene = null;
let threeCamera = null;
let threeRenderer = null;
let threeRunnerGroup = null;
let threeContactShadow = null;
let threeLimbRefs = null;

function resetExperienceProgress() {
  expProgress = 0;
  expRunCycle = 0;
  updateExperienceFrames(0);
}

function resizeThreeExperienceRunner() {
  if (!threeRenderer || !threeCamera) return;
  const container = document.getElementById("expRunnerContainer");
  if (!container) return;

  const w = container.clientWidth || window.innerWidth;
  const h = container.clientHeight || Math.round(window.innerHeight * 0.44);

  if (w <= 0 || h <= 0) return;

  threeCamera.aspect = w / h;
  threeCamera.updateProjectionMatrix();
  threeRenderer.setSize(w, h, false);

  if (threeRunnerGroup) {
    const isMobile = w < 640;
    const baseScale = isMobile ? 0.48 : 0.62;
    threeRunnerGroup.scale.set(baseScale, baseScale, baseScale);
    threeRunnerGroup.position.y = isMobile ? -1.65 : -2.18;
    if (threeContactShadow) {
      threeContactShadow.position.y = isMobile ? -4.95 : -6.36;
    }
  }

  updateExperienceFrames(expProgress);
}

function getExperienceXBounds() {
  const winW = window.innerWidth || 1920;
  let minVw = 3.2; // Starts directly at the left side end on the first letter 'E'
  let maxVw = 93.5; // Runs to the right side end on final letter 'E'

  try {
    const e1 = document.querySelector(".exp-wm-e1");
    const e2 = document.querySelector(".exp-wm-e2");
    if (e1 && e2) {
      const r1 = e1.getBoundingClientRect();
      const r2 = e2.getBoundingClientRect();
      if (r1.width > 0 && r2.width > 0) {
        minVw = ((r1.left + r1.width * 0.48) / winW) * 100;
        maxVw = ((r2.left + r2.width * 0.52) / winW) * 100;
      }
    }
  } catch (_) { }

  return {
    minVw: Math.max(1.8, Math.min(6.5, minVw)),
    maxVw: Math.max(88, Math.min(98.5, maxVw))
  };
}

// ==========================================================================
// SHARED 3D MINECRAFT VOXEL CHARACTER BUILDER (USED ACROSS ALL SCENES)
// ==========================================================================
function createVoxelCharacterMesh() {
  const skinMat = new THREE.MeshLambertMaterial({ color: 0xF5C29F });
  const hairMat = new THREE.MeshLambertMaterial({ color: 0x0E0F12 });
  const blackDressMat = new THREE.MeshLambertMaterial({ color: 0x141519 }); // Solid Black Dress / Streetwear Suit
  const whiteTrimMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); // Crisp White Collar
  const tieMat = new THREE.MeshLambertMaterial({ color: 0xDC2626 }); // Vibrant Red Tie Accent
  const backpackMat = new THREE.MeshLambertMaterial({ color: 0x0A0B0E }); // Jet Black Backpack
  const pantsMat = new THREE.MeshLambertMaterial({ color: 0x24252E }); // Modern Charcoal Pants (Distinct from black floor)
  const sneakerWhiteMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); // Pure Crisp White Sneakers
  const sneakerStripeMat = new THREE.MeshLambertMaterial({ color: 0x18181B }); // Black Sneaker Stripe / Accent
  const sneakerSoleMat = new THREE.MeshLambertMaterial({ color: 0xF4F4F5 }); // Clean White Outsole
  const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const eyePupilMat = new THREE.MeshBasicMaterial({ color: 0x111827 });

  const runnerGroup = new THREE.Group();
  runnerGroup.rotation.y = Math.PI / 2 + 0.20; // 3/4 side profile facing right
  runnerGroup.scale.set(0.62, 0.62, 0.62);

  const bodyPivot = new THREE.Group();
  bodyPivot.rotation.z = -0.06; // Energetic forward sprint lean
  runnerGroup.add(bodyPivot);

  // Torso: Solid Black Dress / Suit Jacket
  const torsoGeo = new THREE.BoxGeometry(3.6, 5.0, 2.2);
  const torsoMesh = new THREE.Mesh(torsoGeo, blackDressMat);
  torsoMesh.position.set(0, 0, 0);
  bodyPivot.add(torsoMesh);

  // Crisp White Collar
  const collarGeo = new THREE.BoxGeometry(1.8, 0.8, 0.35);
  const collarMesh = new THREE.Mesh(collarGeo, whiteTrimMat);
  collarMesh.position.set(0, 2.1, 1.12);
  bodyPivot.add(collarMesh);

  // Vibrant Red Accent Tie
  const tieGeo = new THREE.BoxGeometry(0.7, 3.2, 0.3);
  const tieMesh = new THREE.Mesh(tieGeo, tieMat);
  tieMesh.position.set(0, 0.4, 1.22);
  bodyPivot.add(tieMesh);

  // Matte Black Backpack on Back
  const backpackGeo = new THREE.BoxGeometry(3.2, 4.2, 1.8);
  const backpackMesh = new THREE.Mesh(backpackGeo, backpackMat);
  backpackMesh.position.set(0, 0.2, -1.6);
  bodyPivot.add(backpackMesh);

  // Head Group (Mounted on top of torso)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 2.5, 0);

  // Face Cube (3.6 x 3.6 x 3.6)
  const faceGeo = new THREE.BoxGeometry(3.6, 3.6, 3.6);
  const faceMesh = new THREE.Mesh(faceGeo, skinMat);
  faceMesh.position.set(0, 1.8, 0);
  headGroup.add(faceMesh);

  // Black Hair Helmet (Minecraft Style)
  const hairTopGeo = new THREE.BoxGeometry(3.9, 1.8, 3.9);
  const hairTopMesh = new THREE.Mesh(hairTopGeo, hairMat);
  hairTopMesh.position.set(0, 2.8, 0);
  headGroup.add(hairTopMesh);

  // Front Bangs
  const bangsGeo = new THREE.BoxGeometry(3.9, 1.1, 1.0);
  const bangsMesh = new THREE.Mesh(bangsGeo, hairMat);
  bangsMesh.position.set(0, 2.0, 1.6);
  headGroup.add(bangsMesh);

  // Minecraft Eyes (White Sclera + Dark Pupil)
  const eyeWhiteGeo = new THREE.BoxGeometry(0.55, 0.55, 0.15);
  const eyePupilGeo = new THREE.BoxGeometry(0.35, 0.55, 0.18);

  const leftEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
  leftEyeWhite.position.set(0.85, 1.5, 1.82);
  const leftEyePupil = new THREE.Mesh(eyePupilGeo, eyePupilMat);
  leftEyePupil.position.set(0.95, 1.5, 1.84);
  headGroup.add(leftEyeWhite);
  headGroup.add(leftEyePupil);

  const rightEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
  rightEyeWhite.position.set(-0.85, 1.5, 1.82);
  const rightEyePupil = new THREE.Mesh(eyePupilGeo, eyePupilMat);
  rightEyePupil.position.set(-0.75, 1.5, 1.84);
  headGroup.add(rightEyeWhite);
  headGroup.add(rightEyePupil);

  bodyPivot.add(headGroup);

  // Left Arm (facing viewer): Solid Black Sleeve + Peach Hand
  const armGeo = new THREE.BoxGeometry(1.5, 4.0, 1.5);
  const leftArmPivot = new THREE.Group();
  leftArmPivot.position.set(2.4, 2.1, 0);
  const leftArmMesh = new THREE.Mesh(armGeo, blackDressMat);
  leftArmMesh.position.set(0, -1.8, 0);
  leftArmPivot.add(leftArmMesh);

  const handGeo = new THREE.BoxGeometry(1.3, 1.0, 1.3);
  const leftHand = new THREE.Mesh(handGeo, skinMat);
  leftHand.position.set(0, -4.2, 0);
  leftArmPivot.add(leftHand);
  bodyPivot.add(leftArmPivot);

  // Right Arm (far side): Solid Black Sleeve + Peach Hand
  const rightArmPivot = new THREE.Group();
  rightArmPivot.position.set(-2.4, 2.1, 0);
  const rightArmMesh = new THREE.Mesh(armGeo, blackDressMat);
  rightArmMesh.position.set(0, -1.8, 0);
  rightArmPivot.add(rightArmMesh);

  const rightHand = new THREE.Mesh(handGeo, skinMat);
  rightHand.position.set(0, -4.2, 0);
  rightArmPivot.add(rightHand);
  bodyPivot.add(rightArmPivot);

  // Left Leg: Charcoal Pants + CRISP WHITE SNEAKER
  const legGeo = new THREE.BoxGeometry(1.6, 4.2, 1.6);
  const leftLegPivot = new THREE.Group();
  leftLegPivot.position.set(0.9, -2.2, 0);
  leftLegPivot.rotation.x = 0.16;
  const leftLegMesh = new THREE.Mesh(legGeo, pantsMat);
  leftLegMesh.position.set(0, -1.8, 0);
  leftLegPivot.add(leftLegMesh);

  const shoeGeo = new THREE.BoxGeometry(1.7, 1.1, 2.4);
  const leftShoe = new THREE.Mesh(shoeGeo, sneakerWhiteMat);
  leftShoe.position.set(0, -3.8, 0.3);
  leftLegPivot.add(leftShoe);

  const stripeGeo = new THREE.BoxGeometry(1.74, 0.35, 1.0);
  const leftStripe = new THREE.Mesh(stripeGeo, sneakerStripeMat);
  leftStripe.position.set(0, -3.7, 0.2);
  leftLegPivot.add(leftStripe);

  const soleGeo = new THREE.BoxGeometry(1.75, 0.45, 2.5);
  const leftSole = new THREE.Mesh(soleGeo, sneakerSoleMat);
  leftSole.position.set(0, -4.35, 0.3);
  leftLegPivot.add(leftSole);
  runnerGroup.add(leftLegPivot);

  // Right Leg: Charcoal Pants + CRISP WHITE SNEAKER
  const rightLegPivot = new THREE.Group();
  rightLegPivot.position.set(-0.9, -2.2, 0);
  rightLegPivot.rotation.x = -0.16;
  const rightLegMesh = new THREE.Mesh(legGeo, pantsMat);
  rightLegMesh.position.set(0, -1.8, 0);
  rightLegPivot.add(rightLegMesh);

  const rightShoe = new THREE.Mesh(shoeGeo, sneakerWhiteMat);
  rightShoe.position.set(0, -3.8, 0.3);
  rightLegPivot.add(rightShoe);

  const rightStripe = new THREE.Mesh(stripeGeo, sneakerStripeMat);
  rightStripe.position.set(0, -3.7, 0.2);
  rightLegPivot.add(rightStripe);

  const rightSole = new THREE.Mesh(soleGeo, sneakerSoleMat);
  rightSole.position.set(0, -4.35, 0.3);
  rightLegPivot.add(rightSole);
  runnerGroup.add(rightLegPivot);

  return {
    group: runnerGroup,
    bodyPivot,
    headGroup,
    leftArmPivot,
    rightArmPivot,
    leftLegPivot,
    rightLegPivot
  };
}

function initThreeVoxelRunner() {
  const canvas = document.getElementById("voxelRunnerCanvas");
  if (!canvas) return;

  const container = document.getElementById("expRunnerContainer");
  if (!container) return;

  if (typeof THREE === "undefined") {
    setTimeout(initThreeVoxelRunner, 120);
    return;
  }

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || Math.round(window.innerHeight * 0.44);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
  camera.position.set(0, 0, 24);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  // Balanced studio lights: Crisp highlights without washing out
  const ambient = new THREE.AmbientLight(0xffffff, 0.72);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.75);
  keyLight.position.set(16, 18, 22);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x94a3b8, 0.40);
  rimLight.position.set(-16, 10, -10);
  scene.add(rimLight);

  // Exact same voxel character created via shared constructor
  const char = createVoxelCharacterMesh();
  const runnerGroup = char.group;
  // Sole bottom calibrated firmly ABOVE the black floor line (fully visible on white hero section)
  runnerGroup.position.set(-13.8, -2.18, 0);
  runnerGroup.scale.set(0.62, 0.62, 0.62); // Scaled up larger per user request
  scene.add(runnerGroup);

  // Ground Contact Shadow directly under runner's feet touching onto the black floor
  const shadowGeo = new THREE.PlaneGeometry(4.2, 1.4);
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.26,
    depthWrite: false
  });
  const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
  contactShadow.rotation.x = -Math.PI / 2;
  contactShadow.position.set(-13.8, -6.36, 0);
  scene.add(contactShadow);

  threeScene = scene;
  threeCamera = camera;
  threeRenderer = renderer;
  threeRunnerGroup = runnerGroup;
  threeContactShadow = contactShadow;
  threeLimbRefs = {
    bodyPivot: char.bodyPivot,
    headGroup: char.headGroup,
    leftArmPivot: char.leftArmPivot,
    rightArmPivot: char.rightArmPivot,
    leftLegPivot: char.leftLegPivot,
    rightLegPivot: char.rightLegPivot
  };

  // Hide 2D sprite since 3D renderer is fully active
  const sprite = document.getElementById("runnerSprite");
  if (sprite) {
    sprite.style.opacity = "0";
  }

  // Handle Window Resize
  window.addEventListener("resize", () => {
    resizeThreeExperienceRunner();
  });

  updateExperienceFrames(0);
}

function getThreeWorldX(vwPercent) {
  if (!threeCamera) return -13.8;
  const visibleHalfWidth = Math.tan((threeCamera.fov * Math.PI) / 360) * threeCamera.position.z * threeCamera.aspect;
  return -visibleHalfWidth + (vwPercent / 100) * (2 * visibleHalfWidth);
}

function updateExperienceFrames(progress) {
  // 1. Horizontal Runner Position: Starts directly on the 1st letter 'E' of EXPERIENCE
  const bounds = getExperienceXBounds();
  const minX = bounds.minVw;
  const maxX = bounds.maxVw;
  const curX = minX + progress * (maxX - minX);

  // 2. Animate 3D Voxel Character
  if (threeRunnerGroup && threeLimbRefs) {
    // 3D world: Precisely mapped to viewport percentage (starts directly on 1st letter 'E')
    const worldX = getThreeWorldX(curX);
    threeRunnerGroup.position.x = worldX;

    const cycle = expRunCycle;
    threeLimbRefs.leftArmPivot.rotation.x = Math.sin(cycle) * 0.95;
    threeLimbRefs.rightArmPivot.rotation.x = -Math.sin(cycle) * 0.95;
    threeLimbRefs.leftLegPivot.rotation.x = Math.sin(cycle) * 1.05 + 0.16;
    threeLimbRefs.rightLegPivot.rotation.x = -Math.sin(cycle) * 1.05 - 0.16;

    threeLimbRefs.bodyPivot.position.y = Math.abs(Math.sin(cycle * 2)) * 0.28;
    threeLimbRefs.bodyPivot.rotation.z = -0.06 + Math.sin(cycle) * 0.03;
    threeLimbRefs.headGroup.rotation.z = -Math.sin(cycle) * 0.025;

    if (threeContactShadow) {
      threeContactShadow.position.x = worldX;
      const shadowScale = 1 - Math.abs(Math.sin(cycle * 2)) * 0.18;
      threeContactShadow.scale.set(shadowScale, shadowScale, 1);
    }

    if (threeRenderer && threeScene && threeCamera) {
      threeRenderer.render(threeScene, threeCamera);
    }
  }

  // 3. Animate 2D Sprite Runner Fallback (smoothly synchronized)
  const runnerSprite = document.getElementById("runnerSprite");
  const runnerBobWrap = document.getElementById("runnerBobWrap");
  const runnerShadow = document.getElementById("runnerShadow");

  if (runnerSprite) {
    runnerSprite.style.left = `${curX.toFixed(2)}vw`;
    if (runnerBobWrap) {
      const bobY = Math.abs(Math.sin(expRunCycle * 2)) * -14;
      runnerBobWrap.style.transform = `translate3d(0, ${bobY.toFixed(1)}px, 0)`;
    }
    if (runnerShadow) {
      const shadowScale = 1 - Math.abs(Math.sin(expRunCycle * 2)) * 0.25;
      runnerShadow.style.transform = `translateX(-50%) scale(${shadowScale.toFixed(2)})`;
    }
  }

  // 4. Update Horizon Progress Fill & Dot
  const progressFill = document.getElementById("expProgressFill");
  const runnerDot = document.getElementById("expRunnerDot");
  if (progressFill) progressFill.style.width = `${(progress * 100).toFixed(1)}%`;
  if (runnerDot) runnerDot.style.left = `${curX.toFixed(2)}vw`;

  // 5. Giant Watermark: Default opacity 20% (0.20), increases brightness up to 100% (1.0) as character moves!
  const watermark = document.getElementById("expWatermark");
  if (watermark) {
    const minOp = 0.20;
    const maxOp = 1.00;
    const curOp = minOp + progress * (maxOp - minOp);
    watermark.style.opacity = curOp.toFixed(2);
  }

  // 6. Sequential Reveal of Experience Cards (Hidden at start, revealed as character runs to each milestone)
  const card1 = document.getElementById("expCard1");
  const card2 = document.getElementById("expCard2");
  const card3 = document.getElementById("expCard3");
  const card4 = document.getElementById("expCard4");

  if (progress < 0.05) {
    // Initial view: No cards visible yet
    if (card1) card1.classList.remove("active", "is-revealed");
    if (card2) card2.classList.remove("active", "is-revealed");
    if (card3) card3.classList.remove("active", "is-revealed");
    if (card4) card4.classList.remove("active", "is-revealed");
  } else if (progress < 0.28) {
    // Character at Milestone 1: Card 1 Active
    if (card1) { card1.classList.add("active"); card1.classList.remove("is-revealed"); }
    if (card2) card2.classList.remove("active", "is-revealed");
    if (card3) card3.classList.remove("active", "is-revealed");
    if (card4) card4.classList.remove("active", "is-revealed");
  } else if (progress < 0.54) {
    // Character at Milestone 2: Card 1 Revealed, Card 2 Active
    if (card1) { card1.classList.remove("active"); card1.classList.add("is-revealed"); }
    if (card2) { card2.classList.add("active"); card2.classList.remove("is-revealed"); }
    if (card3) card3.classList.remove("active", "is-revealed");
    if (card4) card4.classList.remove("active", "is-revealed");
  } else if (progress < 0.78) {
    // Character at Milestone 3: Cards 1 & 2 Revealed, Card 3 Active
    if (card1) { card1.classList.remove("active"); card1.classList.add("is-revealed"); }
    if (card2) { card2.classList.remove("active"); card2.classList.add("is-revealed"); }
    if (card3) { card3.classList.add("active"); card3.classList.remove("is-revealed"); }
    if (card4) card4.classList.remove("active", "is-revealed");
  } else {
    // Character at Milestone 4: Cards 1, 2, 3 Revealed, Card 4 Active
    if (card1) { card1.classList.remove("active"); card1.classList.add("is-revealed"); }
    if (card2) { card2.classList.remove("active"); card2.classList.add("is-revealed"); }
    if (card3) { card3.classList.remove("active"); card3.classList.add("is-revealed"); }
    if (card4) { card4.classList.add("active"); card4.classList.remove("is-revealed"); }
  }

  // 7. Scroll Hint Fades Out Once Scrolled
  const hint = document.getElementById("expScrollHint");
  if (hint) {
    hint.style.opacity = progress > 0.05 ? "0" : "1";
  }
}

function setupExperienceInteractions() {
  const viewExp = document.getElementById("view-experience");
  const track = document.getElementById("expScrollTrack");
  if (!viewExp || !track) return;

  // Initialize 3D Voxel Minecraft character
  initThreeVoxelRunner();

  // Scroll Driven Runner Synchronization
  viewExp.addEventListener("scroll", () => {
    const maxScroll = track.offsetHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    const scrollTop = viewExp.scrollTop;
    const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));

    const delta = progress - expProgress;
    expProgress = progress;
    expRunCycle += delta * 38;

    updateExperienceFrames(expProgress);
  }, { passive: true });

  // Clicking on any milestone card causes the character to run to that position
  document.querySelectorAll(".exp-card").forEach((card) => {
    card.addEventListener("click", () => {
      const step = parseInt(card.dataset.step, 10);
      const stepProgress = (step - 1) / 3;
      const maxScroll = track.offsetHeight - window.innerHeight;
      viewExp.scrollTo({
        top: stepProgress * maxScroll,
        behavior: "smooth"
      });
    });
  });

  // Footer Navigation inside Experience View
  const expFooter = document.getElementById("expEditorialFooter");
  if (expFooter) {
    expFooter.querySelectorAll(".footer-nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        if (target === "home") {
          switchView("home");
        } else if (target === "about") {
          switchView("about");
        } else if (target === "skills") {
          switchView("skills");
        } else if (target === "experience") {
          viewExp.scrollTo({ top: 0, behavior: "smooth" });
        } else if (target === "project") {
          switchView("project");
        } else if (target === "play") {
          switchView("play");
        }
      });
    });
  }
}

// ==========================================================================
// LANDING PAGE INTRO ANIMATION: VOXEL RUNNER PUSHING WHITE PANEL
// ==========================================================================
let introAnimationActive = false;
let introAnimationRaf = null;

function initLandingIntroAnimation() {
  const overlay = document.getElementById("introOverlay");
  const whitePanel = document.getElementById("introWhitePanel");
  const canvas = document.getElementById("introCanvas");
  const skipBtn = document.getElementById("introSkipBtn");

  if (!overlay || !whitePanel || !canvas) return;

  // On mobile view: Clean static layout, bypass heavy intro animation
  if (window.innerWidth <= 768) {
    document.body.classList.remove("intro-active");
    document.body.classList.add("intro-revealed");
    overlay.classList.add("is-finished");
    overlay.style.display = "none";
    return;
  }

  // If directly deep-linking to another view, dismiss intro immediately
  const hash = window.location.hash;
  const search = window.location.search;
  if (
    hash === "#skills" ||
    hash === "#about" ||
    hash === "#experience" ||
    hash === "#project" ||
    hash === "#play" ||
    search.includes("view=skills") ||
    search.includes("view=about") ||
    search.includes("view=experience") ||
    search.includes("view=project") ||
    search.includes("view=play")
  ) {
    document.body.classList.remove("intro-active", "intro-revealed");
    overlay.classList.add("is-finished");
    overlay.style.display = "none";
    return;
  }

  // Active intro: Keep ONLY 'ashok' visible, hiding header, pills, lines, and bio
  document.body.classList.add("intro-active");
  document.body.classList.remove("intro-revealed");

  if (typeof THREE === "undefined") {
    setTimeout(initLandingIntroAnimation, 100);
    return;
  }

  let width = window.innerWidth;
  let height = window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 1000);
  camera.position.set(0, 0, 24);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  // Balanced studio lighting (identical to experience scene)
  const ambient = new THREE.AmbientLight(0xffffff, 0.78);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.82);
  keyLight.position.set(16, 20, 22);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x94a3b8, 0.44);
  rimLight.position.set(-16, 12, -10);
  scene.add(rimLight);

  // Exact same character mesh reused from experience page!
  const char = createVoxelCharacterMesh();
  const runnerGroup = char.group;
  const isMobileIntro = width < 640;
  const introScale = isMobileIntro ? 0.48 : 0.68;
  runnerGroup.scale.set(introScale, introScale, introScale);

  // Exact hand offset from runnerGroup center to palm surface pressing against the wall
  const handOffset = isMobileIntro ? 1.25 : 1.72;

  // Frame character fully on the left (zero clipping, zero start glitch)
  const initialHalfWidth = Math.tan((camera.fov * Math.PI) / 360) * camera.position.z * camera.aspect;
  const initialWallX = -initialHalfWidth + (isMobileIntro ? 2.6 : 3.8);
  const startWorldX = initialWallX - handOffset;

  runnerGroup.position.set(startWorldX, isMobileIntro ? -1.65 : -2.4, 0);
  scene.add(runnerGroup);

  // 3D Solid White Wall Mesh (rendered in the same WebGL scene for 100% rock-solid, jitter-free sync)
  const wallWidth = 180;
  const wallHeight = 90;
  const wallGeo = new THREE.PlaneGeometry(wallWidth, wallHeight);
  // Shift geometry origin so (0,0) is at the exact LEFT edge of the wall plane
  wallGeo.translate(wallWidth / 2, 0, 0);
  const wallMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    depthWrite: true
  });
  const wallMesh = new THREE.Mesh(wallGeo, wallMat);
  wallMesh.position.set(initialWallX, 0, -0.05);
  scene.add(wallMesh);

  // Soft physical contact/drop shadow along the pushing edge of the white wall
  const shadowEdgeWidth = 1.8;
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = 128;
  shadowCanvas.height = 16;
  const sctx = shadowCanvas.getContext("2d");
  const grad = sctx.createLinearGradient(0, 0, 128, 0);
  grad.addColorStop(0, "rgba(0,0,0,0)");
  grad.addColorStop(0.65, "rgba(0,0,0,0.18)");
  grad.addColorStop(1, "rgba(0,0,0,0.45)");
  sctx.fillStyle = grad;
  sctx.fillRect(0, 0, 128, 16);

  const shadowTex = new THREE.CanvasTexture(shadowCanvas);
  const shadowEdgeGeo = new THREE.PlaneGeometry(shadowEdgeWidth, wallHeight);
  shadowEdgeGeo.translate(-shadowEdgeWidth / 2, 0, 0); // Origin at right edge of shadow
  const shadowEdgeMat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    opacity: 0.85,
    depthWrite: false
  });
  const shadowEdgeMesh = new THREE.Mesh(shadowEdgeGeo, shadowEdgeMat);
  shadowEdgeMesh.position.set(0, 0, 0.02);
  wallMesh.add(shadowEdgeMesh);

  // Render initial frame immediately, then hide the DOM white panel to prevent dual-compositor lag
  renderer.render(scene, camera);
  if (whitePanel) {
    whitePanel.style.display = "none";
  }

  // Realistic soft radial contact shadow under runner's feet
  const charShadowCanvas = document.createElement("canvas");
  charShadowCanvas.width = 128;
  charShadowCanvas.height = 128;
  const csCtx = charShadowCanvas.getContext("2d");
  const charShadowGrad = csCtx.createRadialGradient(64, 64, 0, 64, 64, 60);
  charShadowGrad.addColorStop(0, "rgba(0, 0, 0, 0.72)");
  charShadowGrad.addColorStop(0.30, "rgba(0, 0, 0, 0.44)");
  charShadowGrad.addColorStop(0.65, "rgba(0, 0, 0, 0.14)");
  charShadowGrad.addColorStop(0.88, "rgba(0, 0, 0, 0.02)");
  charShadowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
  csCtx.fillStyle = charShadowGrad;
  csCtx.fillRect(0, 0, 128, 128);
  const charShadowTex = new THREE.CanvasTexture(charShadowCanvas);

  const charShadowW = isMobileIntro ? 2.0 : 2.6;
  const charShadowH = isMobileIntro ? 1.0 : 1.3;
  const shadowGeo = new THREE.PlaneGeometry(charShadowW, charShadowH);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: charShadowTex,
    transparent: true,
    opacity: 0.75,
    depthWrite: false
  });
  const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
  contactShadow.rotation.x = -Math.PI / 2;
  const footOffset = isMobileIntro ? 0.28 : 0.40;
  contactShadow.position.set(startWorldX - footOffset, isMobileIntro ? -4.3 : -5.85, 0.02);
  scene.add(contactShadow);

  // References to the 5 letters of 'ashok'
  const introLetterNodes = [
    { el: document.getElementById("char-a"), triggerX: 0, triggered: false },
    { el: document.getElementById("char-s"), triggerX: 0, triggered: false },
    { el: document.getElementById("char-h"), triggerX: 0, triggered: false },
    { el: document.getElementById("char-o"), triggerX: 0, triggered: false },
    { el: document.getElementById("char-k"), triggerX: 0, triggered: false }
  ];

  // Pre-cache letter trigger X positions to eliminate layout thrashing during animation
  function measureLetterPositions() {
    introLetterNodes.forEach((node) => {
      if (node.el) {
        node.triggered = false;
        node.el.classList.remove("color-revealed", "spring-revealed");
        const rect = node.el.getBoundingClientRect();
        node.triggerX = rect.left + rect.width * 0.2;
      }
    });
  }
  measureLetterPositions();

  introAnimationActive = true;
  let lastNow = performance.now();
  let animProgress = 0;
  let runStrideCycle = 0;
  const totalDuration = 3.2; // Silky smooth 3.2s duration with responsive immediate momentum

  function finishIntro() {
    if (!introAnimationActive) return;
    introAnimationActive = false;
    if (introAnimationRaf) cancelAnimationFrame(introAnimationRaf);

    // Ensure all letters have their full colors revealed
    introLetterNodes.forEach((node) => {
      if (node.el) {
        node.triggered = true;
        node.el.classList.add("color-revealed");
      }
    });

    // Smoothly reveal nav and texts (pills, connectors, bio text, bottom dock)
    document.body.classList.remove("intro-active");
    document.body.classList.add("intro-revealed");

    overlay.classList.add("is-finished");
    setTimeout(() => {
      overlay.style.display = "none";
      try {
        renderer.dispose();
      } catch (_) { }
    }, 550);

    // Clean up temporary classes after staggered entrance finishes
    setTimeout(() => {
      document.body.classList.remove("intro-revealed");
      introLetterNodes.forEach((node) => {
        if (node.el) {
          node.el.classList.remove("spring-revealed", "color-revealed");
        }
      });
    }, 1200);
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      finishIntro();
    });
  }

  // Allow replaying anytime
  window.replayLandingIntro = () => {
    document.body.classList.add("intro-active");
    document.body.classList.remove("intro-revealed");
    overlay.classList.remove("is-finished");
    overlay.style.display = "block";
    overlay.style.opacity = "1";
    initLandingIntroAnimation();
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && introAnimationActive) {
      finishIntro();
    }
  });

  window.addEventListener("resize", () => {
    if (!introAnimationActive) return;
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    const isMob = width < 640;
    const sc = isMob ? 0.48 : 0.68;
    runnerGroup.scale.set(sc, sc, sc);
    runnerGroup.position.y = isMob ? -1.65 : -2.4;
    contactShadow.position.y = isMob ? -4.3 : -5.85;
    measureLetterPositions();
  });

  function animate(now) {
    if (!introAnimationActive) return;

    // High-precision delta time clamped to 32ms max:
    // Guarantees zero jumping/teleporting even if browser has a momentary lag or GC pause!
    const dt = Math.min(Math.max((now - lastNow) / 1000, 0.001), 0.032);
    lastNow = now;

    // Advance progress continuously
    animProgress += dt / totalDuration;
    const rawP = Math.min(1, Math.max(0, animProgress));

    // Responsive athletic push curve:
    // Immediate forward motion from frame 1 to eliminate any delay or feeling of getting stuck ("struk")
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const p = 0.18 * rawP + 0.82 * easeInOutCubic(rawP);

    // World X travel for the wall's pushing edge:
    // Starts gracefully on left edge with character framed, ends past right edge
    const visibleHalfWidth = Math.tan((camera.fov * Math.PI) / 360) * camera.position.z * camera.aspect;
    const isMob = width < 640;
    const currentHandOffset = isMob ? 1.25 : 1.72;

    const wallStartX = -visibleHalfWidth + (isMob ? 2.6 : 3.8);
    const wallEndX = visibleHalfWidth + 3.5;
    const wallCurrentX = wallStartX + p * (wallEndX - wallStartX);

    // Wall position (left edge locked to wallCurrentX)
    wallMesh.position.x = wallCurrentX;

    // Hands glued perfectly flush to the white wall edge (no air gap, no clipping, 0ms latency!)
    const runnerX = wallCurrentX - currentHandOffset;
    runnerGroup.position.x = runnerX;
    const shadowFootOffset = isMob ? 0.28 : 0.40;
    contactShadow.position.x = runnerX - shadowFootOffset;

    // Dynamic contact shadow response during running strides (stays safely under feet, never touches wall)
    const strideBounce = Math.sin(runStrideCycle * 2);
    contactShadow.scale.set(1.0 + strideBounce * 0.05, 1.0 + strideBounce * 0.03, 1.0);
    shadowMat.opacity = 0.70 + strideBounce * 0.08;

    // Convert wall world X to screen pixel X to trigger letters smoothly without layout thrashing
    const wallScreenPixelX = ((wallCurrentX + visibleHalfWidth) / (2 * visibleHalfWidth)) * width;
    for (let i = 0; i < introLetterNodes.length; i++) {
      const node = introLetterNodes[i];
      if (!node.triggered && node.el && wallScreenPixelX >= node.triggerX) {
        node.triggered = true;
        node.el.classList.add("color-revealed", "spring-revealed");
      }
    }

    // Steady, powerful athletic push kinematics:
    // Continuous time-driven rhythm (zero freezing, zero jerking, pure continuous gait)
    const strideSpeed = 9.5 + p * 3.5;
    runStrideCycle += dt * strideSpeed;

    // Both arms extended forward pressing flat on the white wall surface (rock solid posture)
    char.leftArmPivot.rotation.x = -1.45;
    char.rightArmPivot.rotation.x = -1.45;
    char.leftArmPivot.rotation.z = 0.10;
    char.rightArmPivot.rotation.z = -0.10;
    char.leftArmPivot.rotation.y = -0.04;
    char.rightArmPivot.rotation.y = 0.04;

    // Athletic forward lean into the push
    char.bodyPivot.rotation.z = -0.22;
    char.headGroup.rotation.z = 0.08;

    // Pure continuous harmonic hip/torso bounce
    char.bodyPivot.position.y = (Math.sin(runStrideCycle * 2) * 0.5 + 0.5) * 0.05;

    // Powerful, rhythmic running leg strides pushing against the ground
    const stride = Math.sin(runStrideCycle) * 0.72;
    char.leftLegPivot.rotation.x = stride;
    char.rightLegPivot.rotation.x = -stride;
    char.leftLegPivot.rotation.z = 0.04;
    char.rightLegPivot.rotation.z = -0.04;

    renderer.render(scene, camera);

    if (rawP >= 1) {
      finishIntro();
    } else {
      introAnimationRaf = requestAnimationFrame(animate);
    }
  }

  introAnimationRaf = requestAnimationFrame(animate);
}

// ==========================================================================
// PROJECT & CASE STUDIES ENGINE (Selected Works & Interactive Modals)
// ==========================================================================

const projectCaseStudies = {
  "vr-della": {
    category: "UI/UX & PRODUCT",
    year: "2025",
    title: "VR Della Cloud Suite",
    subtitle: "Enterprise Cloud Infrastructure & Telemetry Analytics Platform",
    client: "VR Della IT Services",
    role: "Lead UI/UX & Product Designer",
    timeline: "June 2025 – July 2025",
    deliverables: "Design System, Live Telemetry Dashboard, User Flows, Figma Specs",
    challenge: "Enterprise DevOps and system administrators struggled with fragmented monitoring tools, visual noise, and high cognitive overload during incident triage across 1,400+ cloud clusters.",
    solution: "Architected a streamlined multi-tenant dashboard featuring high-contrast data visualization, predictive incident alerts, and modular telemetry widgets designed around critical operator workflows.",
    metrics: [
      { val: "+48%", lbl: "Triage Velocity" },
      { val: "40+", lbl: "Figma Components" },
      { val: "99.98%", lbl: "Platform Uptime SLA" }
    ],
    tags: ["Figma", "UI/UX Design", "Data Visualization", "Design Tokens", "Wireframing", "User Research"]
  },
  "genzo-kalki": {
    category: "BRAND & PACKAGING",
    year: "2025",
    title: "Genzo & Kalki Millets",
    subtitle: "Sustainable Agro-Brand Identity & Packaging Architecture",
    client: "Genzo Agrotech & Kalki Trust",
    role: "Lead Brand & Packaging Designer",
    timeline: "Feb 2025 – May 2025",
    deliverables: "Brand Identity, Retail Packaging, Typography Guidelines, Print Specs",
    challenge: "Traditional indigenous millets lacked modern shelf appeal in upscale organic retail markets, struggling against conventional processed grains with generic commodity packaging.",
    solution: "Designed a premium, tactile brand identity blending heritage agro-botanical motifs with minimalist typography, hot-stamped gold foil accents, and 100% biodegradable unbleached kraft pouch specifications.",
    metrics: [
      { val: "12", lbl: "Retail SKUs" },
      { val: "100%", lbl: "Eco-Kraft Specs" },
      { val: "+140%", lbl: "Shelf Pick Rate" }
    ],
    tags: ["Brand Identity", "Packaging Design", "Custom Typography", "Print Production", "Art Direction"]
  },
  "ztrategize": {
    category: "MOTION & VISUAL DESIGN",
    year: "2025 – PRESENT",
    title: "Ztrategize Creative Engine",
    subtitle: "Kinetic Brand Language & Digital Social Campaigns",
    client: "Ztrategize Agency",
    role: "Senior Visual & Motion Designer",
    timeline: "Dec 2025 – Present",
    deliverables: "Motion Design Systems, Social Media Creative Suites, Kinetic Typography, Interactive Prototypes",
    challenge: "Fast-moving digital tech brands needed to stand out on social feeds where audience attention spans are measured in milliseconds, without losing brand consistency.",
    solution: "Constructed an expressive kinetic motion design system with reusable 60fps micro-interaction libraries, bold neon typography angles, and high-converting video and social creative templates.",
    metrics: [
      { val: "1.8M+", lbl: "Organic Impressions" },
      { val: "60fps", lbl: "Motion Precision" },
      { val: "3.2x", lbl: "Engagement Lift" }
    ],
    tags: ["Motion Graphics", "Kinetic Typography", "Visual Communication", "Figma", "Campaign Strategy"]
  },
  "lumina": {
    category: "UI/UX & DESIGN SYSTEMS",
    year: "2024 – 2025",
    title: "Lumina Multi-Platform System",
    subtitle: "Tokenized Cross-Platform Component Architecture",
    client: "Open-Source & Labs",
    role: "Design System Architect",
    timeline: "Oct 2024 – Jan 2025",
    deliverables: "Token Architecture, Accessible Component Library, Figma Variables, Documentation",
    challenge: "Multi-platform products suffered from visual drift, inconsistent spacing tokens, and accessibility contrast failures across light, dark, and high-contrast modes.",
    solution: "Engineered an atomic, token-driven multi-platform design architecture with strict WCAG AAA contrast compliance, fluid typography scales, and automated Figma-to-code synchronization.",
    metrics: [
      { val: "80+", lbl: "Atomic Tokens" },
      { val: "100%", lbl: "WCAG AAA Compliant" },
      { val: "0 Drift", lbl: "Figma-to-Code Sync" }
    ],
    tags: ["Design Systems", "Design Tokens", "Accessibility (WCAG)", "Figma Variables", "Component Primitives"]
  }
};

function openProjectCaseStudy(projId) {
  const data = projectCaseStudies[projId];
  if (!data) return;

  const modal = document.getElementById("modal-project-detail");
  const backdrop = document.getElementById("modalBackdrop");
  if (!modal) return;

  const catEl = document.getElementById("caseStudyCategory");
  const yearEl = document.getElementById("caseStudyYear");
  const titleEl = document.getElementById("caseStudyTitle");
  const subtitleEl = document.getElementById("caseStudySubtitle");
  const clientEl = document.getElementById("caseStudyClient");
  const roleEl = document.getElementById("caseStudyRole");
  const timelineEl = document.getElementById("caseStudyTimeline");
  const deliverablesEl = document.getElementById("caseStudyDeliverables");
  const challengeEl = document.getElementById("caseStudyChallenge");
  const solutionEl = document.getElementById("caseStudySolution");

  if (catEl) catEl.textContent = data.category;
  if (yearEl) yearEl.textContent = data.year;
  if (titleEl) titleEl.textContent = data.title;
  if (subtitleEl) subtitleEl.textContent = data.subtitle;
  if (clientEl) clientEl.textContent = data.client;
  if (roleEl) roleEl.textContent = data.role;
  if (timelineEl) timelineEl.textContent = data.timeline;
  if (deliverablesEl) deliverablesEl.textContent = data.deliverables;
  if (challengeEl) challengeEl.textContent = data.challenge;
  if (solutionEl) solutionEl.textContent = data.solution;

  // Render Metrics
  const metricsGrid = document.getElementById("caseStudyMetricsGrid");
  if (metricsGrid) {
    metricsGrid.innerHTML = data.metrics.map(m => `
      <div class="impact-chip">
        <span class="impact-value">${m.val}</span>
        <span class="impact-label">${m.lbl}</span>
      </div>
    `).join("");
  }

  // Render Tags
  const tagsFlex = document.getElementById("caseStudyTagsFlex");
  if (tagsFlex) {
    tagsFlex.innerHTML = data.tags.map(t => `<span class="project-tag">${t}</span>`).join("");
  }

  if (backdrop) backdrop.classList.remove("hidden");
  modal.showModal();
}

function setupProjectInteractions() {
  // Initialize 3D Character at Laptop Workstation & Screen Dive-in OS
  try {
    initLaptopWorkstation();
  } catch (err) {
    console.error("Laptop workstation error:", err);
  }

  // Project Footer Navigation Buttons
  const projFooter = document.getElementById("projEditorialFooter");
  if (projFooter) {
    projFooter.querySelectorAll(".footer-nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        if (target === "home") {
          switchView("home");
        } else if (target === "about") {
          switchView("about");
        } else if (target === "skills") {
          switchView("skills");
        } else if (target === "experience") {
          switchView("experience");
        } else if (target === "project") {
          const viewProj = document.getElementById("view-project");
          if (viewProj) viewProj.scrollTo({ top: 0, behavior: "smooth" });
        } else if (target === "play") {
          switchView("play");
        }
      });
    });

    // Giant Brand Letter Hover in Project Footer
    projFooter.querySelectorAll(".footer-char").forEach((char) => {
      char.addEventListener("mouseenter", () => {
        char.style.transform = "translateY(-14px) scale(1.12)";
        char.style.color = "#FA8F19";
      });
      char.addEventListener("mouseleave", () => {
        char.style.transform = "";
        char.style.color = "";
      });
    });

    // Form submission
    const form = projFooter.querySelector(".proj-footer-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector(".proj-footer-input");
        if (input && input.value.trim()) {
          const btn = form.querySelector(".footer-action-btn");
          if (btn) btn.innerHTML = "✓";
          setTimeout(() => {
            if (btn) {
              btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
            }
            if (input) input.value = "";
          }, 2400);
        }
      });
    }
  }
}

// ==========================================================================
// PLAYGROUND & INTERACTIVE MINI-GAMES ENGINE
// ==========================================================================

const SoundEngine = {
  ctx: null,
  muted: false,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  },
  toggleMute() {
    this.muted = !this.muted;
    const soundText = document.getElementById("soundText");
    const soundIcon = document.getElementById("soundIcon");
    if (soundText) soundText.textContent = this.muted ? "SOUND: OFF" : "SOUND: ON";
    if (soundIcon) soundIcon.textContent = this.muted ? "🔇" : "🔊";
    return this.muted;
  },
  playTone(freq, type, duration, gainVal = 0.15) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (_) { }
  },
  playPop() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (_) { }
  },
  playCoin() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (_) { }
  },
  playLaser() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.22);
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch (_) { }
  },
  playKick() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 0.25);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (_) { }
  },
  playSnare() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(190, now);
      oscGain.gain.setValueAtTime(0.2, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);

      const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.22, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      noise.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      noise.start(now);
    } catch (_) { }
  },
  playHiHat() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.05);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 7000;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch (_) { }
  },
  playChord() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [261.63, 329.63, 392.00, 523.25]; // C major
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);
        gain.gain.setValueAtTime(0.1, now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + 0.6);
      });
    } catch (_) { }
  },
  playWin() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = this.ctx.currentTime;
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.16, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.4);
      });
    } catch (_) { }
  },
  playPartyPopper() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 1. Crisp physical POP! (party paper popper blast)
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.18));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const popFilter = this.ctx.createBiquadFilter();
      popFilter.type = "bandpass";
      popFilter.frequency.setValueAtTime(650, now);
      popFilter.frequency.exponentialRampToValueAtTime(140, now + 0.1);
      popFilter.Q.setValueAtTime(2.2, now);

      const popGain = this.ctx.createGain();
      popGain.gain.setValueAtTime(0.35, now);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

      noise.connect(popFilter);
      popFilter.connect(popGain);
      popGain.connect(this.ctx.destination);
      noise.start(now);

      // 2. Triumphant celebration fanfare arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + 0.04 + idx * 0.065);
        gain.gain.setValueAtTime(0.001, now + 0.04 + idx * 0.065);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.04 + idx * 0.065 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04 + idx * 0.065 + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + 0.04 + idx * 0.065);
        osc.stop(now + 0.04 + idx * 0.065 + 0.5);
      });
    } catch (_) {}
  },
  playBuzz() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(110, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch (_) { }
  },
  playSimonTone(idx) {
    if (this.muted) return;
    const tones = [329.63, 261.63, 220.00, 164.81]; // Green, Red, Yellow, Blue
    this.playTone(tones[idx] || 300, "triangle", 0.35, 0.22);
  }
};

let totalGamesPlayedCount = 0;
function incrementGamesPlayed() {
  totalGamesPlayedCount++;
  const el = document.getElementById("statGamesPlayed");
  if (el) el.textContent = totalGamesPlayedCount;
}

// Draggable Items Physics on Playground Stage
function setupPlaygroundDraggables() {
  const stage = document.getElementById("playgroundStage");
  if (!stage) return;
  const items = stage.querySelectorAll(".playground-item");
  let highestZ = 30;

  items.forEach((item) => {
    item.dataset.defTop = item.style.top;
    item.dataset.defLeft = item.style.left;
    item.dataset.defRight = item.style.right;
    item.dataset.defTransform = item.style.transform;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    const handle = item.querySelector(".card-drag-bar") ||
      item.querySelector(".sticky-header") ||
      item.querySelector(".sticky-pin") ||
      item;

    handle.addEventListener("pointerdown", (e) => {
      if (
        e.target.closest("button") ||
        e.target.closest("input") ||
        e.target.closest(".ttt-cell") ||
        e.target.closest(".mem-card") ||
        e.target.closest(".puzzle-tile") ||
        e.target.closest(".game-bubble") ||
        e.target.closest(".simon-quad") ||
        e.target.closest(".reaction-pad") ||
        e.target.closest(".tray-sticker") ||
        e.target.closest(".dropped-sticker") ||
        e.target.closest(".pad-btn")
      ) {
        return;
      }

      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

      const rect = item.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      startLeft = rect.left - stageRect.left;
      startTop = rect.top - stageRect.top;

      highestZ++;
      item.style.zIndex = highestZ;
      item.classList.add("is-dragging");
      handle.setPointerCapture(e.pointerId);
    });

    handle.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const newLeft = Math.max(-20, startLeft + dx);
      const newTop = Math.max(0, startTop + dy);
      item.style.left = `${newLeft}px`;
      item.style.top = `${newTop}px`;
      item.style.right = "auto";
    });

    const stopDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      item.classList.remove("is-dragging");
      try { handle.releasePointerCapture(e.pointerId); } catch (_) { }
    };

    handle.addEventListener("pointerup", stopDrag);
    handle.addEventListener("pointercancel", stopDrag);
  });

  // Reset / Rearrange button
  const resetBtn = document.getElementById("btnResetPlayground");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      SoundEngine.playPop();
      items.forEach((item, idx) => {
        setTimeout(() => {
          item.style.transition = "top 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.45s ease";
          item.style.top = item.dataset.defTop;
          item.style.left = item.dataset.defLeft;
          item.style.right = item.dataset.defRight || "";
          item.style.transform = item.dataset.defTransform;
          setTimeout(() => {
            item.style.transition = "";
          }, 450);
        }, idx * 25);
      });
    });
  }

  // Sound toggle button
  const soundBtn = document.getElementById("btnToggleSound");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => SoundEngine.toggleMute());
  }
}

// --- Universal Party Paper Popper Confetti Cannon System ---
function triggerPartyConfetti(targetEl) {
  const rect = targetEl ? targetEl.getBoundingClientRect() : {
    left: window.innerWidth / 2 - 140,
    top: window.innerHeight / 2 - 80,
    width: 280,
    height: 160
  };

  let container = document.getElementById("partyPopperContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "partyPopperContainer";
    container.style.cssText = "position: fixed; inset: 0; pointer-events: none; z-index: 999999; overflow: hidden;";
    document.body.appendChild(container);
  }

  const colors = [
    "#FF4365", "#00D9C0", "#FFD166", "#06D6A0",
    "#118AB2", "#8338EC", "#FF70A6", "#F97316",
    "#3B82F6", "#10B981", "#E11D48", "#FBBF24"
  ];
  const count = 90;
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height * 0.45;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    const isStreamer = Math.random() < 0.3;
    const w = isStreamer ? (Math.random() * 5 + 3) : (Math.random() * 8 + 6);
    const h = isStreamer ? (Math.random() * 18 + 12) : (Math.random() * 8 + 6);
    const color = colors[Math.floor(Math.random() * colors.length)];

    el.style.cssText = `
      position: absolute;
      width: ${w}px;
      height: ${h}px;
      background: ${color};
      top: ${originY}px;
      left: ${originX}px;
      border-radius: ${isStreamer ? "2px" : (Math.random() < 0.4 ? "50%" : "2px")};
      transform: translate(-50%, -50%);
      box-shadow: 0 1px 3px rgba(0,0,0,0.18);
      will-change: transform, opacity;
    `;
    container.appendChild(el);

    const angle = (Math.PI * (Math.random() * 1.5 - 0.75)) - Math.PI / 2;
    const speed = Math.random() * 14 + 7;
    let vx = Math.cos(angle) * speed;
    let vy = Math.sin(angle) * speed;
    let rotX = Math.random() * 360;
    let rotY = Math.random() * 360;
    let rotZ = Math.random() * 360;
    const vRotX = (Math.random() - 0.5) * 20;
    const vRotY = (Math.random() - 0.5) * 20;
    const vRotZ = (Math.random() - 0.5) * 16;
    let opacity = 1;
    let posX = originX;
    let posY = originY;
    const gravity = 0.38;
    const drag = 0.955;

    let frame = 0;
    function anim() {
      frame++;
      posX += vx;
      posY += vy;
      vy += gravity;
      vx *= drag;
      vy *= drag;
      rotX += vRotX;
      rotY += vRotY;
      rotZ += vRotZ;

      if (frame > 40) {
        opacity -= 0.022;
      }

      el.style.transform = `translate3d(${posX - originX}px, ${posY - originY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
      el.style.opacity = Math.max(0, opacity);

      if (opacity > 0 && posY < window.innerHeight + 80) {
        requestAnimationFrame(anim);
      } else {
        el.remove();
      }
    }
    requestAnimationFrame(anim);
  }
}

// Mini-Game 1: Tic-Tac-Toe
function setupTicTacToe() {
  const board = document.getElementById("tttBoard");
  if (!board) return;
  const cells = board.querySelectorAll(".ttt-cell");
  const turnIndicator = document.getElementById("tttTurnIndicator");
  const scoreXEl = document.getElementById("tttScoreX");
  const scoreOEl = document.getElementById("tttScoreO");
  const scoreTieEl = document.getElementById("tttScoreTie");
  const resetBtn = document.getElementById("btnResetTTT");
  const modeBtns = document.querySelectorAll(".ttt-mode-btn");

  let state = Array(9).fill(null);
  let currentTurn = "X";
  let mode = "ai";
  let gameOver = false;
  let scoreX = 0;
  let scoreO = 0;
  let scoreTie = 0;

  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      mode = btn.dataset.tttMode;
      resetGame();
    });
  });

  const winLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  function checkWin(bState) {
    for (const [a, b, c] of winLines) {
      if (bState[a] && bState[a] === bState[b] && bState[a] === bState[c]) {
        return { winner: bState[a], line: [a, b, c] };
      }
    }
    if (bState.every((cell) => cell !== null)) {
      return { winner: "tie" };
    }
    return null;
  }

  function render() {
    cells.forEach((cell, idx) => {
      cell.textContent = state[idx] || "";
      cell.classList.remove("cell-x", "cell-o", "win-pulse");
      if (state[idx] === "X") cell.classList.add("cell-x");
      if (state[idx] === "O") cell.classList.add("cell-o");
    });
  }

  function handleCellClick(idx) {
    if (gameOver || state[idx] !== null) return;
    if (mode === "ai" && currentTurn !== "X") return;

    makeMove(idx, currentTurn);

    const winResult = checkWin(state);
    if (winResult) {
      endGame(winResult);
      return;
    }

    if (mode === "ai") {
      currentTurn = "O";
      if (turnIndicator) turnIndicator.innerHTML = 'CPU Thinking... <span class="player-o">O</span>';
      setTimeout(() => {
        if (gameOver) return;
        aiMove();
      }, 420);
    } else {
      currentTurn = currentTurn === "X" ? "O" : "X";
      if (turnIndicator) {
        turnIndicator.innerHTML = `Turn: <span class="player-${currentTurn.toLowerCase()}">${currentTurn}</span>`;
      }
    }
  }

  function makeMove(idx, player) {
    state[idx] = player;
    SoundEngine.playPop();
    render();
  }

  function aiMove() {
    let chosenIdx = null;

    // 1. Can O win?
    for (let i = 0; i < 9; i++) {
      if (state[i] === null) {
        const copy = [...state];
        copy[i] = "O";
        if (checkWin(copy)?.winner === "O") {
          chosenIdx = i;
          break;
        }
      }
    }

    // 2. Must O block X?
    if (chosenIdx === null) {
      for (let i = 0; i < 9; i++) {
        if (state[i] === null) {
          const copy = [...state];
          copy[i] = "X";
          if (checkWin(copy)?.winner === "X") {
            chosenIdx = i;
            break;
          }
        }
      }
    }

    // 3. Center
    if (chosenIdx === null && state[4] === null) chosenIdx = 4;

    // 4. Corners
    if (chosenIdx === null) {
      const corners = [0, 2, 6, 8].filter((i) => state[i] === null);
      if (corners.length) chosenIdx = corners[Math.floor(Math.random() * corners.length)];
    }

    // 5. Open sides
    if (chosenIdx === null) {
      const available = state.map((v, i) => v === null ? i : null).filter((v) => v !== null);
      if (available.length) chosenIdx = available[Math.floor(Math.random() * available.length)];
    }

    if (chosenIdx !== null) {
      makeMove(chosenIdx, "O");
      const winResult = checkWin(state);
      if (winResult) {
        endGame(winResult);
      } else {
        currentTurn = "X";
        if (turnIndicator) turnIndicator.innerHTML = 'Your Turn: <span class="player-x">X</span>';
      }
    }
  }

  function endGame(result) {
    gameOver = true;
    incrementGamesPlayed();
    if (result.winner === "tie") {
      scoreTie++;
      if (scoreTieEl) scoreTieEl.textContent = scoreTie;
      if (turnIndicator) turnIndicator.innerHTML = '<strong>🤝 IT\'S A DRAW!</strong>';
      SoundEngine.playBuzz();
    } else {
      if (result.winner === "X") {
        scoreX++;
        if (scoreXEl) scoreXEl.textContent = scoreX;
        if (turnIndicator) turnIndicator.innerHTML = '🎉 <strong class="player-x">X WINS!</strong>';
        SoundEngine.playPartyPopper();
        triggerPartyConfetti(board);
      } else {
        scoreO++;
        if (scoreOEl) scoreOEl.textContent = scoreO;
        if (mode === "ai") {
          // Computer won: Show CPU wins with Buzz sound, NO paper pop!
          if (turnIndicator) turnIndicator.innerHTML = '🤖 <strong class="player-o">O WINS!</strong>';
          SoundEngine.playBuzz();
        } else {
          // Human player 2 won in 2P mode:
          if (turnIndicator) turnIndicator.innerHTML = '🎉 <strong class="player-o">O WINS!</strong>';
          SoundEngine.playPartyPopper();
          triggerPartyConfetti(board);
        }
      }
      result.line?.forEach((idx) => {
        cells[idx]?.classList.add("win-pulse");
      });
    }
  }

  function resetGame() {
    state = Array(9).fill(null);
    gameOver = false;
    currentTurn = "X";
    if (turnIndicator) turnIndicator.innerHTML = 'Your Turn: <span class="player-x">X</span>';
    render();
    cells.forEach((c) => c.classList.remove("win-pulse"));
  }

  cells.forEach((cell, idx) => {
    cell.addEventListener("click", () => handleCellClick(idx));
  });

  if (resetBtn) resetBtn.addEventListener("click", resetGame);
  resetGame();
}

// Mini-Game 2: Memory Match
function setupMemoryMatch() {
  const grid = document.getElementById("memoryGrid");
  if (!grid) return;
  const movesEl = document.getElementById("memMovesCount");
  const matchesEl = document.getElementById("memMatchesCount");
  const winBanner = document.getElementById("memWinBanner");
  const resetBtn = document.getElementById("btnResetMemory");

  const icons = ["🚀", "🎨", "⚡", "💎", "👾", "🍕"];
  let flipped = [];
  let matchedCount = 0;
  let moves = 0;
  let isLocked = false;

  function initGame() {
    grid.innerHTML = "";
    flipped = [];
    matchedCount = 0;
    moves = 0;
    isLocked = false;
    if (movesEl) movesEl.textContent = "0";
    if (matchesEl) matchesEl.textContent = "0/6";
    if (winBanner) winBanner.classList.add("hidden");

    const deck = [...icons, ...icons].sort(() => Math.random() - 0.5);
    deck.forEach((icon, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "mem-card";
      card.dataset.index = idx;
      card.dataset.icon = icon;
      card.innerHTML = `
        <div class="mem-card-inner">
          <div class="mem-card-front">?</div>
          <div class="mem-card-back">${icon}</div>
        </div>
      `;
      card.addEventListener("click", () => flipCard(card, icon));
      grid.appendChild(card);
    });
  }

  function flipCard(card, icon) {
    if (isLocked || card.classList.contains("is-flipped") || card.classList.contains("is-matched")) return;

    card.classList.add("is-flipped");
    SoundEngine.playPop();
    flipped.push({ card, icon });

    if (flipped.length === 2) {
      moves++;
      if (movesEl) movesEl.textContent = moves;
      isLocked = true;

      const [c1, c2] = flipped;
      if (c1.icon === c2.icon) {
        SoundEngine.playCoin();
        c1.card.classList.add("is-matched");
        c2.card.classList.add("is-matched");
        matchedCount++;
        if (matchesEl) matchesEl.textContent = `${matchedCount}/6`;
        flipped = [];
        isLocked = false;

        if (matchedCount === 6) {
          incrementGamesPlayed();
          SoundEngine.playPartyPopper();
          triggerPartyConfetti(grid);
          if (winBanner) winBanner.classList.remove("hidden");
        }
      } else {
        setTimeout(() => {
          c1.card.classList.remove("is-flipped");
          c2.card.classList.remove("is-flipped");
          flipped = [];
          isLocked = false;
        }, 800);
      }
    }
  }

  if (resetBtn) resetBtn.addEventListener("click", initGame);
  initGame();
}

// Mini-Game 3: Reaction Speed Test
function setupReactionTest() {
  const pad = document.getElementById("reactionPad");
  if (!pad) return;
  const iconEl = document.getElementById("reactionIcon");
  const mainTextEl = document.getElementById("reactionMainText");
  const subTextEl = document.getElementById("reactionSubText");
  const bestScoreEl = document.getElementById("reactionBestScore");
  const gradeEl = document.getElementById("reactionGrade");
  const statBestReflex = document.getElementById("statBestReaction");

  let state = "ready";
  let timerId = null;
  let startTime = 0;
  let bestScore = Infinity;

  function setState(newState) {
    state = newState;
    pad.classList.remove("state-ready", "state-waiting", "state-go", "state-result", "state-early");
    pad.classList.add(`state-${newState}`);
  }

  pad.addEventListener("click", () => {
    if (state === "ready" || state === "result") {
      setState("waiting");
      if (iconEl) iconEl.textContent = "⏳";
      if (mainTextEl) mainTextEl.textContent = "WAIT FOR GREEN...";
      if (subTextEl) subTextEl.textContent = "Get ready. Don't click yet!";
      SoundEngine.playPop();

      const delay = 1400 + Math.random() * 3200;
      timerId = setTimeout(() => {
        setState("go");
        if (iconEl) iconEl.textContent = "⚡";
        if (mainTextEl) mainTextEl.textContent = "CLICK NOW! 🔥";
        if (subTextEl) subTextEl.textContent = "TAP AS FAST AS YOU CAN!";
        startTime = performance.now();
        SoundEngine.playCoin();
      }, delay);

    } else if (state === "waiting") {
      clearTimeout(timerId);
      setState("early");
      if (iconEl) iconEl.textContent = "⚠️";
      if (mainTextEl) mainTextEl.textContent = "TOO SOON!";
      if (subTextEl) subTextEl.textContent = "Click to try again.";
      SoundEngine.playBuzz();
      state = "ready";

    } else if (state === "go") {
      const score = Math.round(performance.now() - startTime);
      setState("result");
      incrementGamesPlayed();
      if (iconEl) iconEl.textContent = "🎯";
      if (mainTextEl) mainTextEl.textContent = `${score} ms`;

      let rank = "";
      if (score < 200) {
        rank = "⚡ GODLIKE REFLEXES!";
        SoundEngine.playPartyPopper();
        triggerPartyConfetti(pad);
      } else if (score < 260) {
        rank = "🏆 ESPORTS PRO!";
        SoundEngine.playPartyPopper();
        triggerPartyConfetti(pad);
      } else if (score < 330) {
        rank = "✨ SHARP & QUICK!";
        SoundEngine.playCoin();
      } else {
        rank = "☕ A BIT SLEEPY, RETRY!";
        SoundEngine.playPop();
      }

      if (subTextEl) subTextEl.textContent = `${rank} Click to test again!`;
      if (gradeEl) gradeEl.textContent = rank;

      if (score < bestScore) {
        bestScore = score;
        if (bestScoreEl) bestScoreEl.textContent = `${bestScore} ms`;
        if (statBestReflex) statBestReflex.textContent = `${bestScore}ms`;
      }
    }
  });

  const resetBtn = document.getElementById("btnResetReaction");
  if (resetBtn) {
    resetBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      clearTimeout(timerId);
      setState("ready");
      if (iconEl) iconEl.textContent = "⚡";
      if (mainTextEl) mainTextEl.textContent = "CLICK TO START";
      if (subTextEl) subTextEl.textContent = "When it turns GREEN, click as fast as you can!";
      SoundEngine.playPop();
    });
  }
}

// Mini-Game 4: 8-Puzzle Slider
function setup8Puzzle() {
  const board = document.getElementById("puzzleBoard");
  if (!board) return;
  const movesEl = document.getElementById("puzzleMovesCount");
  const solvedBadge = document.getElementById("puzzleSolvedBadge");
  const shuffleBtn = document.getElementById("btnShufflePuzzle");

  let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  let moves = 0;

  function render() {
    board.innerHTML = "";
    tiles.forEach((val, idx) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = val === 0 ? "puzzle-tile tile-empty" : "puzzle-tile";
      tile.textContent = val === 0 ? "" : val;
      tile.dataset.index = idx;
      tile.dataset.val = val;
      if (val !== 0) {
        tile.addEventListener("click", () => handleTileClick(idx));
      }
      board.appendChild(tile);
    });
  }

  function handleTileClick(idx) {
    const emptyIdx = tiles.indexOf(0);
    const row = Math.floor(idx / 3);
    const col = idx % 3;
    const emptyRow = Math.floor(emptyIdx / 3);
    const emptyCol = emptyIdx % 3;

    const isAdjacent = (Math.abs(row - emptyRow) + Math.abs(col - emptyCol)) === 1;
    if (isAdjacent) {
      tiles[emptyIdx] = tiles[idx];
      tiles[idx] = 0;
      moves++;
      if (movesEl) movesEl.textContent = moves;
      SoundEngine.playPop();
      render();
      checkSolved();
    }
  }

  function checkSolved() {
    const isSolved = tiles.slice(0, 8).every((v, i) => v === i + 1) && tiles[8] === 0;
    if (isSolved && moves > 0) {
      incrementGamesPlayed();
      SoundEngine.playPartyPopper();
      triggerPartyConfetti(board);
      if (solvedBadge) solvedBadge.classList.remove("hidden");
    }
  }

  function shuffle() {
    moves = 0;
    if (movesEl) movesEl.textContent = "0";
    if (solvedBadge) solvedBadge.classList.add("hidden");

    tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    let emptyIdx = 8;
    for (let i = 0; i < 60; i++) {
      const row = Math.floor(emptyIdx / 3);
      const col = emptyIdx % 3;
      const neighbors = [];
      if (row > 0) neighbors.push(emptyIdx - 3);
      if (row < 2) neighbors.push(emptyIdx + 3);
      if (col > 0) neighbors.push(emptyIdx - 1);
      if (col < 2) neighbors.push(emptyIdx + 1);

      const nextIdx = neighbors[Math.floor(Math.random() * neighbors.length)];
      tiles[emptyIdx] = tiles[nextIdx];
      tiles[nextIdx] = 0;
      emptyIdx = nextIdx;
    }
    render();
  }

  if (shuffleBtn) shuffleBtn.addEventListener("click", shuffle);
  shuffle();
}

// Mini-Game 5: Bubble Pop 20s
function setupBubblePop() {
  const aquarium = document.getElementById("bubbleAquarium");
  if (!aquarium) return;
  const scoreEl = document.getElementById("bubbleScore");
  const timerEl = document.getElementById("bubbleTimer");
  const startBtn = document.getElementById("btnStartBubble");
  const promptEl = document.getElementById("bubblePrompt");

  let score = 0;
  let timeLeft = 20;
  let gameInterval = null;
  let spawnInterval = null;
  let isPlaying = false;

  const bubbleTypes = [
    { emoji: "🫧", pts: 1, size: 48, cls: "b-cyan" },
    { emoji: "🎈", pts: 2, size: 54, cls: "b-pink" },
    { emoji: "💎", pts: 3, size: 42, cls: "b-blue" },
    { emoji: "⭐", pts: 5, size: 40, cls: "b-gold" }
  ];

  function startGame() {
    if (isPlaying) return;
    isPlaying = true;
    score = 0;
    timeLeft = 20;
    if (scoreEl) scoreEl.textContent = "0";
    if (timerEl) timerEl.textContent = "20s";
    if (startBtn) startBtn.textContent = "PLAYING...";
    if (promptEl) promptEl.classList.add("hidden");

    aquarium.querySelectorAll(".game-bubble").forEach((b) => b.remove());
    SoundEngine.playCoin();

    gameInterval = setInterval(() => {
      timeLeft--;
      if (timerEl) timerEl.textContent = `${timeLeft}s`;
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);

    spawnInterval = setInterval(() => {
      if (!isPlaying) return;
      spawnBubble();
    }, 380);
  }

  function spawnBubble() {
    const type = bubbleTypes[Math.floor(Math.random() * bubbleTypes.length)];
    const bubble = document.createElement("button");
    bubble.type = "button";
    bubble.className = `game-bubble ${type.cls}`;
    bubble.textContent = type.emoji;
    bubble.style.width = `${type.size}px`;
    bubble.style.height = `${type.size}px`;

    const aqRect = aquarium.getBoundingClientRect();
    const maxX = Math.max(20, aqRect.width - type.size - 20);
    const startX = 10 + Math.random() * maxX;
    bubble.style.left = `${startX}px`;
    bubble.style.bottom = "-50px";

    const duration = 2.4 + Math.random() * 2.2;
    bubble.style.animation = `bubbleFloatUp ${duration}s linear forwards`;

    bubble.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      popBubble(bubble, type.pts);
    });

    aquarium.appendChild(bubble);

    setTimeout(() => {
      if (bubble.parentElement) bubble.remove();
    }, duration * 1000);
  }

  function popBubble(bubble, pts) {
    score += pts;
    if (scoreEl) scoreEl.textContent = score;
    if (pts >= 3) SoundEngine.playCoin();
    else SoundEngine.playPop();

    bubble.classList.add("is-popping");
    const ptsIndicator = document.createElement("span");
    ptsIndicator.className = "bubble-pts-indicator";
    ptsIndicator.textContent = `+${pts}`;
    ptsIndicator.style.left = bubble.style.left;
    ptsIndicator.style.top = `${bubble.offsetTop}px`;
    aquarium.appendChild(ptsIndicator);

    setTimeout(() => {
      bubble.remove();
      ptsIndicator.remove();
    }, 450);
  }

  function endGame() {
    isPlaying = false;
    clearInterval(gameInterval);
    clearInterval(spawnInterval);
    incrementGamesPlayed();
    if (score >= 12) {
      SoundEngine.playPartyPopper();
      triggerPartyConfetti(aquarium);
    } else {
      SoundEngine.playWin();
    }

    if (startBtn) startBtn.textContent = "PLAY AGAIN 🎮";
    if (promptEl) {
      promptEl.classList.remove("hidden");
      promptEl.innerHTML = `<span>GAME OVER! 🏆</span><small>You scored ${score} points! Click Play Again.</small>`;
    }
  }

  if (startBtn) startBtn.addEventListener("click", startGame);

  const resetBtn = document.getElementById("btnResetBubble");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      clearInterval(gameInterval);
      clearInterval(spawnInterval);
      isPlaying = false;
      score = 0;
      timeLeft = 20;
      if (scoreEl) scoreEl.textContent = "0";
      if (timerEl) timerEl.textContent = "20s";
      if (startBtn) startBtn.textContent = "START 🎮";
      if (promptEl) {
        promptEl.classList.remove("hidden");
        promptEl.innerHTML = `<span>TAP POP POP!</span><small>Pop floating bubbles before time runs out!</small>`;
      }
      aquarium.querySelectorAll(".game-bubble, .bubble-pts-indicator").forEach((b) => b.remove());
      SoundEngine.playPop();
    });
  }
}

// Mini-Game 6: Odd Hue Out (Color Vision IQ)
function setupOddHueOut() {
  const stage = document.getElementById("hueGridStage");
  if (!stage) return;
  const roundEl = document.getElementById("hueRound");
  const streakEl = document.getElementById("hueStreak");
  const bestEl = document.getElementById("hueBest");
  const feedbackEl = document.getElementById("hueFeedback");
  const resetBtn = document.getElementById("btnResetHue");

  let round = 1;
  let streak = 0;
  let best = 0;
  let winnerIdx = -1;

  function generatePalette() {
    stage.innerHTML = "";
    // Random base HSL
    const baseH = Math.floor(Math.random() * 360);
    const baseS = 65 + Math.floor(Math.random() * 25); // 65% - 90%
    const baseL = 44 + Math.floor(Math.random() * 22); // 44% - 66%

    // Difficulty scales slightly with streak
    const delta = Math.max(3.8, 8.5 - streak * 0.45);
    const sign = Math.random() > 0.5 ? 1 : -1;
    const oddL = Math.max(15, Math.min(88, baseL + sign * delta));

    winnerIdx = Math.floor(Math.random() * 16);

    for (let i = 0; i < 16; i++) {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "hue-tile";
      tile.setAttribute("aria-label", `Swatch ${i + 1}`);
      const isWinner = (i === winnerIdx);
      const l = isWinner ? oddL : baseL;
      tile.style.backgroundColor = `hsl(${baseH}, ${baseS}%, ${l}%)`;

      tile.addEventListener("click", () => handleTileClick(isWinner, tile));
      stage.appendChild(tile);
    }
  }

  function handleTileClick(isWinner, tile) {
    if (isWinner) {
      tile.classList.add("hue-winner");
      streak++;
      round++;
      if (streak > best) best = streak;
      if (roundEl) roundEl.textContent = round;
      if (streakEl) streakEl.textContent = streak;
      if (bestEl) bestEl.textContent = best;
      if (feedbackEl) feedbackEl.textContent = `🔥 Nice eye! Streak: ${streak}`;
      if (streak >= 5 && streak % 5 === 0) {
        SoundEngine.playPartyPopper();
        triggerPartyConfetti(stage);
      } else {
        SoundEngine.playCoin();
      }
      incrementGamesPlayed();
      setTimeout(generatePalette, 350);
    } else {
      SoundEngine.playBuzz();
      streak = 0;
      if (streakEl) streakEl.textContent = "0";
      if (feedbackEl) feedbackEl.textContent = "Oops! Resetting streak. Try this one!";
      setTimeout(generatePalette, 500);
    }
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      SoundEngine.playPop();
      if (feedbackEl) feedbackEl.textContent = "Fresh palette loaded!";
      generatePalette();
    });
  }

  generatePalette();
}

// Mini-Game 7: Swipe Dilemmas Cards
function setupSwipeDilemmas() {
  const container = document.getElementById("swipeDeckContainer");
  if (!container) return;
  const leftBtn = document.getElementById("btnSwipeLeft");
  const rightBtn = document.getElementById("btnSwipeRight");
  const countTag = document.getElementById("swipeCardCount");
  const reshuffleBtn = document.getElementById("btnResetSwipe");

  const dilemmas = [
    { title: "Dark Mode vs Clean Paper", q: "Should editorial portfolios always feature a crisp white paper option?", passText: "Dark only", agreeText: "Pure Paper!", agreePct: "89%" },
    { title: "Figma Auto-Layout", q: "Is strict 8pt grid auto-layout better than spontaneous free-canvas positioning?", passText: "Chaos rules", agreeText: "8pt Grid forever", agreePct: "76%" },
    { title: "Editorial Typography", q: "Does a high-contrast serif typeface add instant prestige to modern software interfaces?", passText: "Sans only", agreeText: "Serif elevates", agreePct: "82%" },
    { title: "Vibe Coding at 2 AM", q: "Is the cleanest, most inspired frontend code written in an uninterrupted late-night flow state?", passText: "Morning lark", agreeText: "2 AM genius", agreePct: "94%" },
    { title: "Tactile Micro-Physics", q: "Should buttons and cards always react with physical weight, springs, and audio clicks?", passText: "Flat & dead", agreeText: "Make it tactile!", agreePct: "91%" }
  ];

  let activeIndex = 0;
  let isSwiping = false;

  function updateCount() {
    if (!countTag) return;
    if (activeIndex >= dilemmas.length) {
      countTag.textContent = `Completed 5 / 5 🎉`;
      countTag.style.color = "#16A34A";
    } else {
      countTag.textContent = `Card ${activeIndex + 1} / ${dilemmas.length}`;
      countTag.style.color = "#64748B";
    }
  }

  function renderDeck() {
    container.innerHTML = "";

    // If all cards completed -> Win State!
    if (activeIndex >= dilemmas.length) {
      const winCard = document.createElement("div");
      winCard.className = "swipe-win-card";
      winCard.innerHTML = `
        <div class="swipe-win-emoji">🎉</div>
        <div class="swipe-win-badge">🏆 LEVEL COMPLETED</div>
        <h4 class="swipe-win-title">ALL DILEMMAS SOLVED!</h4>
        <p class="swipe-win-desc">5 of 5 decisions conquered with supreme clarity!</p>
        <button type="button" class="btn-swipe-restart" id="btnSwipeRestart">↺ Play Again</button>
      `;
      container.appendChild(winCard);

      const restartBtn = winCard.querySelector("#btnSwipeRestart");
      if (restartBtn) {
        restartBtn.addEventListener("click", () => {
          activeIndex = 0;
          renderDeck();
          updateCount();
          SoundEngine.playPop();
        });
      }
      return;
    }

    // Render up to 3 cards in stack
    const remaining = dilemmas.length - activeIndex;
    const cardsToShow = Math.min(3, remaining);

    for (let i = 0; i < cardsToShow; i++) {
      const idx = activeIndex + i;
      const d = dilemmas[idx];
      const card = document.createElement("div");
      card.className = `swipe-card swipe-depth-${i}`;
      card.dataset.idx = idx;
      card.innerHTML = `
        <span class="swipe-badge">DILEMMA #${idx + 1}</span>
        <h4 class="swipe-card-title">${d.title}</h4>
        <p class="swipe-card-question">${d.q}</p>
      `;
      container.appendChild(card);
    }

    bindDragToTopCard();
  }

  function bindDragToTopCard() {
    const topCard = container.querySelector(".swipe-card.swipe-depth-0");
    if (!topCard) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const onPointerDown = (e) => {
      if (isSwiping) return;
      isDragging = true;
      startX = e.clientX;
      currentX = e.clientX;
      if (topCard.setPointerCapture) {
        try { topCard.setPointerCapture(e.pointerId); } catch (_) {}
      }
      topCard.style.transition = "none";
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      currentX = e.clientX;
      const deltaX = currentX - startX;
      const rot = deltaX * 0.12;
      topCard.style.transform = `translate(${deltaX}px, 0) rotate(${rot}deg)`;
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      topCard.style.transition = "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease";
      const deltaX = currentX - startX;
      if (deltaX > 60) {
        swipeCard("right");
      } else if (deltaX < -60) {
        swipeCard("left");
      } else {
        topCard.style.transform = "scale(1) translateY(0)";
      }
    };

    topCard.addEventListener("pointerdown", onPointerDown);
    topCard.addEventListener("pointermove", onPointerMove);
    topCard.addEventListener("pointerup", onPointerUp);
    topCard.addEventListener("pointercancel", onPointerUp);
  }

  function showFeedbackToast(pct, text) {
    const existing = container.querySelector(".swipe-feedback-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "swipe-feedback-toast";
    toast.innerHTML = `
      <span class="pct-num">${pct}</span>
      <span class="pct-label">${text}</span>
    `;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 250);
    }, 650);
  }

  function swipeCard(direction) {
    if (isSwiping || activeIndex >= dilemmas.length) return;
    const topCard = container.querySelector(".swipe-card.swipe-depth-0");
    if (!topCard) return;

    isSwiping = true;
    const d = dilemmas[activeIndex];

    if (direction === "right") {
      SoundEngine.playCoin();
      topCard.style.transform = "translate(160%, -15px) rotate(22deg)";
      showFeedbackToast(d.agreePct, "agreed with you!");
    } else {
      SoundEngine.playPop();
      topCard.style.transform = "translate(-160%, -15px) rotate(-22deg)";
      showFeedbackToast(d.agreePct, "agreed with your choice!");
    }
    topCard.style.opacity = "0";

    setTimeout(() => {
      activeIndex++;
      renderDeck();
      updateCount();
      isSwiping = false;

      // When finishing all cards: trigger Party Confetti & celebratory fanfare!
      if (activeIndex === dilemmas.length) {
        SoundEngine.playPartyPopper();
        triggerPartyConfetti(container);
      }
    }, 280);
  }

  if (leftBtn) leftBtn.addEventListener("click", () => swipeCard("left"));
  if (rightBtn) rightBtn.addEventListener("click", () => swipeCard("right"));
  if (reshuffleBtn) {
    reshuffleBtn.addEventListener("click", () => {
      activeIndex = 0;
      renderDeck();
      updateCount();
      SoundEngine.playPop();
    });
  }

  renderDeck();
  updateCount();
}

// Mini-Game 8: The Kerning Challenge (Typography Optical Spacing)
function setupTheKerningChallenge() {
  const display = document.getElementById("kernWordDisplay");
  const ghost = document.getElementById("kernGhostOverlay");
  const slider = document.getElementById("kernSlider");
  const scoreBadge = document.getElementById("kernScoreBadge");
  const feedbackEl = document.getElementById("kernFeedback");
  const checkBtn = document.getElementById("btnCheckKerning");
  const nextBtn = document.getElementById("btnNextKerning");

  if (!display || !slider) return;

  const words = [
    { text: "DESIGN", movableIdx: 3, idealOffset: 0 },
    { text: "AVALON", movableIdx: 2, idealOffset: 0 },
    { text: "TYPO",   movableIdx: 1, idealOffset: 0 },
    { text: "WARP",   movableIdx: 2, idealOffset: 0 },
    { text: "KERN",   movableIdx: 1, idealOffset: 0 },
    { text: "PIXEL",  movableIdx: 2, idealOffset: 0 },
    { text: "GLYPH",  movableIdx: 3, idealOffset: 0 },
    { text: "VECTOR", movableIdx: 3, idealOffset: 0 }
  ];

  let currentWordIdx = 0;
  let movableLetterEl = null;

  function loadWord(idx) {
    const w = words[idx % words.length];
    display.innerHTML = "";
    if (ghost) {
      ghost.textContent = w.text;
      ghost.classList.add("hidden");
    }

    // Set initial scrambled offset between -24 and +24 (never exactly 0)
    const initialOffset = (Math.random() > 0.5 ? 1 : -1) * (12 + Math.floor(Math.random() * 14));
    slider.value = initialOffset;

    for (let i = 0; i < w.text.length; i++) {
      const span = document.createElement("span");
      span.textContent = w.text[i];
      if (i === w.movableIdx) {
        span.className = "kern-movable-letter";
        span.title = "Drag slider to kern this letter";
        span.style.transform = `translateX(${initialOffset}px)`;
        movableLetterEl = span;
      } else {
        span.className = "kern-fixed-letter";
      }
      display.appendChild(span);
    }

    if (scoreBadge) scoreBadge.textContent = "-- / 100";
    if (feedbackEl) feedbackEl.textContent = "Adjust spacing & check score!";
  }

  slider.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    if (movableLetterEl) {
      movableLetterEl.style.transform = `translateX(${val}px)`;
    }
  });

  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      const val = parseFloat(slider.value);
      const diff = Math.abs(val);
      const score = Math.max(0, Math.round(100 - (diff * 2.85)));

      if (scoreBadge) scoreBadge.textContent = `${score} / 100`;
      if (ghost) ghost.classList.remove("hidden");

      let message = "";
      if (score >= 96) {
        message = "🏆 100% OPTICAL PERFECTION! Master Typographer!";
        SoundEngine.playPartyPopper();
        triggerPartyConfetti(display);
      } else if (score >= 85) {
        message = "✨ EXCELLENT EYE! Within 1-2px of perfect kerning.";
        SoundEngine.playCoin();
      } else if (score >= 68) {
        message = "👌 Decent balance, needs slightly tighter optical breath.";
        SoundEngine.playPop();
      } else {
        message = "⚠️ Letters feel disjointed. Check the green guideline!";
        SoundEngine.playBuzz();
      }

      if (feedbackEl) feedbackEl.textContent = message;
      incrementGamesPlayed();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentWordIdx++;
      loadWord(currentWordIdx);
      SoundEngine.playPop();
    });
  }

  loadWord(currentWordIdx);
}

// Mini-Game 9: 8-Bit Drum & Synth Beat Pad
function setupDrumBeatPad() {
  const padContainer = document.getElementById("cardGameDrum") || document.querySelector(".card-drum");
  if (!padContainer) return;
  const pads = padContainer.querySelectorAll(".pad-btn");

  const soundMap = {
    kick: () => SoundEngine.playKick(),
    snare: () => SoundEngine.playSnare(),
    hihat: () => SoundEngine.playHiHat(),
    coin: () => SoundEngine.playCoin(),
    laser: () => SoundEngine.playLaser(),
    chord: () => SoundEngine.playChord()
  };

  const keyMap = {
    q: "kick",
    w: "snare",
    e: "hihat",
    a: "coin",
    s: "laser",
    d: "chord"
  };

  let hasCountedPlay = false;

  function triggerPad(soundName) {
    // 1. Immediately wake up Web Audio context on user tap gesture
    SoundEngine.init();
    if (SoundEngine.ctx && SoundEngine.ctx.state === "suspended") {
      SoundEngine.ctx.resume();
    }

    // 2. Play synthesized 8-bit sound
    if (soundMap[soundName]) {
      soundMap[soundName]();
    }

    // 3. Increment played count on first hit
    if (!hasCountedPlay) {
      hasCountedPlay = true;
      incrementGamesPlayed();
    }

    // 4. Punchy visual feedback on pressed pad(s)
    document.querySelectorAll(`.pad-btn[data-sound="${soundName}"]`).forEach((pad) => {
      pad.classList.add("pad-pressed");
      setTimeout(() => pad.classList.remove("pad-pressed"), 180);
    });
  }

  pads.forEach((pad) => {
    let lastTap = 0;
    const handleTap = (e) => {
      e.stopPropagation();
      const now = Date.now();
      if (now - lastTap < 60) return; // Debounce rapid pointerdown/click duplicates
      lastTap = now;

      const sound = pad.dataset.sound;
      triggerPad(sound);
    };

    pad.addEventListener("pointerdown", handleTap);
    pad.addEventListener("click", handleTap);
  });

  window.addEventListener("keydown", (e) => {
    if (currentView !== "play") return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    const key = e.key.toLowerCase();
    if (keyMap[key]) {
      e.preventDefault();
      triggerPad(keyMap[key]);
    }
  });
}

// Game Theater Modal Overlay
function setupGameTheater() {
  const theater = document.getElementById("modalGameTheater");
  if (!theater) return;
  const stage = document.getElementById("theaterStageCanvas");
  const titleEl = document.getElementById("theaterGameTitle");
  const closeBtn = document.getElementById("btnTheaterClose");
  const resetBtn = document.getElementById("btnTheaterReset");

  let activeGameKey = null;

  document.querySelectorAll(".btn-card-expand").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const gameKey = btn.dataset.expand;
      openTheater(gameKey);
    });
  });

  function openTheater(gameKey) {
    activeGameKey = gameKey;
    const card = document.querySelector(`.game-card[data-game="${gameKey}"]`);
    if (!card || !stage) return;

    const gameName = card.querySelector(".card-drag-handle")?.textContent.replace("⠿", "").trim() || "MINI-GAME";
    if (titleEl) titleEl.textContent = gameName;

    stage.innerHTML = "";
    const innerBody = card.querySelector(".game-inner-body");
    if (innerBody) {
      const clone = innerBody.cloneNode(true);
      stage.appendChild(clone);
      rebindTheaterGame(gameKey, clone);
    }

    theater.showModal();
    SoundEngine.playPop();
  }

  function rebindTheaterGame(gameKey, container) {
    if (gameKey === "drum") {
      const soundMap = {
        kick: () => SoundEngine.playKick(),
        snare: () => SoundEngine.playSnare(),
        hihat: () => SoundEngine.playHiHat(),
        coin: () => SoundEngine.playCoin(),
        laser: () => SoundEngine.playLaser(),
        chord: () => SoundEngine.playChord()
      };
      container.querySelectorAll(".pad-btn").forEach((pad) => {
        let lastTap = 0;
        const handleTap = (e) => {
          e.stopPropagation();
          const now = Date.now();
          if (now - lastTap < 60) return;
          lastTap = now;

          SoundEngine.init();
          if (SoundEngine.ctx && SoundEngine.ctx.state === "suspended") {
            SoundEngine.ctx.resume();
          }

          const sound = pad.dataset.sound;
          if (soundMap[sound]) soundMap[sound]();
          pad.classList.add("pad-pressed");
          setTimeout(() => pad.classList.remove("pad-pressed"), 180);
        };
        pad.addEventListener("pointerdown", handleTap);
        pad.addEventListener("click", handleTap);
      });
    }
  }

  function closeTheater() {
    theater.close();
    if (stage) stage.innerHTML = "";
    activeGameKey = null;
  }

  if (closeBtn) closeBtn.addEventListener("click", closeTheater);
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (activeGameKey) {
        openTheater(activeGameKey);
      }
    });
  }

  theater.addEventListener("cancel", closeTheater);
}

// Play Editorial Footer Interactions
function setupPlayFooterInteractions() {
  const footer = document.getElementById("playEditorialFooter");
  if (!footer) return;

  footer.querySelectorAll(".footer-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if (target === "home") {
        switchView("home");
      } else if (target === "about") {
        switchView("about");
      } else if (target === "skills") {
        switchView("skills");
      } else if (target === "experience") {
        switchView("experience");
      } else if (target === "project") {
        switchView("project");
      } else if (target === "play") {
        const hViewport = document.getElementById("playHorizontalViewport");
        if (hViewport) hViewport.scrollTo({ left: 0, behavior: "smooth" });
      }
    });
  });

  footer.querySelectorAll(".footer-char").forEach((char) => {
    char.addEventListener("mouseenter", () => {
      char.style.transform = "translateY(-14px) scale(1.12)";
      char.style.color = "#FF4365";
    });
    char.addEventListener("mouseleave", () => {
      char.style.transform = "";
      char.style.color = "";
    });
  });

  const form = footer.querySelector(".play-footer-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".play-footer-input");
      if (input && input.value.trim()) {
        const btn = form.querySelector(".footer-action-btn");
        if (btn) btn.innerHTML = "✓";
        setTimeout(() => {
          if (btn) {
            btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
          }
          if (input) input.value = "";
        }, 2400);
      }
    });
  }
}

// Horizontal Playground Viewport & Scroll Engine
function setupPlaygroundHorizontalScroll() {
  const viewport = document.getElementById("playHorizontalViewport");
  const stage = document.getElementById("playgroundStage");
  const thumb = document.getElementById("playScrollThumb");
  const track = document.getElementById("playScrollTrack");
  const btnLeft = document.getElementById("btnScrollLeft");
  const btnRight = document.getElementById("btnScrollRight");
  const viewPlay = document.getElementById("view-play");

  if (!viewport) return;

  function updateScrollProgress() {
    if (!viewport || !thumb) return;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (maxScroll <= 0) {
      thumb.style.width = "100%";
      thumb.style.left = "0%";
      return;
    }
    const ratio = Math.max(0, Math.min(1, viewport.scrollLeft / maxScroll));
    const thumbWidthPercent = Math.max(12, Math.min(30, (viewport.clientWidth / viewport.scrollWidth) * 100));
    const travelRange = 100 - thumbWidthPercent;
    thumb.style.width = `${thumbWidthPercent}%`;
    thumb.style.left = `${ratio * travelRange}%`;
  }

  // Update on scroll & resize
  viewport.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);

  // Wheel listener: Converts vertical mouse wheel scroll (deltaY) into horizontal scrolling!
  // Prevents vertical page scrolling and glides the playground horizontally.
  viewPlay?.addEventListener("wheel", (e) => {
    // If modal is active, allow normal modal behavior
    const theater = document.getElementById("gameTheaterModal");
    if (theater && theater.classList.contains("active")) {
      return;
    }

    const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(delta) > 0) {
      e.preventDefault();
      viewport.scrollLeft += delta * 1.15;
      updateScrollProgress();
    }
  }, { passive: false });

  // Navigator buttons
  btnLeft?.addEventListener("click", () => {
    if (typeof SoundEngine !== "undefined") SoundEngine.playPop();
    viewport.scrollBy({ left: -460, behavior: "smooth" });
  });

  btnRight?.addEventListener("click", () => {
    if (typeof SoundEngine !== "undefined") SoundEngine.playPop();
    viewport.scrollBy({ left: 460, behavior: "smooth" });
  });

  // Track click to jump
  if (track) {
    track.addEventListener("click", (e) => {
      const rect = track.getBoundingClientRect();
      const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      viewport.scrollTo({
        left: clickRatio * maxScroll,
        behavior: "smooth"
      });
    });
  }

  // Drag canvas on empty space to pan horizontally
  let isPanning = false;
  let panStartX = 0;
  let panScrollStart = 0;

  viewport.addEventListener("pointerdown", (e) => {
    if (
      e.target.closest(".playground-item") ||
      e.target.closest("button") ||
      e.target.closest("input") ||
      e.target.closest("a") ||
      e.target.closest(".play-control-pill") ||
      e.target.closest(".play-scroll-navigator")
    ) {
      return;
    }
    isPanning = true;
    panStartX = e.clientX;
    panScrollStart = viewport.scrollLeft;
    viewport.classList.add("is-panning");
  });

  window.addEventListener("pointermove", (e) => {
    if (!isPanning) return;
    const dx = e.clientX - panStartX;
    viewport.scrollLeft = panScrollStart - dx;
    updateScrollProgress();
  });

  const stopPan = () => {
    if (isPanning) {
      isPanning = false;
      viewport.classList.remove("is-panning");
    }
  };
  window.addEventListener("pointerup", stopPan);
  window.addEventListener("pointercancel", stopPan);

  // Keyboard Arrow navigation (Left / Right)
  window.addEventListener("keydown", (e) => {
    if (!viewPlay || !viewPlay.classList.contains("active")) return;
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) return;
    const theater = document.getElementById("gameTheaterModal");
    if (theater && theater.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
      viewport.scrollBy({ left: 320, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      viewport.scrollBy({ left: -320, behavior: "smooth" });
    }
  });

  window.updatePlaygroundScrollProgress = updateScrollProgress;
  setTimeout(updateScrollProgress, 120);
}

// Playground Master Initialization Function
function setupPlaygroundEngine() {
  setupPlaygroundHorizontalScroll();
  setupPlaygroundDraggables();
  setupTicTacToe();
  setupMemoryMatch();
  setupReactionTest();
  setup8Puzzle();
  setupBubblePop();
  setupOddHueOut();
  setupSwipeDilemmas();
  setupTheKerningChallenge();
  setupDrumBeatPad();
  setupGameTheater();
  setupPlayFooterInteractions();
}

// --- Initialize ---
window.addEventListener("DOMContentLoaded", () => {
  // 1. Kick off intro animation IMMEDIATELY without waiting for heavy DOM/game setups!
  initLandingIntroAnimation();

  // 2. Light primary DOM setup needed right away
  applyLayout("readable");
  setupInteractiveLinks();
  setupNavigation();
  setupAboutInteractions();
  setupFooterInteractions();
  setupModals();
  setupBottomDock();

  // 3. Defer heavy secondary systems (5 playground games, 3D experience runner, card physics)
  // so the landing intro animation runs with zero stutter and solid 60fps!
  let deferredInitialized = false;
  const initDeferredSystems = () => {
    if (deferredInitialized) return;
    deferredInitialized = true;
    setupSkillsHoverScatter();
    setupJourneyCards();
    setupExperienceInteractions();
    try {
      setupProjectInteractions();
    } catch (err) {
      console.error("Error initializing project interactions:", err);
    }
    setupPlaygroundEngine();
  };
  window.__initDeferredSystems = initDeferredSystems;

  const isDeepLinked =
    window.location.hash.length > 1 ||
    window.location.search.includes("view=") ||
    document.documentElement.classList.contains("skip-intro");

  if (isDeepLinked) {
    initDeferredSystems();
  } else {
    setTimeout(initDeferredSystems, 100);
  }

  // Route according to hash / query parameter
  if (window.location.hash === "#skills" || window.location.search.includes("view=skills")) {
    switchView("skills", true);
  } else if (window.location.hash === "#about" || window.location.search.includes("view=about")) {
    switchView("about", true);
  } else if (window.location.hash === "#experience" || window.location.search.includes("view=experience")) {
    switchView("experience", true);
  } else if (window.location.hash === "#project" || window.location.search.includes("view=project")) {
    switchView("project", true);
  } else if (window.location.hash === "#play" || window.location.search.includes("view=play")) {
    switchView("play", true);
  }

  // Handle browser forward/back buttons
  window.addEventListener("popstate", () => {
    if (window.location.hash === "#about") {
      switchView("about", false);
    } else if (window.location.hash === "#skills") {
      switchView("skills", false);
    } else if (window.location.hash === "#experience") {
      switchView("experience", false);
    } else if (window.location.hash === "#project") {
      switchView("project", false);
    } else if (window.location.hash === "#play") {
      switchView("play", false);
    } else {
      switchView("home", false);
    }
  });

  // Testing hook for visual inspection
  if (window.location.search.includes("test=hover")) {
    setTimeout(() => {
      const pills = Array.from(document.querySelectorAll(".skill-pill"));
      const target = pills.find((p) => p.textContent.includes("VIBE CODING")) || pills[1];
      if (target) {
        const r = target.getBoundingClientRect();
        const x = r.left + r.width / 2;
        const y = r.top + r.height / 2;
        const cluster = document.getElementById("skillsCluster");
        cluster?.dispatchEvent(new PointerEvent("pointermove", { clientX: x, clientY: y, bubbles: true }));
        target.dispatchEvent(new PointerEvent("pointerenter", { clientX: x, clientY: y, bubbles: true }));
        target.classList.add("is-hovered");
      }
    }, 1300);
  }
});


