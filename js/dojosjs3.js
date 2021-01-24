// TROISIEME ETAPE

const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

const link = document.createElement("a");
const linkpied = document.createElement("a");

const souslink = document.createElement("a");

nav.appendChild(link);
footer.appendChild(linkpied)
link.appendChild(souslink);


let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {

        var data = this.response; //je crée une variable de la réponse
        var menuprincipal = data.principal; //je crée une variable en ciblant un élément dans la réponse

        console.log(menuprincipal); 

        for (var i = 0; i < menuprincipal.length; i++){ //je récupère les données et les intégre dans nav
            link.innerHTML += menuprincipal[i].nom;
        }

        var menupied = data.pied; 
        
        console.log(menupied);

        for (var i = 0; i < menupied.length; i++){
            linkpied.innerHTML += menupied[i].nom;
        }
        
        var articles = menuprincipal['Articles'];
        console.log(articles);

        // var sousmenu = articles.sousmenus['nom'];

        // console.log(sousmenu);

        // for (var i = 0; i < sousmenu.length; i++){
        //     souslink.innerHTML += sousmenu[i].nom;
        // }
    }
    else if (this.readyState == 4 && this.status == 404) {
        alert('Erreur 404');
    }
}

xhr.open("GET", "data/menu.json", true); //requete pour ouvrir le tableau
//true signifie que l'on veut utiliser de l'asynchrone 
xhr.responseType = "json"; // Signifier le format du document 
xhr.send();//envoyer la requête
