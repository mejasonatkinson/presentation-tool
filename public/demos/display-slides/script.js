const slides = document.querySelectorAll('.slide');
// console.log(slides);
slides.forEach((element, index, array) => { 
    // console.log(element);
    // console.log(index);
    // console.log(array);
    if(index != 0) {
        element.style.display = 'none';
    }
    element.addEventListener('click', function() {
        // console.log('clicked');
        // console.log(slides.length);
        // console.log(index+1);
        if (slides.length == (index+1)) {
            slides[0].style.display = 'flex';
            element.style.display = 'none';
        } else {
            element.style.display = 'none';
            slides[(index+1)].style.display = 'flex';
        }
    })
 })