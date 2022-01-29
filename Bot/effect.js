//preload
const preload = document.querySelector(".cool-load")

window.addEventListener("load", smash);

function smash() {
    preload.classList.add("hide");
}

//autotype
var i = 0,
    text;
text = "Hello there.Welcome in my commands page.Scroll down to see all commands."

function typing() {
    if (i < text.length) {
        document.getElementById("autotype").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}
typing();
//back to top button
const backtotop = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollfunction);

function scrollfunction() {
    if (window.pageYOffset > 100) {
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
}

backtotop.addEventListener("click", backToTop)

function backToTop() {
    window.scrollTo(0, 0);
}