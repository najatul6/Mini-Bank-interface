// Deposit Section 
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositElementString = depositField.value;
    const newDepositElement = parseFloat(newDepositElementString);
    
    depositField.value = '';

    if(isNaN(newDepositElement)){
        alert('Please Enter a Valid Number');
        return;
    }

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositElementString = depositTotal.innerText;
    const previousDepositElement = parseFloat(previousDepositElementString);
    const newDepositTotal = previousDepositElement + newDepositElement;
    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceElementString = balanceTotal.innerText;
    const previousBalanceElement = parseFloat(previousBalanceElementString);
    const newTotalBalance =previousBalanceElement + newDepositElement ;
    balanceTotal.innerText = newTotalBalance;
})

// Withdraw Section
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawElementString = withdrawField.value;
    const newWithdrawElement = parseFloat(newWithdrawElementString);

    withdrawField.value ='';

    if(isNaN(newWithdrawElement)){
        alert('Please Enter a Valid Number');
        return;
    }

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceElementString = balanceTotal.innerText;
    const previousBalanceElement = parseFloat(previousBalanceElementString);
    
    if(newWithdrawElement > previousBalanceElement){
        alert("Sorry, Sir. Your Account Haven't Enough Money!!!")
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawElementString = withdrawTotal.innerText;
    const previouswithdrawElement = parseFloat(previouswithdrawElementString);
    const newWithdrawTotal = previouswithdrawElement + newWithdrawElement;
    withdrawTotal.innerText = newWithdrawTotal;


    const newTotalBalance =previousBalanceElement - newWithdrawElement ;
    balanceTotal.innerText = newTotalBalance;
})
