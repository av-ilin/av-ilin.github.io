const menu = document.getElementsByClassName("menu")[0];

window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
        if (!menu.classList.contains("active")) menu.classList.add("active");
    } else {
        if (menu.classList.contains("active")) menu.classList.remove("active");
    }
});
