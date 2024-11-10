function validateAddresses() {
    const addressBoxes = document.querySelectorAll('.address-box');
    let allFilled = true;

    addressBoxes.forEach(box => {
        if (box.textContent.trim() === "" || box.textContent.trim() === "PICKUP ADDRESS:" || box.textContent.trim() === "HOME ADDRESS:") {
            box.style.border = "2px solid red"; 
            allFilled = false;
        } else {
            box.style.border = "1px solid #ddd"; 
        }
    });

    return allFilled; 
}

// Function to add a new address box
function addAddress() {
    const addressContainer = document.querySelector('.address-container');
    const newAddressBox = document.createElement('div');
    newAddressBox.classList.add('address-box');
    newAddressBox.setAttribute('contenteditable', 'true');
    newAddressBox.setAttribute('onclick', 'selectAddress(this)');

    newAddressBox.innerHTML = `<label>NEW ADDRESS:</label>`;
    addressContainer.appendChild(newAddressBox);
}

// Function to handle address selection
function selectAddress(box) {
    document.querySelectorAll('.address-box').forEach(el => el.classList.remove('selected'));
    box.classList.add('selected');
}

function navigateToNextPage() {
    if (validateAddresses()) {
        const addresses = [];
        document.querySelectorAll('.address-box').forEach(box => {
            addresses.push(box.textContent.trim());
        });

        localStorage.setItem('addresses', JSON.stringify(addresses));
        location.href = 'loginpages.html'; 
    } else {
        alert("Please fill in all address fields before proceeding.");
    }
}

// Attach event listener to the next button
document.querySelector('.next-button').addEventListener('click', navigateToNextPage);
