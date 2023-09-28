// Function to handle form submission
function handleFormSubmit(event) {

    event.preventDefault(); // Prevent the default form submission behavior

    // Fetch values from input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Get error and success message elements
    const error = document.getElementById('error');
    const success = document.getElementById('success');

    // Validation to ensure that all required fields are filled
    if (name === "" || email === "") {
        error.textContent = "Please fill in all required fields.";
        success.textContent = ""; // Clear the success message
    } else {
        // Clear any previous error messages
        error.textContent = "";

        // Display success message
        success.textContent = "Form submitted successfully!";
    }
}

// Add an event listener to the form element to handle submission
const submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", handleFormSubmit);

