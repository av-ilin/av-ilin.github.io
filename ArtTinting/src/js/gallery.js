const gallery = document.getElementsByClassName("gallery__content")[0];
const g_items = document.getElementsByClassName("gallery__item");
const g_prev = document.getElementsByClassName("gallery__prev")[0];
const g_next = document.getElementsByClassName("gallery__next")[0];

let g_step = Math.floor(
    gallery.getBoundingClientRect().width /
        g_items[0].getBoundingClientRect().width
);

const g_item = {
    _i: 0,
    get i() {
        return this._i;
    },
    set i(value) {
        this._i = Math.max(0, Math.min(value, g_items.length - 1));
    },
};

g_prev.onclick = function () {
    g_item.i -= g_step;
    g_items[g_item.i].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
    });
};
g_next.onclick = function () {
    g_item.i += g_step;
    g_items[g_item.i].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
    });
};

window.addEventListener("resize", function () {
    g_step = Math.floor(
        gallery.getBoundingClientRect().width /
            g_items[0].getBoundingClientRect().width
    );
});
