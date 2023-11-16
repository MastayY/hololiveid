const menuToggle = document.querySelector('.hamburger input');
const nav = document.querySelector('.nav-content ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
});