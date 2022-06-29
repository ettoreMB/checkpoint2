let campoEmailLoginNormalizado;
let campoSenhaLoginNormalizado;

// Pré-configura as variáveis de validação de e-mail e senha para impedir ação do botão de login
let emailEValido = false;
let senhaEValida = false;

// Criação do objeto que receberá as informações de login (e-mail e senha) que o usuário preencher
const usuarioObjeto = {
  email: "",
  password: "",
};

// Event Listener - Campo de E-mail
campoEmail.addEventListener("input", () => {
  // Verifica se o campo de e-mail está com um e-mail em formato válido. Caso esteja, altera a borda do elemento para verde e remove qualquer mensagem de erro existente.
  if (validarCampo(campoEmail)) {
    campoEmail.style.border = "3px solid #5369f8";

    emailEValido = true;
  } else if (campoEmail.value == "") {
    campoEmail.style.border = "3px solid #ced4da";

    emailEValido = false;
  }
  // Caso ainda não esteja com o formato válido, altera a borda do elemento para vermelho e a mensagem de erro é exibida assim que o texto começar a ser introduzido no campo.
  else {
    campoEmail.style.border = "3px solid red";

    emailEValido = false;
  }
});

// Event Listener - Campo de Senha
campoSenha.addEventListener("input", () => {
  // Verifica se o campo de senha não está vazio, e que ele possui o mínimo de 8 caracteres. Caso possua, remove qualquer mensagem de erro e altera a borda do elemento para verde.
  if (validarCampo(campoSenha)) {
    campoSenha.style.border = "3px solid #5369f8";

    senhaEValida = true;
  } else if (campoSenha.value == "") {
    campoSenha.style.border = "3px solid #ced4da";

    senhaEvalida = false;
  }
  // Caso o campo de senha ainda não tenha o mínimo de 8 caracteres, a mensagem de erro é exibida assim que o texto começar a ser introduzido no campo.
  else {
    campoSenha.style.border = "3px solid red";

    senhaEValida = false;
  }
});

botaoLogin.addEventListener("click", (evento) => {
  // Verifica se o usuário preencheu os campos de e-mail e senha.
  // Caso não tenha preenchido, impede o envio do formulário e exibe mensagem de erro.
  if (validarLogin()) {
    console.log("Todos os campos para login foram preenchidos.");
    evento.preventDefault();

    // Normaliza os campos retirando espaços em branco
    campoEmailLoginNormalizado = retiraEspacosDeUmValorInformado(
      campoEmail.value
    );
    campoSenhaLoginNormalizado = retiraEspacosDeUmValorInformado(
      campoSenha.value
    );

    // Normaliza os caracteres do e-mail para minúsculas
    campoEmailLoginNormalizado = converteValorRecebidoEmMinusculo(
      campoEmailLoginNormalizado
    );

    // Exibe os dados informados durante o login
    console.log(`E-mail informado: ${campoEmailLoginNormalizado}`);
    console.log(`Senha informada: ${campoSenhaLoginNormalizado}`);

    // Adiciona o e-mail e senha ao objeto da página
    usuarioObjeto.email = campoEmailLoginNormalizado;
    usuarioObjeto.password = campoSenhaLoginNormalizado;
  }
});

// Validação do login
function validarLogin() {
  if (emailEValido && senhaEValida) {
    return true;
  } else {
    return false;
  }
}
