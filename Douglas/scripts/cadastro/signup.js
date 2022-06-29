//coletei os elementos
let nome = document.getElementById('nome');
let sobrenome = document.getElementById('sobrenome');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let repSenha = document.getElementById('repSenha');
let botao = document.getElementById('button');

//variáveis de validação
let nameNormalize = '';
let sobrenomeNormalize = '';
let emailNormalize = '';
let senhaNormalizada = '';
let senhaRepNormalizada = '';

// variável para não liberar o botão até que preencha a quantidade necessária de caracteres
let count1 = true;
let count2 = true;

// objeto json
let objetoCadastro = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
};
//botão inicia com essa configuração
botao.style.backgroundColor = 'lightgrey';

// validação de nome e sobrenome
nome.addEventListener('keyup', () => {
    let smallName = document.getElementById('smallNameSinup');
    nameNormalize = normalizandoEspacos(nome.value);

    if (nameNormalize.length >= 2) {
        smallName.innerText = '';
        nome.style.border = '1px solid transparent';
        sobrenome.style.border = '1px solid transparent';
    } else if (nameNormalize === '') {
        nome.style.border = '1px solid red';
        sobrenome.style.border = '1px solid red';
        smallName.innerText = 'Preencha o nome e sobrenome';
    }
    validandoBotao(
        nameNormalize,
        sobrenomeNormalize,
        emailNormalize,
        senhaNormalizada,
        senhaRepNormalizada
    );
});

sobrenome.addEventListener('keyup', () => {
    let smallName = document.getElementById('smallNameSinup');
    sobrenomeNormalize = normalizandoEspacos(sobrenome.value);

    if (sobrenomeNormalize.length >= 2) {
        smallName.innerText = '';
        nome.style.border = '1px solid transparent';
        sobrenome.style.border = '1px solid transparent';
    } else if (sobrenomeNormalize === '') {
        nome.style.border = '1px solid red';
        sobrenome.style.border = '1px solid red';
        smallName.innerText = 'Preencha o nome e sobrenome';
    }
    validandoBotao(
        nameNormalize,
        sobrenomeNormalize,
        emailNormalize,
        senhaNormalizada,
        senhaRepNormalizada
    );
});

//validando os emails
email.addEventListener('keyup', () => {
    let smallEmail = document.getElementById('smallEmailSinup');
    emailNormalize = normalizandoEmail(email.value);
    if (emailNormalize) {
        smallEmail.innerText = '';
        email.style.border = '1px solid transparent';
    } else if (emailNormalize === '') {
        smallEmail.innerText = 'Campo de preenchimento obrigatório';
        email.style.border = '1px solid red';
    } else {
        smallEmail.innerText = 'Digite um email valido';
        email.style.border = '1px solid red';
    }
    validandoBotao(
        nameNormalize,
        sobrenomeNormalize,
        emailNormalize,
        senhaNormalizada,
        senhaRepNormalizada
    );
});

//validação de senhas
senha.addEventListener('keyup', () => {
    let smallSenha = document.getElementById('smallSenhaSinup');
    senhaNormalizada = normalizandoEspacos(senha.value);

    if (senhaNormalizada.length >= 1 && senhaNormalizada.length < 6) {
        smallSenha.innerText = 'Senha deve ter no mínimo 6 caracteres';
        senha.style.border = '1px solid red';
        count1 = false;
    } else if (senhaNormalizada.length >= 6) {
        smallSenha.innerText = '';
        senha.style.border = '1px solid transparent';
        count1 = true;
    } else {
        smallSenha.innerText = 'Campo de preenchimento obrigatório';
        senha.style.border = '1px solid red';
        count1 = false;
    }
    verificação(senhaRepNormalizada, senhaNormalizada);
    validandoBotao(
        nameNormalize,
        sobrenomeNormalize,
        emailNormalize,
        senhaNormalizada,
        senhaRepNormalizada
    );
});

repSenha.addEventListener('keyup', () => {
    senhaRepNormalizada = normalizandoEspacos(repSenha.value);
    verificação(senhaRepNormalizada, senhaNormalizada);
    validandoBotao(
        nameNormalize,
        sobrenomeNormalize,
        emailNormalize,
        senhaNormalizada,
        senhaRepNormalizada
    );
});

function verificação(senha1, senha2) {
    let smallRepsenha = document.getElementById('smallRepetirSinup');
    if (senha1 !== senha2) {
        smallRepsenha.innerText = 'Senha diferente';
        smallRepsenha.style.color = 'red';
        repSenha.style.border = '1px solid red';
        count2 = false;
    } else {
        smallRepsenha.innerText = 'Senha Conferida';
        smallRepsenha.style.color = 'green';
        repSenha.style.border = '1px solid green';
        senha.style.border = '1px solid green';
        count2 = true;
    }
    validandoBotao(
        nameNormalize,
        sobrenomeNormalize,
        emailNormalize,
        senhaNormalizada,
        senhaRepNormalizada
    );
}

//validação do button
botao.addEventListener('click', function (e) {
    e.preventDefault();
    objetoCadastro.nome = nameNormalize;
    objetoCadastro.sobrenome = sobrenomeNormalize;
    objetoCadastro.email = emailNormalize;
    objetoCadastro.senha = senhaNormalizada;

    let objetoJson = JSON.stringify(objetoCadastro);
    console.log(objetoJson);
});

function validandoBotao(nome, sobrenome, email, senha, senha2) {
    if (nome && sobrenome && email && senha && senha2) {
        if (count1 == true && count2 == true) {
            botao.removeAttribute('disabled', false);
            botao.style.backgroundColor = 'var(--primary)';
            botao.innerText = 'Criar Conta';
            return true;
        } else {
            botao.setAttribute('disabled', true);
            botao.style.backgroundColor = 'lightgrey';
            botao.innerText = 'Aguardando';
            return false;
        }
    }
}
