import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { getMovies, getMovie } from "./getMovies";


export default class Movies extends React.Component {
    state = {
        movies: getMovie()
    }

    render() {
        return(
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>User:</th>
                            <th>Title</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}