document.getElementById('btn-submit').addEventListener('click', function(){
    const emailfild= document.getElementById('user-=email');
    const email = emailfild.value;
   
    const passField = document.getElementById('user-password');
    const password = passField.value;
    
    if(email === 'jibonbd520@gmail.com' && password === "123456"){
        console.log("this is valid");
    }
    else{
        console.log("this is not valid");
    }
})