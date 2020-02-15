import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './NavUsuario.css'

export default class NavUsuario extends Component {

    moveNavUser = () =>{
        document.getElementById('sidebar').classList.toggle('active');
    }

    render() {
        return (
            <div id="sidebar">
                <div className="toggle_btn">
                    <span onClick={this.moveNavUser}>&#9776;</span>
                </div>
                <div className="user_info">
                    <h3>Nombre de Usuario</h3>
                    <img className="img_user" src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80" alt="user_img"/>
                    <p>
                        Nada complementa una experiencia en el cine como unas crispetas saladas jueputa vida.
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
                        <Link className="btn_menu_user" to="/Tarjeta">
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
                </ul>
            </div>
        )
    }
}
