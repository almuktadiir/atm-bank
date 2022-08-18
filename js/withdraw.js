document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 2
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(typeof newWithdrawAmount)

    // step 9
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please enter a valid number');
        return;
    }

    //step 3
    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    // console.log(previousWithdrawAmount)

    //step 6
    const balanceElement = document.getElementById('balance-total');
    const balanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);
    // console.log(balanceTotal)

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Insuficient balance');
        return;
    }

    //step 4
    const withdrawAmountTotal = newWithdrawAmount + previousWithdrawAmount;

    //step 5
    withdrawElement.innerText = withdrawAmountTotal;

    // step 7
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // step 8
    balanceElement.innerText = currentBalanceTotal;



})