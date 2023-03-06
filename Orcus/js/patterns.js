function createPortfolioRef({ ref, img }) {
    return `<a class="portfolio__content-ref" href="${ref}">
        <img
            class="portfolio__content-img"
            src="${img}"
            alt="work image"
        />
    </a>`;
}

function createPortfolioSlide(data) {
    let portfolioRef = data.map((item) => createPortfolioRef(item));
    let slide = portfolioRef.join("\n\t");
    return `<div class="portfolio__content swiper-slide">
    ${slide}
</div>`;
}

function createPortfolioSlides(data) {
    let slides = [];
    for (let i = 0; i < Math.ceil(data.length / 6); i++) {
        let start = i * 6;
        let end = start + 6;
        let dt = data.slice(start, end);
        slides.push(createPortfolioSlide(dt));
    }
    return slides;
}
