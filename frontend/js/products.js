function getOneProducts() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search.slice(1));
    let id = location.search.substring(4);
    alert(id);
    let apiurl = "http://localhost:3000/api/cameras/" + id;
    var p = document.getElementById("output");
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
            e.innerHTML = "Model:" + " " + data.name;
            p.appendChild(e);

            var e = document.createElement("div");
            e.classList.add("output__article");
            e.innerHTML = "Prix :" + " " + "<span>" + data.price + "." + "</span>";
            p.appendChild(e);

            var e = document.createElement("div");
            e.classList.add("output__article");
            e.innerHTML = "Lentille:" + " " + "<span>" + data.lenses;
            p.appendChild(e);

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
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}
getOneProducts();