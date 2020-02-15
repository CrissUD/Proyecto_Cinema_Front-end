import React, { Component } from 'react'
import './Caracteristicas.css'

export default class Caracteristicas extends Component {
    render() {
        return (
            <div className="main_features">
                <div className="container_features">
                    <div className="row_features">
                        <div className="columna_fearures">
                            <img className="img_feature" src="https://img.icons8.com/officel/80/000000/longitude.png" alt="mundo"/>
                            <h3>Servicios Globales</h3>
                        </div>
                        <div className="columna_fearures">
                            <img className="img_feature" src="https://img.icons8.com/officel/80/000000/available-updates.png" alt="actualizacion"/>
                            <h3>Actualizacion</h3>
                        </div>
                        <div className="columna_fearures">
                            <img className="img_feature" src="https://img.icons8.com/ultraviolet/80/000000/security-checked.png" alt="seguridad"/>
                            <h3>Seguridad</h3>
                        </div>
                        <div className="columna_fearures col_fin">
                            <img className="img_feature" src="https://img.icons8.com/office/80/000000/clapperboard.png" alt="peliculas"/>
                            <h3>Proyeccion</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}