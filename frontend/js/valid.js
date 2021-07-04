// ajout des quantités
let res = document.getElementById("result");
result = parseInt(res.value, 10);
let plus = document.getElementById("plus");
let moins = document.getElementById("moins");

plus.addEventListener("click", function() {
    if (result >= 1 && result < 99) {
        result++;
        document.getElementById("result").value = result;
    }
});
moins.addEventListener("click", function() {
    if (result > 1 && result <= 99) {
        result--;
        document.getElementById("result").value = result;
    }
});
console.log(plus);
console.log(moins);
console.log(result);