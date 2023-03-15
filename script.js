const form = document.querySelector("form");
const email = document.getElementById("mail");
const errorMessage = document.querySelector(".error-message");
const inputContainer = document.querySelector(".input-container")
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(email.value === '' || email.value !== '' && !emailRegExp.test(email.value)){
    email.className = 'invalid';
    errorMessage.textContent = 'Please provide a valid email address';
    inputContainer.style.marginBottom = '49px';
  } else {
    email.className = 'valid';
    errorMessage.textContent = '';
    inputContainer.style.marginBottom = '';
    form.submit();
  }
})
