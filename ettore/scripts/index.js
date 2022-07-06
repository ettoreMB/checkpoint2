import { login } from './utils/api.js';
import { mostrarSpinner, ocultarSpinner } from './utils/loader.js';
import { errorMsg } from './utils/utils.js';
import { validations } from './utils/validations.js';

const signinButton = document.querySelector('#signupButton');
let inputs = [...document.querySelectorAll('input')];

window.addEventListener('keypress', () => {
  validations.checkAllInputs(inputs, signinButton);
});

inputs.forEach(input => (
  validations.handleEmptyInput(input)
));

signinButton.addEventListener('click', async (e) => {
  let emailInput = document.querySelector('#email_input');
  let passwordInput = document.querySelector('#password_input');

  e.preventDefault();
  inputs.forEach(input => (
    validations.removeSpacesFromtext(input.value)
  ))
  validations.checkIfHasEmptyInput(inputs, signinButton);
  validations.isEmail(emailInput);
  
  const loginResponse = await login(emailInput.value,passwordInput.value);

  mostrarSpinner();
    if( loginResponse.status === 200 || loginResponse.status === 201) {
      const jwtToken = await  loginResponse.json();
      sessionStorage.setItem('token', jwtToken.jwt);
      location.href = 'tarefas.html';
    };
    
    if(loginResponse.status === 400) {
      ocultarSpinner();
      errorMsg('Email ou Senha Invalidos');
    };

});
