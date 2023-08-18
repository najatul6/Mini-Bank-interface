// Log In Section 
document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value; 
    
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email === 'najatulislam37@gmail.com' && password === 'King@1&12' ){
        window.location.href ='statement-summury.html';
    }
    else{
        alert(
            'Incorrect Email & Password'
        )
    }
})