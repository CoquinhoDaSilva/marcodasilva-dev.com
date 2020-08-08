/********************************** Menu Burger ************* ****************************/
const burger = document.querySelector('.burger');
const menuResp = document.querySelector('.menuResp');
const body = document.querySelector('.body');
const liClick = document.querySelector('.clic')

burger.addEventListener('click', function () {
    menuResp.classList.toggle('active');
    body.classList.toggle('hidden');

});

liClick.addEventListener('click', function() {
    menuResp.classList.remove('active');
    body.classList.remove('hidden');
});
