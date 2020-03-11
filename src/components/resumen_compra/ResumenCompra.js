import React, { Component } from 'react';
import HistoriaCompra from '../historial_compra/HistorialCompra';
import { Link } from 'react-router-dom';
import './ResumenCompra.css';

export default class ResumenCompra extends Component {
    render() {
        return (
            <div className="content">
                <div className="summary_content">
                    <div className="summary_header">
                        <h2>Resumen de Compra</h2>
                    </div>
                    <div className="summary_movie">
                        <h4>Pelicula</h4>
                        <p>Nombre de la pelicula</p>
                    </div>
                    <div className="summary_function">
                        <h4>Funcion</h4>
                        <p>Horario de la funcion</p>
                        <p>Tipo de Funcion</p>
                    </div>
                    <div className="summary_theater">
                        <h4>Teatro</h4>
                        <p>Nombre del Teatro</p>
                    </div>
                    <div className="summary_tickets">
                        <h4>Boletas</h4>
                        <div className="ticket_general_sumary">
                            <div className="ticket_name">
                                <p>Boletas General</p>
                            </div>
                            <div className="ticket_numbner">
                                <p>Numero de Boletas</p>
                            </div>
                            <div className="ticket_cost">
                                <p>$10.000</p>
                            </div>
                        </div>
                        <div className="ticket_vip_sumary">
                        <div className="ticket_name">
                                <p>Boletas Preferencial</p>
                            </div>
                            <div className="ticket_numbner">
                                <p>Numero de Boletas</p>
                            </div>
                            <div className="ticket_cost">
                                <p>$16.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="summary_chairs">
                        <h4>Asientos</h4>
                        <div className="chair_general_sumary">
                            <div className="chair_name">
                                <img src={require("../../resources/img/silla_roja.png")} alt="general_img"/>
                                <p>General</p>
                            </div>
                            <div className="chair_number">
                                <p>Numero Sillas</p>
                            </div>
                            <div className="chair_code">
                                <p>Codigo Sillas</p>
                            </div>
                        </div>
                        <div className="chair_vip_sumary">
                            <div className="chair_name">
                                <img src={require("../../resources/img/silla_vip_roja.png")} alt="vip_img"/>
                                <p>Preferencial</p>
                            </div>
                            <div className="chair_number">
                                <p>Numero Sillas</p>
                            </div>
                            <div className="chair_code">
                                <p>Codigo Sillas</p>
                            </div>
                        </div>
                    </div>
                    <div className="summary_food">
                        <h4>Comida</h4>
                        <div className="food_name">

                        </div>
                        <div className="food_cost">

                        </div>
                    </div>
                    <div className="summary_total">
                        <div className="total_title">
                            <h4>Total</h4>
                        </div>  
                        <div className="total_numer">
                            <h4>$10.000</h4>
                        </div> 
                    </div>
                    <div className="button_sumary_confirm">
                        <Link className="button_sumary_confirm_link" to="/FacturarCompra">
                            <button  className="btn_sumary_confirm">
                                Confirmar
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="buy_history">
                    <HistoriaCompra estado={4}/>
                </div>
            </div>
        )
    }
}
