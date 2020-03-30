import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PanelConfirmacion.css'

export default class PanelConfirmacion extends Component {

    movePanelConfirmation = () =>{
        document.getElementById('panel_confirmation').classList.toggle('active');
        document.getElementById('panel_background').classList.toggle('active');
    }

    showAlert = (event) =>{
        event.preventDefault();
        alert('necesita ingresar con usuario para continuar')
    }

    enviarDatos = (event) =>{
        var objPreReserva= 
        {
            pelicula: this.props.pelicula,
            fecha: this.props.fecha,
            hora: this.props.hora,
            teatro: this.props.teatro,
            funcion: this.props.funcion,
            proyeccion: this.props.proyeccion,
            sala: this.props.sala,
            numSala: this.props.numSala,
            fun_sala: this.props.fun_sala
        }
        this.props.consultarDisponibilidad(objPreReserva)
    }

    render() {
        return (
            <div className="panel_complete">
                <div ref={this.props.panelBackground}  id="panel_background" className="panel_background">

                </div>
                <div ref={this.props.panel} id="panel_confirmation" className="panel_confirmation">
                    <div className="info_confirmations bpanel">
                        <h1>{this.props.teatro}</h1>
                        <h3>{this.props.pelicula}</h3>
                        <h5>{this.props.proyeccion}</h5>
                    </div>
                    <div className="info_confirmations bpanel">
                        <h1>{this.props.fecha}</h1>
                        <h3>Horario Seleccionado</h3>
                        <h5>{this.props.hora}</h5>
                    </div>
                    <div className="info_confirmations">
                        {this.props.login ? 
                            (<Link className="btn_confirmation" to="/CompraBoletas">
                                <button className="button_confirmation" onClick={this.enviarDatos}>
                                    Confirmar
                                </button>
                            </Link>):
                            (<button className="button_confirmation" onClick={this.showAlert}>
                                Confirmar
                            </button>)
                        }
                        <button className="button_cancel" onClick={this.movePanelConfirmation}>
                                Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
