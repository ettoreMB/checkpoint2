const baseURL = 'https://ctd-todo-api.herokuapp.com/v1'

export async  function login(email, password) {
  const user = {
    email: email,
    password: password
  }

   let login =  await fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', {
      method: 'POST',
      headers: {'content-type': "application/json"},
      body: JSON.stringify(user)
     })


    console.log(await login.json())
 
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

  console.log(createUserApi.json())
}

