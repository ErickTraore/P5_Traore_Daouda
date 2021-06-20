﻿function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let insert1 = document.getElementById("section");
let crea1 = document.createElement("store");
insert1.appendChild(crea1);
crea1.setAttribute("id", "articles");
crea1.setAttribute("class", "articles");

function getAllProducts() {
    fetch("http://localhost:3000/api/cameras/")
        .then(reponse => reponse.json())
        .then(data => {
            var p = document.getElementById("articles");
            for (i = 0; i < data.length; i++) {

                var img = document.createElement("IMG");
                img.src = data[i].imageUrl;
                img.classList.add("articles__image");
                p.appendChild(img);

                var e = document.createElement("div");
                e.classList.add("articles__article");
                e.innerHTML = "Model:" + " " + data[i].name;
                p.appendChild(e);

                var e = document.createElement("div");
                e.classList.add("articles__article");
                e.innerHTML =
                    "Prix :" + " " + "<span>" + data[i].price + "." + "</span>";
                p.appendChild(e);

                var e = document.createElement("a");
                e.classList.add("articles__article");
                e.href = "pageProduct.html?id=" + data[i]._id;
                e.innerHTML = " Détails du produit";
                p.appendChild(e);
            }
            // .catch(function(err) {
            //     //Une erreur est survenue
        });

}
getAllProducts();