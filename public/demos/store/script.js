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
    {
        id: "slide-3",
        layout: "split-right",
        styling: {
            fontSize: "21px",
            fontFamily: "sans-serif",
            backgroundColor: "green",
        },
        content: {
            text: "Placeholder 3",
            image: "https://via.placeholder.com/150x150",
        }
    }
]

const slideContainer = document.getElementById('slide-container');

slides.forEach(slide => {
    // console.log(slide.id); // element id
    // console.log(slide.layout); // element class
    // console.log(slide.styling.fontSize); // element custom styling
    // console.log(slide.styling.fontFamily); // element custom styling
    // console.log(slide.styling.backgroundColor); // element custom styling
    // console.log(slide.content.text); // element content
    // console.log(slide.content.image); // element content

    const newDiv = document.createElement("div");

    newDiv.classList.add('slide');
    newDiv.classList.add(slide.layout);

    newDiv.setAttribute('id', slide.id);

    newDiv.style.fontSize = slide.styling.fontSize;
    newDiv.style.fontFamily = slide.styling.fontFamily;
    newDiv.style.backgroundColor = slide.styling.backgroundColor;

    newDiv.appendChild(document.createTextNode(slide.content.text));

    // if(slide.content.image) {
        // const newImage = document.createElement("img");
        // newImage.setAttribute('src', slide.content.image);
        // newDiv.appendChild(newImage);
    // }

    document.getElementById('thumbnails').appendChild(newDiv);

    document.getElementById(slide.id).addEventListener('click', function(event) {
        slideContainer.style.fontSize = slide.styling.fontSize;
        slideContainer.style.fontFamily = slide.styling.fontFamily;
        slideContainer.style.backgroundColor = slide.styling.backgroundColor;

        slideContainer.textContent = slide.content.text;
    })
})