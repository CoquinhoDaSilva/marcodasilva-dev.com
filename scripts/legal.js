/********************************** Menu Burger ************* ****************************/
const burger = document.querySelector('.burger');
const menuResp = document.querySelector('.menuResp');
const body = document.querySelector('.body');
const liClick = document.querySelector('.clic');
const menuRespOut = document.querySelector('.menuRespOut');

burger.addEventListener('click', function () {
    menuResp.classList.toggle('active');
    menuRespOut.classList.toggle('active');
    body.classList.toggle('hidden');
});

menuRespOut.addEventListener('click', function () {
    menuResp.classList.toggle('active');
    menuRespOut.classList.toggle('active');
    body.classList.toggle('hidden');
})

liClick.addEventListener('click', function() {
    menuResp.classList.remove('active');
    body.classList.remove('hidden');
    menuRespOut.remove('active');
});

/********************************** FadeIn *****************************************/
const ratio = 0.5
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

var observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})
document.querySelectorAll('.revealTwo').forEach(function (r) {
    observer.observe(r)
})
