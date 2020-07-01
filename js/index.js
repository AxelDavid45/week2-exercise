const nav = document.getElementById('nav');

const handlerNavClick = (evt) => {
    console.log(evt.target);
}

nav.addEventListener('click', handlerNavClick);
