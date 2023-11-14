document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.menu-responsive');
    var hamburguesa = document.querySelector('.hamburguesa');

    function toggleMenu() {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    }

    function closeMenu(event) {
        var isClickInsideMenu = menu.contains(event.target) || hamburguesa.contains(event.target);

        if (!isClickInsideMenu) {
            menu.style.display = 'none';
        }
    }

    hamburguesa.addEventListener('click', toggleMenu);
    document.body.addEventListener('click', closeMenu);
});

// Ocultar el menú responsive cuando se recarga la página
window.addEventListener('load', function () {
    var menu = document.querySelector('.menu-responsive');
    menu.style.display = 'none';
});
