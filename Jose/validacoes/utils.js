function limpaMensagem(campoDeExibicao) {
    campoDeExibicao.innerText = "";
}

function validarCampo(campo) {
	if (campo == campoNome) {
		const nameHasOnlyString = !/\d/g.test(campoNome.value);
		const maxLength = 20;
		const minLength = 2;
		const isNameValid = nameHasOnlyString && campoNome.value.length <= maxLength && campoNome.value.length >= minLength;
		return isNameValid
	}
	else if (campo == campoSobrenome) {
		const surnameHasOnlyString = !/\d/g.test(campoSobrenome.value);
		const maxLength = 30;
		const minLength = 2;
		const isSurnameValid = surnameHasOnlyString && campoSobrenome.value.length <= maxLength && campoSobrenome.value.length >= minLength;
		return isSurnameValid
	}
	else if (campo == campoEmail) {
		const emailValue = campoEmail.value;
		const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(emailValue);
		const isEmailValid = emailRegex;
		return isEmailValid;
	}
	else if (campo == campoSenha) {
		const minLength = 8;
		const maxLength = 16;
		const passwordValue = campoSenha.value;
		const isPasswordValid = passwordValue.length >= minLength && passwordValue.length <= maxLength;
		return isPasswordValid;
	}
	else if (campo == campoConfirmaSenha) {
		const isBothPasswordsEqual = campoSenha.value === campoConfirmaSenha.value;
		return isBothPasswordsEqual;
	}
	else if (campo == campoNovaTarefa) {
		const minLength = 2;
		const isTarefaValid = campoNovaTarefa.value.length >= minLength;
		return isTarefaValid;
	}
}

