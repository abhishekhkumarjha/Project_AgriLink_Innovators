function togglePaymentDetails(sectionId) {
  const sections = document.querySelectorAll('.payment-details-section');
  sections.forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById(`${sectionId}-section`).style.display = 'block';
}

document.querySelectorAll('.pay-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const form = this.closest('form');
    let isValid = true;

    // Check if all required fields are filled in the form
    form.querySelectorAll('input[required]').forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
      }
    });

    // Show an alert if any field is empty
    if (!isValid) {
      alert('Please fill in all the details.');
      return;
    }

    // If valid, redirect to the new page (you can replace this with your URL)
    window.location.href = 'final.html'; // Replace with the actual page URL
  });
});
