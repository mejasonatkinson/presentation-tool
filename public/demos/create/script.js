const createSlides = document.getElementById('create-slide');
let slideNumber = 1;

createSlides.addEventListener('click', function() {

    const textNode = document.createTextNode("Slide " + slideNumber);
    slideNumber++
    let newDiv = document.createElement("div");
    newDiv.appendChild(textNode);

    newDiv.classList.add('slide');

    document.getElementById('thumbnails').appendChild(newDiv);

})
