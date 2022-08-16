const closeButton = document.querySelector('.close-button');
const closeButtondk = document.querySelector('.close-button-dk');
const closeArrow = document.querySelector('.arrow-close');
const closeArrowdk = document.querySelector('.arrow-close-dk');
const loginButtondk = document.querySelector('.logindk');
const loginButton = document.querySelector('.login');
const modal = document.getElementById('modal-container');
const hamburguerButton = document.getElementById('hamburguer-button');
const hamburguerMenu = document.getElementById('hamburguer-menu');
const html = document.querySelector('html');
const body = document.querySelector('body');
const aboutus = document.getElementById('aboutusmb');
const news = document.getElementById('news');
const help = document.getElementById('help');

hamburguerMenu.classList.add('hidden');    

/**
 * Funcion que abre el modal
 * @param {*} metodo 
 * @param {*} classes 
 */
const closeOpenModal = (metodo,classes) => {
    if (metodo === 'add') {
        modal.classList.add(...classes);
    }else if (metodo === 'remove') {
        modal.classList.remove(...classes);
    }
}
/**
 *  Funcion que quita el scroll de la pagina
 * @param {*} classes 
 */
const quitarScroll = (classes) => {
        html.classList.add(...classes);
        body.classList.add(...classes);
}

/**
 *  Funcion que resetea el scroll de la pagina
 * @param {*} classes 
 */
const resetScroll = (classes) => {
        html.classList.remove(...classes);
        body.classList.remove(...classes);
}


loginButtondk.addEventListener('click', () => {
    quitarScroll(['overflow-y-hidden']);
    closeOpenModal('remove',['hidden']);
});

loginButton.addEventListener('click', () => {
    hamburguerMenu.classList.add('hidden');
    quitarScroll(['overflow-y-hidden']);
    closeOpenModal('remove',['hidden']);
});

closeButton.addEventListener('click', () => {
    resetScroll(['overflow-y-hidden']);
    closeOpenModal('add',['hidden']);
});

closeButtondk.addEventListener('click', () => {
    resetScroll(['overflow-y-hidden']);
    closeOpenModal('add',['hidden']);
});

closeArrow.addEventListener('click', () => {
    resetScroll(['overflow-y-hidden']);
    closeOpenModal('add',['hidden']);
});

closeArrowdk.addEventListener('click', () => {
    resetScroll(['overflow-y-hidden']);
    closeOpenModal('add',['hidden']);
});

hamburguerButton.addEventListener('click', () => {
    hamburguerMenu.classList.toggle('hidden');
});

aboutus.addEventListener('click', () => {
 hamburguerMenu.classList.add('hidden');
});

news.addEventListener('click', () => {
    hamburguerMenu.classList.add('hidden');
});

help.addEventListener('click', () => {
    hamburguerMenu.classList.add('hidden');
});