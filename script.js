const menu = document.querySelector('#menu');
const toggleMenu = document.querySelector('#toggle-menu');
const toggleText = document.querySelector('#toggle-text')

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    })
})