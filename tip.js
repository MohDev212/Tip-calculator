
function calcTip() {
    let tip = 0.00;
    let tipPercentage = 0;
    let totalBill = 0.00;
    
    // Get the input values
    let totalBillInput = document.getElementById("totalBill").value;
    let tipPercentageInput = document.getElementById("tipPercentage").value;
    
    // Check if both input fields are empty
    if (totalBillInput === "" || tipPercentageInput === "") {
        // If any input field is empty, do not perform calculation
        document.getElementById("tip").innerHTML = ""; // Clear the tip display
        return;
    }
    
    // Convert input to numbers
    totalBill = parseInt(totalBillInput);
    tipPercentage = parseInt(tipPercentageInput);
    
    // Calculate tip
    tip = totalBill * (tipPercentage / 100);
    
    // Display tip
    document.getElementById("tip").innerHTML = tip.toFixed(2);
}


function truncateDigits(input) {
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
}