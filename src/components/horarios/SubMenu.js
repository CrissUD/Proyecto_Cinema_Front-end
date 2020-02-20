import React, { Component } from 'react';
import Horario from './Horario'
import './SubMenu.css'

export default class Horarios extends Component {
    render() {
        return (
            <div className="schedule_sub_menu">
                <div className="time_movie">
                    <h2>2D Doblada</h2>
                    <div className="date_times_values"> 
                        <Horario />
                        <Horario />
                        <Horario/>
                        <Horario/>
                    </div>
                </div>
                <div className="time_movie">
                    <h2>2D Subtitulada</h2>
                    <div className="date_times_values"> 
                        <Horario/>
                        <Horario/>
                    </div>
                </div>
                <div className="time_movie">
                    <h2>3D Doblada</h2>
                    <div className="date_times_values"> 
                        <Horario/>
                        <Horario/>
                        <Horario/>
                    </div>
                </div>
                <div className="time_movie">
                    <h2>3D Subtitulada</h2>
                    <div className="date_times_values"> 
                        <Horario/>
                    </div>
                </div>
            </div>
        )
    }
}
