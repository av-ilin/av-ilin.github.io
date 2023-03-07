class Card {
    static create(data) {
        let card = document.createElement("div");
        card.className = "portfolio__card";

        let content = document.createElement("div");
        content.className = "portfolio__card-content";
        let name = document.createElement("h1");
        name.className = "portfolio__card-name";
        name.textContent = data.name;
        let desc = document.createElement("p");
        desc.className = "portfolio__card-desc";
        desc.textContent = data.description;
        let ad = document.createElement("h2");
        ad.className = "portfolio__card-ad";
        ad.textContent = "Адаптация";
        let list = document.createElement("div");
        list.className = "portfolio__card-list";
        for (let adapt of ["desktop", "tablet", "mobile"]) {
            let prop = document.createElement("div");
            prop.className = "portfolio__card-prop";
            let mark = document.createElement("div");
            mark.className = "mark " + (data[adapt] ? "yes" : "no");
            let text = document.createElement("p");
            text.textContent = adapt;
            prop.append(mark);
            prop.append(text);
            list.append(prop);
        }
        let but = document.createElement("button");
        but.className = "portfolio__card-but";
        but.textContent = "Перейти на сайт";
        but.onclick = function () {
            window.open(data.url);
        };

        content.append(name);
        content.append(desc);
        content.append(ad);
        content.append(list);
        content.append(but);

        let img = document.createElement("img");
        img.className = "portfolio__card-preview";
        img.src = data.preview;

        card.append(content);
        card.append(img);

        return card;
    }
}
