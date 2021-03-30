import login from './login-service'

document.querySelector('#login').addEventListener('submit', (e) => {
    const email = e.target.elements.email.value.trim()
    const password = e.target.elements.password.value
    e.preventDefault()

    if (email.length > 0 && password.length > 0) {
        login(email, password).then((data) => {
          console.log(data['token'])
          localStorage.setItem('token', data['token'])
          document.getElementById('login').style.display = 'none'
          let pTag = document.createElement('p')
          pTag.innerHTML = 'User logged in sucessfully!!'
          document.body.appendChild(pTag)
        }).catch((error) => {
          alert(error)
        })
    }
})
