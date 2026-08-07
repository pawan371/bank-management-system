// =====================================
// Download Mini Statement
// =====================================

function downloadStatement() {

    if (!currentUser) {
        alert("Please Login First");
        return;
    }

    let text = "";

    text += "SMART BANK MANAGEMENT SYSTEM\n";
    text += "-----------------------------------\n";
    text += "Customer Name : " + currentUser.name + "\n";
    text += "Account Number : " + currentUser.accountNo + "\n";
    text += "Current Balance : ₹" + currentUser.balance + "\n\n";

    text += "Transaction History\n";
    text += "-----------------------------------\n";

    currentUser.history.forEach(function (item, index) {

        text += (index + 1) + ". " + item + "\n";

    });

    let blob = new Blob([text], { type: "text/plain" });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "Mini_Statement.txt";

    link.click();

}

document
    .getElementById("downloadBtn")
    .addEventListener("click", downloadStatement);