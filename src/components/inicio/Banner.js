import React, { Component } from 'react'
import './Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="banner_content">
                    <h1>UNA EXPERIENCIA CULTURAL ALTERNATIVA</h1>
                    <p>Mira las mejores peliculas con la mejor calidad en nuestras salas</p>
                    <button type="button" className="button_banner">
                        Explorar
                    </button>
                </div>
            </div>
        )
    }
}
