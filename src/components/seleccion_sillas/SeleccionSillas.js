import React, { Component } from 'react';
import HistoriaCompra from '../historial_compra/HistorialCompra';
import { Link } from 'react-router-dom';
import Silla from './Silla'
import './SeleccionSillas.css';

export default class SeleccionSillas extends Component {

    state = {
        sPreferencial: [],
        sGeneral: [],
        sSeleccionadas: [],
        preferencial: true,
        general: true,
        numeroGeneral:0,
        numeroPreferencial:0,
        paso: false
    }

    async componentDidMount(){
        var sPreferencial= []
        var sGeneral = []
        this.props.objReserva.disponibles.map(silla =>{
            if(silla.v_tipo === "general"){
                silla.estado= "disponible"
                sGeneral.push(silla)
            }
            else if(silla.v_tipo === "preferencial"){
                silla.estado= "disponible"
                sPreferencial.push(silla)
            }
            return null
        })
        this.props.objReserva.reservadas.map(silla =>{
            if(silla.v_tipo === "general"){
                silla.estado= "reservada"
                sGeneral.push(silla)
            }
            else if(silla.v_tipo === "preferencial"){
                silla.estado= "reservada"
                sPreferencial.push(silla)
            }
            return null
        })
        this.props.objReserva.proceso.map(silla =>{
            if(silla.v_tipo === "general"){
                silla.estado= "reservada"
                sGeneral.push(silla)
            }
            else if(silla.v_tipo === "preferencial"){
                silla.estado= "reservada"
                sPreferencial.push(silla)
            }
            return null
        })
        sPreferencial.sort(function (a, b) {
              return  b.id  - a.id;
        })
        sGeneral.sort(function (a, b) {
            return b.id - a.id;
      })
      console.log(sPreferencial)
      console.log(sGeneral)
      await this.setState({sGeneral: sGeneral, sPreferencial: sPreferencial})
      if(this.props.objBoletas.boletasGeneral === 0 ){
        await this.setState({general: false})
      }
      if(this.props.objBoletas.boletasVip === 0 ){
        await this.setState({preferencial: false})
      }
    }

    verificarSeleccion = async (tipoSilla) => {
        if(tipoSilla === "general" && this.state.numeroGeneral >= this.props.objBoletas.boletasGeneral)
            await this.setState({general: false})
        else 
            if(tipoSilla === "general")
                await this.setState({general: true})
        if(tipoSilla === "preferencial" && this.state.numeroPreferencial >= this.props.objBoletas.boletasVip)
            await this.setState({preferencial: false})
        else
            if(tipoSilla === "preferencial")
                await this.setState({preferencial: true})
    }

    actualizarNumeroSillas = async (tipoSilla, numero) => {
        if(tipoSilla === "general"){
            await this.setState({numeroGeneral: this.state.numeroGeneral + numero})
        }else
        if(tipoSilla === "preferencial"){
            await this.setState({numeroPreferencial: this.state.numeroPreferencial + numero})
        }
    }

    actualizarSillasEscogidas= async(accion, silla) =>{
        if(accion==="seleccion"){
            await this.setState(state => {
                const sSeleccionadas = [...state.sSeleccionadas, silla];
                return {
                    sSeleccionadas
                };
            });
        }
        else if (accion==="deseleccion"){
            await this.setState(state => {
                const sSeleccionadas = state.sSeleccionadas.filter(item => item.id !== silla.id);
                return {
                    sSeleccionadas
                };
              });
        }
        this.evaluarPaso()
    }

    mostrarSillas = () =>{
        return(
            <div className="charis_position">
                {this.state.sPreferencial.map(silla => (
                    <Silla 
                        key={silla.id}
                        tipo_silla={silla.v_tipo} 
                        estado_silla={silla.estado}
                        codigo_silla={silla.pk_numero}
                        seleccion={this.state.preferencial}
                        silla={silla}
                        actualizarSillasEscogidas={this.actualizarSillasEscogidas}
                        verificarSeleccion={this.verificarSeleccion}
                        actualizarNumeroSillas={this.actualizarNumeroSillas}
                    />
                ))}
                <div className="separator"/>
                {this.state.sGeneral.map(silla => (
                    <Silla 
                        key={silla.id}
                        tipo_silla={silla.v_tipo} 
                        estado_silla={silla.estado}
                        codigo_silla={silla.pk_numero}
                        seleccion={this.state.general}
                        silla={silla}
                        actualizarSillasEscogidas={this.actualizarSillasEscogidas}
                        verificarSeleccion={this.verificarSeleccion}
                        actualizarNumeroSillas={this.actualizarNumeroSillas}
                    />
                ))}

            </div>
        )   
    }

    evaluarPaso = async () =>{
        if(this.state.numeroGeneral === this.props.objBoletas.boletasGeneral && this.state.numeroPreferencial === this.props.objBoletas.boletasVip){
            await this.setState({paso: true})
        }
        else{
            await this.setState({paso: false})
        }
    }

    enviarSillasReservadas = () =>{
        var obj = {
            numeroGeneral: this.state.numeroGeneral,
            numeroPreferencial:this.state.numeroPreferencial,
            sSeleccionadas: this.state.sSeleccionadas
        }
        this.props.reservarSillas(obj)
    }

    showAlert = (event) =>{
        event.preventDefault();
        alert('le falta seleccionar algunos asientos')
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
                        {this.state.paso ? 
                            (<Link className="button_chair_confirm_link" to="/Snacks">
                                <button  className="btn_chair_confirm" onClick={this.enviarSillasReservadas}>
                                    Confirmar
                                </button>
                            </Link>):
                            (<button  className="btn_chair_confirm" onClick={this.showAlert}>
                                Confirmar
                            </button>)
                        }
                    </div>
                </div>
                <div className="buy_history">
                    <HistoriaCompra estado={2}/>
                </div>
            </div>
        )
    }
}
