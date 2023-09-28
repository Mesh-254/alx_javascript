function validateEmail () {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('error');

  if (!email.match(/^[a-zA-Z\]\._\-[0-9]*[@][a-zA-Z]*[\.][a-z]{2,}$/)) {
    emailError.innerHTML = 'Enter valid email address';
    return false;
  }

  const submit = document.getElementById('submit');
  submit.addEventListener('submit', (event) => {
    if (!validateEmail()) {
      event.preventDefault();
    }
  });
}
