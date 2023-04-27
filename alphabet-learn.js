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


/* Audio JS*/

var A = document.getElementById("A");

function play_A() {
    A.play();
}
var B = document.getElementById("B");

function play_B() {
    B.play();
}
var C = document.getElementById("C");

function play_C() {
    C.play();
}
var D = document.getElementById("D");

function play_D() {
    D.play();
}
var E = document.getElementById("E");

function play_E() {
    E.play();
}
var F = document.getElementById("F");

function play_F() {
    F.play();
}
var G = document.getElementById("G");

function play_G() {
    G.play();
}
var H = document.getElementById("H");

function play_H() {
    H.play();
}
var I = document.getElementById("I");

function play_I() {
    I.play();
}
var J = document.getElementById("J");

function play_J() {
    J.play();
}
var K = document.getElementById("K");

function play_K() {
    K.play();
}
var L = document.getElementById("L");

function play_L() {
    L.play();
}
var M = document.getElementById("M");

function play_M() {
    M.play();
}
var N = document.getElementById("N");

function play_N() {
    N.play();
}
var O = document.getElementById("O");

function play_O() {
    O.play();
}
var P = document.getElementById("P");

function play_P() {
    P.play();
}
var Q = document.getElementById("Q");

function play_Q() {
    Q.play();
}
var R = document.getElementById("R");

function play_R() {
    R.play();
}
var S = document.getElementById("S");

function play_S() {
    S.play();
}
var T = document.getElementById("T");

function play_T() {
    T.play();
}
var U = document.getElementById("U");

function play_U() {
    U.play();
}
var V = document.getElementById("V");

function play_V() {
    V.play();
}
var W = document.getElementById("W");

function play_W() {
    W.play();
}
var X = document.getElementById("X");

function play_X() {
    X.play();
}
var Y = document.getElementById("Y");

function play_Y() {
    Y.play();
}
var Z = document.getElementById("Z");

function play_Z() {
    Z.play();
}