import { validations } from './utils/validations.js'

const loginButton = document.querySelector('#signingButton')
let inputs = [...document.querySelectorAll('input')]
// let inputs = document.querySelectorAll('input')
// const inputArray = Array.apply(inputs)
//let inputs = Array.prototype.slice.call(inputs)

window.addEventListener('keypress', () => {
  validations.checkAllInputs(inputs, loginButton)
})

inputs.forEach(input => (
  validations.handleEmptyInput(input)
))


loginButton.addEventListener('click', (e) => {
  let passwordInput = document.querySelector('#passwordInput');
  let passwordRepeatInput = document.querySelector('#repeatPasswordInput');
  e.preventDefault();

  validations.checkIfHasEmptyInput(inputs, loginButton, 'Criar Conta')

  validations.checkPassword(passwordInput, passwordRepeatInput)


  // console.log({ nameInputValue, surnameInputValue, emailInputValue })
});

