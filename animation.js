//nav scroll
window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("crush", window.scrollY > 50);
})

//preload
const preload = document.querySelector(".cool-load")

window.addEventListener("load", smash);

function smash() {
    preload.classList.add("hide");
}

//try scroll animation
window.addEventListener("load", () => {
    let content = document.querySelector(".big-text");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("tiny");
    }
});
window.addEventListener("load", () => {
    let content = document.querySelector(".home-par");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("call");
    }
});
window.addEventListener("load", () => {
    let content = document.querySelector(".home-icon");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("qese");
    }
});
window.addEventListener("load", () => {
    let content = document.querySelector(".join");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("bed");
    }
});
window.addEventListener("load", () => {
    let content = document.querySelector(".get");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("bad");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".img-bot");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (contentPosition < screenPosition) {
        content.classList.add("boti");
    }
});

window.addEventListener("scroll", () => {
    let content = document.querySelector(".about-features");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 0.8;

    if (contentPosition < screenPosition) {
        content.classList.add("burger");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".info-blocks");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;

    if (contentPosition < screenPosition) {
        content.classList.add("coco");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".founder-image");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.7;

    if (contentPosition < screenPosition) {
        content.classList.add("prof");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".founder-name");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("nam");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".founder-info");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
        content.classList.add("info");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".leter");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
        content.classList.add("leter-pice");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".leter-dy");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (contentPosition < screenPosition) {
        content.classList.add("leter-pice");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".leter-tre");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.1;

    if (contentPosition < screenPosition) {
        content.classList.add("leter-pice");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".pica");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1;

    if (contentPosition < screenPosition) {
        content.classList.add("marga");
    }
});