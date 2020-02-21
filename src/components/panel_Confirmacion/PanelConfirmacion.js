import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './PanelConfirmacion.css'

export default class PanelConfirmacion extends Component {

    movePanelConfirmation = () =>{
        document.getElementById('panel_confirmation').classList.toggle('active');
        document.getElementById('panel_background').classList.toggle('active');
    }

    render() {
        return (
            <div className="panel_complete">
                <div ref={this.props.panelBackground}  id="panel_background" className="panel_background">

                </div>
                <div ref={this.props.panel} id="panel_confirmation" className="panel_confirmation">
                    <div className="info_confirmations bpanel">
                        <h1>Gran Estacion</h1>
                        <h3>Aves de Presa</h3>
                        <h5>2D - Doblada</h5>
                    </div>
                    <div className="info_confirmations bpanel">
                        <h1>{moment().format('LL')}</h1>
                        <h3>Horario Seleccionado</h3>
                        <h5>10:00 AM</h5>
                    </div>
                    <div className="info_confirmations">
                        <Link className="btn_confirmation" to="/CompraBoletas">
                            <button className="button_confirmation">
                                Confirmar
                            </button>
                        </Link>
                        <button className="button_cancel" onClick={this.movePanelConfirmation}>
                                Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
