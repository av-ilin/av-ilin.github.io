const wrapper = document.getElementsByClassName("swiper-wrapper")[0];
for (let site of data) {
    let slide = document.createElement("div");
    slide.className = "portfolio__swiper-slide swiper-slide";
    slide.append(Card.create(site));
    wrapper.append(slide);
}

const swiper = new Swiper(".portfolio__swiper", {
    pagination: {
        el: ".portfolio__swiper-pag",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },

    navigation: {
        nextEl: ".portfolio__swiper-next",
        prevEl: ".portfolio__swiper-prev",
    },
});
