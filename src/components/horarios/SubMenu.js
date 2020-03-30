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
                        {
                            this.props.funciones.map(funcion =>{
                                if(funcion.v_tipo_proyeccion === "2D Doblada"){
                                    return(
                                        <Horario 
                                            key={funcion.id}
                                            hora={funcion.t_inicioproyeccion}
                                            recibirHoraTeatro={this.props.recibirHoraTeatro}
                                            teatro={this.props.teatro}
                                            proyeccion={"2D Doblada"}
                                            idFuncion={funcion.fk_funcion}
                                            idSala={funcion.fk_sala}
                                            numSala={funcion.i_numsala}
                                            fun_sala={funcion.id}
                                            panel={this.props.panel} 
                                            panelBackground={this.props.panelBackground}
                                        />
                                    )
                                } 
                                else {
                                    return (null)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="time_movie">
                    <h2>2D Subtitulada</h2>
                    <div className="date_times_values"> 
                        {
                            this.props.funciones.map(funcion =>{
                                if(funcion.v_tipo_proyeccion === "2D Subtitulada"){
                                    return(
                                        <Horario 
                                            key={funcion.id}
                                            hora={funcion.t_inicioproyeccion}
                                            recibirHoraTeatro={this.props.recibirHoraTeatro}
                                            teatro={this.props.teatro}
                                            proyeccion={"2D Subtitulada"}
                                            idFuncion={funcion.fk_funcion}
                                            idSala={funcion.fk_sala}
                                            numSala={funcion.i_numsala}
                                            fun_sala={funcion.id}
                                            panel={this.props.panel} 
                                            panelBackground={this.props.panelBackground}
                                        />
                                    )
                                }
                                else {
                                    return (null)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="time_movie">
                    <h2>3D Doblada</h2>
                    <div className="date_times_values"> 
                        {
                            this.props.funciones.map(funcion =>{
                                if(funcion.v_tipo_proyeccion === "3D Doblada"){
                                    return(
                                        <Horario 
                                            key={funcion.id}
                                            hora={funcion.t_inicioproyeccion}
                                            recibirHoraTeatro={this.props.recibirHoraTeatro}
                                            teatro={this.props.teatro}
                                            proyeccion={"3D Doblada"}
                                            idFuncion={funcion.fk_funcion}
                                            idSala={funcion.fk_sala}
                                            numSala={funcion.i_numsala}
                                            fun_sala={funcion.id}
                                            panel={this.props.panel} 
                                            panelBackground={this.props.panelBackground}
                                        />
                                    )
                                }
                                else {
                                    return (null)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="time_movie">
                    <h2>3D Subtitulada</h2>
                    <div className="date_times_values"> 
                        {
                            this.props.funciones.map(funcion =>{
                                if(funcion.v_tipo_proyeccion === "3D Subtitulada"){
                                    return(
                                        <Horario 
                                            key={funcion.id}
                                            hora={funcion.t_inicioproyeccion}
                                            recibirHoraTeatro={this.props.recibirHoraTeatro}
                                            teatro={this.props.teatro}
                                            proyeccion={"3D Subtitulada"}
                                            idFuncion={funcion.fk_funcion}
                                            idSala={funcion.fk_sala}
                                            numSala={funcion.i_numsala}
                                            fun_sala={funcion.id}
                                            panel={this.props.panel} 
                                            panelBackground={this.props.panelBackground}
                                        />
                                    )
                                }
                                else {
                                    return (null)
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
