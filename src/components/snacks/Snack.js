import React, { Component } from 'react';
import './Snack.css';

export default class Snack extends Component {


    state = {
        price:1000,
        num_snack: 0,
        total:0
    }

    updateTotal = async () =>{
        await this.setState({total: (this.state.num_snack*this.props.snack.i_precio)})
        
    }
    
    downsnack = async () =>{
        if(this.state.num_snack > 0){
            await this.setState({num_snack: this.state.num_snack-1})
            this.updateTotal()
            this.props.actualizar_pago(this.props.snack.i_precio*-1)
            this.props.actualizar_puntos(this.props.snack.i_puntosofrecidos*-1)
            this.props.actualizarSnacksEscogidos("deseleccion", this.props.snack)
        }     
    }

    upsnack = async () =>{
        if(this.state.num_snack < this.props.snack.i_cantidad){
            await this.setState({num_snack: this.state.num_snack+1})
            this.updateTotal()
            this.props.actualizar_pago(this.props.snack.i_precio)
            this.props.actualizar_puntos(this.props.snack.i_puntosofrecidos)
            this.props.actualizarSnacksEscogidos("seleccion", this.props.snack)
        }
    }

    selectImage = () =>{
        if(this.props.snack.v_tipo ==='Bebida'){
            return(
                require("../../resources/img/soda.png")
            )
        }
        else if(this.props.snack.v_tipo ==='Comida Rapida' && this.props.snack.v_nombre.indexOf('Perro') !== -1){
            return(
                require("../../resources/img/hotdog.png")
            )
        }
        else{
            return(
                require("../../resources/img/hamburguer.png")
            )
        }
    }

    render() {
        return (
            <div className="desc_snack">
                <div className="card">
                <img className="img_snack" src={this.selectImage()} alt="snack_image" />
                    <div className="snack_cover">
                        <div className="snack_att"> 
                            <img className="img_cover" src={require("../../resources/img/peso.png")} alt="snack_image" />
                            <p>${this.props.snack.i_precio}</p>
                        </div>
                        <div className="snack_att">
                            <img className="img_cover" src={require("../../resources/img/puntos.png")} alt="snack_image" />
                            <p>{this.props.snack.i_puntosofrecidos} Puntos</p>
                        </div>
                    </div>
                </div>
                <div className="card_body">
                    <p className="card_name">{this.props.snack.v_nombre}</p>
                    <div className="card_B">
                        <div className="Precio">
                            <p>Precio:</p>
                            <p>${this.props.snack.i_precio}</p>
                        </div>
                        <div className="snack_panel">
                            <button className="less" onClick={this.downsnack}>
                                <img className="btn_num_tick_img" src={require("../../resources/img/menos.png")}  alt="menos_img"/>
                            </button>
                            <p>{this.state.num_snack}</p>
                            <button className="more" onClick={this.upsnack}>
                                <img className="btn_num_tick_img" src={require("../../resources/img/mas.png")}  alt="mas_img"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="snack_cant">
                    <h2>Total a Pagar</h2>
                    <h4>Valor:</h4>
                    <p>${this.state.total}</p>
                </div> 
            </div>
        )
    }
}
