const form = document.querySelector("form");
const email = document.getElementById("mail");
const errorMessage = document.querySelector(".error-message");
const inputContainer = document.querySelector(".input-container");
const desktop = window.matchMedia("(min-width: 1024px)");
const tablet = window.matchMedia("(max-width: 768px)")
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if((email.value === '' && desktop.matches )||(email.value !== '' && !emailRegExp.test(email.value) && desktop.matches)){
    email.className = 'invalid';
    errorMessage.textContent = 'Please provide a valid email address';
  } else if((email.value === '' && tablet.matches )||(email.value !== '' && !emailRegExp.test(email.value) && tablet.matches)){
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
