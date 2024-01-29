document.addEventListener("DOMContentLoaded", function () {
    // got the email value from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const emailValue = urlParams.get('email');

    // Displayed the email value in the 'person' span
    document.getElementById("person").textContent = emailValue;
});

let backButton = document.querySelector("#cliking");

backButton.onclick = function () {
    // Set the URL to the browser's homepage (using about:home)
    window.open("about:blank", "_blank").location.assign("about:home");

};
