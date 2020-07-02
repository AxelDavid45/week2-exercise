import NavigationImplementation from "./modules/NavigationImplementation.js";
const footerYear = document.getElementById('footer-year');
const date = new Date().getFullYear();
//Insert the year
footerYear.innerText = date.toString();

//Nav listener
const nav = new NavigationImplementation();

//Event propagation
const article = document.getElementById('composed-father');
article.addEventListener('click', () => alert('Propagated'));

const image = document.getElementById('composed-event');
image.addEventListener('click', (evt) => {
    evt.stopPropagation();
    alert('I\'m not propagating me');
})
