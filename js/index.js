import NavigationImplementation from "./modules/NavigationImplementation.js";
const footerYear = document.getElementById('footer-year');
const date = new Date().getFullYear();
//Insert the year
footerYear.innerText = date.toString();

//Event
const nav = new NavigationImplementation();
