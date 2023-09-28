
function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "field " + i;
        inputContainer.appendChild(inputField);
    }

}


//  to validate the form before submission
function validateForm() {
    const numFields = document.getElementById("numFields").value;
    const inputContainer = document.getElementById("inputContainer");
    const inputs = inputContainer.querySelectorAll("input");

    checkValue = true;

    for (let i = 1; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            checkValue = false;
            break;
        }
    }
    const errorElement = document.getElementById("error");

    if (checkValue) {
      // Form is valid, you can submit it here
      errorElement.textContent = "";
      // Uncomment the next line to submit the form
      // document.getElementById("dynamicForm").submit();
    } else {
      errorElement.textContent = "Please fill in all fields.";
    }
  }
  
  // Add event listeners
  const numFieldsSelect = document.getElementById("numFields");
  numFieldsSelect.addEventListener("change", function () {
    generateInputFields(numFieldsSelect.value);
  });
  
  const dynamicForm = document.getElementById("dynamicForm");
  dynamicForm.addEventListener("submit", validateForm());
  
  // Initial field generation based on default value (1)
  generateInputFields(numFieldsSelect.value);


