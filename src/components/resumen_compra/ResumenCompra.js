import React, { Component } from 'react';
import HistoriaCompra from '../historial_compra/HistorialCompra';
import { Link } from 'react-router-dom';
import './ResumenCompra.css';

export default class ResumenCompra extends Component {

    confirmarReserva= () =>{
        this.props.confirmarReserva()
    }

    render() {
        return (
            <div className="content">
                <div className="summary_content">
                    <div className="summary_header">
                        <h2>Resumen de Compra</h2>
                    </div>
                    <div className="summary_person">
                        <h4>Cliente</h4>
                        <h5>Numero de Cedula:</h5>
                        <p>{this.props.persona.data.pk_numero_identificacion}</p>
                        <h5>Nombre Cliente:</h5>
                        <p>{this.props.persona.data.v_primernombre + " " + this.props.persona.data.v_segundonombre + " " +this.props.persona.data.v_primerapellido + " " +this.props.persona.data.v_segundoapellido}</p>
                    </div>
                    <div className="summary_movie">
                        <h4>Pelicula</h4>
                        <h5>Nombre de Pelicula:</h5>
                        <p>{this.props.objPreReserva.pelicula}</p>
                        <h5>Genero de Pelicula:</h5>
                        <p>{this.props.pelicula.v_genero}</p>
                        <h5>Clasificacion de Pelicula:</h5>
                        <p>{this.props.pelicula.v_clasificacion}</p>
                    </div>
                    <div className="summary_function">
                        <h4>Funcion</h4>
                        <h5>Fecha de Funcion:</h5>
                        <p>{this.props.objPreReserva.fecha}</p>
                        <h5>Hora de Funcion:</h5>
                        <p>{this.props.objPreReserva.hora}</p>
                        <h5>Tipo de proyeccion de Funcion:</h5>
                        <p>{this.props.objPreReserva.proyeccion}</p>
                    </div>
                    <div className="summary_theater">
                        <h4>Teatro</h4>
                        <h5>Nombre de Multiplex:</h5>
                        <p>{this.props.objPreReserva.teatro}</p>
                        <h4>Sala</h4>
                        <h5>Numero de Sala:</h5>
                        <p>{this.props.objPreReserva.numSala}</p>
                    </div>
                    <div className="summary_tickets">
                        <h4>Boletas</h4>
                        <div className="ticket_general_sumary">
                            <div className="ticket_name">
                                <h5>Tipo de Boletas</h5>
                                <p>Boletas General</p>
                            </div>
                            <div className="ticket_numbner">
                                <h5>Numero de Boletas</h5>
                                <p>{this.props.objBoletas.boletasGeneral}</p>
                            </div>
                            <div className="ticket_points">
                                <h5>Puntos de Boletas</h5>
                                <p>{this.props.objBoletas.boletasGeneral*5}</p>
                            </div>
                            <div className="ticket_cost">
                                <h5>Costo de Boletas</h5>
                                <p>${this.props.objBoletas.boletasGeneral*10000}</p>
                            </div>
                        </div>
                        <div className="ticket_vip_sumary">
                            <div className="ticket_name">
                                <p>Boletas Preferencial</p>
                            </div>
                            <div className="ticket_numbner">
                                <p>{this.props.objBoletas.boletasVip}</p>
                            </div>
                            <div className="ticket_points">
                                <p>{this.props.objBoletas.boletasVip*8}</p>
                            </div>
                            <div className="ticket_cost">
                                <p>${this.props.objBoletas.boletasVip*16000}</p>
                            </div>
                        </div>
                        <div className="ticket_total">
                            <div className="ticket_points_total">
                                <h4>Puntos</h4>
                                <p>{this.props.objBoletas.puntos}</p>
                            </div>
                            <div className="ticket_cost_total">
                                <h4>Total</h4>
                                <p>${this.props.objBoletas.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="summary_chairs">
                        <h4>Asientos</h4>
                        <div className="chair_general_sumary">
                            <div className="chair_name">
                                <h5>Tipo de Asientos</h5>
                                <img src={require("../../resources/img/silla_roja.png")} alt="general_img"/>
                                <p>General</p>
                            </div>
                            <div className="chair_number">
                                <h5>Numero de Asientos</h5>
                                <p>{this.props.objSillas.numeroGeneral}</p>
                            </div>
                            <div className="chair_code">
                                <h5>Codigo de Asientos</h5>
                                <p>{this.props.objSillas.sSeleccionadas.map(silla => {
                                    if(silla.v_tipo === "general"){
                                        return silla.pk_numero + ","
                                    }
                                    else{
                                        return null
                                    }
                                })}</p>
                            </div>
                        </div>
                        <div className="chair_vip_sumary">
                            <div className="chair_name">
                                <img src={require("../../resources/img/silla_vip_roja.png")} alt="vip_img"/>
                                <p>Preferencial</p>
                            </div>
                            <div className="chair_number">
                                <p>{this.props.objSillas.numeroPreferencial}</p>
                            </div>
                            <div className="chair_code">
                                <p>{this.props.objSillas.sSeleccionadas.map(silla => {
                                    if(silla.v_tipo === "preferencial"){
                                        return silla.pk_numero + ","
                                    }
                                    else{
                                        return null
                                    }
                                })}</p>
                            </div>
                        </div>
                    </div>
                    <div className="summary_food">
                        <h4>Comida</h4>
                        <div className="food_name">
                            <h5>Nombre Snaks comprados</h5>
                            {this.props.objSnacks.snaksSeleccionados.map(snack => {
                                if(snack.numero > 0){
                                    return (<p key={snack.id}>{snack.v_nombre}</p>)
                                }
                                else{
                                    return null
                                }
                            })}
                        </div>
                        <div className="food_cant">
                            <h5>Cantidad Snaks comprados</h5>
                            {this.props.objSnacks.snaksSeleccionados.map(snack => {
                                if(snack.numero > 0){
                                    return (<p key={snack.id}>{snack.numero}</p>)
                                }
                                else{
                                    return null
                                }
                            })}
                        </div>
                        <div className="food_points">
                            <h5>Puntos Snaks comprados</h5>
                            {this.props.objSnacks.snaksSeleccionados.map(snack => {
                                if(snack.numero > 0){
                                    return (<p key={snack.id}>{snack.i_puntosofrecidos*snack.numero}</p>)
                                }
                                else{
                                    return null
                                }
                            })}
                        </div>
                        <div className="food_cost">
                            <h5>Costo Snaks comprados</h5>
                            {this.props.objSnacks.snaksSeleccionados.map(snack => {
                                if(snack.numero > 0){
                                    return (<p key={snack.id}>${snack.i_precio}</p>)
                                }
                                else{
                                    return null
                                }
                            })}
                        </div>
                        <div className="ticket_total">
                            <div className="ticket_points_total">
                                <h4>Puntos</h4>
                                <p>{this.props.objSnacks.puntosTotal}</p>
                            </div>
                            <div className="ticket_cost_total">
                                <h4>Total</h4>
                                <p>${this.props.objSnacks.sumaTotal}</p>
                            </div>
                        </div>
                    </div>
                    <div className="summary_total">
                        <div className="total_title">
                            <h4>Total</h4>
                        </div>  
                        <div className="total_numer">
                            <h4>${this.props.objBoletas.total + this.props.objSnacks.sumaTotal}</h4>
                        </div> 
                    </div>
                    <div className="summary_total">
                        <div className="total_title">
                            <h4>Puntos</h4>
                        </div>  
                        <div className="total_numer">
                            <h4>{this.props.objBoletas.puntos + this.props.objSnacks.puntosTotal}</h4>
                        </div> 
                    </div>
                    <div className="button_sumary_confirm">
                        <Link className="button_sumary_confirm_link" to="/Inicio" onClick={this.confirmarReserva}>
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
