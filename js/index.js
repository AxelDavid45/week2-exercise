const footerYear = document.getElementById('footer-year');
const date = new Date().getFullYear();
//Insert the year
footerYear.innerText = date.toString();
