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
    {
        id: "slide-2",
        layout: "split-left",
        styling: {
            fontSize: "21px",
            fontFamily: "sans-serif",
            backgroundColor: "blue",
        },
        content: {
            text: "Placeholder 2",
            image: "https://via.placeholder.com/150x150",
        }
    },
];

const slideContainer = document.getElementById('slide-container');
let firstSlide = 1;

slides.forEach(slide => {
    
    const newDiv = document.createElement("div");

    newDiv.classList.add('slide');
    newDiv.classList.add(slide.layout);

    newDiv.setAttribute('id', slide.id);

    newDiv.style.fontSize = slide.styling.fontSize;
    newDiv.style.fontFamily = slide.styling.fontFamily;
    newDiv.style.backgroundColor = slide.styling.backgroundColor;

    newDiv.appendChild(document.createTextNode(slide.content.text));

    document.getElementById('thumbnails').appendChild(newDiv);

    if (firstSlide == 1) {
        slideContainer.style.fontSize = slide.styling.fontSize;
        slideContainer.style.fontFamily = slide.styling.fontFamily;
        slideContainer.style.backgroundColor = slide.styling.backgroundColor;
        slideContainer.textContent = slide.content.text;
        firstSlide++;
    }

    document.getElementById(slide.id).addEventListener('click', function(event) {
        slideContainer.style.fontSize = slide.styling.fontSize;
        slideContainer.style.fontFamily = slide.styling.fontFamily;
        slideContainer.style.backgroundColor = slide.styling.backgroundColor;

        slideContainer.textContent = slide.content.text;
    })

})