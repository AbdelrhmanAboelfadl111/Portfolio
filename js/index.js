LenisStart();
let boxEdu = document.querySelectorAll("#Education .container .row .column .item .box");
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

