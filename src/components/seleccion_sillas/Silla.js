import React, { Component } from 'react'
import './Silla.css'

export default class Silla extends Component {

    state = {
        tipo_silla: this.props.tipo_silla,
        estado_silla: this.props.estado_silla,
        url: '',
        codigo: this.props.codigo_silla
    }

    async componentDidMount () {
        if(this.props.tipo_silla === "preferencial"){
            if(this.props.estado_silla === "disponible")
                await this.setState({url: require("../../resources/img/silla_vip_blanca.png")})
            else
                await this.setState({url: require("../../resources/img/silla_vip_roja.png")})
        }else if(this.props.tipo_silla === "general"){
            if(this.props.estado_silla === "disponible")
                await this.setState({url: require("../../resources/img/silla_blanca.png")})
            else
                await this.setState({url: require("../../resources/img/silla_roja.png")})
        }
    }

    seleccionarSilla = async () =>{
        this.props.verificarSeleccion(this.state.tipo_silla)
        if(this.state.tipo_silla==='preferencial' && this.state.estado_silla==='disponible' && this.props.seleccion){
            await this.setState({url: require("../../resources/img/silla_vip_verde.png")})
            await this.setState({estado_silla: 'seleccionada'})
            this.props.actualizarNumeroSillas(this.state.tipo_silla, 1)
            this.props.actualizarSillasEscogidas("seleccion", this.props.silla)
        }
        else if(this.state.tipo_silla==='preferencial' && this.state.estado_silla==='seleccionada'){
            await this.setState({url: require("../../resources/img/silla_vip_blanca.png")})
            await this.setState({estado_silla: 'disponible'})
            this.props.actualizarNumeroSillas(this.state.tipo_silla, -1)
            this.props.actualizarSillasEscogidas("deseleccion", this.props.silla)
        }
        if(this.state.tipo_silla==='general' && this.state.estado_silla==='disponible' && this.props.seleccion){
            await this.setState({url: require("../../resources/img/silla_verde.png")})
            await this.setState({estado_silla: 'seleccionada'})
            this.props.actualizarNumeroSillas(this.state.tipo_silla, 1)
            this.props.actualizarSillasEscogidas("seleccion", this.props.silla)
        }
        else if(this.state.tipo_silla==='general' && this.state.estado_silla==='seleccionada'){
            await this.setState({url: require("../../resources/img/silla_blanca.png")})
            await this.setState({estado_silla: 'disponible'})
            this.props.actualizarNumeroSillas(this.state.tipo_silla, -1)
            this.props.actualizarSillasEscogidas("deseleccion", this.props.silla)
        }
        this.props.verificarSeleccion(this.state.tipo_silla)
    }

    render() {
        return (
            <div className="chair">
                <div className="chair_img_div">
                    <button className="btn_chair_img" onClick={this.seleccionarSilla}>
                        <img id="chair_img" className="chair_img"  src={this.state.url} alt="chair_img"/>
                    </button>
                </div>
                <div className="chair_code">
                    <p>{this.state.codigo}</p>
                </div>
            </div>
        )
    }
}
