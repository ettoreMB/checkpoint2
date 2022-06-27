import { cadastro, login } from './utils/api.js'
import { validations } from './utils/validations.js'
let nameInput = document.querySelector('#nomeInput');
let lastNameInput = document.querySelector('#sobrenomeInput');
let passwordInput = document.querySelector('#passwordInput');
let passwordRepeatInput = document.querySelector('#repeatPasswordInput');

const loginButton = document.querySelector('#signingButton')
let inputs = [...document.querySelectorAll('input')]


// let inputs = document.querySelectorAll('input')
// const inputArray = Array.apply(inputs)
//let inputs = Array.prototype.slice.call(inputs)
let emailInput = document.querySelector('.emailValidate');
let passwordValidate = document.querySelector('.passwordValidate');
window.addEventListener('keypress', () => {
  validations.checkAllInputs(inputs, loginButton)
})

inputs.forEach(input => (
  validations.handleEmptyInput(input)
))


loginButton.addEventListener('click', async (e) => {
  let nameValue = nameInput.value;
  let lastNameValue = lastNameInput.value;
  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;
  e.preventDefault();

  validations.checkIfHasEmptyInput(inputs, loginButton, 'Criar Conta')

  validations.checkPassword(passwordInput, passwordRepeatInput)

  await cadastro(nameValue, lastNameValue, emailValue, passwordValue );
  // console.log({ nameInputValue, surnameInputValue, emailInputValue })
});

