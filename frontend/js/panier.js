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
// let articles = [];
pe = document.createElement("div");
p0.appendChild(pe);
pe.setAttribute("id", "case");
pe.setAttribute("class", "viewver");

class Articles {

    constructor(nom, qte, prix_unit, lentille, imgSrc) {
        this.nom = nom;
        this.qte = qte;
        this.prix_unit = prix_unit;
        this.lentille = lentille;
        this.imgSrc = imgSrc;
    }
}
for (let i = 0; i < data.length; i++) {
    let article = new Articles(
        data[i].nom,
        data[i].qte,
        data[i].prix_unit,
        data[i].lentille,
        data[i].imageUrl
    );
    var tot = parseInt(data[i].prix_unit) * parseInt(data[i].qte);
    // console.log(data.length);
    var pa = document.createElement("div");
    pe.appendChild(pa);
    pa.setAttribute("id", i);
    pa.setAttribute("class", "viewver__case");

    var ps = document.createElement("div");
    pa.appendChild(ps);
    ps.setAttribute("id", "caseTexteGauche");
    ps.setAttribute("class", "viewver__case__caseTexteGauche");

    var img = document.createElement("IMG");
    img.src = data[i].imgSrc;
    ps.appendChild(img);
    img.setAttribute("class", "viewver__case__caseTexteGauche__img");

    var pb = document.createElement("button");
    pb.innerHTML = "Suprimmez";
    ps.appendChild(pb);
    pb.setAttribute("id", "caseTexteGaucheEcrease");
    pb.setAttribute("class", "viewver__case__caseTexteGauche__ecrease");

    var px = document.createElement("div");
    pa.appendChild(px);
    px.setAttribute("id", "caseTexteDroit");
    px.setAttribute("class", "viewver__case__caseTexteDroit");

    var py = document.createElement("div");
    px.appendChild(py);
    py.setAttribute("id", "texte-sup");
    py.setAttribute("class", "viewver__case__caseTexteDroit__sup");

    var e = document.createElement("div");
    e.innerHTML = data[i].nom;
    py.appendChild(e);
    e.setAttribute("id", "nom");
    e.setAttribute("class", "viewver__case__caseTexteDroit__sup__nom");

    var e = document.createElement("div");
    e.innerHTML = data[i].lentille;
    py.appendChild(e);
    e.setAttribute("id", "lentille");
    e.setAttribute("class", "viewver__case__caseTexteDroit__sup__lentille");

    var pi = document.createElement("div");
    px.appendChild(pi);
    pi.setAttribute("id", "texte-inf");
    pi.setAttribute("class", "viewver__case__caseTexteDroit__inf");

    var e = document.createElement("div");
    e.innerHTML = "P.u:" + " " +
        data[i].prix_unit;
    pi.appendChild(e);
    e.setAttribute("id", "prix");
    e.setAttribute("class", "viewver__case__caseTexteDroit__inf__price");

    var e = document.createElement("div");
    e.innerHTML = "Qté:" + " " + data[i].qte;
    pi.appendChild(e);
    e.setAttribute("id", "qte");
    e.setAttribute("class", "viewver__case__caseTexteDroit__inf__qte");

    var e = document.createElement("div");
    e.innerHTML = "s/tot:" + " " + tot;
    pi.appendChild(e);
    e.setAttribute("id", "sTotal");
    e.setAttribute("class", "viewver__case__caseTexteDroit__inf__sTotal");


}
// suppression d'objet
var pos = document.getElementById("caseTexteGaucheEcrease");
alert(pos)
pos.addEventListener("click", function() {
    // alert("Chariot envoyé");
    // console.log("Chariot envoyé");
    // // $(this).parents("div").attr("id");
    // // let res = "test à lire";
    // // let res = $(this).parents("div").attr("id");

    // var res = $(this).parent().parent().attr("id");
    // alert(res);
    // console.log(res);
});