const sections = ["wintint", "protection", "cercoat"].map(
    (item) => document.getElementsByClassName(item)[0]
);
const navigation = document.getElementsByClassName("navbar")[0];
const refs = document.getElementsByClassName("navigation-ref");

for (let i = 0; i < refs.length; i++) {
    refs[i].onclick = () => sections[i % 3].scrollIntoView();
}

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) {
        if (!navigation.classList.contains("active"))
            navigation.classList.add("active");
    } else {
        if (navigation.classList.contains("active"))
            navigation.classList.remove("active");
    }
});
