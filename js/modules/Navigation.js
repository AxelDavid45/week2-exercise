class Navigation {
    constructor(elements = null) {
        this.elements = elements === null ? []: elements;
        this.clickCounter = [];
        //Fill the array with zeros to start adding the times you clicked
        if(this.elements.length > 0) {
            for (let i = 0; i < elements.length; i++) {
                this.clickCounter[i] = 0;
            }

        }
    }

    searchIndexOfElement(element) {
        if (this.elements.indexOf(element) === -1) {
            this.elements.push(element);
            this.clickCounter.push(0);
        }

        return this.elements.indexOf(element);
    }

    renderMessage(element) {
        let elementIndex = this.searchIndexOfElement(element);
        this.clickCounter[elementIndex] += 1;
        this.changeColor(element);
        return `ID: ${this.elements[elementIndex]} Count: ${this.clickCounter[elementIndex]}`;
    }

    changeColor(element) {
        let elementToPaint = document.getElementById(element);
        let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        elementToPaint.style.background = color;
    }

}

export default Navigation;
