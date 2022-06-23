import { validations } from './utils/validations.js'

const signinButton = document.querySelector('#signupButton')
let inputs = [...document.querySelectorAll('input')]

window.addEventListener('keypress', () => {
  validations.checkAllInputs(inputs, signinButton)
})

inputs.forEach(input => (
  validations.handleEmptyInput(input)
))

signinButton.addEventListener('click', (e) => {
  e.preventDefault();
  validations.checkIfHasEmptyInput(inputs, signinButton, 'Criar Conta')
  console.log({ nameInputValue, surnameInputValue, emailInputValue })
});
