import {movies} from "../FakeAPI/fakeMovieService";

export const getMovie = () => {
    return movies
}

export const getMovies = (id) => {
    return movies.find(m => m._id === id)
}