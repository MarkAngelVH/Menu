function toggleSubmenu(index) {
    var submenu = document.querySelectorAll('.submenu')[index];
    submenu.style.display = (submenu.style.display === 'block' || submenu.style.display === '') ? 'none' : 'block';
}