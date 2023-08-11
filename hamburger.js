const menu = document.querySelector('[data-Menu]');
const navOptions = document.querySelector('[data-nav-options]');

console.log(navOptions);

function Menu(e){
    navOptions.classList.toggle('max-md:hidden');
    console.log("menu clicked detected");

    console.log(e);

    e.name === 'menu' ? e.name = 'close' : e.name = 'menu';
}