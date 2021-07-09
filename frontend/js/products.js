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
                "Model:" +
                " " +
                data.name +
                " <br> " +
                "Prix:" +
                " " +
                data.price / 100;
            p.appendChild(e);

            var creax0 = document.createElement("p");
            p.appendChild(creax0);
            creax0.innerHTML = "Choisissez une option lentille";

            var creax1 = document.createElement("select");
            p.appendChild(creax1);
            creax1.setAttribute("id", "myObjectif");
            creax1.setAttribute("class", "output__myObjectif");
            creax1.setAttribute("placeholder", "myObjectif");
            for (var i = 0; i < data.lenses.length; i++) {
                var creax2 = document.createElement("option");
                creax1.appendChild(creax2);
                creax2.innerHTML = "Objectif:" + " " + data.lenses[i];
            }

            crea5 = document.createElement("p");
            p.appendChild(crea5);
            crea5.setAttribute("for", "qte");
            crea5.innerHTML = "Choisissez une quantité";

            //modif inserez quantité
            crea6 = document.createElement("form");
            p.appendChild(crea6);
            crea6.setAttribute("class", "output__divQte");

            crea61 = document.createElement("input");
            crea6.appendChild(crea61);
            crea61.setAttribute("id", "moins");
            crea61.setAttribute("type", "button");
            crea61.setAttribute("value", "-");
            crea61.setAttribute("class", "output__divQte__qte");
            crea61.addEventListener("click", function() {
                if (result > 1 && result <= 99) {
                    result--;
                    document.getElementById("result").value = result;
                }
            });

            crea62 = document.createElement("input");
            crea6.appendChild(crea62);
            crea62.setAttribute("id", "result");
            crea62.setAttribute("type", "number");
            crea62.setAttribute("value", "1");
            crea62.setAttribute("class", "output__divQte__qte");

            crea63 = document.createElement("input");
            crea6.appendChild(crea63);
            crea63.setAttribute("id", "plus");
            crea63.setAttribute("type", "button");
            crea63.setAttribute("value", "+");
            crea63.setAttribute("class", "output__divQte__qte");
            crea63.addEventListener("click", function() {
                if (result >= 1 && result < 99) {
                    result++;
                    document.getElementById("result").value = result;
                }
            });

            let res = document.getElementById("result");
            result = parseInt(res.value, 10);

            crea64 = document.createElement("btn");
            crea64.innerHTML = "Continuez vos achats"
            p.appendChild(crea64);
            crea64.setAttribute("id", "btn_2");
            crea64.setAttribute("class", "output__divQte__btn2");
            // crea64.addEventListener("click", function() {
            //     var href = "index.html";
            //     window.location.href = href;
            // });

            //fin modif inserez quantité

            crea7 = document.createElement("button");
            p.appendChild(crea7);

            crea7.setAttribute("class", "output__divQte__btn");
            crea7.setAttribute("id", "boutonProduct");
            crea7.innerHTML = "Ajoutez au panier";
            crea8 = document.createElement("div");
            p.appendChild(crea8);
            crea8.setAttribute("id", "erreur");

            const btn = document.querySelector("#myObjectif");
            btn.onclick = (event) => {
                event.preventDefault();
            };

            boutonProduct.onclick = () => {
                if (crea62.value == "" || btn.value == "") {
                    document.getElementById("erreur").innerHTML = "Choisissez obligatoirement une quantité et un objectif";
                } else {
                    var sous_total;
                    const product = {
                        nom: data.name,
                        qte: crea62.value,
                        prix_unit: data.price / 100 + "" + "€",
                        lentille: btn.value,
                        sous_total: crea62.value * (data.price / 100),
                        // sous_total: (crea6.value =
                        //     crea6.value * (data.price / 100)),
                        imgSrc: data.imageUrl,
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
            btn_2.onclick = () => {
                if (crea62.value == "" || btn.value == "") {
                    document.getElementById("erreur").innerHTML =
                        "Choisissez obligatoirement une quantité et un objectif";
                } else {
                    var sous_total;
                    const product = {
                        nom: data.name,
                        qte: crea62.value,
                        prix_unit: data.price / 100 + "" + "€",
                        lentille: btn.value,
                        sous_total: crea62.value * (data.price / 100),
                        // sous_total: (crea6.value =
                        //     crea6.value * (data.price / 100)),
                        imgSrc: data.imageUrl,
                        // id: data._id,
                        // description: data.description,
                    };
                    // panier.push(panier);
                    document.getElementById("erreur").innerHTML = "";

                    localStorage.setItem("product", JSON.stringify(product));
                    var href = "index.html";
                    window.location.href = href;
                }
            };
        })

    .catch(function(err) {
        // Une erreur est survenue
    });
}

getOneProducts();