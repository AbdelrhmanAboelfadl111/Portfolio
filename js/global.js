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
    // Initialize Lenis
    const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
    });

    lenis.on("scroll", ({ scroll}) => {
        let nav = document.querySelector("#Nav");
        if (scroll >= 30) {
            nav.classList.add("scrolled");
        }else{
            nav.classList.remove("scrolled");
        }
    })

    // Anchor Link Smooth Scroll
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

    function getSectionPosition(section) {
        return section.getBoundingClientRect().top + window.scrollY;
    }

    // Active Section
    const sections = document.querySelectorAll("header, section");
    const navLinks = document.querySelectorAll(".navLinks a");
    const sideLinks = document.querySelectorAll(".sideNavBar .links a");
 function updateActive(scrollPos){
    const navOffset = 200; //
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
        const bottom = top + section.offsetHeight;

        if(scrollPos >= top && scrollPos < bottom){
            navLinks.forEach(link => link.classList.remove("active"));
            sideLinks.forEach(link => link.classList.remove("active"));

            const mainLink = document.querySelector(`.navLinks a[href='#${section.id}']`);
            const sideLink = document.querySelector(`.sideNavBar .links a[href='#${section.id}']`);
            if(mainLink) mainLink.classList.add("active");
            if(sideLink) sideLink.classList.add("active");
        }
    });
}



    // Lenis Scroll Event
    lenis.on('scroll', ({ scroll }) => {
        updateActive(scroll);
    });

    // RAF Loop
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initial Active Check
    window.addEventListener('load', () => {
        updateActive(lenis.scroll);
    });
    lenis.on('scroll', ({ scroll }) => {
    if (scroll >= 260 && scroll <= 280) {
        let Ancor = document.querySelector(".nav .navLinks ul a[href='#Home']");
        if(Ancor && !Ancor.classList.contains("active")) {
            Ancor.classList.add("active"); 
        }
    }
});
    
}

