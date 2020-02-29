import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { getMovies, getMovie } from "./getMovies";
import {Pagination} from "../Common/pagintaion";

export default class Movies extends React.Component {
    state = {
        movies: getMovie(),
        pageSize: 4
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies: movies })
    }

    handlePageChange = (page) => {
        console.log(page)
    }

    render() {
        const {length: count} = this.state.movies

        if (count === 0 ) return <p>No more videos</p>

        return(
            <React.Fragment>
                <div className='container'>
                    <h2>Show <b>{count}</b> movies in the database</h2>

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
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemCounts={count}
                        pageSize={this.state.pageSize}
                        onPageChange={this.handlePageChange()}
                    />
                </div>
            </React.Fragment>
        )
    }
}