let user = document.getElementById("name");
let pass = document.getElementById("pass");
let pian = document.getElementById("pin1");
let confir = document.getElementById("space1");
let pinTwo = document.getElementById("pin2");
let pword = document.querySelector(".saw2");
let secWord = document.querySelector(".saw");
let stress = document.querySelector("#stress");
let form = document.querySelector(".myform");
let finish = document.getElementById("finish"); // Assuming "finish" is an input element

// Function to determine input validity
function end(event) {
    event.preventDefault();
    let email = user.value;
    let task1 = pword.value;
    let task2 = secWord.value;
    let used = user.value;

    if (used.length < 1) {
        stress.textContent = "Please input user name";
    } else if (task1.length < 1 || task2.length < 1) {
        stress.textContent = "Password box empty";
        pword.value = "";
        secWord.value = "";
    } else if (!(task1 === task2)) {
        stress.textContent = "Passwords do not match";
        pword.value = "";
        secWord.value = "";
    } else {
        let url = `file:///C:/Users/johno/Desktop/web%20dev%20projects/newsletter-sign-up-with-success-message-main/newsletter-sign-up-with-success-message-main/success.html?email=${encodeURIComponent(email)}`;
        window.location.href = url;
    }
}

// Logic to prevent default input functions
function makeForm() {
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
        });
    }
}

// onclick function for popout piano on username click
user.onclick = function () {
    confir.style.display = "grid";
    pass.style.display = "grid";
    pian.style.display = "none";
    pinTwo.style.display = "none";
};

// onclick function for popout piano on password click
pass.onclick = function () {
    pinTwo.style.display = "none";
    pass.style.display = "none";
    confir.style.display = "grid";
    pian.style.display = "grid";
};

// onclick function for popout piano on confirm password click
confir.onclick = function () {
    pian.style.display = "none";
    confir.style.display = "none";
    pass.style.display = "grid";
    pinTwo.style.display = "grid";
};

// Function to handle "Enter" key press
function enter(event) {
    if (event.keyCode === 13) {
        end(event);
    }
}

// Event listeners
form.addEventListener("submit", end);
makeForm();
finish.addEventListener("keydown", enter);
