const main = document.querySelector('main');
const mainMenu = document.querySelector('.main-menu');
const menuController = document.querySelector('.menu-controller');

let menuIsOpen = false;

menuController.addEventListener('click', function() {
    menuIsOpen ? close() : open();
});

function open() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    
    menuIsOpen = true;
}

function close() {
    mainMenu.style.top = '-40vw';
    menuIsOpen = false;
}