let loginbtn= document.getElementById("login_btn");
let signUpPage= document.getElementById("signup");
let logInPage= document.getElementById("login");
let signupsubmit= document.getElementById("signupbtn");
let signupbtn= document.getElementById("signup_btn");
loginbtn.addEventListener('click', (e) =>{
signUpPage.style.display= 'none';
logInPage.style.display= 'block';
})
signupsubmit.addEventListener('click', (e) =>{
signUpPage.style.display= 'block';
logInPage.style.display= 'none';            
})
signupsubmit.addEventListener('click', (e) => {
let email= document.getElementById("email").value;
let password= document.getElementById("password").value;
if(localStorage.getItem(email) === password){
alert("User registered already");
return;
}
localStorage.setItem(email,password);
alert("New user Registered");
})