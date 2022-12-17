document.getElementById('btn-withdrow').addEventListener('click', function(){
    const withdroFild = document.getElementById('withdrow-fild');
    const withdrowAmount = withdroFild.value;
    // withdrow main

    const withdroTotalElement = document.getElementById('withdro-total');
    const withdrowtotal = withdroTotalElement.innerText;
    const currentwithdrow = parseFloat(withdrowAmount)+parseFloat(withdrowtotal);
    withdroTotalElement.innerText= currentwithdrow;
    withdroFild.value='';
    // balance withdrow

    const balanceWithdrowElement = document.getElementById('balance-total');
    const balancewithdrow = balanceWithdrowElement.innerText;
    const newwithdrow = parseFloat(balancewithdrow)-parseFloat(withdrowAmount);
    balanceWithdrowElement.innerText=newwithdrow;

})