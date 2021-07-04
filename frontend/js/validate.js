data = JSON.parse(localStorage.getItem("panier"));
console.log(data);

var p0 = document.getElementById("view");
p0.setAttribute("class", "viewver")

var e = document.createElement("div");
p0.appendChild(e);
e.setAttribute("id", "card");
e.setAttribute("class", "carding");
var p = document.getElementById("card");

for (i = 0; i < data.length; i++) {
    var img = document.createElement("IMG");
    img.src = data[i].imgSrc;
    p.appendChild(img);

    var e = document.createElement("div");
    e.innerHTML = data[i].nom;
    p.appendChild(e);
    e.setAttribute("class", "name");


    var e = document.createElement("div");
    e.innerHTML = data[i].prix_unit;
    p.appendChild(e);
    e.setAttribute("class", "price");


    var e = document.createElement("div");
    e.innerHTML = data[i].qte;
    p.appendChild(e);
    e.setAttribute("class", "quantite");


    var e = document.createElement("div");
    e.innerHTML = data[i].lentille;
    p.appendChild(e);
    e.setAttribute("class", "objectif");


    var e = document.createElement("a");
    e.classList.add("articles__article");
    e.href = "pageProduct.html?id=" + data[i]._id;
    e.innerHTML = " Détails du produit";
    p.appendChild(e);
}