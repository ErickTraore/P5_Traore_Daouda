class Articles {
    constructor(nom, qte, prix_unit, lentille, imgSrc) {
        this.nom = nom;
        this.qte = qte;
        this.prix_unit = prix_unit;
        this.lentille = lentille;
        this.imgSrc = imgSrc;
    }
} // Affichage panier avec suppression de produit
function affichagePanier() {
    if (panier === null) {
        localStorage.removeItem("panier");
        window.location.href = "index.html";
    }
    // 1 chargement du panier dans la constante data pour traitement de l'affichage
    data = JSON.parse(localStorage.getItem("panier"));
    // 2 Acrochage du panier à l'élément id oricono dans le dom
    var p0 = document.getElementById("orinoco");
    pe = document.createElement("div");
    p0.appendChild(pe);
    pe.setAttribute("id", "case");
    pe.setAttribute("class", "viewver");
    // 3 Création d'une class Article pour fluidifier la récupération de plusieurs articles du panier dans la boucle for.
    for (let i = 0; i < data.length; i++) {
        let article = new Articles(
            data[i].nom,
            data[i].qte,
            data[i].prix_unit,
            data[i].lentille,
            data[i].imageUrl
        );
        var tot = parseInt(data[i].prix_unit) * parseInt(data[i].qte);
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
        pb.innerHTML = "Supprimmez";
        ps.appendChild(pb);
        pb.setAttribute("id", "caseTexteGaucheEcrease");
        pb.setAttribute("class", "viewver__case__caseTexteGauche__ecrease");
        pb.addEventListener("click", (event) => {
            // Démarrage de la procédure d 'annulation unitaire d'1 commande, ou suppression.
            // Appel de l/'array et application de la formule splice"
            // Rec = récuperation de la longueur du panier av(avant) et ap(après) la supression de l'identifiant pour contrôler la fonction de supression.
            let nbreAvtRec = data.length;
            this.data.splice(i, 1);
            let nbreApsRec = data.length;
            console.log("nbreAvantRecup = " + nbreAvtRec);
            console.log("nbreAprèsRecup = " + nbreApsRec);
            if (nbreApsRec + 1 == nbreAvtRec) {
                console.log(data.length);
                console.log(JSON.stringify(data));
                localStorage.removeItem("panier");
                localStorage.setItem("panier", JSON.stringify(data));
                window.location.reload();
                localStorage.removeItem("product");
                console.log("ok pour annulation");
            } else {
                console.log(
                    "echec de la pocédure d'annulation à la ligne 93 DU FICHIER PANIER.JS"
                );
            }
        });
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
        e.innerHTML = "P.u:" + " " + data[i].prix_unit;
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
    // Création d'une div pour le total.
    totaldiv = document.createElement("div");
    p0.appendChild(totaldiv);
    totaldiv.setAttribute("id", "totaldiv");
    totaldiv.setAttribute("class", "viewver__div");

    totalbtn = document.createElement("div");
    totaldiv.appendChild(totalbtn);
    totalbtn.setAttribute("id", "totalbtn");
    totalbtn.setAttribute("class", "viewver__div__total");
    let panierTotal = 0;
    for (i = 0; i < data.length; i++) {
        panierTotal += data[i].sous_total;
    }
    totalbtn.innerHTML = "TOTAL:" + " " + panierTotal;
    // Création des boutons pour le menu panier
    panierBtn = document.createElement("div");
    p0.appendChild(panierBtn);
    panierBtn.setAttribute("id", "PanierBtn");
    panierBtn.setAttribute("class", "viewver__btn");

    panierBtn1 = document.createElement("button");
    panierBtn.appendChild(panierBtn1);
    panierBtn1.setAttribute("id", "PanierBtnChariot");
    panierBtn1.innerHTML = "Retour achats";
    panierBtn1.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    panierBtn2 = document.createElement("button");
    panierBtn.appendChild(panierBtn2);
    panierBtn2.setAttribute("id", "PanierBtnCde");
    panierBtn2.innerHTML = "Commandez";
    panierBtn2.addEventListener("click", function() {
        window.location.href = "commande.html";
    });

    panierBtn3 = document.createElement("button");
    panierBtn.appendChild(panierBtn3);
    panierBtn3.setAttribute("id", "PanierBtnVider");
    panierBtn3.innerHTML = "Vider panier";
    panierBtn3.addEventListener("click", function() {
        window.location.reload();
        localStorage.clear();
    });
}