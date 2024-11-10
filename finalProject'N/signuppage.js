
function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

// Retrieve users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
}

// Save users to localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!name || !phone || !username || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const users = getUsers();
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    // Add new user to users array and save to localStorage
    users.push({ name, phone, username, password });
    saveUsers(users);

    // Store name and username for profile page validation
    localStorage.setItem("signupName", name);
    localStorage.setItem("signupUsername", username);

    // Show success message and redirect to the profile page
    alert("Signup successful! You can now complete your profile.");
    window.location.href = "profile.html"; // Redirect to the profile page
});
