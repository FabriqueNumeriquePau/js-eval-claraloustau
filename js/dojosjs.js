let as= document.querySelector("aside");
let imgDiv= document.querySelector("div:first-of-type");


imgDiv.onmouseover = function() {mouseOver()};
imgDiv.onmouseout = function() {mouseOut()};

function mouseOver() {
   imgDiv.style.borderRadius = "0%";
}

function mouseOut() {
    imgDiv.style.borderRadius = "50%";
}

// ETAPE 2



let fleches = document.querySelectorAll("header");
let i;
for (i = 0; i < fleches.length; i++) {
    fleches[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.visibility === "hidden" || content.style.visibility === "" )
         {
            content.style.visibility = "visible"; 
            content.style.height = "auto";
        }  else {
            content.style.visibility = "hidden";
            content.style.height = "0px"
        }

    });
} 

let xhr = new XMLHttpRequest();  // Création de l'objet ajax XMLHttpRequest 

xhr.onreadystatechange = function(){ //onreadystatgechange = signifie que la requête va être modifiée
                                     //Il y a en tout 5 états différents : 0 1 2 3 4 
                                     //consolelog readystate pour les voir

    console.log(this);              
    if (this.readyState == 4 && this.status == 200){ //Si retour HTTP OK
        var fromages = this.response.menu; // créer variable de la réponse
        console.log(menu);  // voir si tout va bien

                        //on a la réponse à notre requête//
                        //qu'est-ce qu'on en fait maintenant//

xhr.open("GET", "data/menu.json", true); //requete pour ouvrir le tableau
                                               //true signifie que l'on veut utiliser de l'asynchrone 
xhr.responseType = "json"; // Signifier le format du document 
xhr.send();//envoyer la requête