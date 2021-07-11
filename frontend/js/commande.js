let testsubmit = false;
let testsubmitfirstname = false;
let testsubmitlastname = false;


function getCodeValidation() {
    return document.getElementById("code-validation");
}
document.getElementById("code").addEventListener("input", function(e) {
    if (/^[a-zA-Z0-9]{6,6}$/.test(e.target.value)) {
        getCodeValidation().innerText = "Code valide";
        testsubmit = true;
        // testVerifcode();
        testVerif();
    } else {
        getCodeValidation().innerText = "Code invalide";
        testsubmit = false;
        // testVerifcode();
        testVerif();
    }
});

function testVerifcode() {
    if (testsubmit) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}

////////////////////////////////////////

function getfirstnameValidation() {
    return document.getElementById("firstname-validation");
}
document.getElementById("firstname").addEventListener("input", function(e) {
    if (/^[a-zA-Z]{3,15}$/.test(e.target.value)) {
        getfirstnameValidation().innerText = "firstname valide";
        testsubmitfirstname = true;
        testVerif();
        // testVeriffirstname();
    } else {
        getfirstnameValidation().innerText = "firstname invalide";
        testsubmitfirstname = false;
        // testVeriffirstname();
        testVerif();
    }
});

function testVeriffirstname() {
    if (testsubmitfirstname) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}

////////////////////////////////////////

function getLastnameValidation() {
    return document.getElementById("lastname-validation");
}

document.getElementById("lastname").addEventListener("input", function(e) {
    if (/^[a-zA-Z]{3,15}$/.test(e.target.value)) {
        getLastnameValidation().innerText = "Lastname valide";
        testsubmitlastname = true;
        // testVeriflastname();
        testVerif();
    } else {
        getLastnameValidation().innerText = "lastname invalide";
        testsubmitlastname = false;
        // testVeriflastname();
        testVerif();
    }
});

function testVeriflastname() {
    if (testsubmitlastname) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}

function testVerif() {
    if (testsubmit && testsubmitfirstname && testsubmitlastname) {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", false);
    }
}

// function send(e) {
//     e.preventDefault();
//     fetch("https://mockbin.com/request", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ value: document.getElementById("value").value }),
//         })
//         .then(function(res) {
//             if (res.ok) {
//                 return res.json();
//             }
//         })
//         .then(function(value) {
//             document.getElementById("result").innerText = value.postData.text;
//         });
// }

// document.getElementById("form").addEventListener("submit", send);