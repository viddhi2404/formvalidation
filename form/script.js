
const signupDiv = document.getElementById("signupDiv");
const loginDiv = document.getElementById("loginDiv");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const users = [];

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("user-email").value;
    let pass = document.getElementById("user-pass").value;

    let result = users.filter((user) => {
        return user.email == email && user.password == pass;
    });

    if(result.length){
        Swal.fire({
            title: "Loggin Successful!",
            text: `Welcome, ${result[0].username}`,
            icon: "success"
        });
    } else{
        Swal.fire({
            icon: "error",
            title: "Login Failed!",
            text: "Incorrect Usrname or Password",
            footer: '<a href="#">Forgot Password?</a>'
        });
    }

    
    loginForm.reset();
})

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    invalidUsername = document.querySelector("#emptyUsername");
    invalidEmail = document.querySelector("#emptyEmail");
    invalidPassword = document.querySelector("#emptyPassword");

    invalidUsername.classList.remove("d-block");
    invalidEmail.classList.remove("d-block");
    invalidPassword.classList.remove("d-block");
    
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(username.length == 0){
        invalidUsername.classList.add("d-block");
        isValid = false;
    }
    // console.log(useername)
    let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    if(!emailRegex.test(email)){
        invalidEmail.classList.add("d-block");
        isValid = false;
    }

    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if(!passRegex.test(password)){
        invalidPassword.classList.add("d-block");
        isValid = false;
    }

    let obj = {
        username, 
        email,
        password
    }
    // console.log(obj)

    if(isValid == true){
        users.push(obj);

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You're registered successfully!",
            showConfirmButton: false,
            timer: 1500
        });
    
        signupForm.reset();

        signupDiv.style.display = "none";
        loginDiv.style.display = "block";
    }

    console.log(users)

});

document.getElementById("goToLogin").addEventListener("click", () => {
    signupDiv.style.display = "none";
    loginDiv.style.display = "block";
});
document.getElementById("goToRegister").addEventListener("click", () => {
    loginDiv.style.display = "none";
    signupDiv.style.display = "block";
});
