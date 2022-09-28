// const slides = document.getElementById('slides');
const createSlides = document.getElementById('create-slide');

createSlides.addEventListener('click', function() {

let newDiv = document.createElement("div");
newDiv.classList.add('slide');
document.getElementById('slides').appendChild(newDiv);

//document.getElementById('slides').appendChild(document.createElement("div"));
//document.body.appendChild(document.createElement("div"));


})
