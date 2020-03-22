import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css'

export default class Navegacion extends Component {

    moveMenu = () =>{
        document.getElementById('nav').classList.toggle('active');
    }

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="topbar">
                        <ul className="top-nav">
                            <li className="li_nav1">
                            <Link className="btn_log" to="/Login">
                                <img className="img_btn_log" src="https://img.icons8.com/bubbles/50/000000/user-male.png" alt="user"/>
                                Iniciar sesion
                            </Link>
                            </li>
                            <li className="li_nav1">
                                <Link className="top_nav_link" to="/Registro">Registrate
                                </Link>
                            </li>
                            <li className="li_nav1">
                                <Link className="top_nav_link" to="/Ayuda">Ayuda</Link>
                            </li>
                        </ul>
                        <div className="search_box">
                            <input type="text" className="text_search" placeholder="Buscar"/>
                            <span className="input_btn">
                                <button type="button" className="btn_search">
                                    <img className="img_btn_search" src="https://img.icons8.com/android/24/000000/search.png" alt="search"/>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="header">
                        <img className="img_logo" src="https://img.icons8.com/officel/80/000000/photo-reel.png" alt="logo"/>
                        <h1 className="logo_text">Cine Distrito</h1>
                    </div>
                    <div className="main_nav">
                        <div className="menu_btn">
                            <span onClick={this.moveMenu}>&#9776;</span>
                        </div>
                        <ul id="nav" className="nav">
                            <li className="encabezado li_nav">
                                <Link className="nav_link" to="/Inicio">
                                    INICIO
                                </Link>
                            </li>
                            <li className="encabezado li_nav">
                                <Link className="nav_link" to="/Cartelera">
                                    CARTELERA
                                </Link>
                            </li>
                            <li className="encabezado li_nav">
                                <Link className="nav_link" to="/Estrenos">
                                    ESTRENOS
                                </Link>
                            </li>
                            <li className="encabezado li_nav">
                                <Link className="nav_link" to="/Teatros">
                                    TEATROS
                                </Link>
                            </li>
                            <li className="encabezado li_nav">
                                <Link className="nav_link" to="/Snacks">
                                    SNACKS
                                </Link>
                            </li>
                            <li className="encabezado li_nav">
                                <Link className="nav_link" to="/Promociones">
                                    PROMOCIONES
                                    <span className="label_main_nav">
                                        NUEVAS
                                    </span>
                                </Link>
                            </li>
                            <li className="encabezado li_nav">
                                <Link className="nav_link" to="/Nosotros">
                                    SOBRE NOSOTROS
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}