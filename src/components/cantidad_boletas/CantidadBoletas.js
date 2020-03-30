import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HistoriaCompra from '../historial_compra/HistorialCompra'
import './CantidadBoletas.css';

export default class CantidadBoletas extends Component {

    state = {
        num_chair_general: 0,
        num_chair_vip: 0,
        putnos: 0,
        total:0,
        sDisponiblesGeneral: [],
        sDisponiblesPreferencial: []
    }

    updateTotal = async () =>{
        await this.setState({total: (this.state.num_chair_general*10000)+(this.state.num_chair_vip*16000)})
        await this.setState({putnos: (this.state.num_chair_general*5)+(this.state.num_chair_vip*8)})
        this.mostrarBoton()
    }
    
    downChairGeneral = async () =>{
        if(this.state.num_chair_general > 0)
            await this.setState({num_chair_general: this.state.num_chair_general-1})
        this.updateTotal()
    }

    upChairGeneral = async () =>{
        if(this.state.num_chair_general < this.state.sDisponiblesGeneral.length)
            await this.setState({num_chair_general: this.state.num_chair_general+1})
        this.updateTotal()
    }

    downChairVip = async () =>{
        if(this.state.num_chair_vip > 0)
            await this.setState({num_chair_vip: this.state.num_chair_vip-1})
        this.updateTotal()
    }

    upChairVip = async () =>{
        if(this.state.num_chair_vip < this.state.sDisponiblesPreferencial.length)
            await this.setState({num_chair_vip: this.state.num_chair_vip+1})
        this.updateTotal()
    }

    async componentDidMount(){
        this.props.objReserva.disponibles.map(async silla =>{
            if(silla.v_tipo === "general"){
                await this.setState(state => {
                    const sDisponiblesGeneral = [...state.sDisponiblesGeneral, silla];
                    return {
                        sDisponiblesGeneral
                    };
                });
            }
            else if(silla.v_tipo === "preferencial"){
                await this.setState(state => {
                    const sDisponiblesPreferencial = [...state.sDisponiblesPreferencial, silla];
                    return {
                        sDisponiblesPreferencial
                    };
                });
            }
        })
    }

    mostrarBoton = () =>{
        console.log('mBoton')
        if(this.state.total === 0)
            document.getElementById('buy_btn').style.opacity= 0
        else
            document.getElementById('buy_btn').style.opacity= 1
    }

    enviarDatosBoletas = () =>{
        var obj={
            boletasGeneral: this.state.num_chair_general,
            boletasVip: this.state.num_chair_vip,
            total: this.state.total,
            puntos: this.state.putnos
        }
        this.props.recibirCantidadBoletas(obj)
    }

    render() {
        return (
            <div className="content"> 
                <div className="buy_tickets">
                    <div className="tickets_header">
                        <h1>Compra de Boletas</h1>
                    </div>
                    <div className="tickets_content">
                        <div className="tickets_title">
                            <h1>Elija la cantidad de boletas que desea Comprar</h1>
                        </div>
                        <div className="chair_general">
                            <input id="item1" type="checkbox" value="general"/>
                            <label htmlFor="item1" className="btn_tickets">
                                <div className="title_chair">
                                    SILLA GENERAL
                                </div>
                                <div className="img_down">
                                    <img className="down_img" src={require("../../resources/img/abajo.png")}  alt="abajo_img"/>
                                </div> 
                            </label>    
                            <div className="chair_content">
                                <div className="chair_panel chair_info">
                                    <img src="https://img.icons8.com/officel/40/000000/theatre-seat.png" alt="general_img"/>
                                    <h3>General</h3>
                                </div>
                                <div className="chair_panel chair_price">
                                    <h2>Boleta General</h2>
                                    <h4>Valor:</h4>
                                    <p>$10.000</p>
                                </div>
                                <div className="chair_panel chair_num_chose">
                                    <button className="less" onClick={this.downChairGeneral}>
                                        <img className="btn_num_tick_img" src={require("../../resources/img/menos.png")}  alt="menos_img"/>
                                    </button>
                                        <p>{this.state.num_chair_general}</p>
                                    <button className="more" onClick={this.upChairGeneral}>
                                        <img className="btn_num_tick_img" src={require("../../resources/img/mas.png")}  alt="mas_img"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="chair_vip">
                            <input id="item2" type="checkbox" value="vip"/>
                            <label htmlFor="item2" className="btn_tickets">
                                <div className="title_chair">
                                    SILLA PREFERENCIAL
                                </div>
                                <div className="img_down">
                                    <img className="down_img" src={require("../../resources/img/abajo.png")}  alt="abajo_img"/>
                                </div> 
                            </label> 
                            <div className="chair_content">
                                <div className="chair_panel chair_info">
                                    <img src="https://img.icons8.com/dusk/64/000000/armchair.png" alt="vip_img"/>
                                    <h3>Preferencial</h3>
                                </div>
                                <div className="chair_panel chair_price">
                                    <h2>Boleta Preferencial</h2>
                                    <h4>Valor:</h4>
                                    <p>$16.000</p>
                                </div>
                                <div className="chair_panel chair_num_chose">
                                    <button className="less" onClick={this.downChairVip}>
                                        <img className="btn_num_tick_img" src={require("../../resources/img/menos.png")}  alt="menos_img"/>
                                    </button>
                                    <p>{this.state.num_chair_vip}</p>
                                    <button className="more" onClick={this.upChairVip}>
                                        <img className="btn_num_tick_img" src={require("../../resources/img/mas.png")}  alt="mas_img"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="tickets_total">
                            <label className="btn_tickets_total">
                                <img className="buy_img" src={require("../../resources/img/compra.png")}  alt="buy_img"/>
                                    TOTAL COMPRA BOLETAS
                            </label> 
                            <div className="chair_content_total">
                                <div className="chair_panel chair_info">
                                    <h2>Boletas General</h2>
                                    <h4>Cantidad:</h4>
                                    <p>{this.state.num_chair_general}</p>
                                </div>
                                <div className="chair_panel chair_price">
                                    <h2>Boletas Preferencial</h2>
                                    <h4>Cantidad:</h4>
                                    <p>{this.state.num_chair_vip}</p>
                                </div>
                                <div className="chair_panel chair_num_chose">
                                    <h2>Total a Pagar</h2>
                                    <h4>Valor:</h4>
                                    <p>${this.state.total}</p>
                                </div>
                                <div className="chair_panel chair_num_chose2">
                                    <h2>Total Puntos</h2>
                                    <p>{this.state.putnos}</p>
                                </div>
                            </div>
                        </div>
                        <div className="button_buy">
                            <Link className="btn_buy" to="/EscogerAsientos">
                                <button id="buy_btn" className="buy_btn" onClick={this.enviarDatosBoletas}>
                                    Confirmar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="buy_history">
                    <HistoriaCompra estado={1}/>
                </div>
            </div>
        )
    }
}
