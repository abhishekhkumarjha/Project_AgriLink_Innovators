// Function to validate fields and proceed to the next page
function validateAndProceed() {
    const fields = document.querySelectorAll('#bankForm input[type="text"]');
    let allFieldsFilled = true;

    fields.forEach(field => {
        if (field.value.trim() === "") {
            field.classList.add('error'); // Add red border to empty fields
            allFieldsFilled = false;
        } else {
            field.classList.remove('error'); // Remove red border if field is filled
        }
    });

    if (allFieldsFilled) {
        // Navigate to the next page if all fields are filled
        location.href = 'loginpage.html'; // Update with the correct next page URL
    } else {
        alert("All fields are required.");
    }
}
