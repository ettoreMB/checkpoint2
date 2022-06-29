
onload = () => {
  const token =  sessionStorage.getItem('token')
    if(!token) {
    console.log('Não tem token')
    } else {
      console.log('Token')
    }
}


