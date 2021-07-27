function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
dataMerci = JSON.parse(localStorage.getItem("merci"));
crea01_div = document.getElementById("merci");
console.log(dataMerci);
console.log(dataMerci.orderId);
console.log(dataMerci.contact.firstName);
console.log(dataMerci.contact.email);

crea01_div.innerHTML =
    "Nous vous remercions de votre confiance." +
    "<br>" +
    "Vous recevrez nos indications par mail afin " +
    "<br>" +
    "de récuperer votre colis." +
    "<br>" +
    "Client:" +
    " " +
    dataMerci.contact.firstName +
    "<br>" +
    " " +
    "N° commande:" +
    " " +
    dataMerci.orderId +
    "<br>" +
    "Boite mail:" +
    " " +
    dataMerci.contact.email;