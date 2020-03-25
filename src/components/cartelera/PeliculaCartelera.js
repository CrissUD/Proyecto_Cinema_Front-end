import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PeliculaCartelera.css';


export default class PeliculaCartelera extends Component {

    enviarIdPelicula = () => {
        this.props.obtenerPeliculaEscogida(this.props.movie)
    }

    render() {
        return (
            <Link className="btn_movie" to="/DescripcionPelicula">
                <button id="btn_movie_button" className="btn_movie_button" onClick={this.enviarIdPelicula}>
                    <div className="desc_movie">
                        <div className="card">
                            <img className="img_movie" src= {this.props.movie.v_foto} alt="movie_image"/>
                            <div className="movie_cover">
                                <div>
                                    <img className="img_cover" src={require("../../resources/img/tiempo.png")} alt="movie_image"/>
                                    <p>{this.props.movie.i_duracion} minutos</p>                        
                                </div>
                                <div>
                                    <img className="img_cover" src={require("../../resources/img/año.png")} alt="movie_image"/>
                                    <p>{this.props.movie.d_fecha_estreno}</p> 
                                </div>
                                <div>
                                    <img className="img_cover" src={require("../../resources/img/proyector.png")} alt="movie_image"/>  
                                    <p>2D/3D General</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="card_body">
                            <p className= "card_name">{this.props.movie.v_nombre}</p>
                            <div className="movie_info">
                                <p className= "card_title">Genero:</p>
                                <p className= "card_text">{this.props.movie.v_genero}</p>
                            </div>
                            <div className="movie_info" >
                                <p className= "card_title">Clasificacion:</p>
                                <p className= "card_text">{this.props.movie.v_clasificacion}</p>    
                            </div>   
                        </div>
                    </div>
                </button>
        </Link>
        )
    }
}
