import { allMovies } from './movies-service'

const token = localStorage.getItem('token')

const generateMovieDOM = (movie) => {
    console.log("Movie", movie)
    const tr = document.createElement('tr')
    for (const property in movie) {
        if (typeof movie[property] === 'object') { continue; }

        if (property === 'title') {
            const td = document.createElement('td')
            const a = document.createElement('a')
            const movieProperty = document.createTextNode(movie[property])
            a.appendChild(movieProperty)
            a.href = `//localhost:8080/show_movie.html?id=${movie.id}`
            td.appendChild(a)
            tr.appendChild(td)
            continue
        }

        const td = document.createElement('td')
        const movieProperty = document.createTextNode(movie[property])
        td.appendChild(movieProperty)
        tr.appendChild(td)
    }

    return tr
}

const generateTableTitleDOM = () => {
    let titles = ['Id', 'Title', 'Description', 'Release Date', 'Budget', 'Average Ratings'] 
    const tr = document.createElement('tr')
    for (let i = 0; i < titles.length; i++) {
        const td = document.createElement('td')
        const property = document.createTextNode(titles[i])
        td.appendChild(property)
        tr.appendChild(td)
    }

    return tr
}

const renderMovies = () => {
    const movieEl = document.querySelector('#movies')
    const tableEl = document.createElement('table')
    allMovies(token).then((data) => {
        let movies = data.movies
        movieEl.innerHTML = ''
        tableEl.appendChild(generateTableTitleDOM())
        movies.forEach((movie) => {
            tableEl.appendChild(generateMovieDOM(movie))
        })
        movieEl.appendChild(tableEl)
    }).catch((error) =>{
        alert(error)
    })
}

renderMovies()