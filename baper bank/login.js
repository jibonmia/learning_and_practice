document.getElementById('btn-submit').addEventListener('click', function(){
    const emailfild= document.getElementById('user-=email');
    const email = emailfild.value;
   
    const passField = document.getElementById('user-password');
    const password = passField.value;
    
    if(email === 'jibonbd520@gmail.com' && password === "123456"){
        window.location.href = 'bank.html';
    }
    else{
       alert('tui password vule gesos')
    }
})