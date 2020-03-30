import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Snack from './Snack';
import HistoriaCompra from '../historial_compra/HistorialCompra';
import './Snacks.css';
import './Snack.js';
export default class Snacks extends Component {
    state = {
        sumaTotal:0,
        puntosTotal:0,
        snaksSeleccionados: []
    }
    
    async componentDidMount () {
        var snaksSeleccionados= []
        this.props.list_snakcs.data.map(snack =>{
            snack.numero= 0
            snaksSeleccionados.push(snack)
            return null
        })
        this.setState({snaksSeleccionados: snaksSeleccionados})
    }

    actualizar_pago = async (total_snack) =>{
        await this.setState({sumaTotal:  this.state.sumaTotal+total_snack})
    }

    actualizar_puntos = async (total_snack) =>{
        await this.setState({puntosTotal:  this.state.puntosTotal+total_snack})
    }

    actualizarSnacksEscogidos= async(accion, snack) =>{
        if(accion==="seleccion"){
            await this.setState(state => {
                const snaksSeleccionados = state.snaksSeleccionados.map((item) => {
                  if (item.id === snack.id) {
                        item.numero = item.numero + 1
                    return item;
                  } else {
                    return item;
                  }
                });
                return {
                    snaksSeleccionados,
                };
            });
        }
        else if (accion==="deseleccion"){
            await this.setState(state => {
                const snaksSeleccionados = state.snaksSeleccionados.map((item) => {
                  if (item.id === snack.id) {
                        item.numero = item.numero - 1
                    return item;
                  } else {
                    return item;
                  }
                });
                return {
                    snaksSeleccionados,
                };
            });
        }
    }

    enviarSnaks = async () =>{
        var objSnaks= {
            sumaTotal: this.state.sumaTotal,
            puntosTotal:this.state.puntosTotal,
            snaksSeleccionados: this.state.snaksSeleccionados
        }
        this.props.reservarSnaks(objSnaks)
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
                        actualizarSnacksEscogidos={this.actualizarSnacksEscogidos}
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
                            <button className="buttn" onClick={this.enviarSnaks}>Continuar</button>
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
 