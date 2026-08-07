// ===== Smart Bank Database =====

let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let currentUser = null;

// Save Database
function saveAccounts() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

// Generate Random Account Number
function generateAccountNumber() {
    return "SB" + Math.floor(100000 + Math.random() * 900000);
}

// Create Account
function createAccount() {

    const name = document.getElementById("name").value.trim();
    const pin = document.getElementById("pin").value.trim();
    const balance = Number(document.getElementById("balance").value);

    if (name === "" || pin === "" || isNaN(balance)) {
        alert("Please fill all fields.");
        return;
    }

    if (pin.length != 4) {
        alert("PIN must be 4 digits.");
        return;
    }

    let account = {

        accountNo: generateAccountNumber(),

        name: name,

        pin: pin,

        balance: balance,

        history: [
            "Account Created with ₹" + balance
        ]

    };

    accounts.push(account);

    saveAccounts();

    alert(
        "Account Created Successfully\n\nAccount No : " + account.accountNo
    );

    document.getElementById("name").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("balance").value = "";

}

// Login
function login() {

    const acc = document.getElementById("accNo").value.trim();

    const pin = document.getElementById("loginPin").value.trim();

    currentUser = accounts.find(function (item) {

        return item.accountNo === acc && item.pin === pin;

    });

    if (!currentUser) {

        alert("Invalid Account Number or PIN");

        return;

    }

    document.getElementById("dashboard").style.display = "block";

    document.getElementById("showName").innerText = currentUser.name;

    document.getElementById("showAcc").innerText = currentUser.accountNo;

    document.getElementById("showBalance").innerText = currentUser.balance;

    showHistory();

}

// Refresh Balance
function updateBalance() {

    document.getElementById("showBalance").innerText = currentUser.balance;

    saveAccounts();

}

// Show Transaction History

function showHistory() {

    const list = document.getElementById("history");

    list.innerHTML = "";

    currentUser.history.forEach(function (item) {

        let li = document.createElement("li");

        li.innerText = item;

        list.appendChild(li);

    });

}