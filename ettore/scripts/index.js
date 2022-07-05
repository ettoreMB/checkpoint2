import { login } from './utils/api.js'
import { mostrarSpinner } from './utils/loader.js'
import { validations } from './utils/validations.js'

const signinButton = document.querySelector('#signupButton')
let inputs = [...document.querySelectorAll('input')]

window.addEventListener('keypress', () => {
  validations.checkAllInputs(inputs, signinButton)
})

inputs.forEach(input => (
  
  validations.handleEmptyInput(input)
))
// mostrarSpinner()
signinButton.addEventListener('click', async (e) => {
  let emailInput = document.querySelector('#email_input');
  let passwordInput = document.querySelector('#password_input');

  e.preventDefault();
  inputs.forEach(input => (
    validations.removeSpacesFromtext(input.value)
  ))
  validations.checkIfHasEmptyInput(inputs, signinButton)

  await login(emailInput.value,passwordInput.value)

});
