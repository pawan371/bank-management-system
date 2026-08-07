// ===============================
// Deposit Money
// ===============================

function deposit() {

    if (!currentUser) {
        alert("Please Login First");
        return;
    }

    let amount = Number(document.getElementById("depositAmount").value);

    if (amount <= 0 || isNaN(amount)) {
        alert("Enter Valid Amount");
        return;
    }

    currentUser.balance += amount;

    currentUser.history.push(
        "Deposited ₹" + amount + " | Balance ₹" + currentUser.balance
    );

    updateBalance();
    showHistory();

    document.getElementById("depositAmount").value = "";

    alert("₹" + amount + " Deposited Successfully");

}


// ===============================
// Withdraw Money
// ===============================

function withdraw() {

    if (!currentUser) {
        alert("Please Login First");
        return;
    }

    let amount = Number(document.getElementById("withdrawAmount").value);

    if (amount <= 0 || isNaN(amount)) {
        alert("Enter Valid Amount");
        return;
    }

    if (amount > currentUser.balance) {
        alert("Insufficient Balance");
        return;
    }

    currentUser.balance -= amount;

    currentUser.history.push(
        "Withdraw ₹" + amount + " | Balance ₹" + currentUser.balance
    );

    updateBalance();
    showHistory();

    document.getElementById("withdrawAmount").value = "";

    // Low Balance Warning
    if (currentUser.balance < 500) {
        alert("⚠ Warning : Your Balance is below ₹500");
    } else {
        alert("Withdrawal Successful");
    }

}


// ===============================
// Button Events
// ===============================

document.getElementById("depositBtn").addEventListener("click", deposit);

document.getElementById("withdrawBtn").addEventListener("click", withdraw);