const baseURL = 'https://ctd-todo-api.herokuapp.com/v1';
const authToken = sessionStorage.getItem('token');

const _HEADERS_CONFIG = {

    'content-type': "application/json",
    authorization: authToken
  
}


 const api =  {
  post(endpoint, body) {
    return fetch(`${baseURL}${endpoint}`, {
      method: 'POST',
      headers: _HEADERS_CONFIG,
      body: JSON.stringify(body)
    })
  },
  get(endpoint) {
    return fetch(`${baseURL}${endpoint}`, {
      headers:_HEADERS_CONFIG
    })
  },
  put(endpoint,body) {
    return fetch(`${baseURL}${endpoint}`, {
      method: 'PUT',
      headers: _HEADERS_CONFIG,
      body: JSON.stringify(body)
    })
  },
  delete(endpoint, id) {
    return fetch(`${baseURL}${endpoint}/${id}`,{
      method: 'delete',
      headers: _HEADERS_CONFIG
    })
  },
  
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
    let login =  await api.post(`/users/login`, user)
     const response = login
    if( response.status === 200 || response.status === 201) {
      const jwtToken = await  response.json()
      sessionStorage.setItem('token', jwtToken.jwt);
      location.href = 'tarefas.html'
    }
    
    if(login.status === 400) {
      errorMsg('Email ou Senha Invalidos')
    }

  } catch (error) {
    errorMsg(error)
  }

} 

export async function createUser(firtsName, lastName,email, password ) {
  const newUser = {
    firtsName: firtsName,
    lastName: lastName,
    email: email,
    password: password
  }

 await api.post(`/users`, newUser)
  
}


export async function getUserInfo() {
  let user=  await api.get('/users/getMe', 'get')
  const response = await user.json()
  
   return response
}

export async function getTasks() {
  let tasks=  await api.get('/tasks', 'get')
  const response = await tasks.json()
  
   return response
}

export  async function createTask(description) {
  const task = {
    description: description,
    completed: false
  }
  
   const new_task =  await api.post(`/tasks`, task)
   const response = await new_task.json()
   return response
  
}

export async function deleteTask(id){
 await api.delete(`/task/${id}`)
}
