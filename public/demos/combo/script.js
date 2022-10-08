const createSlides = document.getElementById('create-slide');
const slideContainer = document.getElementById('slide-container');

const backgroundColour = document.getElementById('background-colour');

// Store slides
let slides = [];

let slideNumberID = 1;


function updateStyling(slide) {
    backgroundColour.addEventListener('change', function(event) {
        slide.styling.backgroundColor = event.target.value;
        document.getElementById(slide.id + "-thumbnail").style.color = event.target.value;
    })    
}

function createThumbnailSlide(slide) {

    let newDiv = document.createElement("div");
    
    newDiv.classList.add('slide');
    newDiv.setAttribute('id', slide.id + "-thumbnail");

    document.getElementById('thumbnails').appendChild(newDiv);

    const textNode = document.createTextNode(slide.content.text);

    newDiv.appendChild(textNode);

}

function displayThumbnailSlide (slide) {

    document.getElementById(slide.id + "-thumbnail").addEventListener('click', function(event) {

        slideContainer.textContent = slide.content.text;
        slideContainer.classList.add(slide.layout);

        // slideContainer.style.backgroundColor = slide.styling.backgroundColor;

    });

    updateStyling(slide);

}

// On Click, create slide and add it to slides
createSlides.addEventListener('click', function() {

    // create slide
    let slide = {
        id: "slide-" + slideNumberID,
        layout: "default",
        styling: {
            fontSize: "default",
            fontFamily: "default",
            backgroundColor: "default",
        },
        content: {
            text: "Placeholder" + slideNumberID,
        }
    };

    // add slide to slides
    slides.push(slide);

    slideContainer.textContent = slide.content.text;
    slideContainer.classList.add(slide.layout);

    //create thumbnail Slide
    createThumbnailSlide(slide);

    //display thumbnail Slide in more detail
    displayThumbnailSlide(slide);

    slideNumberID++;

    console.log(slides);

});


