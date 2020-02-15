import React, { Component } from 'react'
import './PiePagina.css'


export default class PiePagina extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="info_cine">
                            <div className="logo">
                                <img className="img_logo2" src="https://img.icons8.com/officel/80/000000/photo-reel.png" alt="user"/>
                                <h1 className="logo_text2">Cine Distrito</h1>
                            </div>
                            <p className="descr">
                                Cine Distrito es una propuesta cultural alternativa para promover la distribucion y proyeccion del septimo arte nacional e interlacional.
                            </p>
                            <p className="descr">
                                Cine Distrito es tambien una cadena de cines con operaciones en toda la ciudad de bogotá, contando con mas de 3 teatros y mas de 20 salas donde se proyectan las peliculas de actualidad
                            </p>
                            <ul className="list_data">
                                <li>1234 Norte Cll 122 # 22-5</li>
                                <li>Bogotá, Colombia</li>
                                <li>Telefono: (+57)285-85-22</li>
                                <li>Correo electrónico: cinedistrito@cine.org.co</li>
                            </ul>
                        </div>
                        <div className="enlaces">
                            <h3>ENLACES UTILES</h3>
                            <div className="enl_tab">
                                <div className="enl_col">
                                    <ul className="list_enl">
                                        <li className="li_enl">Sobre Nosotros</li>
                                        <li className="li_enl">Noticias</li>
                                        <li className="li_enl">Comunidad</li>
                                        <li className="li_enl">Normas</li>
                                        <li className="li_enl">Blog</li>
                                    </ul>
                                </div>
                                <div className="enl_col">
                                     <ul className="list_enl">
                                        <li className="li_enl">Preguntas</li>
                                        <li className="li_enl">Condiciones</li>
                                        <li className="li_enl">Politicas</li>
                                        <li className="li_enl">Privacidad</li>
                                        <li className="li_enl">Contacto</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="redes">
                            <div className="news">
                                <h3>BOLETIN INFORMATIVO</h3>
                                <p className="p_bol">Obtenga la ultima actualizacion en eventos suscribiendose en nuestro boletin</p>
                                <form className="news_form">
                                    <div className="input_form">
                                        <input type="email" className="email_input" placeholder="youremail@domain.com"></input>
                                        <span className="input_button">
                                            <button className="button_bol">
                                                SUSCRIBIR
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="social_conect">
                                <h3>REDES SOCIALES</h3>
                                <ul className="lis_red">
                                    <li className="li_red">
                                        <img className="img_redes" src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook"/>
                                    </li>
                                    <li className="li_red">
                                        <img className="img_redes" src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="twitter"/>
                                    </li>
                                    <li className="li_red">
                                        <img className="img_redes" src="https://img.icons8.com/color/48/000000/youtube-squared.png" alt="youtube"/>
                                    </li>
                                    <li className="li_red">
                                        <img className="img_redes" src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p className="copyright_text">
                        © 2020 Psicodelic. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        )
    }
}
