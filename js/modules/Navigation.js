class Navigation {
    constructor(elements = null) {
        this.elements = elements === null ? []: elements;
        this.clickCounter = [];
        //Fill the array with zeros to start adding the times you clicked
        if(this.elements > 0) {
            for (let i = 0; i < elements.length; i++) {
                this.clickCounter[i] = 0;
            }

        }
    }

    searchIndexOfElement(element) {
        let elementIndex = this.elements.indexOf(element);
        if (elementIndex === -1) {
            this.elements.push(element);
            this.clickCounter.push(0);
        }

        return elementIndex;
    }

    renderMessage(element) {
        let elementIndex = this.searchIndexOfElement(element);
        this.clickCounter[elementIndex] += 1;
        console.log(`ID: ${this.elements[elementIndex]} Count: ${this.clickCounter[elementIndex]}`);
        this.changeColor(element);
    }

    changeColor(element) {
        let elementToPaint = document.getElementById(element);
        let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        elementToPaint.style.background = color;
    }

}

export default Navigation;
