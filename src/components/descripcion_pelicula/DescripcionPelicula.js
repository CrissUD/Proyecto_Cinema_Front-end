import React, { Component } from 'react';
import FechasScroll from '../fechas_scroll/FechasScroll';
import Horarios from '../horarios/HorariosMenu';
import PanelConfirmacion from '../panel_Confirmacion/PanelConfirmacion';
import './DescripcionPelicula.css';
import axios from 'axios';

export default class DescripcionPelicula extends Component {

    state = {
        horarios: false,
        hora: '',
        teatro:'',
        proyeccion: '',
        fecha: '',
        funcion: 0,
        sala: 0,
        numSala: 0,
        fun_sala: 0,
        list_funciones: []
    }

    constructor(){
        super()
        this.panel = React.createRef(); //create ref
        this.panelBackground= React.createRef();
    }

    consultarFunciones = (id, fecha) =>{
        this.setState({fecha:fecha})
        axios.get('http://localhost:8888/funciones/' + fecha + '/'+ id)
        .then(response => { 
            this.setState({list_funciones: response.data.data[0], horarios: true})
            console.log(this.state.list_funciones)
        })
        .catch(error => {
            alert('error.response.data.message')
        });
    }

    recibirHoraTeatro = (hora, teatro, proyeccion, funcion, sala, numSala, fun_sala) =>{
        this.setState({
            hora: hora,
            teatro: teatro,
            proyeccion:proyeccion,
            funcion: funcion,
            sala: sala,
            numSala: numSala,
            fun_sala: fun_sala
        })
    }

    render() {
        return (
            <div className="container">
                <div className="movie_info_stadistics">
                    <div className="movie_img_dif">
                        <img className="img_movie_desc" src={this.props.pelicula.v_foto} alt="movie_image_desc"/>
                    </div>
                    <div className="movie_general_info">
                        <h2>{this.props.pelicula.v_nombre}</h2>
                        <p>{this.props.pelicula.v_genero}</p>
                        <p>{this.props.pelicula.v_clasificacion}</p>
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
                            <p className= "info_text">{this.props.pelicula.v_director}</p>
                        </div>
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/calendario.png")}  alt="calendary_img"/>
                            <p className= "info_title">Fecha estreno:</p>
                            <p className= "info_text">{this.props.pelicula.d_fecha_estreno}</p>
                        </div>
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/ubicacion.png")}  alt="country_img"/>
                            <p className= "info_title">Pais Origen:</p>
                            <p className= "info_text">{this.props.pelicula.v_pais_origen}</p>
                        </div>
                        <div className="more_info_div">
                            <img className="more_info_img" src={require("../../resources/img/reloj.png")}  alt="clock_img"/>
                            <p className= "info_title">Duracion:</p>
                            <p className= "info_text">{this.props.pelicula.i_duracion} minutos</p>
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
                        <h1>{this.props.pelicula.v_nombre}</h1>
                        <h3>Resumen</h3>
                        <p>{this.props.pelicula.tx_sinapsis}</p>
                    </div>
                    <div className="movie_casting">
                        <h3>Reparto</h3>
                        <p>{this.props.pelicula.v_reparto}</p>
                    </div>
                    <div className="scroll_dates">
                        <FechasScroll consultarFunciones={this.consultarFunciones} id={this.props.pelicula.id}/>
                    </div>
                    <div className="confirmation">
                        <PanelConfirmacion 
                            fecha={this.state.fecha}
                            pelicula={this.props.pelicula.v_nombre}
                            hora={this.state.hora}
                            teatro={this.state.teatro}
                            proyeccion={this.state.proyeccion}
                            funcion={this.state.funcion}
                            sala={this.state.sala}
                            numSala={this.state.numSala}
                            fun_sala={this.state.fun_sala}
                            login={this.props.login}
                            panel={this.panel} 
                            panelBackground={this.panelBackground}
                            consultarDisponibilidad={this.props.consultarDisponibilidad}
                        />
                    </div>
                    <div className="movie_timetable">
                        {this.state.horarios ? 
                            (<Horarios 
                                list_funciones={this.state.list_funciones} 
                                recibirHoraTeatro={this.recibirHoraTeatro}
                                panel={this.panel} 
                                panelBackground={this.panelBackground}
                            />)
                            : (<div/>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}