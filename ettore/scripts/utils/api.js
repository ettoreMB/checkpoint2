const baseURL = 'https://ctd-todo-api.herokuapp.com/v1'

function errorMsg(message) {
  const errorMsg = document.createElement('div')
      const body = document.querySelector('body')
      body.appendChild(errorMsg)
      errorMsg.innerText = message
      errorMsg.classList.add('messages')
}

export async  function login(email, password) {
  const user = {
    email: email,
    password: password
  }

  try {
    let login =  await fetch(`${baseURL}/users/login`, {
      method: 'POST',
      headers: {'content-type': "application/json"},
      body: JSON.stringify(user)
     })
     const response = login
     console.log(response)
    if( response.status === 200 || response.status === 201) {
      const jwtToken = await  response.json()
      sessionStorage.setItem('token', jwtToken.jwt);
      location.href = 'tarefas.html'
    }
    
    if(login.status === 400) {
      errorMsg('Email ou Senha Invalidos')
      // location.href = 'index.html'
     
    }

  } catch (error) {
    
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

export async function getUserInfo() {
  let user=  await fetch(`${baseURL}/users/getMe`, {
    headers: {
      'content-type': "application/json",
      'authorization': sessionStorage.getItem('token')
    },
    
   })
  const response = await user.json()
  
   return response
}