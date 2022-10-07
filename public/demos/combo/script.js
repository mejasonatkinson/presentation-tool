const createSlides = document.getElementById('create-slide');

// Store slides
let slides = [];

// On Click, create slide and add it to slides
createSlides.addEventListener('click', function() {

    // create slide
    let slide = {
        id: "default",
        layout: "default",
        styling: {
            fontSize: "default",
            fontFamily: "default",
            backgroundColor: "default",
        },
        content: {
            text: "Placeholder",
        }
    };

    // add slide to slides
    slides.push(slide);

});
