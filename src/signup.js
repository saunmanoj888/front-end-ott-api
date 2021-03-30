import signUp from './signup-service'

const token = localStorage.getItem('token')

document.querySelector('#signup').addEventListener('submit', (e) => {
    const email = e.target.elements.email.value.trim()
    const password = e.target.elements.password.value
    const firstName = e.target.elements['firstname'].value
    const lastName = e.target.elements['lastname'].value
    e.preventDefault()

    signUp(email, password, firstName, lastName, token).then((data) => {
        document.getElementById('signup').style.display = 'none'
        let pTag = document.createElement('p')
        pTag.innerHTML = 'User created sucessfully!!'
        document.body.appendChild(pTag)
    }).catch((error) => {
        alert(error)
    })
})
