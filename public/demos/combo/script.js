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
        }
    });

});

const displaySlide = document.getElementById('display-slide');

// const display = document.getElementById('display');

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
            if (slides.length == (index+1)) {
                // slides[0].style.display = 'flex'; // no working?
                newDiv.style.display = 'none';
            } else {
                newDiv.style.display = 'none';
                document.getElementById(slides[(index+1)].id + '-display').style.display = 'flex'; // no working?
            }
        })

        document.getElementById('display').appendChild(newDiv);
   
    });

});