if (typeof product === "undefined") {
    var product = JSON.parse(localStorage.getItem("product"));
}
if (typeof panier === "undefined") {
    var panier = [];
    panier = JSON.parse(localStorage.getItem("panier"));
}

console.log(product);
console.log(panier);

function ajoutezPanier() {
    panier = JSON.parse(localStorage.getItem("panier"));
    panier.push(product);
    localStorage.setItem("panier", JSON.stringify(panier));
}

if (product === null && panier === null) {
    alert("produit vide et panier vide, donc retour à l'index.");
    localStorage.removeItem("product");
    localStorage.removeItem("panier");
    localStorage.removeItem("data");
    window.location.href = "index.html";
} else if (product === null && panier !== null) {
    affichagePanier();
} else if (product !== null && panier !== null) {
    panier.push(product);
    localStorage.setItem("panier", JSON.stringify(panier));
    affichagePanier();
    localStorage.removeItem("product");
} else if (product !== null && panier == null) {
    panier = [];
    panier.push(product);
    localStorage.setItem("panier", JSON.stringify(panier));
    affichagePanier();
    localStorage.removeItem("product");
} else {
    console.log("defaut fichier panier.js");
}