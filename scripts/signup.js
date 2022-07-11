import { createUser, login } from './utils/api.js';
import { validations } from './utils/validations.js';
import { mostrarSpinner, ocultarSpinner } from './utils/loader.js';
import { errorMsg } from './utils/utils.js';

let passwordInput = document.querySelector('#password_input');
let passwordRepeatInput = document.querySelector('#repeat_password_input');
let emailInput = document.querySelector('#email_input');
let name = document.getElementById('name-input');
let lastName = document.getElementById('surname-input');
const loginButton = document.querySelector('#signupButton');
loginButton.setAttribute('disabled', true);
loginButton.style.backgroundColor = validations._BLOCKED_COLOR;


let inputs = [...document.querySelectorAll('input')];
//Outras formas de retornar array de inputs
//let inputs = document.querySelectorAll('input')
//const inputArray = Array.apply(inputs)
//let inputs = Array.prototype.slice.call(inputs)

passwordInput.addEventListener('keyup', function (e) {
    e.preventDefault();
    validations.checkPassword(passwordInput, passwordRepeatInput);
});

passwordRepeatInput.addEventListener('keyup', function (e) {
    e.preventDefault();
    validations.checkPassword(passwordInput, passwordRepeatInput);
});

window.addEventListener('keyup', () => {
    validations.checkAllInputs(inputs, loginButton);
});

inputs.forEach(input => {
    validations.handleEmptyInput(input);
});

emailInput.addEventListener('keyup', ()=> {
    validations.isEmail(emailInput)
})

loginButton.addEventListener('click',  async (e) => {
    e.preventDefault();
    validations.checkIfHasEmptyInput(inputs, loginButton);
    validations.checkPassword(passwordInput, passwordRepeatInput);
    mostrarSpinner();
    const createUserApi = await createUser(
        name.value,
        lastName.value,
        emailInput.value,
        passwordInput.value
    );

    const response = await createUserApi.json()
    console.log(response)

    if (createUserApi.status === 200 || createUserApi.status === 201) {
       location.href='index.html'
    }

    if (createUserApi.status === 400) {
        ocultarSpinner();
        errorMsg(response);
    }
});