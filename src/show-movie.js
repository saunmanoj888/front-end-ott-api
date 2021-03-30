import { getMovie } from './movies-service'

const token = localStorage.getItem('token')
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

const renderMovie = () => {
    getMovie(id, token).then((data) => {
        let movie = data.movie
        let casts = movie['cast_crews']
        let reviews = movie['reviews']
        
        const movieEl = document.querySelector('#movie-details')
        const pTag = document.createElement('p')
        const text = document.createTextNode(`Title: ${movie.title}`)
        pTag.appendChild(text)
        movieEl.appendChild(pTag)

        const castEl = document.querySelector('#movie-casts')
        casts.forEach((cast) => {
            const pTag = document.createElement('p')
            const text = document.createTextNode(`${cast.name} has designation ${cast.designation}`)
            pTag.appendChild(text)
            castEl.appendChild(pTag)
        })
        
        const reviewEl = document.querySelector('#movie-reviews')
        reviews.forEach((review) => {
            const pTag = document.createElement('p')
            const text = document.createTextNode(`${review.body} -> ${review.added_by}`)
            pTag.appendChild(text)
            reviewEl.appendChild(pTag)
        })
    }).catch((error) =>{
        alert(error)
    })
}

renderMovie()