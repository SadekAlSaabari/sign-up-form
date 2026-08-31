// catch signup form
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 

    const data = JSON.parse(sessionStorage.getItem("users")) || [];

    const userCheck = data.find(user => user.email === email);

    if (userCheck) {
        alert("An account with this email already exists!");
        return;
    }

    data.push({name, email, password});
    sessionStorage.setItem("users", JSON.stringify(data));
    alert("Form submitted! Welcome aboard! \n You can try logging in if you want.");
});
