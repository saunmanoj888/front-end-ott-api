import { createMovie } from './movies-service'

const token = localStorage.getItem('token')

document.querySelector('#new_movie').addEventListener('submit', (e) => {
    const title = e.target.elements['title'].value
    const description = e.target.elements['description'].value
    const release_date = e.target.elements['release_date'].value
    const budget = e.target.elements['budget'].value
    e.preventDefault()

    createMovie(title, description, release_date, budget, token).then((data) => {
        document.getElementById('new_movie').style.display = 'none'
        let pTag = document.createElement('p')
        pTag.innerHTML = 'Movie created sucessfully!!'
        document.body.appendChild(pTag)
    }).catch((error) => {
        alert(error)
    })
})