import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Horario.css'

export default class Horario extends Component {
    render() {
        return (
            <div className="schedule">
                <Link className="btn_schedule" to="/CompraBoletas">
                    <button className="button_shedule">
                        <p>{'10:00 AM'}</p>
                    </button>
                </Link>
            </div>
        )
    }
}
