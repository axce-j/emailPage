document.addEventListener("DOMContentLoaded", function () {
    makeForm();
    putIT();
});

function putIT() {
    let form = document.getElementById("frut");
    let input = document.getElementById("email");
    let imageInput = document.getElementById("email"); 
    let people = document.getElementById("error");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the values from the input fields
        let emailValue = input.value;
        let imageUrl = imageInput.value;

        // Check if the image URL has a valid syntax
        if (!isValidImaUrl(emailValue)) {
            people.textContent = "Valid Email Required ";
            input.style.borderColor = "hsla(4, 82%, 52%, 0.311)";
            input.style.backgroundColor = "hsla(4, 82%, 52%, 0.311)";
            input.style.color = "hsla(4, 82%, 52%, 0.838)"; // Set text color to red for emphasis
            
            // Handle the case where the email is not valid
        } else if (!emailValue) {
            people.textContent = "Invalid Email";
        } else {
            window.location.href = "pianopassword/pindex.html?email=";

            // + encodeURIComponent(emailValue) + "&image=" + encodeURIComponent(imageUrl);
        }
    });
}

function makeForm() {
    let form = document.getElementById("frut");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
        });
    }
}

// Function to validate email syntax
function isValidImaUrl(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
}
