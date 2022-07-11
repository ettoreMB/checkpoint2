
export const validations = {
    _DEFAULT_STYLE_BG: '#7898FF',
    _BLOCKED_COLOR: '#979292A1',
    _ERROR_COLOR: '#E9554EBB',
    _ERROR_MSG: 'Campo Obrigáorio *',

    removeSpacesFromtext(text) {
        return text.trim();
    },
    checkAllInputs(inputArray, button) {
        const validInputs = inputArray.filter(input => input.value !== '');
        const inputArrayLength = inputArray.length;
        if (inputArrayLength != validInputs.length) {
            button.style.backgroundColor = this._BLOCKED_COLOR;
            button.setAttribute('disabled', true);
            return false;
        } else if (this.verifiedLogin == false) {
            button.style.backgroundColor = this._BLOCKED_COLOR;
            button.setAttribute('disabled', true);
            return false;
        }
        button.style.backgroundColor = this._DEFAULT_STYLE_BG;
        button.removeAttribute('disabled');
        return true;
    },
    checkIfHasEmptyInput(inputArray, button) {
        inputArray.forEach(input => {
            if (input.value) {
                input.value = this.removeSpacesFromtext(input.value);
                button.style.backgroundColor = this._DEFAULT_STYLE_BG;
                button.removeAttribute('disabled');
            } else {
                this.displayError(input, this._ERROR_MSG);
                button.setAttribute('disabled', true);
                button.style.backgroundColor = this._BLOCKED_COLOR;
            }
        });
    },
    handleEmptyInput(input) {
        input.addEventListener('keyup', () => {
            if (input.value) {
                this.removeSpacesFromtext(input.value);
                this.clearErrors(input);
                return true;
            } else {
                this.displayError(input, this._ERROR_MSG);
                return false;
            }
        });
    },
    checkPassword(password, repeatPassword) {
        const error_msg = 'A senhas devem ser iguais';
        if (password.value !== repeatPassword.value) {
            this.displayError(password, error_msg);
            // this.displayError(repeatPassword, error_msg);
            return false;
        } else {
            this.clearErrors(password);
            this.clearErrors(repeatPassword);
        }
    },
    displayError(input, error) {
        const div = input.nextElementSibling;
        input.classList.add('inputError');
        div.classList.add('error');
        div.innerHTML = error;
    },
    clearErrors(input) {
        input.classList.remove('inputError');
        const errorDiv = input.parentNode.querySelector('.error');
        errorDiv.innerText = '';
    },
    isEmail(input) {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!input.value.match(mailFormat)) {
            let button = document.getElementById('signupButton');
            button.setAttribute('disabled', true);
            button.style.backgroundColor = this._BLOCKED_COLOR;
            this.verifiedLogin = false;
            return this.displayError(input, 'Dever Um email Valido');
        }

        this.verifiedLogin = true;
        return true;
    },
};