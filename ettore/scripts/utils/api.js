const baseURL = 'https://ctd-todo-api.herokuapp.com/v1';
const authToken = sessionStorage.getItem('token');

const _GET_HEADERS_CONFIG = {
  headers: {
    'content-type': "application/json",
    'authorization': authToken
  }
}

let _POST_HEADERS_CONFIG =  {
  headers: {
    method: 'POST',
    'content-type': "application/json",
    'authorization': authToken,
    body: ''
  }
}

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

export async function createUser(firtsName, lastName,email, password, ) {
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


export async function getUserInfo() {
  let user=  await fetch(`${baseURL}/users/getMe`, _GET_HEADERS_CONFIG)
  const response = await user.json()
  
   return response
}

export async function getTasks() {
  let tasks=  await fetch(`${baseURL}/tasks`, _GET_HEADERS_CONFIG)
  const response = await tasks.json()
  
   return response
}

export  async function createTask(description) {
  // const post_opt = Object.assign(_POST_HEADERS_CONFIG);
  // const json_body = {
  //   description: description,
  //   completed: false
  // }
  // post_opt.headers.body = JSON.stringify(json_body)

  const body = {
    description: description,
    completed: false
  }
  

   const new_task =  await fetch(`${baseURL}/tasks`, {
      method: 'POST',
      headers: {
        'content-type': "application/json",
        authorization: authToken,
      },
      body: JSON.stringify(body)
    })
    const response = await new_task.json()
   return response
  
}
