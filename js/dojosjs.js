// PREMIERE ÉTAPE

const aside = document.querySelector("aside");
const image = document.querySelector("div:first-of-type");


image.onmouseover = function () {
    mouseOver()
}

image.onmouseleave = function () {
    mouseLeave()
}

function mouseOver() {
    image.style.borderRadius = "0%"
}

function mouseLeave() {
    image.style.borderRadius = "50%"
}


