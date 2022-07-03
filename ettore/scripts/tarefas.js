const header = document.querySelector('#user-name')

import { getUserInfo } from './utils/api.js'

onload = async () => {
  const token =  sessionStorage.getItem('token')
    if(!token) {
      location.href = 'index.html'
    } else {
      console.log(token)
    }

    

}

const user = await getUserInfo();
  console.log(user)

  header.innerText = user.firstName

