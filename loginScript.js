// login details check
const loginForm = document.getElementById("login-form");

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const data = JSON.parse(sessionStorage.getItem("users")) || [];

    const matchedUser = data.find(user => user.email === email && user.password === password);

    if (matchedUser) {
        alert(`Welcome back, ${matchedUser.name}!`);
        return;
    } else {
        alert("Invalid email or password.\nPlease try again or sign up if not registered.");
    };
});