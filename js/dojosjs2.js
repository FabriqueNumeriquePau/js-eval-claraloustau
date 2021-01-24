// DEUXIEME ETAPE

let fleches = document.getElementsByClassName("picto");

// let one = fleches.item(i).parentNode.nextElementSibling;


for (let i = 0; i < fleches.length; i++) {

    fleches.item(i).addEventListener("click", function () {
        if (fleches.item(i).parentNode.nextElementSibling.style.visibility = "hidden") {
            fleches.item(i).parentNode.nextElementSibling.style.visibility = "visible";
            fleches.item(i).parentNode.nextElementSibling.style.height = "auto";
        }
        else if (fleches.item(i).parentNode.nextElementSibling.style.visibility = "visible") {
            fleches.item(i).parentNode.nextElementSibling.style.visibility = "hidden";
            fleches.item(i).parentNode.nextElementSibling.style.height = "0%";
        }
    })
};