const menuMobile = document.querySelector('#menu-mobile');
menuMobile.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('moved-menu');
});