// pagination & navigation
let navigation = new Navigation(
    "navigator",
    "header_content",
    "navigator_background"
);
let pagination = new Pagination();
pagination.update();
pagination.updateVisble();
navigation.updateVisble();

window.addEventListener("scroll", function () {
    pagination.update();
    pagination.updateVisble();
    navigation.updateVisble();
});
window.addEventListener("resize", function () {
    pagination.updateCoords();
    navigation.updateCoords();
});

//portfolio
let slides = createPortfolioSlides(data).join("\n");
let wrapper = document.getElementById("swrapper");
wrapper.insertAdjacentHTML("afterbegin", slides);
const swiperPortfolio = new Swiper(".portfolio__swiper", {
    pagination: {
        el: ".portfolio__swiper-pagination",
        clickable: true,
    },
    nested: true,
});

//navigation
let referData = [
    { elemId: "main-ref", sectionId: "header" },
    { elemId: "about-ref", sectionId: "about" },
    { elemId: "service-ref", sectionId: "service" },
    { elemId: "portfolio-ref", sectionId: "portfolio" },
    { elemId: "contacts-ref", sectionId: "feedback" },
];
for ({ elemId, sectionId } of referData) {
    let elem = document.getElementById(elemId);
    let sect = document.getElementById(sectionId);
    elem.onclick = () => sect.scrollIntoView({ behavior: "smooth" });
}

//accordeon
for (let step of document.getElementsByClassName("instruction__step")) {
    let stepHide = true;
    let marker = step.children[0].children[1];

    step.addEventListener("click", function () {
        if (stepHide) {
            step.classList.add("instruction__step--active");
            marker.classList.add("instruction__step-marker--active");
        } else {
            step.classList.remove("instruction__step--active");
            marker.classList.remove("instruction__step-marker--active");
        }
        stepHide = !stepHide;
        pagination.updateCoords();
        navigation.updateCoords();
    });
}
