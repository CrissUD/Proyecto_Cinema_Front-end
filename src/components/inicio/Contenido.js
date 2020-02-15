import React, { Component } from 'react'
import './Contenido.css'

export default class Contenido extends Component {
    render() {
        return (
            <div className="content">
                <section>
                    <div className="container_content">
                        <div className="row_intro">
                            <div className="column_intro column_text">
                                <h2>DISPONIBILIDAD EN TIEMPO REAL</h2>
                                <p className="lead">
                                    Nuestro portal web esta disponible las 24 horas y puedes recervar las entradas para tus peliculas favoritas con solo unos cuantos clicks de distancia, mostrando en tiempo real los puestos disponibles
                                </p>
                                <p>Mejora tu experiencia registrandote con un usuario para tener grandes beneficion entre los cuales tendras un registro de historial de peliculas vistas, una recomendacion inteligente de proximos estrenos, acumulacion de puntos para la generacion de regalos y descuentos y una prioridad avanzada para la recervacion de nuestras mejores peliculas en tiempo real con compras en linea de las boletas antes que los demas.</p>
                                <p>Realiza compras de boleteria y Snacks desde nuestro protal web sin ningun problema. La pagina te muestra en tiempo real los cupos disponibles en cada funcion ademas de contar con estricta seguridad a la hora de verificar las compreas realizadas en linea. No olvides revisar las promociones generadas y dejar tus opiniones en nuestras peliculas y contarnos tu experiencia en nuestras salas de cine.</p>
                            </div>
                            <div className="column_intro column_img">
                                <img className="img_intro" src="https://images.unsplash.com/photo-1576468699889-8b7db84d4ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="intro"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container_content">
                        <div className="row_feat_content">
                            <div className="column_feat">
                                <div className="column_left">
                                    <span className="img_content_feat">
                                        <img className="img_feature" src={require("../../resources/img/ayuda.png")} alt="ayuda"/>
                                    </span>
                                </div>
                                <div className="column_right">
                                    <h2>APOYO NACIONAL</h2>
                                    <p>Promovemos la industria cinematografica a nivel nacional resaltando siempre los proyectos audiovisuales creados en el pais.</p>
                                </div>
                            </div>
                            <div className="column_feat">
                                <div className="column_left">
                                    <span className="img_content_feat">
                                        <img className="img_feature" src={require("../../resources/img/tecnologia.png")} alt="tecnologia"/>
                                    </span>
                                </div>
                                <div className="column_right">
                                    <h2>ALTA TECNOLOGIA</h2>
                                    <p>Contamos con la mejor tecnologia global para proyeccion de cintas contando con camaras de punta e Imax full HD.</p>
                                </div>
                            </div>
                            <div className="column_feat">
                                <div className="column_left">
                                    <span className="img_content_feat">
                                        <img className="img_feature" src={require("../../resources/img/servicio.png")} alt="servicio"/>
                                    </span>
                                </div>
                                <div className="column_right">
                                    <h2>SERVICIO PERSONALIZADO</h2>
                                    <p>Nuestros empleados estan siempre dispuestos a otorgar el mejor servicio para que nuestros clientes sientan una agradable experiencia.</p>
                                </div>
                            </div>
                            <div className="column_feat">
                                <div className="column_left">
                                    <span className="img_content_feat">
                                        <img className="img_feature" src={require("../../resources/img/atencion.png")} alt="atencion"/>
                                    </span>
                                </div>
                                <div className="column_right">
                                    <h2>ATENCION PROFECIONAL</h2>
                                    <p>Nuestra linea de atencion resolvera cualquier inquietud, queja, reclao o sugerencia que tenga hacia nosotros brindando un soporte disponible en horarios de atencion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container_content">
                        <div className="tab_content">
                            <img className="img_content" src="https://images.unsplash.com/photo-1534949378632-3e4e87ec219f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="cine_inicio"/>
                            <h3>RESPONSABILIDAD CULTURAL</h3>
                            <p className="lead tab_lead">Aprovechamos el avance tecnologico para traer las peliculas mas relevantes a nivel mundial a las salas colombianas y con constante actualizacion con tendencias cinematograficas.</p>
                        </div>
                        <div className="tab_header">
                            <ul className="nav_bottom"> 
                                <li>Profecional</li>
                                <li>Alta Calidad</li>
                                <li>Proteccion en Compras</li>
                                <li>Altos Estandares</li>
                            </ul>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}