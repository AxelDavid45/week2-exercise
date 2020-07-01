import Navigation from "./Navigation.js";
const nav = document.getElementById('nav');
//Creates an array with the ids
const fillElementsList = () => {
    let navElements = [...nav.children];
    return navElements.map(element => element.id);
}

const navigation = new Navigation(fillElementsList());

//Handle the click events in nav
const handleNavClick = evt => {
    navigation.renderMessage(evt.target.id);
}

nav.addEventListener('click', handleNavClick);
