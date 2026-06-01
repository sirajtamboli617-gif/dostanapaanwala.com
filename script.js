// Welcome Message

window.addEventListener("load", () => {
    console.log("Welcome to Dostana Paan Wala");
});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });
    });
});

const hero = document.querySelector(".hero");

const images = [
    "sliderimage1.jpj.jpeg",
    "sliderimage2.jpj.jpg",
    "icepaan.jpj.jpeg",
    "logopictuer.jpj.jpeg",

];

let index = 0;

function changeBackground() {
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${images[index]}')`;

    index++;
    if(index >= images.length){
        index = 0;
    }
}

changeBackground();
setInterval(changeBackground, 3000);