// Exercice 4 de la partie Javascript
// window.onload = function disparition() {
//     document.getElementById('threeBlocs').style.visibility = "hidden";
// }
// window.onscroll = function() {scroll()}; 
// function scroll() {
//     if (document.body.scrollTop > 50) {
//         document.getElementById('threeBlocs').style.visibility = "visible";
//     } else {
//         document.getElementById('threeBlocs').style.visibility = "hidden";
//     }
// }




var threeBlocs = document.getElementById('threeBlocs');
window.onload = function disparition() {
    document.getElementById('threeBlocs').style.visibility = "hidden";
}
var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 200) {
        document.getElementById('threeBlocs').style.visibility = "visible";
    } else {
        document.getElementById('threeBlocs').style.visibility = "hidden";
    }
};

window.addEventListener("scroll", myScrollFunc);