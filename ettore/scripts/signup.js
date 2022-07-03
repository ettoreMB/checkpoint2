import { cadastro, login } from './utils/api.js'
import { validations } from './utils/validations.js'


let passwordInput = document.querySelector('#password_input');
let passwordRepeatInput = document.querySelector('#repeat_password_input');

const loginButton = document.querySelector('#signingButton')

let inputs = [...document.querySelectorAll('input')]
//Outras formas de retornar array de inputs
// let inputs = document.querySelectorAll('input')
// const inputArray = Array.apply(inputs)
//let inputs = Array.prototype.slice.call(inputs)

window.addEventListener('keydown', () => {
  validations.checkAllInputs(inputs, loginButton)
});

inputs.forEach(input => (
  validations.handleEmptyInput(input)
));

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  validations.removeSpacesFromtext()
  validations.checkIfHasEmptyInput(inputs, loginButton)
  validations.checkPassword(passwordInput, passwordRepeatInput)
  // await cadastro(nameValue, lastNameValue, emailValue, passwordValue );
});

