import Navigation from "./Navigation.js";
class NavigationImplementation {
    constructor() {
        this.navContainer = document.getElementById('nav');
        this.navigation = new Navigation(this.fillElementList());
        this.handleNavClicks = this.handleNavClicks.bind(this);
        this.triggerEvent();
    }

    fillElementList() {
        this.navElements = [...this.navContainer.children];
        return this.navElements.map(element => element.id);
    }

    triggerEvent() {
        this.navContainer.addEventListener('click', this.handleNavClicks);
    }

    handleNavClicks(evt) {
        this.navigation.renderMessage(evt.target.id);
    }
}
export default NavigationImplementation;
