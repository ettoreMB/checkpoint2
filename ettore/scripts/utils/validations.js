
export const validations = {
  _DEFAULT_STYLE_BG: "#7898FF",
  _BLOCKED_COLOR: "#979292A1",
  _ERROR_COLOR: "#E9554EBB",
  _ERROR_MSG: "Campo Obrigáorio *",

  removeSpacesFromtext(text) {
    return text.trim()
  },
  checkAllInputs(inputArray, button) {
    const validInputs = inputArray.filter(input => input.value !== "");
    const inputArrayLength = inputArray.length;

    if (inputArrayLength != validInputs.length) {
      button.style.backgroundColor = this._BLOCKED_COLOR
      button.setAttribute("disabled", true)
      return false
    }
    button.style.backgroundColor = this._DEFAULT_STYLE_BG;
    button.removeAttribute("disabled")
    return true
  },
  checkIfHasEmptyInput(inputArray, button, ) {

    inputArray.forEach(input => {
      if (input.value) {
        input.value = this.removeSpacesFromtext(input.value)
        button.style.backgroundColor = this._DEFAULT_STYLE_BG;
        button.removeAttribute("disabled")
      
      } else {
        input.classList.add('inputError')
        input.nextElementSibling = this._ERROR_MSG
        button.setAttribute("disabled", true)
        button.style.backgroundColor = this._BLOCKED_COLOR;
      }
    })

  },
  handleEmptyInput(input) {
    input.addEventListener('keyup', () => {
      if (input.value) {
        input.classList.remove('inputError');
        input.nextElementSibling.innerText = ""
        return true
      } else {
        input.classList.add('inputError')
        input.nextElementSibling.innerText = this._ERROR_MSG
        return false
      }
    })
  },
  checkPassword(password, repeatPassword) {
    if (password.value !== repeatPassword.value) {
      password.classList.add('inputError')
      repeatPassword.classList.add('inputError')
      password.nextElementSibling.innerText = "A senhas devem ser iguais"
      repeatPassword.nextElementSibling.innerText = "A senhas devem ser iguais"
      return false
    } else {
      password.classList.remove('inputError')
      repeatPassword.classList.remove('inputError')
      password.nextElementSibling.innerText = ""
      repeatPassword.nextElementSibling.innerText = ""
    }
  },
}


