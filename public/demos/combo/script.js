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
    // for example:
    // - addSlide.addEventListener
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
            // To tell use which slide should the background colour be updated on.
            mainSlide = slide.id;
        })
    
    })

}

// Run create Slide Function
createSlides();

// Get the create slide button
const addSlide = document.getElementById('create-slide');

// Set slide number
// To default first slide created; 
// which is the second slide in the application
let slideNumber = 2;

// add a click event listener for the create slide button
addSlide.addEventListener('click', function() {

    // Set a variable for the new slide as an object
    // containing the SlideNumber as part of the id
    // @TO-DO; Set more and better default values
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

    // add the new slide object to the slides object created at the start of this script
    slides.push(slide);

    // set the mainSlide ID to the slide id
    // To tell use which slide should the background colour be updated on.
    mainSlide = slide.id;

    // Add 1 to the slideNumber ready for the next slide to be created.
    slideNumber++;

    // Run create Slide Function
    createSlides();

});

// Get the background colour select element
const backgroundColour = document.getElementById('background-colour');

// add a change event listener for the background colour select element
backgroundColour.addEventListener('change', function(event) {
    
    // for each object, in the slides array
    slides.forEach(slide => {
        // IF the slide id matched, what the mainSlide (current slide is)
        if(slide.id == mainSlide) {
            // change the value of background colour in object
            slide.styling.backgroundColor = event.target.value;
            // set/change the background colour of the mainSlise (current slide) container
            // I think the code below makes this pointless ???
            // slideContainer.style.backgroundColor = event.target.value;

            // Run create Slide Function
            // I THINK THIS MIGHT BE CAUSING UNSEEN PROBLEMS
            createSlides();

            // set/change the background colour and content of the mainSlide (current slide) container
            slideContainer.style.backgroundColor = slide.styling.backgroundColor;
            slideContainer.textContent = slide.content.text;
        }
    });

});

// Get the display slide button
const displaySlide = document.getElementById('display-slide');

// add a click event listener for the display slide button
// @NOTE this is very similar to the create function above
displaySlide.addEventListener('click', function(event) {

    // for each object, in the slides array
    slides.forEach((object, index, array) => {

        // create a new div
        const newDiv = document.createElement("div");
    
        // add 2 classes, a default slide class
        // & a slide layout class
        // @TO-DO add more elemnts to help create these layouts
        newDiv.classList.add('slide');
        newDiv.classList.add(object.layout);
    
        // add a slide id
        // (ref 2)
        newDiv.setAttribute('id', object.id + '-display');
    
        // set background colour
        newDiv.style.backgroundColor = object.styling.backgroundColor;
        // set text content    
        newDiv.appendChild(document.createTextNode(object.content.text));
    
        // if not first slide, set display to none
        if(index != 0) {
            newDiv.style.display = 'none';
        }

        // add a click event listener for the new div
        newDiv.addEventListener('click', function() {
                // set display on current div to none
                newDiv.style.display = 'none';
                // set display on NEXT div to flex (visible)
                document.getElementById(slides[(index+1)].id + '-display').style.display = 'flex';
        })

        // include/append the new div(s) to the display element
        document.getElementById('display').appendChild(newDiv);
   
    });

});