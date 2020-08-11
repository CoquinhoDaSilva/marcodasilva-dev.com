/********************************** Animation Hello World !************* ****************************/
const autoText = document.querySelector('.autoText');
const phrase = "> Hello World!"
let index = 1;

const randomSpeed = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const play = () => {
    autoText.innerHTML = phrase.slice(0, index);

    index++;

    if (index > phrase.length) {
        index = 1;
    }

    clearInterval(timer);
    timer = setInterval(play, randomSpeed(150, 500))
}

let timer = setInterval(play, 200)

/********************************** Menu Burger ************* ****************************/
const burger = document.querySelector('.burger');
const menuResp = document.querySelector('.menuResp');
const body = document.querySelector('.body');
const liClick = document.querySelector('.clic');
const menuRespOut = document.querySelector('.menuRespOut')

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
    menuRespOut.classList.remove('active');
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
