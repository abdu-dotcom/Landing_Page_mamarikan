const btnHumberger = document.querySelector('.humberger')
const icon = document.querySelector('.fas');
const nav = document.querySelector('nav ul');

btnHumberger.addEventListener('click', function() {
    icon.classList.toggle('fa-times');
    nav.classList.toggle('showNav');
})