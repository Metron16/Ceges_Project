const mainMenu = document.querySelector('.main-menu');
const menuController = document.querySelector('.menu-controller');

let menuIsOpen = false;

menuController.addEventListener('click', function() {
    menuIsOpen ? close() : open();
});

function open() {
    console.log('open');
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    menuIsOpen = true;
}

function close() {
    console.log('close');
    mainMenu.style.top = '-50%';
    menuIsOpen = false;
}