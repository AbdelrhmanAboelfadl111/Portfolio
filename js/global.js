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
    Box.addEventListener("click",(e) => {
        e.stopPropagation();
    })
}
function LenisStart() {

    lenis = new Lenis({
        duration: 1.2,
        smooth: true,
    });

    lenis.on("scroll", ({ scroll }) => {
        let nav = document.querySelector("#Nav");
        if (scroll >= 30) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                lenis.scrollTo(target, {
                    offset: 0,
                    duration: 1.2,
                    easing: (t) => 1 - Math.pow(2, -10 * t)
                });
            }
        });
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

function setActiveNavSynced() {
    const navLinks = document.querySelectorAll("#Nav .navLinks a");
    const sideLinks = document.querySelectorAll(".sideNavBar .links a");

    // ندمج كل اللينكات في مصفوفة واحدة للتسهيل
    const allLinks = [...navLinks, ...sideLinks];

    allLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            // أولاً نشيل active من كل اللينكات
            allLinks.forEach(l => l.classList.remove("active"));

            // نضيف active للينك اللي اتضغط
            const href = this.getAttribute("href");

            // نضيف active لكل اللينكات اللي لها نفس href
            allLinks.forEach(l => {
                if(l.getAttribute("href") === href) {
                    l.classList.add("active");
                }
            });
        });
    });
}
function blurBox(sectionName) {
    let boxEdu = document.querySelectorAll(`#${sectionName} .container .row .column .item .box`);
boxEdu.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        boxEdu.forEach((box2) => {
            if (box2 != box) {
                box2.classList.add("unshow")
            }
        })
    })
});
boxEdu.forEach((box) => {
    box.addEventListener("mouseleave", () => {
        boxEdu.forEach((box2) => {
            if (box2 != box) {
                box2.classList.remove("unshow")
            }
        })
    })
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
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute("id") || "Home";

            if (sectionId === "Projects") return;

            if (entry.isIntersecting) {
                allLinks.forEach(l => l.classList.remove("active"));

                allLinks.forEach(l => {
                    if (l.getAttribute("href") === `#${sectionId}`) {
                        l.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    window.addEventListener("scroll", () => {
        if (!lastSection) return;

        const scrollY = window.pageYOffset + navHeight + 1;
        const sectionTop = lastSection.offsetTop;
        const sectionBottom = sectionTop + lastSection.offsetHeight;

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
            allLinks.forEach(l => {
                if (l.getAttribute("href") === "#Projects") {
                    l.classList.add("active");
                } else {
                    l.classList.remove("active");
                }
            });
        }
    });
}

