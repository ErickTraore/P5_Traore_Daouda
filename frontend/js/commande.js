let testsubmit = false;
let testsubmitfirstname = false;
let testsubmitlastname = false;
let testsubmitemail = false;
let testsubmitadress = false;
let testsubmitcity = false;
let colorThreshold = 0;

function changeColor(val) {
    var color = "green";

    if (val > 30 && val < 60) {
        color = "yellow";
    } else if (val >= 60) {
        color = "red";
    }

    validText.style.color = color;
}

if (veriform()) {
    document.getElementById("submit-btn").removeAttribute("disabled");
} else {
    document.getElementById("submit-btn").setAttribute("disabled", false);
}



////////////////////////////////////////-FIRSTNAME-

function getfirstnameValidation() {
    return document.getElementById("firstname-validation");
}
document.getElementById("firstname").addEventListener("input", function(e) {
    if (/^[a-zA-Z]{3,15}$/.test(e.target.value)) {
        getfirstnameValidation().innerText = "Nom valide";
        testsubmitfirstname = true;
        colorThreshold = 10;
        testVerif();
        // testVeriffirstname();
    } else {
        getfirstnameValidation().innerText = "Nom invalide";
        testsubmitfirstname = false;
        colorThreshold = 70;
        // testVeriffirstname();
        testVerif();
    }
    validText = getfirstnameValidation();

    changeColor();

    changeColor(colorThreshold);

});

function testVeriffirstname() {
    if (testsubmitfirstname) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}
////////////////////////////////////////-LASTNAME-
function getLastnameValidation() {
    return document.getElementById("lastname-validation");
}
document.getElementById("lastname").addEventListener("input", function(e) {
    if (/^[a-zA-Z]{3,15}$/.test(e.target.value)) {
        getLastnameValidation().innerText = "Prénom valide";
        testsubmitlastname = true;
        colorThreshold = 10;
        // testVeriflastname();
        testVerif();
    } else {
        getLastnameValidation().innerText = "Prénom invalide";
        testsubmitlastname = false;
        colorThreshold = 70;
        // testVeriflastname();
        testVerif();
    }
    validText = getLastnameValidation();

    changeColor();

    changeColor(colorThreshold);
});

function testVeriflastname() {
    if (testsubmitlastname) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}



////////////////////////////////////////-ADRESS-

function getAdressValidation() {
    return document.getElementById("adress-validation");
}

document.getElementById("adress").addEventListener("input", function(e) {
    if (
        /^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' ]+))$/.test(e.target.value)
    ) {
        getAdressValidation().innerText = "adresse valide";
        testsubmitadress = true;
        colorThreshold = 10;
        // testVeriftel();
        testVerif();
    } else {
        getAdressValidation().innerText = "Adresse invalide";
        testsubmitadress = false;
        colorThreshold = 70;
        // testVeriftel();
        testVerif();
    }
    validText = getAdressValidation();

    changeColor();

    changeColor(colorThreshold);
});

function testVeriftel() {
    if (testsubmitadress) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}
////////////////////////////////////////-CODE/CITY-
function getCityValidation() {
    return document.getElementById("city-validation");
}
document.getElementById("city").addEventListener("input", function(e) {
    if (/^[0-9]{5,5}$/.test(e.target.value)) {
        getCityValidation().innerText = "City valide";
        testsubmit = true;
        colorThreshold = 10;
        // testVerifcity();
        testVerif();
    } else {
        getCityValidation().innerText = "City invalide";
        testsubmit = false;
        colorThreshold = 70;
        // testVerifcty();
        testVerif();
    }
    validText = getCityValidation();

    changeColor();

    changeColor(colorThreshold);

});

function testVerifcity() {
    if (testsubmit) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}
////////////////////////////////////////-EMAIL-

function getEmailValidation() {
    return document.getElementById("email-validation");
}

document.getElementById("email").addEventListener("input", function(e) {
    if (
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        .test(e.target.value)
    ) {
        getEmailValidation().innerText = "Email valide";
        testsubmitemail = true;
        colorThreshold = 10;
        testVerif();
    } else {
        getEmailValidation().innerText = "Email invalide";
        testsubmitemail = false;
        colorThreshold = 70;
        // testVerifemail();
        testVerif();
    }
    validText = getEmailValidation();

    changeColor();

    changeColor(colorThreshold);
});

function testVerifemail() {
    if (testsubmitemail) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}
//////////////////////////////////////////////////////////////////////////
function veriform() {
    if (
        testsubmit &&
        testsubmitfirstname &&
        testsubmitlastname &&
        testsubmitemail &&
        testsubmitadress
    ) {
        return true;
    }
}

function testVerif() {
    if (veriform()) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}
//////////////////////////////////////////////////

async function send(ev) {
    ev.preventDefault();
    //Création de l 'objet contact
    let contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        address: document.getElementById("adress").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
    };

    panier = JSON.parse(localStorage.getItem("panier"));
    await console.log(panier.length);
    await console.log(panier);
    //Création du l'array products
    let products = [];
    for (var i = 0; i < panier.length; i++) {
        products.push(panier[i]._id);
    }
    console.log(products);
    //Création du l'array products
    result = {
        contact,
        products
    };
    console.log(result.contact);
    console.log(result.products);
    fetch("http://localhost:3000/api/cameras/order/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result),
        })
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            console.log(value);
            localStorage.setItem("merci", JSON.stringify(value));
            window.location.href = "merci.html";
        });
    localStorage.removeItem("panier");
    localStorage.removeItem("product");

}

form.onsubmit = send;