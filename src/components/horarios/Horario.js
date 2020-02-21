import React, { Component } from 'react';
import './Horario.css';

export default class Horario extends Component {

    movePanelConfirmation = () =>{
        this.props.panel.current.classList.toggle('active');
        this.props.panelBackground.current.classList.toggle('active');
    }

    render() {
        return (
            <div className="schedule">
                    <button className="button_shedule" onClick={this.movePanelConfirmation}>
                        <p>{'10:00 AM'}</p>
                    </button>
            </div>
        )
    }
}
