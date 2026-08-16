const bouton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

bouton.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});
