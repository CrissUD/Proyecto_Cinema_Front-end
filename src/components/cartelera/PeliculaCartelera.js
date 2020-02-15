import React, { Component } from 'react';
import './PeliculaCartelera.css'

export default class PeliculaCartelera extends Component {
    render() {
        return (
            <div className="desc_movie">
                <div className="card">
                    <img className="img_movie" src="https://es.web.img3.acsta.net/pictures/19/12/11/18/10/4293997.jpg" alt="movie_image"/>
                    <div className="card_body">
                        <p className= "card_text">Nombre de Pelicula</p>
                        <p className= "card_text">Genero Pelicula</p>
                    </div>
                </div>
            </div>
        )
    }
}
