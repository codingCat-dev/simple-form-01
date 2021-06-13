'use strict';
// Loading Screen
const loadingScreen = document.querySelector('.loading-screen');
const footer = document.querySelector('.footer');
const loadingEnd = document.querySelector('.loading-end');
const formContent = document.querySelector('.form');
// Loading

setTimeout(() => {
  loadingScreen.style.display = 'none';
  formContent.classList.add('formAnimation');
  footer.classList.add('formAnimation');
}, 2000);

const inputError = document.querySelector('.form-error');
const inputForm = document.querySelector('.form-form');

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputAge = document.getElementById('age');

const inputButton = document.querySelector('.form-button');

inputForm.addEventListener('submit', e => {
  let errorMessages = [];
  if (inputName.value === '' || inputName.value === null) {
    errorMessages.push('Name is required');
  }
  if (inputName.value.length <= 6) {
    errorMessages.push('Name must be at least 6 characters long');
  }
  if (inputName.value.length >= 14) {
    errorMessages.push('Name must be less than 14 characters long');
  }

  if (inputPassword.value.length <= 6) {
    errorMessages.push('Password must be at least 6 characters long');
  }
  if (inputPassword.value.length >= 20) {
    errorMessages.push('Password must be less than 20 characters long');
  }
  if (inputPassword.value === inputName.value) {
    errorMessages.push('Password cant be the same as name');
  }
  if (inputEmail.value.length >= 30) {
    errorMessages.push('Email must be less than 30 characters long');
  }
  if (inputEmail.value.length <= 8) {
    errorMessages.push('Email must be at least more than 8 characters long');
  }
  if (inputAge.value <= 10) {
    errorMessages.push('You must be at least 10 years old to proceed');
  }
  if (inputAge.value >= 100) {
    errorMessages.push('I dont belive your Age');
  }

  // Error Message Output
  const newLine = '\r\n';
  if (errorMessages.length > 0) {
    inputError.classList.add('errorShow');
    inputError.innerText = errorMessages.join(newLine);
  }
  e.preventDefault();
  inputButton.addEventListener('click', () => {
    formContent.classList.add('formAnimationEnd');
    setTimeout(() => {
      loadingEnd.style.display = 'flex';
    }, 1500);
  });
});
