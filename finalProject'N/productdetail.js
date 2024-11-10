// Toggle sidebar visibility
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

function toggleSubmenu(id, element) {
    const submenu = document.getElementById(id);
    const isVisible = submenu.style.display === "block";
    document.querySelectorAll(".submenu").forEach(menu => menu.style.display = "none");
    document.querySelectorAll(".sidebar ul li").forEach(li => li.classList.remove("active"));
    if (!isVisible) {
        submenu.style.display = "block";
        element.classList.add("active");
    }
}

function openSection(page) {
    document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));
    if (event.target.tagName === "LI") {
        event.target.classList.add('active');
    }
    if (page.includes('.html')) {
        window.location.href = page;
    }
}

// Show the selected image in a preview for multiple image fields
function showImagePreview(event, index) {
    const fileInput = document.getElementById(`product-image${index}`);
    const imagePreview = document.getElementById(`image-preview${index}`);
    const removeButton = document.getElementById(`remove-button${index}`);
    
    const file = fileInput.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = ""; // Clear previous image preview
            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = `Selected Product Image ${index}`;
            imagePreview.appendChild(img);

            // Add the remove button with a red cross
            removeButton.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}

// Remove the selected image and reset the input for multiple image fields
function removeImage(index) {
    const fileInput = document.getElementById(`product-image${index}`);
    const imagePreview = document.getElementById(`image-preview${index}`);
    const removeButton = document.getElementById(`remove-button${index}`);
    
    fileInput.value = "";  // Reset the file input
    imagePreview.innerHTML = "";  // Clear the preview
    removeButton.style.display = "none"; // Hide remove button
}

// Handle form submission with validation and redirection
document.getElementById("product-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get form values
    const category = document.getElementById("category").value;
    const productName = document.getElementById("product-name").value.trim();
    const productDescription = document.getElementById("product-description").value.trim();
    const price = document.getElementById("price").value.trim();
    const quantity = document.getElementById("quantity").value;
    const farmingPractice = document.querySelector("input[name='farming-practice']:checked");

    // Check at least one image is uploaded
    const imagesUploaded = Array.from({ length: 5 }, (_, i) => document.getElementById(`product-image${i + 1}`).files.length > 0);
    const atLeastOneImageUploaded = imagesUploaded.some(uploaded => uploaded);

    // Validation to ensure all fields are filled
    if (
        category === "" ||
        productName === "" ||
        productDescription === "" ||
        price === "" ||
        quantity === "Select Quantity" ||
        !farmingPractice ||
        !atLeastOneImageUploaded
    ) {
        alert("Please fill in all fields and upload at least one image before submitting.");
        return;
    }

    // Redirect based on selected category
    if (category === "Fruits") {
        window.location.href = "fruitorder.html";
    } else if (category === "Vegetables") {
        window.location.href = "vegetableorder.html";
    } else if (category === "Cash Crops") {
        window.location.href = "cashcroporder.html";
    } else {
        alert("Please select a valid category.");
    }
});
