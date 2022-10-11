// Create object 
// & Default first slide
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

// Get Main Slider / Selected Slider container
const slideContainer = document.getElementById('slide-container');

// Set Main Slider / Selected Slider
// To default first slide
// ??
let mainSlide = "slide-1";

// Run create Slide Function
// Runs:
// 1. on page load
function createSlides() {

    // reset the innerHTML of the thumbnails element to nothing
    // this is to avoid duplicates, WHEN/IF this function is run again
    document.getElementById("thumbnails").innerHTML = "";

    // for each object, in the slides array
    slides.forEach(slide => {
    
        // create a new div
        const newDiv = document.createElement("div");
    
        // add 2 classes, a default slide class
        // & a slide layout class
        // @TO-DO add more elemnts to help create these layouts
        newDiv.classList.add('slide');
        newDiv.classList.add(slide.layout);
        // add a slide id
        // (ref 1)
        newDiv.setAttribute('id', slide.id);
        // set background colour
        newDiv.style.backgroundColor = slide.styling.backgroundColor;
        // set text content
        newDiv.appendChild(document.createTextNode(slide.content.text));
        // include/append the new div to the thumbnails element
        document.getElementById('thumbnails').appendChild(newDiv);
    
        // For the last object added to the slides array
        // Set: background colour AND text content; for the Main Slider / Selected Slider container
        slideContainer.style.backgroundColor = slide.styling.backgroundColor;
        slideContainer.textContent = slide.content.text;
    
        // add a click event listener for each new div with the id set above (ref 1)
        document.getElementById(slide.id).addEventListener('click', function(event) {
            // Change background colour AND text content; for the Main Slider / Selected Slider container
            slideContainer.style.backgroundColor = slide.styling.backgroundColor;
            slideContainer.textContent = slide.content.text;

            // update the mainSlide variable 
            // ???
            mainSlide = slide.id;
        })
    
    })

}

// Run create Slide Function
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

    mainSlide = slide.id;

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

            slideContainer.style.backgroundColor = slide.styling.backgroundColor;
            slideContainer.textContent = slide.content.text;
        }
    });

});

const displaySlide = document.getElementById('display-slide');

displaySlide.addEventListener('click', function(event) {

    slides.forEach((object, index, array) => {

        const newDiv = document.createElement("div");
    
        newDiv.classList.add('slide');
        newDiv.classList.add(object.layout);
    
        newDiv.setAttribute('id', object.id + '-display');
    
        newDiv.style.backgroundColor = object.styling.backgroundColor;
    
        newDiv.appendChild(document.createTextNode(object.content.text));
    
        if(index != 0) {
            newDiv.style.display = 'none';
        }

        newDiv.addEventListener('click', function() {
                newDiv.style.display = 'none';
                document.getElementById(slides[(index+1)].id + '-display').style.display = 'flex';
        })

        document.getElementById('display').appendChild(newDiv);
   
    });

});