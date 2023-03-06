class Navigation {
    constructor(navigatorId, keyId, backgroundId) {
        this.navigator = document.getElementById(navigatorId);
        this.keyVisible = document.getElementById(keyId);
        this.keyVisibleTop = this.getCoords(this.keyVisible).top;
        this.background = document.getElementById(backgroundId);
    }

    updateVisble() {
        let navigatorTop = this.getCoords(this.navigator).top;

        if (navigatorTop < this.keyVisibleTop)
            this.background.classList.remove("top__background-linear");
        else if (!this.navigator.classList.contains("top__background-linear"))
            this.background.classList.add("top__background-linear");
    }

    updateCoords() {
        this.keyVisibleTop = this.getCoords(this.keyVisible).top;
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
