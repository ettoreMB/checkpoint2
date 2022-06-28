const baseURL = 'https://ctd-todo-api.herokuapp.com/v1'

export async  function login(email, password) {
  const user = {
    email: email,
    password: password
  }

  try {
    let login =  await fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', {
      method: 'POST',
      headers: {'content-type': "application/json"},
      body: JSON.stringify(user)
     })
    let response = await login;

    if( response.status === 200 || response.status === 201) {
      const jwt = response.jwt
      sessionStorage.setItem('token', jwt);

      location.href = 'tarefas.html'
    }
    
    if(response.status === 400) {
      location.href = 'index.html'
      alert('Email ou senha Invalidos');
    }

  } catch (error) {
    location.href = 'index.html'
    alert(error)
  }

} 

export async function cadastro(firtsName, lastName,email, password, ) {
  const newUser = {
    firtsName: firtsName,
    lastName: lastName,
    email: email,
    password: password
  }

  const createUserApi = await fetch(`${baseURL}/users`, {
    body: JSON.stringify(newUser)
  })
  
  createUserApi.json()
}

export function verificacaoLogin() {
  onload= () => {
     alert('Rodou')
   const token =  sessionStorage.getItem('token')
    if(!token) {
    console.log('Não tem token')
    } else {
      console.log('Token')
    }
  }
}
