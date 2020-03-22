import React, { Component } from 'react';
import FechasScroll from '../fechas_scroll/FechasScroll';
import Horarios from '../horarios/HorariosMenu';
import PanelConfirmacion from '../panel_Confirmacion/PanelConfirmacion'
import './DescripcionPelicula.css';

export default class DescripcionPelicula extends Component {

    constructor(){
        super()
        this.panel = React.createRef(); //create ref
        this.panelBackground= React.createRef();
    }

    render() {
        return (
            <div className="container">
                <div className="movie_info_stadistics">
                    <div className="movie_img_dif">
                        <img className="img_movie_desc" src="https://es.web.img3.acsta.net/pictures/19/12/11/18/10/4293997.jpg" alt="movie_image_desc"/>
                    </div>
                    <div className="movie_general_info">
                        <h2>Nombre de Pelicula</h2>
                        <p>Genero de Pelicula</p>
                        <p>Clasificacion Pelicula</p>
                    </div>
                    <div className="movie_ranking">
                        <div className="stars_ranking">
                            <img className="ranking_img" src="https://img.icons8.com/office/30/000000/star--v1.png" alt="star_rank"/>
                            4.0/5.0
                        </div>
                        <div className="imbd_ranking">
                            <img className="ranking_img" src="https://img.icons8.com/color/48/000000/imdb.png" alt="imbd_rank"/>
                            70%
                        </div>
                    </div>
                    <div className="movie_more_info">
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/direccion.png")}  alt="direct_img"/>
                            <p className= "info_title">Director:</p>
                            <p className= "info_text">Director Pelicula</p>
                        </div>
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/calendario.png")}  alt="calendary_img"/>
                            <p className= "info_title">Fecha estreno:</p>
                            <p className= "info_text">20/01/2020</p>
                        </div>
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/ubicacion.png")}  alt="country_img"/>
                            <p className= "info_title">Pais Origen:</p>
                            <p className= "info_text">Pais Pelicula</p>
                        </div>
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/reloj.png")}  alt="clock_img"/>
                            <p className= "info_title">Duracion:</p>
                            <p className= "info_text">120 minutos</p>
                        </div>
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/idiomas.png")}  alt="lenguaje_img"/>
                            <p className= "info_title">Idiomas:</p>
                            <p className= "info_text">Ingles, Español, Subtitulado</p>
                        </div>
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/carrete.png")}  alt="carret_img"/>
                            <p className= "info_title">Proyeccion:</p>
                            <p className= "info_text">2D / 3D / Imax</p>
                        </div>
                    </div>
                </div>
                <div className="movie_info_detals">
                    <div className="movie_sumary">
                        <h1>Nombre de la Pelicula</h1>
                        <h3>Resumen</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum repudiandae deserunt tempora expedita sequi dignissimos ipsa, aliquid unde velit modi excepturi doloribus nostrum sapiente dicta, ratione magnam delectus harum. Deserunt repudiandae provident doloremque nemo perspiciatis esse porro nobis dicta?</p>
                    </div>
                    <div className="movie_casting">
                        <h3>Reparto</h3>
                        <p>Margot Robbie, Mary Elizabeth Winstead, Ewan McGregor, Jurnee Smollett-Bell, Rosie Pérez, Chris Messina, Derek Wilson, Steven Williams, Ali Wong, Matthew Willig, Charlene Amoia, François Chau, Greice Santo, Eric Michael Cole.</p>
                    </div>
                    <div className="scroll_dates">
                        <FechasScroll/>
                    </div>
                    <div className="confirmation">
                        <PanelConfirmacion panel={this.panel} panelBackground={this.panelBackground}/>
                    </div>
                    <div className="movie_timetable">
                        <Horarios panel={this.panel} panelBackground={this.panelBackground}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}