const closeButton = document.querySelector('.close-button');
const closeButtondk = document.querySelector('.close-button-dk');
const loginButton = document.querySelector('.login');
const modal = document.getElementById('modal-container');

loginButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});

closeButtondk.addEventListener('click', () => {
    modal.classList.add('hidden');
});

