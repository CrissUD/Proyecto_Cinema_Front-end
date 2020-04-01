import React, { Component } from 'react';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './TarjetaCredito.css'

export default class TarjetaCredito extends Component {

    state= {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    }
    
    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }
    
    handleFocusChange = (e) => {
        this.setState({
            ...this.state,
            focus : e.target.name
        })
    }
    
    processPayment = () => {
        console.log("number => ", this.state.number)
        console.log("name => ", this.state.name)
        console.log("expiry => ", this.state.expiry)
        console.log("cvc => ", this.state.cvc)
        console.log(JSON.stringify(this.state))
        alert('Tarjeta registrada')
    }

    render () {
        return (
            <div className="container"> 
                <div className="header_billboard">
                    <h1>Registro Tarjeta de Credito</h1>
                </div>
                <div className="card_tarjet">
                    <div className="card-body">
                        <div className="form-group-a">
                            <Cards className="tarjet"
                                number={this.state.number}
                                name={this.state.name}
                                expiry={this.state.expiry}
                                cvc={this.state.cvc}
                                focused={this.state.focus}
                            />
                        </div>
                        <form>
                            <div className="form-group">
                                <label className="label" htmlFor="number">Número de la tarjeta</label>
                                <input
                                type="text"
                                name="number"
                                id="number"
                                maxLength="16"
                                placeholder="Numero Tarjeta"
                                className="form-control"
                                onChange={this.handleInputChange}
                                onFocus={this.handleFocusChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="label" htmlFor="name">Nombre</label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                maxLength="30"
                                placeholder="Nombre Cliente"
                                className="form-control"
                                onChange={this.handleInputChange}
                                onFocus={this.handleFocusChange}
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group-b col-md-6">
                                    <label className="label" htmlFor="expiry">Fecha de expiración</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        placeholder="0000"
                                        id="expiry"
                                        maxLength="4"
                                        className="form-control"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleFocusChange}
                                    />
                                </div>
                                <div className="form-group-b col-md-6">
                                    <label className="label" htmlFor="cvc">CVC</label>
                                    <input
                                        type="text"
                                        name="cvc"
                                        id="cvc"
                                        placeholder="0000"
                                        maxLength="4"
                                        className="form-control"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleFocusChange}
                                    />
                                </div>
                            </div>
                            <button onClick={this.processPayment} type="button" className="btn_tarjet">Registrar</button>
                        </form>
                    </div>
                </div>
                <div className="background_tarjet">
                    <img className="img_background_tarjet" src={require("../../resources/img/background2.png")} alt="background_register"/>
                </div>
            </div>
        )
    }
}