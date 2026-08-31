// catch signup form

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted!");
});
