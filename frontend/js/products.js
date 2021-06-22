﻿function getOneProducts() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search.slice(1));
    params.append("foo", 4);

    let id = location.search.substring(4);
    let test = params.get("foo");
    let apiurl = "http://localhost:3000/api/cameras/" + id;

    var p = document.getElementById("output");
    // alert(apiurl);
    fetch(apiurl)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(data) {
            var img = document.createElement("IMG");
            img.src = data.imageUrl;
            img.classList.add("output__image");
            p.appendChild(img);

            var e = document.createElement("div");
            e.classList.add("output__article");
            e.innerHTML =
                "La qualité de votre produit:" +
                " " +
                "<span>" +
                data.description +
                "." +
                "</span>";
            p.appendChild(e);

            var e = document.createElement("div");
            e.classList.add("output__select");
            e.innerHTML =
                "Model:" + " " + data.name + " <br> " + "Prix:" + " " + data.price;
            p.appendChild(e);

            let inserx0 = document.getElementById("output");
            creax0 = document.createElement("form");
            inserx0.appendChild(creax0);
            creax0.setAttribute("name", "form1");
            creax0.setAttribute("method", "get");
            creax0.setAttribute("action", "panier.html");

            crea1 = document.createElement("div");
            creax0.appendChild(crea1);
            crea1.setAttribute("type", "text");

            crea1.setAttribute("class", "output__select");
            crea1.setAttribute("id", "crea1");
            crea1.setAttribute("onchange", "selectFunction()");
            crea1.setAttribute("name", "selectFunction()");
            crea1.innerHTML = "<p>Choisissez un objectif </p>";
            valid_top = true;

            for (var i = 0; i < data.lenses.length; i++) {
                insert2 = document.getElementById("crea1");
                crea2 = document.createElement("input");
                crea3 = document.createElement("label");
                crea3.setAttribute("for", "choix" + [i]);
                crea3.innerHTML =
                    "<p> " + " " + "Objectif:" + " " + data.lenses[i] + " " + "</p>";

                insert2.appendChild(crea2);
                insert2.appendChild(crea3);
                if (valid_top) {
                    crea2.setAttribute("checked", "");
                }
                valid_top = false;

                crea2.setAttribute("type", "radio");
                crea2.setAttribute("name", "choix");
                crea2.setAttribute("value", data.lenses[i]);
                crea2.setAttribute("id", "choix" + [i]);
            }
            // let inserx = document.getElementById("output");
            // let creax = document.createElement("form");
            // inserx.appendChild(creax);
            // creax.setAttribute("name", "form2");
            /////////////
            // insert1 = document.getElementById("output");
            // crea4 = document.createElement("div");
            crea6 = document.createElement("label");
            crea5 = document.createElement("input");
            // creax0.appendChild(crea4);
            creax0.appendChild(crea5);
            insert2.appendChild(crea6);
            // crea4.innerHTML = "Choisir la quantité";
            crea6.setAttribute("for", "qte");
            crea6.innerHTML = "Choisissez une quantité";

            // crea4.setAttribute("class", "output__select");

            crea5.setAttribute("type", "text");
            crea5.setAttribute("name", "qte");
            crea5.setAttribute("placeholder", "Entrez la quantité");
            crea7 = document.createElement("input");
            creax0.appendChild(crea7);
            crea7.setAttribute("type", "submit");
            crea7.setAttribute("name", "submit");
            crea7.setAttribute("value", "Ajoutez au panier");
            // crea7.innerHTML =
            //     '<i class = "fas fa-shopping-cart"> </i> Ajoutez au panier';
            //////////////////////////////////////////

            // var e = document.createElement("a");
            // e.classList.add("articles__article");
            // e.setAttribute("id", "out");
            // e.href = "panier.html?id=" + data._id + "&price" + " = " + data.price;
            // e.innerHTML = '<i class = "fas fa-shopping-cart"> </i> Ajoutez au panier';
            // p.appendChild(e);
        })

    .catch(function(err) {
        // Une erreur est survenue
    });
}

getOneProducts();