
export const validations = {
  _DEFAULT_STYLE_BG: "#7898FF",
  _BLOCKED_COLOR: "#979292A1",
  _ERROR_COLOR: "#E9554EBB",
  _ERROR_MSG: "Campo Obrigáorio *",
  _ERROR_STYLE: `2px solid #E9554EBB`,
  removeSpacesFromtext(text) {
    return text.trim()
  },
  checkAllInputs(inputArray, button) {
    const validInputs = inputArray.filter(input => input.value !== "");
    const inputArrayLength = inputArray.length;

    if (inputArrayLength != validInputs.length) {
      button.style.backgroundColor = this._BLOCKED_COLOR
      button.innerText = "Bloqueado"
      button.setAttribute("disabled", true)
      return false
    }
    button.style.backgroundColor = this._DEFAULT_STYLE_BG;
    button.removeAttribute("disabled")
    button.innerText = "Criar Conta";
    return true
  },
  checkIfHasEmptyInput(inputArray, button, text) {

    inputArray.forEach(input => {
      if (input.value) {
        input.value = this.removeSpacesFromtext(input.value)
        button.style.backgroundColor = this._DEFAULT_STYLE_BG;
        button.removeAttribute("disabled")
        button.innerText = `${text}`

      } else {
        const errorMsg = input.nextElementSibling
        input.style.border = this._ERROR_STYLE
        errorMsg.innerText = this._ERROR_MSG
        errorMsg.style.color = this._ERROR_COLOR
        button.innerText = 'bloqueado'
        button.setAttribute("disabled", true)
        button.style.backgroundColor = this._BLOCKED_COLOR;
      }
    })

  },
  handleEmptyInput(input) {
    input.addEventListener('keyup', () => {
      if (input.value) {
        input.style.border = "2px solid transparent"
        return true
      } else {
        input.style.border = this._ERROR_STYLE
        return false
      }
    })
  },
  checkPassword(password, repeatPassword) {
    if (password.value !== repeatPassword.value) {
      password.style.border = this._ERROR_STYLE
      repeatPassword.style.border = this._ERROR_STYLE
      password.nextElementSibling.innerText = "A senhas devem ser iguais"
      repeatPassword.nextElementSibling.innerText = "A senhas devem ser iguais"
      return false
    } else {
      return true
    }
  }
}
