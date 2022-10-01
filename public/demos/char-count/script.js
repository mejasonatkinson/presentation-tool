const textArea = document.getElementById('textarea');
const textAreaInfo = document.getElementById('textarea-info');



textArea.addEventListener('keyup', function(event) {
    textAreaInfo.textContent = event.target.value.length;
    if (event.target.value.length >= 200) {
        textAreaInfo.style.color = "red";
    } else {
        textAreaInfo.style.color = "green";
    }
})




