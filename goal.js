function setGoal() {

    if (!currentUser) {

        alert("Login First");

        return;

    }

    let goal = Number(document.getElementById("goalAmount").value);

    if (goal <= 0) {

        alert("Invalid Goal");

        return;

    }

    if (currentUser.balance >= goal) {

        document.getElementById("goalStatus").innerHTML =
            "✅ Goal Achieved";

    }

    else {

        let left = goal - currentUser.balance;

        document.getElementById("goalStatus").innerHTML =
            "₹" + left + " More Needed";

    }

}