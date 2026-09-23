var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
//var slideIndex = 0;
//showSlides();
//function showSlides() {
//var i;
//  var slides = document.getElementsByClassName("slider");
// for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
// }
//  slideIndex++;
// if (slideIndex > slides.length) { slideIndex = 1 }
// slides[slideIndex - 1].style.display = "block";
// setTimeout(showSlides, 2000); // Change image every 2 seconds
//}


/* Audio JS*/

var RED = document.getElementById("RED");

function play_RED() {
    RED.play();
}
var ORANGE = document.getElementById("ORANGE");

function play_ORANGE() {
    ORANGE.play();
}
var GREEN = document.getElementById("GREEN");

function play_GREEN() {
    GREEN.play();
}
var YELLOW = document.getElementById("YELLOW");

function play_YELLOW() {
    YELLOW.play();
}
var BLUE = document.getElementById("BLUE");

function play_BLUE() {
    BLUE.play();
}
var PURPLE = document.getElementById("PURPLE");

function play_PURPLE() {
    PURPLE.play();
}