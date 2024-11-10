function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

function getConsumers() {
    return JSON.parse(localStorage.getItem("consumers") || "[]");
}

function saveConsumers(consumers) {
    localStorage.setItem("consumers", JSON.stringify(consumers));
}

// Handle signup form submission
document.getElementById("consumerSignupForm").addEventListener("submit", function(event) {
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

    const consumers = getConsumers();
    const existingConsumer = consumers.find(consumer => consumer.username === username);
    if (existingConsumer) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    consumers.push({ name, phone, username, password });
    saveConsumers(consumers);

    localStorage.setItem("consumerSignupName", name);
    localStorage.setItem("consumerSignupUsername", username);

    alert("Consumer signup successful! You can now complete your profile.");
    window.location.href = "profiles.html";
});
