function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // Default user credentials
    const defaultUser = { username: "admin", password: "admin" };

    // Retrieve stored users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if input matches the default user
    if (usernameInput === defaultUser.username && passwordInput === defaultUser.password) {
        window.location.href = "dashboard.html"; 
    } else {
        // Find matching user in localStorage
        const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

        if (user) {
            window.location.href = "dashboard.html"; 
        } else {
            alert("Invalid username or password.");
        }
    }
});
