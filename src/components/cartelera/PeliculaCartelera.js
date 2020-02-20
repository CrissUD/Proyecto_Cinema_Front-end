import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PeliculaCartelera.css';


export default class PeliculaCartelera extends Component {
    render() {
        return (
            <Link className="btn_movie" to="/DescripcionPelicula">
                <div className="desc_movie">
                    <div className="card">
                        <img className="img_movie" src="https://es.web.img3.acsta.net/pictures/19/12/11/18/10/4293997.jpg" alt="movie_image"/>
                        <div className="movie_cover">
                            <div>
                                <img className="img_cover" src={require("../../resources/img/tiempo.png")} alt="movie_image"/>
                                <p>120 minutos</p>                        
                            </div>
                            <div>
                                <img className="img_cover" src={require("../../resources/img/año.png")} alt="movie_image"/>
                                <p>2020</p>
                            </div>
                            <div>
                                <img className="img_cover" src={require("../../resources/img/proyector.png")} alt="movie_image"/>  
                                <p>2D General</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card_body">
                        <p className= "card_name">Nombre de Pelicula</p>
                        <div className="movie_info">
                            <p className= "card_title">Genero:</p>
                            <p className= "card_text">Genero Pelicula</p>
                        </div>
                        <div className="movie_info" >
                            <p className= "card_title">Clasificacion:</p>
                            <p className= "card_text">Clasificacion Pelicula</p>    
                        </div>   
                    </div>
                </div>
            </Link>
        )
    }
}
