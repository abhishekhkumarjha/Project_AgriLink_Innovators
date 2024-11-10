document.querySelector('.next-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default navigation behavior

    // Retrieve stored values from localStorage
    const storedName = localStorage.getItem('signupName');
    const storedUsername = localStorage.getItem('signupUsername');

    // Array of required field IDs
    const fieldIds = ['name', 'username', 'email', 'city', 'dob', 'contact', 'gender'];
    let allFieldsFilled = true; // Initialize the flag as true

    // Check each field for content
    fieldIds.forEach(id => {
        const field = document.getElementById(id);

        if (field.value.trim() === "") { // Check if field is empty
            field.style.border = "2px solid red"; // Highlight empty fields
            allFieldsFilled = false; // Set flag to false if any field is empty
        } else {
            field.style.border = "1px solid #ddd"; // Reset border if filled
        }
    });

    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();

    // Show alert if any field is empty, do not navigate
    if (!allFieldsFilled) {
        alert("Please fill in all fields before proceeding.");
    } 
    // Validate name and username with signup data
    else if (name !== storedName || username !== storedUsername) {
        alert("Invalid name or username. Please make sure it matches the signup details.");
    } 
    // Only navigate if all fields are filled and name/username match
    else {
        window.location.href = "Address.html";
    }
});
