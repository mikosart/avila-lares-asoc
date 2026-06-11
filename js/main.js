/* =========================================================
   ÁVILA, LARES & ASOCIADOS — main.js
   ========================================================= */
(function () {
  "use strict";

  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  /* ---------- Header background on scroll ---------- */
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const toggleMenu = (open) => {
    const isOpen = open ?? !navLinks.classList.contains("open");
    navLinks.classList.toggle("open", isOpen);
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  };
  navToggle.addEventListener("click", () => toggleMenu());
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => toggleMenu(false))
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleMenu(false);
  });

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    // Stagger siblings within the same grid
    document
      .querySelectorAll(".areas-grid, .equipo-grid, .enfoque-grid, .paises-grid")
      .forEach((grid) => {
        grid.querySelectorAll(".reveal").forEach((el, i) => {
          el.style.setProperty("--d", `${Math.min(i * 70, 420)}ms`);
        });
      });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll(".stat-num[data-count]");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const isYear = el.dataset.format === "year";
    const duration = 1400;
    const start = performance.now();
    const startVal = isYear ? target - 60 : 0;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(startVal + (target - startVal) * eased);
      el.textContent = isYear ? String(val) : (suffix.includes("+") ? "+" : "") + val + suffix.replace("+", "");
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = isYear ? String(target) : suffix + target.toString().replace("+", "") ;
    };
    // Normalize final formatting
    requestAnimationFrame((t) => {
      tick(t);
    });
    // Fix final text precisely after duration
    setTimeout(() => {
      el.textContent = isYear ? String(target) : `${suffix.startsWith("+") ? "+" : ""}${target}`;
    }, duration + 30);
  };

  if ("IntersectionObserver" in window && counters.length) {
    const co = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => co.observe(c));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Contact form (mailto-based, no backend) ---------- */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      if (!data.nombre || !data.email || !data.mensaje) {
        note.textContent = "Por favor complete los campos obligatorios.";
        note.className = "form-note err";
        return;
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      if (!emailOk) {
        note.textContent = "Ingrese un correo electrónico válido.";
        note.className = "form-note err";
        return;
      }

      const subject = `Consulta web — ${data.asunto || "General"} — ${data.nombre}`;
      const body =
        `Nombre: ${data.nombre}\n` +
        `Empresa: ${data.empresa || "—"}\n` +
        `Correo: ${data.email}\n` +
        `Área de interés: ${data.asunto || "—"}\n\n` +
        `Mensaje:\n${data.mensaje}\n`;

      const mailto = `mailto:avilalaresyasociados@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
      note.textContent = "Abriendo su cliente de correo… Si no se abre, escríbanos a avilalaresyasociados@gmail.com";
      note.className = "form-note ok";
      form.reset();
    });
  }

  /* ---------- Active nav link on scroll (scroll-spy) ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = navLinks.querySelectorAll("a");
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navAnchors.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === `#${id}`)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }
})();
