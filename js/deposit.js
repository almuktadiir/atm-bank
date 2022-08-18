// step 1
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step 2 (get ###-input field & input field value)
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount)

    // step 3 (get deposit total amount)
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositAmountString);
    // console.log(typeof previousDepositTotal);

    // step 4 (now new amount + previous amount calculate)
    const currentDepositTotal = newDepositAmount + previousDepositTotal;

    // step 5 (deposit value set from new deposit input field)
    depositTotalElement.innerText = currentDepositTotal;

    //step 6 (get balance value)
    const balanceElement = document.getElementById('balance-total');
    const balanceTotalString = balanceElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    //step 6 (now deposit value + previous total balance)
    const currentBalanceTotal = newDepositAmount + balanceTotal;
    balanceElement.innerText = currentBalanceTotal;

    //last step
    depositField.value = '';
})