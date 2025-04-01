'use strict'
const closeButton = document.querySelector('[data-action="close-modal"]');
const openButton = document.querySelector('[data-action="open-modal"]');

closeButton.addEventListener('click', toggleModal);
openButton.addEventListener('click', toggleModal);
function toggleModal(){
    document.body.classList.toggle('show-modal');
}
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('show-modal')){
        onBtnClik()
    }
})
const openM = document.getElementById('openButton');
const closeM = document.getElementById('closeButton');
const backdropEl = document.querySelector('.backdrop');

openButton.addEventListener('click', () => {
    document.body.classList.add('show-modal');
});

closeButton.addEventListener('click', () => {
    document.body.classList.remove('show-modal');
});

backdropEl.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.currentTarget === event.target) {
        document.body.classList.remove('show-modal');
    }
});
