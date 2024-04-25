let tip = 0;
let tipPercentage = 0;
let totalBill = 0;
function calcTip(){
    let totalBill = parseInt(document.getElementById("totalBill").value)
    let tipPercentage = parseInt(document.getElementById("tipPercentage").value)
     tip = totalBill * (tipPercentage/100);
    document.getElementById("tip").innerHTML = tip;
}

function truncateDigits(input) {
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
}