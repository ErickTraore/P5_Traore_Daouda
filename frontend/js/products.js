function getOneProducts() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search.slice(1));
    params.append('foo', 4);

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
            let insert1 = document.getElementById("output");
            crea1 = document.createElement("div");
            insert1.appendChild(crea1);
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

                // function selectFunction(val) {
                //     alert("The input value has changed. The new value is: " + val);
                // }
                // function selectFunction() {
                //     var x = document.getElementById("crea1").value;
                //     // document.getElementById("demo").innerHTML =
                //     //     "You selected: " + x;
                //     console.log("x");
                // }
                // const valeur = document.querySelector(
                //     'input[name="choix"]:checked'
                // ).value;
                // console.log(valeur);

            }

            /////////////
            insert1 = document.getElementById("output");
            crea4 = document.createElement("div");
            crea5 = document.createElement("input");
            insert1.appendChild(crea4);
            insert1.appendChild(crea5);
            crea4.innerHTML = "Choisir la quantité";
            crea4.setAttribute("class", "output__select");

            crea5.setAttribute("type", "text");
            crea5.setAttribute("name", "qte");
            crea5.setAttribute("placeholder", "Entrez la quantité");

            //////////////////////////////////////////

            var e = document.createElement("a");
            e.classList.add("articles__article");
            e.setAttribute("id", "out");
            e.href = "panier.html?id=" + data._id + "&price" + " = " + data.price;
            e.innerHTML = '<i class = "fas fa-shopping-cart"> </i> Ajoutez au panier';
            p.appendChild(e);
        })

    .catch(function(err) {
        // Une erreur est survenue
    });
}


getOneProducts();