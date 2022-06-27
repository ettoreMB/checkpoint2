import { login } from './utils/api.js'
import { validations } from './utils/validations.js'

const signinButton = document.querySelector('#signupButton')
let inputs = [...document.querySelectorAll('input')]

window.addEventListener('keypress', () => {
  validations.checkAllInputs(inputs, signinButton)
})

inputs.forEach(input => (
  validations.handleEmptyInput(input)
))

signinButton.addEventListener('click', async (e) => {
  let emailInput = document.querySelector('#inputEmail');
  let passwordInput = document.querySelector('#inputPassword');

  e.preventDefault();
  validations.checkIfHasEmptyInput(inputs, signinButton, 'Login')
 await  login(emailInput.value,passwordInput.value)


});
