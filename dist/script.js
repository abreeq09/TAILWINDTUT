document.getElementById('burger-menu').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.remove('hidden');
});

document.getElementById('close-menu').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.add('hidden');
});