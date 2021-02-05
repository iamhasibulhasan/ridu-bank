document.getElementById("btn-enter").addEventListener("click", function(){
    var loginArea = document.getElementById("login-area");
    var transitionArea = document.getElementById("transition-area");
    loginArea.style.display = "none";
    transitionArea.style.display = "block";
})

// deposit handler
document.getElementById("addDeposit").addEventListener("click", function(){
    var depositAmount = document.getElementById("depositAmount").value;
    var depositNumber = parseFloat(depositAmount);  //string to number conversion

    updateDeposit("currentBalance", depositNumber);
    updateDeposit("currentDeposit", depositNumber);

});
// withdraw handler
document.getElementById("subWithdraw").addEventListener("click", function(){
    var withdrawAmount = document.getElementById("withdrawAmount").value;
    var withdrawNumber = parseFloat(withdrawAmount);
    updateDeposit("currentWithdraw", withdrawNumber);
    updateWithdraw("currentBalance", withdrawNumber);
});
    // update withdraw/balance function
    function updateWithdraw(id, withdraw){
        var current = document.getElementById(id).innerText;
        var balanceNumber = parseFloat(current);
        var totalAmount = balanceNumber - withdraw;
        document.getElementById(id).innerText = totalAmount;
    }
    // update Deposit/Balance function
    function updateDeposit(id, deposit){
        var current = document.getElementById(id).innerText;
        var balanceNumber = parseFloat(current);
        var totalAmount = deposit + balanceNumber;
        document.getElementById(id).innerText = totalAmount;
    }

    
