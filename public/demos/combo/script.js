let slides = [
    {
        id: "slide-1",
        layout: "full-text",
        styling: {
            fontSize: "21px",
            fontFamily: "sans-serif",
            backgroundColor: "red",
        },
        content: {
            text: "Placeholder 1",
        }
    },
];

const slideContainer = document.getElementById('slide-container');

let mainSlide = "slide-1";

function createSlides() {

    document.getElementById("thumbnails").innerHTML = "";

    slides.forEach(slide => {
    
        const newDiv = document.createElement("div");
    
        newDiv.classList.add('slide');
        newDiv.classList.add(slide.layout);
    
        newDiv.setAttribute('id', slide.id);
    
        newDiv.style.backgroundColor = slide.styling.backgroundColor;
    
        newDiv.appendChild(document.createTextNode(slide.content.text));
    
        document.getElementById('thumbnails').appendChild(newDiv);
    
        slideContainer.style.backgroundColor = slide.styling.backgroundColor;
        slideContainer.textContent = slide.content.text;
    
        document.getElementById(slide.id).addEventListener('click', function(event) {
            slideContainer.style.backgroundColor = slide.styling.backgroundColor;
            slideContainer.textContent = slide.content.text;

            mainSlide = slide.id;
        })
    
    })

}

createSlides();

const addSlide = document.getElementById('create-slide');

let slideNumber = 2;

addSlide.addEventListener('click', function() {

    let slide = {
        id: "slide-" + slideNumber,
        layout: "full-text",
        styling: {
            fontSize: "21px",
            fontFamily: "sans-serif",
            backgroundColor: "red",
        },
        content: {
            text: "Placeholder " + slideNumber,
        }
    };

    slides.push(slide);

    slideNumber++;

    createSlides();

});

const backgroundColour = document.getElementById('background-colour');

backgroundColour.addEventListener('change', function(event) {

    slides.forEach(slide => {
        if(slide.id == mainSlide) {
            slide.styling.backgroundColor = event.target.value;
            slideContainer.style.backgroundColor = event.target.value;
            createSlides();
        }
    });

});