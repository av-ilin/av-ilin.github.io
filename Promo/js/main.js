let section = null;
let options = {
    root: null,
    rootMargin: "0px",
    threshold: Math.min(0.5, (0.5 * window.innerWidth) / 1170),
};
let callback = function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            if (section == null) section = entry.target;
            section.classList.remove("section--active");
            entry.target.classList.add("section--active");
            section = entry.target;
        }
    });
};
observer = new IntersectionObserver(callback, options);
Array.from(document.getElementsByClassName("section")).forEach((elem) =>
    observer.observe(elem)
);
console.log(observer.thresholds);
