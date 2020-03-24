import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Perfil.css'

export default class Perfil extends Component {

    mostrarTipoDocumento = () =>{
        console.log(this.props.persona.data.fk_tipo_documento)
        console.log(typeof(this.props.persona.data.fk_tipo_documento))
        if(this.props.persona.data.fk_tipo_documento===1){
            return ('Cedula de Ciudadania')
        }
        else if (this.props.persona.data.fk_tipo_documento===2){
            return ('Tarjeta de Identidad')
        }
        else{
            return ('Cedula de extranjeria')
        }
    }

    render() {
        return (
            <div className="main_wrapper">
                <section className="description_user">
                    <div className="container">
                        <div className="info_user">
                            <div className="info">
                                <h2>
                                    {this.props.persona.data.v_primernombre + " " + this.props.persona.data.v_primerapellido}
                                </h2>
                                <h4>Cliente Registrado</h4>
                                <p>
                                    Nuestros Clientes pueden disfrutas de diferentes beneficios de los cuales estan, el seguimiento y analisis de historial de peliculas vistas, recomendaciones segun gustos. Se ofrece un sistema de puntos que generan descuentos y cangeos en nuestras salas y ademas la oportunidad de comprar y reservar boletas en tiempo real en el momento que quiera.
                                </p>
                                <p>
                                    A continuacion puede ver el historial de puntos o el historial de peliculas vistas en nuestras salas.
                                </p>
                            </div>
                            <div className="buttons">
                                <Link className="btn_points_history" to="/Puntos">
                                    <img className="img_btn" src={require("../../resources/img/estrella.png")}  alt="estrella"/>
                                    Historial de Puntos
                                </Link>
                                <Link className="btn_history" to="/Historial">
                                    <img className="img_btn" src={require("../../resources/img/historial.png")}  alt="historial"/>
                                    Historial de Peliculas
                                </Link>
                            </div>
                        </div>
                        <div className="img_user_perfil">
                            <img className="img_user_square" src={this.props.persona.data.v_foto} alt="user_img"/>
                        </div>
                    </div>
                </section>
                <section>
                <div className="container">
                    <div className="header_info">
                        <h3>Acerca de ti</h3>
                        <p>A continuacion puedes ver un resumen de la informacion mas importante que tenemos sobre ti. Puedes verificar cualquier dato y en caso de ser necesario modificar alguno de ellos. Tus datos son los Siguientes:</p>
                    </div>
                    <div className="row">
                        <div className="column_perfil info_person">
                            <h5>DATOS PERSONALES</h5>
                            <div className="row_form">
                                <div className="form_half">
                                    <p className="p_title">Nombres</p>
                                    <p className="p_info_half"> 
                                        {this.props.persona.data.v_primernombre + " " + this.props.persona.data.v_segundonombre} 
                                    </p>
                                </div>
                                <div className="form_half">
                                    <p className="p_title">Apellidos</p>
                                    <p className="p_info_half"> 
                                        {this.props.persona.data.v_primerapellido + " " + this.props.persona.data.v_segundoapellido} 
                                    </p>
                                </div>
                            </div>
                            <div className="row_form">
                                <div className="form_half">
                                    <p className="p_title">Tipo de Documento</p>
                                    <p className="p_info_half">
                                        {this.mostrarTipoDocumento()}
                                    </p>
                                </div>
                                <div className="form_half">
                                    <p className="p_title">Numero Documento</p>
                                    <p className="p_info_half">
                                        {this.props.persona.data.pk_numero_identificacion}
                                    </p>
                                </div>
                            </div>
                            <div className="email_form_desc">
                                <p className="p_title">Correo Electronico</p>
                                <p className="p_info_complete">
                                    {this.props.persona.data.v_correo_electronico}
                                </p>
                            </div>
                            <div className="row_form">
                                <div className="form_half">
                                    <p className="p_title">Numero de Telefono</p>
                                    <p className="p_info_half">
                                        {this.props.persona.data.i_telefono}
                                    </p>
                                </div>
                                <div className="form_half">
                                    <p className="p_title">Direccion de Residencia</p>
                                    <p className="p_info_half">
                                        {this.props.persona.data.v_direccion}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column_perfil estadist_person">
                            <div>
                                <h5>ESTADISTICAS</h5>
                                <div className="estadistics_section">
                                    <p className="p_title">Puntos:</p>
                                    <div className="points" />
                                    <p className="p_points">{this.props.cliente.data.i_numpuntos}/10.000</p>
                                </div>
                                <div className="estadistics_section">
                                    <p className="p_title">Peliculas vistas:</p>
                                    <p className="p_info_half">0 Peliculas</p>
                                </div>
                                <div className="estadistics_section">
                                    <p className="p_title">Boletas compradas:</p>
                                    <p className="p_info_half">0 Boletas</p>
                                </div>
                                <div className="estadistics_section">
                                    <p className="p_title">Total Gastado:</p>
                                    <p className="p_info_half">$0,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}
