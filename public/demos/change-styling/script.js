const mainSlide = document.getElementById('slide-container');

const slideText = document.getElementById('text-1');

const backgroundColour = document.getElementById('background-colour');
const fontFamily = document.getElementById('font-family');
const fontSize = document.getElementById('font-size');

backgroundColour.addEventListener('change', function(event) {
    mainSlide.style.backgroundColor = event.target.value;
})

fontFamily.addEventListener('change', function(event) {
    slideText.style.fontFamily = event.target.value;
})

fontSize.addEventListener('change', function(event) {
    slideText.style.fontSize = event.target.value;
})
