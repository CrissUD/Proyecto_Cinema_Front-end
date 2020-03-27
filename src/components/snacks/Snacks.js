import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Snack from './Snack';
import HistoriaCompra from '../historial_compra/HistorialCompra';
import './Snacks.css';
import './Snack.js';
export default class Snacks extends Component {
    state = {
        sumaTotal:0,
        puntosTotal:0
    }

    actualizar_pago = async (total_snack) =>{
        this.setState({sumaTotal:  this.state.sumaTotal+total_snack})
    }

    actualizar_puntos = async (total_snack) =>{
        this.setState({puntosTotal:  this.state.puntosTotal+total_snack})
    }
    
    mostrarSnacks = () =>{
        return(
            <div className="cartel_snacks">
                {this.props.list_snakcs.data.map(snacks => (
                    <Snack
                        key={snacks.id}
                        snack={snacks}
                        actualizar_pago={this.actualizar_pago}
                        actualizar_puntos={this.actualizar_puntos}
                    />
                ))}
                <div className="snacks_total_valor">
                    <h2>Total a Pagar</h2>
                    <h4>Valor:</h4>
                    <p>${this.state.sumaTotal}</p>
                </div>
                <div className="snacks_total_puntos">
                    <h2>Total Puntos</h2>
                    <h4>Puntos:</h4>
                    <p>{this.state.puntosTotal}</p>
                </div>
            </div>
        )   
    }

    

    render() {
        return (
            <div className="content">
                <div className="snack_select">
                    <div className="header_billboard">
                        <h1>Snacks CineDistrito</h1>
                    </div>
                    {this.mostrarSnacks()}
                    <div>
                        <Link className="linqueo" to="/ResumenCompra">
                            <button className="buttn">Continuar</button>
                        </Link>
                    </div>
                </div>
                <div className="buy_history">
                    <HistoriaCompra estado={3}/>
                </div>
            </div>
        )
    }

}
 