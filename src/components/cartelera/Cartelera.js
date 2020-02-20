import React, { Component } from 'react'
import PeliculaCartelera from './PeliculaCartelera';
import './Cartelera.css';

export default class Cartelera extends Component {

    state = {
        list_movies: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    }
    mostrarPeliculas = () =>{
        return(
            <div className="cartel_movies">
                {this.state.list_movies.map(movies => (
                    <PeliculaCartelera
                        key={movies}
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
