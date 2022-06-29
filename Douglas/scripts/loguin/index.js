//coletando os elementos da tela
let emailLogin = document.getElementById('inputEmail');
let senhaLogin = document.getElementById('inputPassword');
let buttonLogin = document.getElementById('buttonLogin');
//objeto usuario
let objetoUsuario = {
    email: '',
    senha: '',
};
//botão inicia nesta configuração
buttonLogin.style.backgroundColor = 'lightgrey';

//Adicionando evento no botão
buttonLogin.addEventListener('click', function (e) {
    //chama a função que verifica se tem texto no campo e depois faz as validações
    if (validandoLogin(emailLogin.value, senhaLogin.value)) {
        //Não deixa recarregar a página
        e.preventDefault();
        //chamo a function da ultils para retirar os espaços.
        emailLogin = normalizandoEspacos(emailLogin.value);
        senhaLogin = normalizandoEspacos(senhaLogin.value);
        //passo o usuario e senha para o objeto
        objetoUsuario.email = emailLogin;
        objetoUsuario.senha = senhaLogin;
        //converte o objeto para json
        let objetoJson = JSON.stringify(objetoUsuario);
        //retorna o objeto para conferência
        console.log(objetoJson);

        //comunicando com a API
        //objeto de comunicação
        let configRequest = {
            methods: 'POST',
            Headers: {
                'Content-Type': 'application/json',
            },
            body: objetoJson,
        };

        fetch(
            'https://ctd-todo-api.herokuapp.com/v1/users/login',
            configRequest
        )
            .then(resultado => {
                if (resultado.status === 200 || resultado.status === 201) {
                    return resultado.json();
                } else {
                    throw resultado;
                }
            })
            .then(resultado => {
                userValido(resultado);
            })
            .catch(error => {
                if (error.status === 400 || error.status === 404) {
                    userError(resultado);
                }
            });
    }
});

function userValido(resultadoSucesso) {
    console.log(resultadoSucesso);
}

function userError(resultadoErro) {
    console.log(resultadoErro);
    alert('Usuário e/ou senha incorretos');
}

//chama a função valida login quando o os inputs começão a ser preenchidos
emailLogin.addEventListener('keyup', () => {
    let smallEmail = document.getElementById('smallEmail');
    if (normalizandoEmail(emailLogin.value)) {
        smallEmail.innerText = '';
        emailLogin.style.border = '1px solid transparent';
    } else if (emailLogin.value === '') {
        smallEmail.innerText = 'Campo de preenchimento obrigatório';
        emailLogin.style.border = '1px solid red';
    } else {
        smallEmail.innerText = 'Digite um email valido';
        emailLogin.style.border = '1px solid red';
    }
    validandoLogin(emailLogin.value, senhaLogin.value);
});
senhaLogin.addEventListener('keyup', () => {
    let smallPassword = document.getElementById('smallPassword');
    if (senhaLogin.value.length >= 1 && senhaLogin.value.length < 6) {
        smallPassword.innerText =
            'Por favor digite uma senha com no mínimo 6 caracteres';
        senhaLogin.style.border = '1px solid red';
    } else if (senhaLogin.value.length >= 6) {
        smallPassword.innerText = '';
        senhaLogin.style.border = '1px solid transparent';
    } else {
        smallPassword.innerText = 'Campo de preenchimento obrigatório';
        senhaLogin.style.border = '1px solid red';
    }
    validandoLogin(emailLogin.value, senhaLogin.value);
});

//função para fazer todas as validações do login
function validandoLogin(email, password) {
    //verifica se todos os campos estão preenchidos
    if (email && password) {
        //removemos o atributo que desabilita o botão
        buttonLogin.removeAttribute('disabled');
        //coloca o texto e estilos no botão para ficar melhor para o usuário
        buttonLogin.style.backgroundColor = 'var(--primary)';
        buttonLogin.innerText = 'Acessar';
        //retorna true para informar em qual parte do if entrou
        return true;
    } else {
        //desabilita o botão caso não passe na validação
        buttonLogin.setAttribute('disabled', true);
        //coloca o texto e estilos no botão para ficar melhor para o usuário
        buttonLogin.style.backgroundColor = 'lightgrey';
        buttonLogin.innerText = 'Aguardando';
        //retorna false para informar em qual parte do if entrou
        return false;
    }
}
