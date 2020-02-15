import React, { Component } from 'react'
import Banner from './Banner'
import Caracteristicas from './Caracteristicas'
import Contenido from './Contenido'

export default class Inicio extends Component {
    render() {
        return (
            <div className="inicio">
                <Banner/>
                <Caracteristicas/>
                <Contenido/>
            </div>
        )
    }
}
