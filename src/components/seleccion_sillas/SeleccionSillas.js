import React, { Component } from 'react';
import HistoriaCompra from '../historial_compra/HistorialCompra';
import { Link } from 'react-router-dom';
import Silla from './Silla'
import './SeleccionSillas.css';

export default class SeleccionSillas extends Component {

    state = {
        sillas_vip: ['F0','F1','F2','F3','F4','F5','F6','F7','F8','F9',
                     'E0','E1','E2','E3','E4','E5','E6','E7','E8','E9'],

        sillas_general: ['D0','D1','D2','D3','D4','D5','D6','D7','D8','D9',
                         'C0','C1','C2','C3','C4','C5','C6','C7','C8','C9',
                         'B0','B1','B2','B3','B4','B5','B6','B7','B8','B9',
                         'A0','A1','A2','A3','A4','A5','A6','A7','A8','A9']
    }


    mostrarSillas = () =>{
        return(
            <div className="charis_position">
                {this.state.sillas_vip.map(chair => (
                    <Silla 
                        key={chair}
                        tipo_silla={'preferencial'} 
                        estado_silla={'disponible'} 
                        url_silla={require("../../resources/img/silla_vip_blanca.png")}
                        codigo_silla={chair}
                    />
                ))}
                <div className="separator"/>
                {this.state.sillas_general.map(chair => (
                    <Silla 
                        key={chair}
                        tipo_silla={'general'} 
                        estado_silla={'disponible'}
                        url_silla={require("../../resources/img/silla_blanca.png")}
                        codigo_silla={chair}
                    />
                ))}

            </div>
        )   
    }

    render() {
        return (
            <div className="content">
                <div className="chairs_selection">
                    <div className="tickets_header">
                            <h1>Seleccion de sillas</h1>
                    </div>
                    <div className="chairs_selection_header">
                        <div className="tickets_title">
                            <h1>Elija los asientos correspondientes a sus boletas</h1>
                        </div>
                    </div>
                    <div className="chairs_selection_content">
                        <div className="panel_chairs">
                            {this.mostrarSillas()}
                            <div className="screen">
                               <p>PANTALLA</p>
                            </div>
                        </div>
                    </div>
                    <div className="chairs_convention">
                        <div className="chair_convention_panel">
                            <div className="chair_convention_general">
                                <div className="chair_convention_content_img">
                                    <img className="chair_img_conv"  src={require("../../resources/img/silla_blanca.png")} 
                                    alt="chair_img"/>
                                </div>
                                <div className="chair_convention_content_text">
                                    <h3>Asiento general disponible</h3>
                                </div>
                            </div>
                            <div className="chair_convention_vip">
                                <div className="chair_convention_content_img">
                                    <img className="chair_img_conv"  src={require("../../resources/img/silla_vip_blanca.png")} alt="chair_img"/>
                                </div>
                                <div className="chair_convention_content_text">
                                    <h3>Asiento preferencial disponible</h3>
                                </div>
                            </div>
                        </div>
                        <div className="chair_convention_panel">
                            <div className="chair_convention_general">
                                <div className="chair_convention_content_img">
                                    <img  className="chair_img_conv"  src={require("../../resources/img/silla_verde.png")} alt="chair_img"/>
                                </div>
                                <div className="chair_convention_content_text">
                                    <h3>Asiento general seleccionado</h3>
                                </div>
                            </div>
                            <div className="chair_convention_vip">
                                <div className="chair_convention_content_img">
                                    <img className="chair_img_conv"  src={require("../../resources/img/silla_vip_verde.png")} alt="chair_img"/>
                                </div>
                                <div className="chair_convention_content_text">
                                    <h3>Asiento preferencial seleccionado</h3>
                                </div>
                            </div>
                        </div>
                        <div className="chair_convention_panel">
                            <div className="chair_convention_general">
                                <div className="chair_convention_content_img">
                                    <img  className="chair_img_conv"  src={require("../../resources/img/silla_roja.png")} alt="chair_img"/>
                                </div>
                                <div className="chair_convention_content_text">
                                    <h3>Asiento general ocupado</h3>
                                </div>
                            </div>
                            <div className="chair_convention_vip">
                                <div className="chair_convention_content_img">
                                    <img  className="chair_img_conv"  src={require("../../resources/img/silla_vip_roja.png")} alt="chair_img"/>
                                </div>
                                <div className="chair_convention_content_text">
                                    <h3>Asiento preferencial ocupado</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button_chair_confirm">
                        <Link className="button_chair_confirm_link" to="/ResumenCompra">
                            <button  className="btn_chair_confirm">
                                Confirmar
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="buy_history">
                    <HistoriaCompra estado={2}/>
                </div>
            </div>
        )
    }
}
