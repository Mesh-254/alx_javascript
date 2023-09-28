function validateEmail () {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('error');

  const submit = document.getElementById('submit');
  submit.addEventListener('submit', (event) => {
    if (!validateEmail()) {
      event.preventDefault();
    }
  });

  if (!email.match(/^[a-zA-Z\]\._\-[0-9]*[@][a-zA-Z]*[\.][a-z]{2,}$/)) {
    emailError.innerHTML = 'Enter valid email address';
    return false;
  }
  emailError.innerHTML = '<i class="fa fa-check-circle-o">';
  return true;
}
