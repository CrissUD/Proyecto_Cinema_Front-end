import React, { Component } from 'react'
import PeliculaCartelera from './PeliculaCartelera';

import './Cartelera.css';

export default class Cartelera extends Component {

    state = {
        list_movies: [],
        consulta: false
    }

    mostrarPeliculas = () =>{
        return( 
            <div className="cartel_movies">
                {this.props.list_movies.data.map(movies => (
                    <PeliculaCartelera
                        key={movies.id}
                        movie={movies}
                        obtenerPeliculaEscogida={this.props.obtenerPeliculaEscogida}
                    /> 
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="header_billboard">
                    <h1>Cartelera</h1>
                </div>
                {this.mostrarPeliculas()}
            </div>
        )
    }
}
