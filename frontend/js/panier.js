product = JSON.parse(localStorage.getItem("product"));
console.log(product);
if (product != null) {
    h2.textContent = `Ma commande`;
    let crea01 = document.getElementById("orinoco");
    let crea02 = document.createElement("table");
    crea01.appendChild(crea02);
    crea02.setAttribute("id", "table");
    let creay1 = document.getElementById("table");
    let creay2 = document.createElement("thead");
    creay1.appendChild(creay2);
    creay2.setAttribute("id", "thead");
    let creab1 = document.getElementById("thead");
    let creab2 = document.createElement("tr");
    creab1.appendChild(creab2);
    creab2.setAttribute("id", "th");
    let creaz1 = document.getElementById("table");
    let creaz2 = document.createElement("tbody");
    creaz1.appendChild(creaz2);
    creaz2.setAttribute("id", "tbody");
    let creac1 = document.getElementById("tbody");
    let creac2 = document.createElement("tr");
    creac1.appendChild(creac2);
    creac2.setAttribute("id", "tr");
    for (var city in product) {
        let creax1 = document.getElementById("th");
        let creax2 = document.createElement("th");
        creax1.appendChild(creax2);

        creax2.innerHTML = city;

        let crea1 = document.getElementById("tr");
        let crea2 = document.createElement("td");
        crea1.appendChild(crea2);

        crea2.innerHTML = product[city];
    }
}
var panier = localStorage.getItem("panier") || [];
if (Array.isArray(panier) && panier.length == 0) {
    panier = [];
    console.log(
        "le tableau existe, mais il s'agit d'une première utilisation"
    );
    localStorage.setItem("panier", JSON.stringify([product]));
} else {
    var panier = JSON.parse(localStorage.getItem("panier"));
    console.log(
        "Le tableau contient des objets et il faut donc les cumuler"
    );
    panier.push(product);
    localStorage.setItem("panier", JSON.stringify(panier));
    // var stored = JSON.parse(localStorage.getItem("panier"));
    console.log()
}
inputenvoyer.onclick = () => {
    var href = "test.html";
    window.location.href = href;
}

// localStorage.setItem("panier", JSON.stringify([cde]));
// console.log(panier);