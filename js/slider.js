var idx = 1
var totalslides = document.getElementsByClassName("slides")
displaySlide(idx)
function moveSlides(n){
    displaySlide(idx +=n)
}
function displaySlide(n) {
    var i
    if (n > totalslides.length) {
        idx = 1
    }
    if (n < 1) {
        idx = totalslides.length
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none"
    }
    totalslides[idx - 1].style.display = "block"
}