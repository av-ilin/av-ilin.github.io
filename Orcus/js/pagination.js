class Pagination {
    ID = {
        paginator: "paginator",
        bullets: ["bullet01", "bullet02", "bullet03"],
        texts: ["bullet01_text", "bullet02_text", "bullet03_text"],
        sections: [
            "header",
            "about",
            "service",
            "portfolio",
            "partners",
            "instruction",
            "feedback",
        ],
    };

    constructor() {
        this.paginator = document.getElementById(this.ID.paginator);
        this.bullets = [];
        this.bulletsText = [];
        this.sections = [];
        this.coord = new WeakMap();
        this.keyVisible = document.getElementById("header_content");
        this.keyVisibleBottom = null;

        for (let bulletId of this.ID.bullets)
            this.bullets.push(document.getElementById(bulletId));
        for (let textId of this.ID.texts)
            this.bulletsText.push(document.getElementById(textId));
        for (let sectionId of this.ID.sections)
            this.sections.push(document.getElementById(sectionId));

        this.updateCoords();
    }

    update() {
        let slides = this.updateButtons();
        this.updateListener(slides);
    }

    updateButtons() {
        let paginator_top = this.getCoords(this.paginator).top;
        let section_cur = 0;
        for (let section of this.sections) {
            // let section_top = this.getCoords(section).top;
            let section_top = this.coord.get(section);
            if (paginator_top > section_top) section_cur++;
        }

        let slides = [section_cur - 1, section_cur, section_cur + 1];
        if (section_cur == 1) slides = [1, 2, 3];
        if (section_cur == this.sections.length)
            slides = [section_cur - 2, section_cur - 1, section_cur];

        for (let i = 0; i < 3; i++) {
            this.bulletsText[i].textContent = "0" + slides[i];
            if (slides[i] == section_cur)
                this.bullets[i].classList.add("pagination__bullet-active");
            else if (
                this.bullets[i].classList.contains("pagination__bullet-active")
            )
                this.bullets[i].classList.remove("pagination__bullet-active");
        }

        return slides;
    }

    updateListener(slides) {
        for (let i = 0; i < 3; i++) {
            let section = this.sections[slides[i] - 1];
            this.bullets[i].onclick = () =>
                section.scrollIntoView({ behavior: "smooth" });
        }
    }

    updateCoords() {
        for (let section of this.sections) {
            let section_top = this.getCoords(section).top;
            this.coord.set(section, section_top);
        }
        this.keyVisibleBottom = this.getCoords(this.keyVisible).bottom;
    }

    updateVisble() {
        let paginator_top = this.getCoords(this.paginator).top;

        if (paginator_top < this.keyVisibleBottom)
            this.paginator.classList.remove("pagination-visible");
        else if (!this.paginator.classList.contains("pagination-visible"))
            this.paginator.classList.add("pagination-visible");
    }

    getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset,
        };
    }
}
