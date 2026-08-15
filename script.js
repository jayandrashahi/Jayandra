/**
 * script.js
 * All behavior for the Jayandra Shahi scrapbook portfolio.
 * Reads exclusively from window.CONTENT (content.js) — no personal data
 * is hardcoded here.
 */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ------------------------------------------------------------------
     Small icon set for room objects (single-color line icons, currentColor)
     ------------------------------------------------------------------ */
  const ICONS = {
    laptop: `<svg viewBox="0 0 64 48" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="6" width="44" height="28" rx="2"/><path d="M4 40h56l-4 4H8l-4-4z"/></svg>`,
    notebook: `<svg viewBox="0 0 48 60" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="34" height="52" rx="2"/><path d="M8 12h34M14 4v52" stroke-dasharray="1 4"/></svg>`,
    books: `<svg viewBox="0 0 60 48" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="10" width="14" height="32"/><rect x="22" y="6" width="14" height="36"/><rect x="38" y="14" width="14" height="28"/></svg>`,
    dumbbell: `<svg viewBox="0 0 64 32" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="8" height="12" rx="1"/><rect x="52" y="10" width="8" height="12" rx="1"/><path d="M16 16h32" stroke-width="4"/><rect x="12" y="13" width="6" height="6"/><rect x="46" y="13" width="6" height="6"/></svg>`,
    camera: `<svg viewBox="0 0 56 44" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="12" width="48" height="28" rx="3"/><path d="M20 12l4-6h8l4 6"/><circle cx="28" cy="26" r="9"/></svg>`,
    phone: `<svg viewBox="0 0 32 56" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="26" height="50" rx="4"/><path d="M13 46h6"/></svg>`,
    headphones: `<svg viewBox="0 0 56 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 30V24a22 22 0 0 1 44 0v6"/><rect x="2" y="28" width="10" height="16" rx="3"/><rect x="44" y="28" width="10" height="16" rx="3"/></svg>`,
    backpack: `<svg viewBox="0 0 48 56" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="14" width="32" height="36" rx="6"/><path d="M16 14v-4a8 8 0 0 1 16 0v4"/><rect x="18" y="26" width="12" height="10" rx="2"/></svg>`,
    atom: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="20" r="3" fill="currentColor" stroke="none"/><ellipse cx="20" cy="20" rx="16" ry="7"/><ellipse cx="20" cy="20" rx="16" ry="7" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="16" ry="7" transform="rotate(120 20 20)"/></svg>`,
    coin: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="20" r="16"/><path d="M20 12v16M16 15h6a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6"/></svg>`,
    brain: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 0-6 6 5 5 0 0 0-2 9 6 6 0 0 0 6 9h4V8h-2zM24 8a6 6 0 0 1 6 6 5 5 0 0 1 2 9 6 6 0 0 1-6 9h-4V8h2z"/></svg>`,
    film: `<svg viewBox="0 0 44 32" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="40" height="28" rx="2"/><path d="M2 10h40M2 22h40M12 2v28M32 2v28"/></svg>`,
    muscle: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22c0-8 4-14 10-14 3 0 4 2 4 4-4 0-6 3-6 7 0 6 4 10 10 10 6 0 10-5 10-11" /></svg>`,
    book: `<svg viewBox="0 0 36 40" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8c-4-4-10-4-14-2v28c4-2 10-2 14 2 4-4 10-4 14-2V6c-4-2-10-2-14 2z"/><path d="M18 8v28"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7.1L12 17.9 5.8 21.3 7 14.2 2 9.3l7.1-.7z"/></svg>`,
    controller: `<svg viewBox="0 0 48 28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6h24a10 10 0 0 1 10 12l-1 4a4 4 0 0 1-7 2l-4-5H14l-4 5a4 4 0 0 1-7-2l-1-4A10 10 0 0 1 12 6z"/><path d="M14 12v6M11 15h6"/><circle cx="34" cy="12" r="1.5" fill="currentColor"/><circle cx="38" cy="16" r="1.5" fill="currentColor"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2h3a5 5 0 0 0 4 4v3a8 8 0 0 1-4-1.2V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l.5-4H13V6.5A1.5 1.5 0 0 1 14.5 5H16V1.5S14.7 1 13.4 1C10.9 1 9 2.6 9 5.3V9H6v4h3v9h4z"/></svg>`,
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderNav();
    renderRoom();
    renderWhatIDo();
    renderDay();
    renderMindset();
    renderLearning();
    renderWork();
    renderConnect();
    renderContactCopy();
    renderFooter();

    initNavToggle();
    initBackToTop();
    initReveal();
    initRoomPanel();
    initHeroParallax();
    initNoteForm();
    initEasterEggs();
  });

  /* ------------------------------------------------------------------ */
  function renderHero() {
    const p = CONTENT.person;
    $("#heroRoles").innerHTML = p.roles.map((r) => `<span>${r}.</span>`).join(" ");
    $("#heroTagline").textContent = p.tagline;
    $("#heroQuote").textContent = `"${p.heroQuote}"`;
    $("#heroPhoto").src = p.photo;
    $("#heroPhoto").alt = `${p.name}, ${p.education}`;
  }

  function renderNav() {
    const list = $("#navList");
    list.innerHTML = CONTENT.nav
      .map(
        (item, i) => `
      <li><a href="#${item.id}" data-nav-link>
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span>${item.label}</span>
      </a></li>`
      )
      .join("");
  }

  function renderRoom() {
    const stage = $("#roomStage");
    stage.innerHTML = CONTENT.room
      .map(
        (obj) => `
      <button class="room-object" data-room-id="${obj.id}" aria-haspopup="dialog">
        <span class="obj-note" aria-hidden="true">${obj.hoverNote}</span>
        ${ICONS[obj.id] || ""}
        <span class="obj-label">${obj.label}</span>
      </button>`
      )
      .join("");
  }

  function renderWhatIDo() {
    const grid = $("#doGrid");
    grid.innerHTML = CONTENT.whatIDo
      .map(
        (c) => `
      <article class="paper-card do-card accent-${c.accent} reveal">
        <span class="swatch"></span>
        <h3>${c.title}</h3>
        <p>${c.body}</p>
      </article>`
      )
      .join("");
  }

  function renderDay() {
    const strip = $("#dayStrip");
    strip.innerHTML = CONTENT.day
      .map(
        (d) => `
      <article class="paper-card day-card">
        <span class="time">${d.time}</span>
        <h3>${d.label}</h3>
        <p>${d.note}</p>
      </article>`
      )
      .join("");
  }

  function renderMindset() {
    const grid = $("#mindsetGrid");
    grid.innerHTML = CONTENT.mindset
      .map(
        (m, i) => `
      <div class="sticky sticky-${m.color}" style="transform: rotate(${m.rotate}deg);" data-delay="${i * 90}">
        ${m.text}
      </div>`
      )
      .join("");
  }

  function renderLearning() {
    const grid = $("#learnGrid");
    grid.innerHTML = CONTENT.learning
      .map(
        (l) => `
      <article class="paper-card learn-card reveal">
        <span class="icon">${ICONS[l.icon] || ""}</span>
        <div>
          <h3>${l.topic}</h3>
          <p>${l.note}</p>
        </div>
      </article>`
      )
      .join("");
  }

  function renderWork() {
    const grid = $("#workGrid");
    grid.innerHTML = CONTENT.work
      .map(
        (w) => `
      <article class="paper-card work-item reveal">
        <div class="work-thumb">
          ${w.type === "video" ? '<span class="play">▶</span>' : ""}
        </div>
        <span class="work-tag">${w.tag}</span>
        <h3>${w.title}</h3>
      </article>`
      )
      .join("");
  }

  function renderConnect() {
    const grid = $("#connectGrid");
    const platforms = [
      { key: "instagram", name: "Instagram", data: CONTENT.social.instagram },
      { key: "tiktok", name: "TikTok", data: CONTENT.social.tiktok },
      { key: "facebook", name: "Facebook", data: CONTENT.social.facebook },
    ];
    grid.innerHTML = platforms
      .map(
        (p) => `
      <a class="paper-card connect-card reveal" href="${p.data.url}" target="_blank" rel="noopener noreferrer">
        <div class="plat">${ICONS[p.key]}<h3>${p.name}</h3></div>
        <span class="handle">${p.data.handle}</span>
        <p>${p.data.note}</p>
        <span class="ext">opens in a new tab ↗</span>
      </a>`
      )
      .join("");
  }

  function renderContactCopy() {
    $("#contactHeading").textContent = CONTENT.contact.heading;
    $("#contactSub").textContent = CONTENT.contact.sub;
    $("#pinBtn").textContent = CONTENT.contact.ctaLabel;
  }

  function renderFooter() {
    $("#footerThanks").textContent = CONTENT.footer.thanks;
    $("#footerLine").textContent = CONTENT.footer.line;
    $("#footerSig").textContent = CONTENT.footer.signature;
    const links = $("#footerLinks");
    links.innerHTML = CONTENT.nav
      .map((n) => `<a href="#${n.id}">${n.label}</a>`)
      .join("");
  }

  /* ------------------------------------------------------------------
     Navigation open/close
     ------------------------------------------------------------------ */
  function initNavToggle() {
    const tab = $("#navTab");
    const idx = $("#navIndex");
    const scrim = $("#navScrim");
    const close = $("#navClose");

    function open() {
      idx.classList.add("open");
      scrim.classList.add("open");
      tab.setAttribute("aria-expanded", "true");
      close.focus();
    }
    function shut() {
      idx.classList.remove("open");
      scrim.classList.remove("open");
      tab.setAttribute("aria-expanded", "false");
      tab.focus();
    }
    tab.addEventListener("click", () => (idx.classList.contains("open") ? shut() : open()));
    close.addEventListener("click", shut);
    scrim.addEventListener("click", shut);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && idx.classList.contains("open")) shut();
    });
    $$("[data-nav-link]", idx).forEach((a) => a.addEventListener("click", shut));
  }

  function initBackToTop() {
    const btn = $("#backToTop");
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 600) btn.classList.add("show");
        else btn.classList.remove("show");
      },
      { passive: true }
    );
  }

  /* ------------------------------------------------------------------
     Scroll reveal (IntersectionObserver)
     ------------------------------------------------------------------ */
  function initReveal() {
    const items = $$(".reveal, .sticky");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
            setTimeout(() => el.classList.add("in-view"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------
     Room object click → paper panel
     ------------------------------------------------------------------ */
  function initRoomPanel() {
    const backdrop = $("#roomBackdrop");
    const panel = $("#roomPanel");
    const closeBtn = $("#roomPanelClose");
    let lastFocused = null;
    let dumbbellClicks = 0;

    function openPanel(obj) {
      $("#roomPanelTag").textContent = obj.title;
      $("#roomPanelTitle").textContent = obj.label;
      $("#roomPanelBody").textContent = obj.body;
      backdrop.classList.add("open");
      panel.classList.add("open");
      closeBtn.focus();
    }
    function closePanel() {
      backdrop.classList.remove("open");
      panel.classList.remove("open");
      if (lastFocused) lastFocused.focus();
    }

    $$(".room-object").forEach((btn) => {
      btn.addEventListener("click", () => {
        lastFocused = btn;
        const obj = CONTENT.room.find((o) => o.id === btn.dataset.roomId);
        if (!obj) return;

        if (obj.id === "dumbbell") {
          dumbbellClicks++;
          if (dumbbellClicks === 5) showEgg("Okay... that's enough reps.");
        }
        if (obj.id === "notebook") {
          showEgg("Today's thought: keep going.");
        }
        openPanel(obj);
      });
    });

    closeBtn.addEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && panel.classList.contains("open")) closePanel();
    });
  }

  /* ------------------------------------------------------------------
     Hero parallax (mouse move) — skipped entirely under reduced motion
     ------------------------------------------------------------------ */
  function initHeroParallax() {
    if (prefersReducedMotion) return;
    const scene = $("#heroScene");
    if (!scene) return;
    const photo = $("#heroPhotoCard");
    const badge = $(".hero-badge");
    const sticky = $(".hero-sticky");

    let raf = null;
    scene.addEventListener("mousemove", (e) => {
      const rect = scene.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        photo.style.transform = `rotate(-4deg) translate(${x * 10}px, ${y * 8}px)`;
        if (badge) badge.style.transform = `rotate(-6deg) translate(${x * -14}px, ${y * -10}px)`;
        if (sticky) sticky.style.transform = `rotate(${5 + x * 6}deg) translate(${x * 8}px, ${y * 6}px)`;
      });
    });
    scene.addEventListener("mouseleave", () => {
      photo.style.transform = "rotate(-4deg)";
      if (badge) badge.style.transform = "rotate(-6deg)";
      if (sticky) sticky.style.transform = "rotate(5deg)";
    });
  }

  /* ------------------------------------------------------------------
     Contact form — "Leave a Note"
     Structured for a real backend later. No fake success is claimed.
     ------------------------------------------------------------------ */
  function initNoteForm() {
    const form = $("#noteForm");
    const status = $("#noteStatus");

    // Swap this stub for a real endpoint call (fetch/POST, Formspree,
    // EmailJS, a serverless function, etc.) when one is available.
    async function submitNote(data) {
      return new Promise((resolve) => {
        console.log("Note ready to send:", data);
        setTimeout(resolve, 400);
      });
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = "Fill in every field before pinning it.";
        status.style.color = "var(--red)";
        return;
      }
      const data = {
        name: $("#noteName").value.trim(),
        email: $("#noteEmail").value.trim(),
        message: $("#noteMessage").value.trim(),
      };
      const btn = $("#pinBtn");
      btn.disabled = true;
      status.style.color = "var(--ink-soft)";
      status.textContent = "Pinning...";
      await submitNote(data);
      status.style.color = "var(--green)";
      status.textContent = "Note ready — connect a backend to actually deliver it. Nothing was sent yet.";
      btn.disabled = false;
      form.reset();
    });
  }

  /* ------------------------------------------------------------------
     Easter eggs
     ------------------------------------------------------------------ */
  function showEgg(message) {
    const toast = $("#eggToast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showEgg._t);
    showEgg._t = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function initEasterEggs() {
    // Tiny star hidden near the footer signature
    const sig = $("#footerSig");
    if (sig) {
      const star = document.createElement("span");
      star.textContent = " ✦";
      star.style.cursor = "pointer";
      star.setAttribute("role", "button");
      star.setAttribute("tabindex", "0");
      star.setAttribute("aria-label", "hidden star");
      star.addEventListener("click", () => showEgg("you found something."));
      star.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showEgg("you found something.");
        }
      });
      sig.appendChild(star);
    }
  }
})();
