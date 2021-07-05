product = JSON.parse(localStorage.getItem("product"));
console.log(product);

var panier = localStorage.getItem("panier") || [];
if (Array.isArray(panier) && panier.length == 0) {
    panier = [];
    console.log("le tableau existe, mais il s'agit d'une première utilisation");
    localStorage.setItem("panier", JSON.stringify([product]));
} else {
    var panier = JSON.parse(localStorage.getItem("panier"));
    console.log("Le tableau panier contient des products");
    panier.push(product);
    localStorage.setItem("panier", JSON.stringify(panier));
    // var stored = JSON.parse(localStorage.getItem("panier"));
    console.log();
}
inputenvoyer.onclick = () => {
    var href = "test.html";
    window.location.href = href;
};

//Debut d'insertion page view
data = JSON.parse(localStorage.getItem("panier"));
console.log(data);

var p0 = document.getElementById("orinoco");
// p0.setAttribute("class", "viewver");

var e = document.createElement("div");
p0.appendChild(e);
e.setAttribute("id", "card");
e.setAttribute("class", "viewver");
var p = document.getElementById("card");

for (i = 0; i < data.length; i++) {
    var tot = parseInt(data[i].prix_unit) * parseInt(data[i].qte);
    var img = document.createElement("IMG");
    img.src = data[i].imgSrc;
    p.appendChild(img);
    img.setAttribute("class", "viewver__img");

    var e = document.createElement("div");
    e.innerHTML =
        "Model:" +
        data[i].nom +
        "<br/>" +
        data[i].lentille +
        "<br/>" +
        "Prix:" +
        data[i].prix_unit;
    p.appendChild(e);
    e.setAttribute("class", "viewver__panier1");

    var e = document.createElement("div");
    e.innerHTML = "Quantité:" + data[i].qte + "<br/>" + "Prix Total:" + tot;
    p.appendChild(e);
    e.setAttribute("class", "viewver__panier2");

    var e = document.createElement("div");
    // e.innerHTML = "N°" + " " + i;
    e.innerHTML = i;
    p.appendChild(e);
    e.setAttribute("class", "viewver__num");

    var e = document.createElement("div");
    e.innerHTML = "Suprimer";
    p.appendChild(e);
    e.setAttribute("class", "viewver__suprimer");
    e.addEventListener("click", function() {
        alert("ok");
        // here you need to make a loop to find the index of item to delete
        var indexToRemove = data[i];
        alert(indexToRemove);
        //remove item selected, second parameter is the number of items to delete
        data.splice(indexToRemove, 5);
        console.log(data);
        // Put the object into storage
        // localStorage.setItem("keyName", JSON.stringify(storedNames));
        localStorage.setItem("panier", JSON.stringify(data));
        // console.log(data);
    });

    var e = document.createElement("div");
    e.innerHTML = data[i].nom;
    p.appendChild(e);
    e.setAttribute("class", "viewver__name");

    var e = document.createElement("div");
    e.innerHTML = data[i].prix_unit;
    p.appendChild(e);
    e.setAttribute("class", "viewver__price");

    var e = document.createElement("div");
    e.innerHTML = data[i].qte;
    p.appendChild(e);
    e.setAttribute("class", "viewver__quantite");

    var e = document.createElement("div");
    e.innerHTML = data[i].lentille;
    p.appendChild(e);
    e.setAttribute("class", "viewver__objectif");

    //     var e = document.createElement("a");
    //     e.classList.add("viewver__article");
    //     e.href = "pageProduct.html?id=" + data[i]._id;
    //     e.innerHTML = "Retour";
    //     p.appendChild(e);

    //     var elm = document.createElement("div");
    //     elm.innerHTML = "N°" + " " + i;
    //     p.appendChild(e);
    //     elm.setAttribute("class", "viewver__num");
}