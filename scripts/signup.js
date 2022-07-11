import { createUser } from './utils/api.js';
import { validations } from './utils/validations.js';
import { mostrarSpinner, ocultarSpinner } from './utils/loader.js';

let passwordInput = document.querySelector('#password_input');
let passwordRepeatInput = document.querySelector('#repeat_password_input');
let emailInput = document.querySelector('#email_input');
let name = document.getElementById('name-input');
let lastName = document.getElementById('surname-input');

passwordRepeatInput.addEventListener('keyup', function (e) {
    e.preventDefault();
    validations.checkPassword(passwordInput, passwordRepeatInput);
});

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

loginButton.addEventListener('click', async e => {
    e.preventDefault();
    validations.checkIfHasEmptyInput(inputs, loginButton);
    validations.checkPassword(passwordInput, passwordRepeatInput);

    await createUser(
        name.value,
        lastName.value,
        emailInput.value,
        passwordInput.value
    );

    //não está funcionando ainda, queria já salvar o token quando ele criasse a conta e já mandar ele para as tarefas para ele nao precisar logar novamente.
    //ai teria de fazer uma função de verificar se tem o token na loguin para já passar direto se tiver.
    mostrarSpinner();
    if (createUser.status === 200 || createUser.status === 201) {
        const jwtToken = await createUser.json();
        console.log(jwtToken);
        sessionStorage.setItem('token', jwtToken.jwt);
        location.href = 'tarefas.html';
    }

    if (createUser.status === 400) {
        ocultarSpinner();
        errorMsg('Error 400 server');
    }
});
