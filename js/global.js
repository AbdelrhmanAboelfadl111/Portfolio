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