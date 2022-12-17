document.getElementById('deposit-btn').addEventListener('click',function(){ 
    // deposit input
    const depositFild = document.getElementById('diposit-input');
    const depositAmount = depositFild.value;
    // deposit main
    const depositTotalAmount = document.getElementById('deposit-total');

    const depositTotal = depositTotalAmount.innerText;

    const curentAmount = parseFloat(depositAmount)+parseFloat(depositTotal);

    depositTotalAmount.innerText= curentAmount;

    depositFild.value='';
    // balance
    const balanceTotalElemont = document.getElementById('balance-total');
    const totalbalance = balanceTotalElemont.innerText;
    const currentBlance = parseFloat(depositAmount)+parseFloat(totalbalance);
    balanceTotalElemont.innerText=currentBlance;
})