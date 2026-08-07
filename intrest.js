// ================================
// Interest Calculator
// ================================

function calculateInterest() {

    if (!currentUser) {
        alert("Please Login First");
        return;
    }

    let rate = Number(document.getElementById("interestRate").value);

    if (isNaN(rate) || rate <= 0) {
        alert("Enter Valid Interest Rate");
        return;
    }

    // Simple Interest for 1 Year
    let interest = (currentUser.balance * rate) / 100;

    let total = currentUser.balance + interest;

    document.getElementById("interestResult").innerHTML =
        `
        <b>Current Balance :</b> ₹${currentUser.balance}<br>
        <b>Interest :</b> ₹${interest.toFixed(2)}<br>
        <b>Total Amount :</b> ₹${total.toFixed(2)}
        `;

    currentUser.history.push(
        "Interest Calculated (" + rate + "%)"
    );

    saveAccounts();
    showHistory();
}

document
    .getElementById("interestBtn")
    .addEventListener("click", calculateInterest);