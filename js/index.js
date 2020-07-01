import Navigation from "./Navigation.js";
const nav = document.getElementById('nav');
const footerYear = document.getElementById('footer-year');

const date = new Date().getFullYear();
//Insert the year
footerYear.innerText = date.toString();

//Handle the click events in nav
const navigation = new Navigation()

const fillElementsList = () => {
    let navElements = nav.children;
    let arrayElements = Array.from(navElements);
    let ids = arrayElements.map(element => element.id);
    console.log(ids);
}

nav.addEventListener('click', fillElementsList);
