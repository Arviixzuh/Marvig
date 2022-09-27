const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    let i;
    const quadrates = document.querySelectorAll(".quadrate"); 
    for(i = 0; i < quadrates.length;i++){
        quadrates[i].className = quadrates[i].className.replace("active","")
    }
    quadrates[slideIndex-1].className += " active";
}

//---Función para avanzar de imagen:
function NextImage(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

//---Función para regresar de imagen:
function PreviousImage(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

//--Para los botones:
btnright.addEventListener('click', function(){
    NextImage();
    plusSlides(1);
}); 
btnleft.addEventListener('click', function(){
    PreviousImage();
    plusSlides(-1);
}); 

//---Para Slider Automático:

setInterval(function(){
    NextImage();
    plusSlides(1);
}, 10000);