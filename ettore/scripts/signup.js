import { createUser } from './utils/api.js';
import { validations } from './utils/validations.js';

let passwordInput = document.querySelector('#password_input');
let passwordRepeatInput = document.querySelector('#repeat_password_input');
let emailInput = document.querySelector('#email_input');

const loginButton = document.querySelector('#signupButton');
loginButton.setAttribute('disabled', true);
loginButton.style.backgroundColor = validations._BLOCKED_COLOR;

let inputs = [...document.querySelectorAll('input')];
//Outras formas de retornar array de inputs
//let inputs = document.querySelectorAll('input')
//const inputArray = Array.apply(inputs)
//let inputs = Array.prototype.slice.call(inputs)

window.addEventListener('keyup', () => {
    validations.checkAllInputs(inputs, loginButton);
});

inputs.forEach(input => {
    validations.handleEmptyInput(input);
    validations.checkInputLoguin(input.value);
});

loginButton.addEventListener('click',async (e )=> {
    e.preventDefault();
    validations.checkIfHasEmptyInput(inputs, loginButton);
    validations.checkPassword(passwordInput, passwordRepeatInput);
    
    await createUser(nameValue, lastNameValue, emailValue, passwordValue ); 
});
