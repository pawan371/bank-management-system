// ==================================
// Money Transfer
// ==================================

function transferMoney() {

    if (!currentUser) {
        alert("Please Login First");
        return;
    }

    let receiverAcc = document.getElementById("receiverAcc").value.trim();
    let amount = Number(document.getElementById("transferAmount").value);

    if (receiverAcc === "" || isNaN(amount) || amount <= 0) {
        alert("Enter valid details.");
        return;
    }

    // Same account check
    if (receiverAcc === currentUser.accountNo) {
        alert("You cannot transfer money to your own account.");
        return;
    }

    // Find receiver
    let receiver = accounts.find(acc => acc.accountNo === receiverAcc);

    if (!receiver) {
        alert("Receiver Account Not Found.");
        return;
    }

    // Balance check
    if (amount > currentUser.balance) {
        alert("Insufficient Balance.");
        return;
    }

    // Money Transfer
    currentUser.balance -= amount;
    receiver.balance += amount;

    // Sender History
    currentUser.history.push(
        "Transferred ₹" + amount +
        " to " + receiver.accountNo +
        " | Balance ₹" + currentUser.balance
    );

    // Receiver History
    receiver.history.push(
        "Received ₹" + amount +
        " from " + currentUser.accountNo +
        " | Balance ₹" + receiver.balance
    );

    saveAccounts();
    updateBalance();
    showHistory();

    document.getElementById("receiverAcc").value = "";
    document.getElementById("transferAmount").value = "";

    alert("₹" + amount + " transferred successfully.");
}


// ============================
// Button Event
// ============================

document
    .getElementById("transferBtn")
    .addEventListener("click", transferMoney);