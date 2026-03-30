function openPopUp(popupClass) {
  const popup = document.querySelector(`.${popupClass}`);
  if (popup) {
    popup.classList.add("show");
  }
}
function closePopUp(popupClass) {
  const popup = document.querySelector(`.${popupClass}`);
  if (popup) {
    popup.classList.remove("show");
  }
}
function StopClose(BoxCalss) {
  const Box = document.querySelector(`.${BoxCalss}`);
  Box.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
function LenisStart() {
  const shape = document.querySelector(".GoUp .shape");
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Update maxScroll on resize
  window.addEventListener("resize", () => {
    maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  });

  // Scroll event for nav and shape
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    let nav = document.querySelector("#Nav");
    if (scroll >= 30) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    // Calculate scroll progress
    const progress = Math.min(scroll / maxScroll, 1);
    const goUpHeight = 50; // .GoUp height
    shape.style.height = progress * goUpHeight + "px";
  });

  // Go to top on click
  document.querySelector(".GoUp").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function setActiveNavSynced() {
  const navLinks = document.querySelectorAll("#Nav .navLinks a");
  const sideLinks = document.querySelectorAll(".sideNavBar .links a");

  // ندمج كل اللينكات في مصفوفة واحدة للتسهيل
  const allLinks = [...navLinks, ...sideLinks];

  allLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // أولاً نشيل active من كل اللينكات
      allLinks.forEach((l) => l.classList.remove("active"));

      // نضيف active للينك اللي اتضغط
      const href = this.getAttribute("href");

      // نضيف active لكل اللينكات اللي لها نفس href
      allLinks.forEach((l) => {
        if (l.getAttribute("href") === href) {
          l.classList.add("active");
        }
      });
    });
  });
}
function blurBox(sectionName) {
  let boxEdu = document.querySelectorAll(
    `#${sectionName} .container .row .column .item .box`,
  );
  boxEdu.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      boxEdu.forEach((box2) => {
        if (box2 != box) {
          box2.classList.add("unshow");
        }
      });
    });
  });
  boxEdu.forEach((box) => {
    box.addEventListener("mouseleave", () => {
      boxEdu.forEach((box2) => {
        if (box2 != box) {
          box2.classList.remove("unshow");
        }
      });
    });
  });
}
function scrollSpyObserver() {
  const sections = document.querySelectorAll("section[id], header");
  const navLinks = document.querySelectorAll("#Nav .navLinks a");
  const sideLinks = document.querySelectorAll(".sideNavBar .links a");
  const allLinks = [...navLinks, ...sideLinks];

  const nav = document.querySelector("#Nav");
  const navHeight = nav ? nav.offsetHeight : 0;

  const lastSection = document.querySelector("#Projects"); // آخر سيكشن

  const observerOptions = {
    root: null,
    rootMargin: `-${navHeight}px 0px 0px 0px`,
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.getAttribute("id") || "Home";

      if (sectionId === "Projects") return;

      if (entry.isIntersecting) {
        allLinks.forEach((l) => l.classList.remove("active"));

        allLinks.forEach((l) => {
          if (l.getAttribute("href") === `#${sectionId}`) {
            l.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  window.addEventListener("scroll", () => {
    if (!lastSection) return;

    const scrollY = window.pageYOffset + navHeight + 1;
    const sectionTop = lastSection.offsetTop;
    const sectionBottom = sectionTop + lastSection.offsetHeight;

    if (scrollY >= sectionTop && scrollY <= sectionBottom) {
      allLinks.forEach((l) => {
        if (l.getAttribute("href") === "#Projects") {
          l.classList.add("active");
        } else {
          l.classList.remove("active");
        }
      });
    }
  });
}
const indicator = document.querySelector(".scroll-indicator");



(function () {
  const loader = document.getElementById("site-loader");
  const barFill = document.getElementById("barFill");
  const orbPct = document.getElementById("orbPct");
  const barNum = document.getElementById("barNum");
  const statusEl = document.getElementById("statusText");

  const statuses = [
    "initializing",
    "loading assets",
    "loading fonts",
    "rendering ui",
    "almost there",
    "ready",
  ];

  let displayed = 0; // النسبة المعروضة حالياً (animated)
  let target = 0; // النسبة الحقيقية من المتصفح

  // ── 1. تتبع الـ resources اللي بتتحمل ──────────────────────────────
  if (window.PerformanceObserver) {
    // نحسب resource count
    let loaded = 0;
    let total = 0;

    // نجيب الـ resources اللي اتحملت قبل ما الـ observer يشتغل
    const existing = performance.getEntriesByType("resource");
    loaded = existing.length;
    total = Math.max(loaded, 10); // minimum baseline

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(() => {
        loaded++;
        total = Math.max(total, loaded + 2);
        target = Math.min(Math.floor((loaded / total) * 95), 95);
      });
    });

    observer.observe({ type: "resource", buffered: true });

    // لما الصفحة تخلص تحمل كاملة
    window.addEventListener("load", () => {
      observer.disconnect();
      target = 100;
    });

    // حساب مبدئي
    target = Math.min(Math.floor((loaded / total) * 95), 30);
  } else {
    // Fallback لو مش بيدعم PerformanceObserver
    window.addEventListener("load", () => {
      target = 100;
    });
    // نعمل increment تدريجي كبديل
    const fallback = setInterval(() => {
      target = Math.min(target + Math.random() * 8, 95);
      if (target >= 95) clearInterval(fallback);
    }, 200);
  }

  // ── 2. Animation loop — بيحرك displayed نحو target بسلاسة ─────────
  function animate() {
    if (displayed < target) {
      // كلما قرب من 100 كلما بطّأ
      const step = Math.max(0.4, (target - displayed) * 0.06);
      displayed = Math.min(displayed + step, target);
    }

    const pct = Math.floor(displayed);

    barFill.style.width = pct + "%";
    orbPct.textContent = pct + "%";
    barNum.textContent = pct + "%";
    statusEl.textContent =
      statuses[Math.min(Math.floor(pct / 20), statuses.length - 1)];

    if (displayed >= 100) {
      // وصلنا 100% — نعرض وبعدين نخفي اللودر
      barFill.style.width = "100%";
      orbPct.textContent = "100%";
      barNum.textContent = "100%";
      statusEl.textContent = "ready";

      setTimeout(() => {
        loader.classList.add("done");
        // بعد انتهاء الـ transition نشيله من الـ DOM
        loader.addEventListener(
          "transitionend",
          () => {
            loader.remove();
          },
          { once: true },
        );
      }, 500);

      return; // نوقف الـ animation loop
    }

    requestAnimationFrame(animate);
  }

  animate();
})();