
function getInputFieldGValueById(inputId){
    const inputFild = document.getElementById(inputId);
    const inputValueString = inputFild.value;
    const InputValue = parseFloat(inputValueString);
    inputFild.value = '';
    return InputValue;
}
function getElementValueBuId(element){
    const Element = document.getElementById(element);
    const PreviousValueString = Element.innerText;
    const PreviousVAlue = parseFloat(PreviousValueString);
    return PreviousVAlue;
}
function setDepositTotalAmountValueById(elementId,newvalue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newvalue;
}
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositAmount = getInputFieldGValueById('deposit-input');

    const previousAmountTotal = getElementValueBuId('deposite-amount');

    const PreviousBalancTotal = getElementValueBuId('Balance-total');

    const newDepositTotal = previousAmountTotal+depositAmount;
    const newBalancTotal = PreviousBalancTotal+depositAmount;
    setDepositTotalAmountValueById('deposite-amount',newDepositTotal);
    setDepositTotalAmountValueById('Balance-total',newBalancTotal);
    
})