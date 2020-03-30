import React, { Component } from 'react';
import './Horario.css';

export default class Horario extends Component {

    movePanelConfirmation = () =>{
        this.props.panel.current.classList.toggle('active');
        this.props.panelBackground.current.classList.toggle('active');
        this.props.recibirHoraTeatro(this.props.hora, this.props.teatro, this.props.proyeccion, this.props.idFuncion, this.props.idSala, this.props.numSala, this.props.fun_sala)
    }

    render() {
        return (
            <div className="schedule">
                    <button className="button_shedule" onClick={this.movePanelConfirmation}>
                        <p>{this.props.hora}</p>
                    </button>
            </div>
        )
    }
}
