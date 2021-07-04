function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function getOneProducts() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search.slice(1));
    params.append("pdtId", location.search.substring(4));

    let id = location.search.substring(4);
    infoId = params.get("pdtId");
    let apiurl = "http://localhost:3000/api/cameras/" + params.get("pdtId");
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

            // let inserx0 = document.getElementById("output");
            var creax0 = document.createElement("p");
            p.appendChild(creax0);
            creax0.innerHTML = "Choisissez une option lentille";

            var creax1 = document.createElement("select");
            p.appendChild(creax1);
            creax1.setAttribute("id", "myObjectif");
            creax1.setAttribute("placeholder", "myObjectif");
            // creax1.setAttribute("onchange", "firstFunction()");
            for (var i = 0; i < data.lenses.length; i++) {
                var creax2 = document.createElement("option");
                creax1.appendChild(creax2);
                // creax2.setAttribute("value", i);
                creax2.innerHTML = "Objectif:" + " " + data.lenses[i];
            }
            var crebx0 = document.createElement("p");
            p.appendChild(crebx0);
            crebx0.innerHTML = "Choisissez une quantité";

            // var creax1 = document.createElement("select");
            // p.appendChild(creax1);
            // creax1.setAttribute("id", "myObjectif");
            // creax1.setAttribute("placeholder", "myObjectif");
            // // creax1.setAttribute("onchange", "firstFunction()");
            // for (var i = 0; i < data.lenses.length; i++) {
            //     var creax2 = document.createElement("option");
            //     creax1.appendChild(creax2);
            //     // creax2.setAttribute("value", i);
            //     creax2.innerHTML = "Objectif:" + " " + data.lenses[i];
            // }

            // crea5 = document.createElement("label");
            // p.appendChild(crea5);
            // crea5.setAttribute("for", "qte");
            // crea5.innerHTML = "Choisissez une quantité";

            // crea6 = document.createElement("input");
            // p.appendChild(crea6);

            // crea6.setAttribute("type", "text");
            // crea6.setAttribute("name", "qte");
            // crea6.setAttribute("placeholder", "Entrez la quantité");

            crea7 = document.createElement("button");
            p.appendChild(crea7);
            crea6.setAttribute("id", "btn");

            crea7.setAttribute("id", "boutonProduct");
            crea7.innerHTML = "Ajoutez au panier";
            // const s = getElementById("demo");
            crea8 = document.createElement("div");
            p.appendChild(crea8);
            crea8.setAttribute("id", "erreur");
            // err = "Je suis un Yankee";

            const btn = document.querySelector("#myObjectif");
            btn.onclick = (event) => {
                event.preventDefault();
            };

            boutonProduct.onclick = () => {
                if (crea6.value == "" || btn.value == "") {
                    document.getElementById("erreur").innerHTML =
                        "Choisissez obligatoirement une quantité et un objectif";
                } else {
                    var sous_total;
                    const product = {
                        nom: data.name,
                        qte: crea6.value,
                        prix_unit: data.price / 100 + "" + "€",
                        lentille: btn.value,
                        sous_total: (crea6.value = crea6.value * (data.price / 100)),
                        // urlImage: data.imageUrl,
                        // id: data._id,
                        // description: data.description,
                    };
                    // panier.push(panier);
                    document.getElementById("erreur").innerHTML = "";

                    localStorage.setItem("product", JSON.stringify(product));
                    var href = "panier.html";

                    window.location.href = href;
                }
            };
        })

    .catch(function(err) {
        // Une erreur est survenue
    });
}

getOneProducts();