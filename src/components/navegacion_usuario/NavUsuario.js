import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './NavUsuario.css'

export default class NavUsuario extends Component {

    moveNavUser = () =>{
        document.getElementById('sidebar').classList.toggle('active');
    }

    cerrarSesion = () =>{
        this.props.cerrarSecion()
    }

    render() {
        return (
            <div id="sidebar">
                <div className="toggle_btn">
                    <span onClick={this.moveNavUser}>&#9776;</span>
                </div>
                <div className="user_info">
                    <h3>{this.props.persona.data.v_primernombre + " " + this.props.persona.data.v_primerapellido}</h3>
                    <img className="img_user" src={this.props.persona.data.v_foto} alt="user_img"/>
                    <p>
                        Nada complementa una experiencia en el cine como una comida como compañia mientras ves peliculas.
                    </p>
                </div>
                <ul>
                    <li>
                        <Link className="btn_menu_user" to="/Perfil">
                            <img className="img_btn" src={require("../../resources/img/usuario.png")}  alt="user"/>
                            Mi Perfil
                        </Link>
                    </li>
                    <li>
                        <Link className="btn_menu_user" to="/Modificar">
                            <img className="img_btn" src={require("../../resources/img/modificar.png")}alt="modificar"/>
                            Modificar mis Datos
                        </Link>
                    </li>
                    <li>
                        <Link className="btn_menu_user" to="/TarjetaCredito">
                            <img className="img_btn" src={require("../../resources/img/tarjeta.png")} alt="tarjeta"/>
                            Registrar Tarjeta
                        </Link>
                    </li>
                    <li>
                        <Link className="btn_menu_user" to="/Historial">
                            <img className="img_btn" src={require("../../resources/img/historial.png")} alt="historial"/>
                            Historial
                        </Link>
                    </li>
                    <li>
                        <button className="btn_menu_user" onClick={this.cerrarSesion}>
                            <img className="img_btn" src={require("../../resources/img/salir.png")} alt="historial"/>
                            Cerrar Sesion
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}
