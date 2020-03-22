import React, { Component } from 'react';
import './HistorialCompra.css';

export default class HistorialCompra extends Component {

    state = {
        fase_compra: this.props.estado
    }

    componentDidMount(){
        for(var i=1; i<=this.state.fase_compra; i++){
            document.getElementById('button_selection'+i).classList.toggle('active_button');
            document.getElementById('h'+i).style.color='#eea73b';
            document.getElementById('history_img'+i).src= require("../../resources/img/imagen_blanco"+i+".png")
            if(document.getElementById('border'+(i-1)))
                document.getElementById('border'+(i-1)).classList.toggle('border_active');
        }
    }

    render() {
        return (
            <div className="history_buy">
                <div className="history_header">
                    <h1>Estado de tu Compra</h1>
                </div>
                <div className="history_content">
                    <div className="section_history">
                        <button id="button_selection1" className="button_section">
                            <img id="history_img1" className="history_img" src={require("../../resources/img/boleto_gris.png")}  alt="ticket_img"/>
                        </button>
                        <h2 id="h1" >Compra de las Boletas</h2>
                        <div id="border1" className="border_history"></div>
                    </div>
                    <div className="section_history">
                        <button id="button_selection2" className="button_section">
                            <img id="history_img2" className="history_img" src={require("../../resources/img/silla_gris.png")}  alt="chair_h_img"/>
                        </button>
                        <h2 id="h2">Seleccion de Asientos</h2>
                        <div id="border2" className="border_history"></div>
                    </div>
                    <div className="section_history">
                        <button id="button_selection3" className="button_section">
                            <img id="history_img3" className="history_img" src={require("../../resources/img/comida_gris.png")}  alt="food_img"/>
                        </button>
                        <h2 id="h3">Seleccion de Comida</h2>
                        <div id="border3" className="border_history"></div>
                    </div>
                    <div className="section_history">
                        <button id="button_selection4" className="button_section">
                            <img id="history_img4" className="history_img" src={require("../../resources/img/resumen_gris.png")}  alt="abstract_img"/>
                        </button>
                        <h2 id="h4">Resumen de Compra</h2>
                        <div id="border4" className="border_history"></div>
                    </div>
                    <div className="section_history">
                        <button id="button_selection5" className="button_section">
                            <img id="history_img5" className="history_img" src={require("../../resources/img/compra_gris.png")}  alt="buy_h_img"/>
                        </button>
                        <h2 id="h5">Seleccion de Targeta</h2>
                        
                    </div>
                </div>
            </div>
        )
    }
}
