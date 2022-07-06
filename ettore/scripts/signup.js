import { createUser } from './utils/api.js'
import { validations } from './utils/validations.js'


let passwordInput = document.querySelector('#password_input');
let passwordRepeatInput = document.querySelector('#repeat_password_input');
let emailInput = document.querySelector('#email_input')

const loginButton = document.querySelector('#signingButton')

let inputs = [...document.querySelectorAll('input')]
//Outras formas de retornar array de inputs
//let inputs = document.querySelectorAll('input')
//const inputArray = Array.apply(inputs)
//let inputs = Array.prototype.slice.call(inputs)

window.addEventListener('keydown', () => {
  validations.checkAllInputs(inputs, loginButton)
});

inputs.forEach(input => (
  validations.handleEmptyInput(input)
));

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  validations.isEmail(emailInput);
  validations.checkIfHasEmptyInput(inputs, loginButton);
  validations.checkPassword(passwordInput, passwordRepeatInput);
  // await createUser(nameValue, lastNameValue, emailValue, passwordValue );
});

