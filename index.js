window.onload = function() {
    const EFFECT = document.querySelector(".row");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect(){
        if(window.scrollY >= 500){
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateX(0px)';
            EFFECT.style.transition - '1s ease-in-out';
        } else {
            EFFECT.style.opacity = '0';
            EFFECT.style.transform = 'translateX(-50px)';
        }
        scrollEffect();
    }
    const toTop = document.querySelector(".to-top");
    
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })
}

const lang = navigator.language;
let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang,{weekday: 'long'})
let monthName = date.toLocaleString(lang,{month: 'long'})
let year = date.getFullYear()

document.getElementById('monthName').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;



