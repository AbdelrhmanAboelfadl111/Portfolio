let lenis; // 👈 نخليه global
LenisStart();
blurBox("Education");
blurBox("Skills");
new WOW().init();

document.addEventListener("DOMContentLoaded", scrollSpyObserver);

const slider = document.querySelector("#verticalSlider");

slider.addEventListener(
  "wheel",
  function (e) {
    e.stopPropagation();
  },
  { passive: false },
);

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#verticalSlider", {
    type: "loop",
    direction: "ttb",
    height: "400px",
    perPage: 1,
    perMove: 1,
    gap: "15px",
    speed: 1000,
    wheel: true,
    releaseWheel: false, // يمنع اسكرول الصفحة
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
  }).mount();
});
window.addEventListener("load", () => {
  const loadingDiv = document.querySelector(".Loading");
  loadingDiv?.classList.add("unshow");
  document.body.classList.remove("loading-active");
  window.scrollTo(0, 0); // Ensure page starts from top
});
function initWOW() {
  if (window.innerWidth > 992) {
    new WOW().init();
  }
}

window.addEventListener("load", initWOW);
window.addEventListener("resize", initWOW);
