document.addEventListener("DOMContentLoaded", function() {
    const nameField = document.getElementById("name");
    const usernameField = document.getElementById("username");

    const storedName = localStorage.getItem("consumerSignupName");
    const storedUsername = localStorage.getItem("consumerSignupUsername");

    if (storedName) nameField.value = storedName;
    if (storedUsername) usernameField.value = storedUsername;
});

// Function to validate and proceed to address.html
function validateAndProceed() {
    const requiredFields = ["name", "username", "email", "city", "dob", "contact", "gender"];
    let allValid = true;

    requiredFields.forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        if (!field.value) {
            field.classList.add("error");
            allValid = false;
        } else {
            field.classList.remove("error");
        }
    });

    if (!allValid) {
        alert("Fill the details completely.");
    } else {
        // Redirect to address.html if all fields are valid
        window.location.href = "address.html";
    }
}
