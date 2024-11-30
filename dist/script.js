document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    burgerMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
      if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  });