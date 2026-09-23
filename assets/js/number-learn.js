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

var one = document.getElementById("one");

function play_One() {
    one.play();
}
var two = document.getElementById("two");

function play_Two() {
    two.play();
}
var three = document.getElementById("three");

function play_Three() {
    three.play();
}
var four = document.getElementById("four");

function play_Four() {
    four.play();
}
var five = document.getElementById("five");

function play_Five() {
    five.play();
}
var six = document.getElementById("six");

function play_Six() {
    six.play();
}
var seven = document.getElementById("seven");

function play_Seven() {
    seven.play();
}
var eight = document.getElementById("eight");

function play_Eight() {
    eight.play();
}
var nine = document.getElementById("nine");

function play_Nine() {
    nine.play();
}
var ten = document.getElementById("ten");

function play_Ten() {
    ten.play();
}