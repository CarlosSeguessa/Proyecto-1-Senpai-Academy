const closeButton = document.querySelector('.close-button');
const closeButtondk = document.querySelector('.close-button-dk');
const closeArrow = document.querySelector('.arrow-close');
const closeArrowdk = document.querySelector('.arrow-close-dk');
const loginButton = document.querySelector('.login');
const modal = document.getElementById('modal-container');
const hamburguerButton = document.getElementById('hamburguer-button');
const hamburguerMenu = document.getElementById('hamburguer-menu');

hamburguerMenu.classList.add('hidden');    

const closeOpenModal = (metodo,classes) => {
    if (metodo === 'add') {
        modal.classList.add(...classes);
    }else if (metodo === 'remove') {
        modal.classList.remove(...classes);
    }
}


loginButton.addEventListener('click', () => {
    closeOpenModal('remove',['hidden']);
});

closeButton.addEventListener('click', () => {
    closeOpenModal('add',['hidden']);
});

closeButtondk.addEventListener('click', () => {
    closeOpenModal('add',['hidden']);
});

closeArrow.addEventListener('click', () => {
    closeOpenModal('add',['hidden']);
});

closeArrowdk.addEventListener('click', () => {
    closeOpenModal('add',['hidden']);
});

hamburguerButton.addEventListener('click', () => {
    
    hamburguerMenu.classList.toggle('hidden');
});