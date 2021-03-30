import { getData, postData } from './api-service'

const allMovies = async function(token) {
  const movieData = await getData('api/v1/movies', token)
  return movieData
}

const getMovie = async function(id, token) {
  const movieData = await getData(`api/v1/movies/${id}`, token)
  return movieData
}

const createMovie = async function(title, description, release_date, budget, token) {
  const requestBody = { movie: { title: title, description: description, release_date: release_date, budget: budget } }
  const movieData = await postData('api/v1/movies', requestBody, token)
  return movieData
}

export { allMovies, getMovie, createMovie }