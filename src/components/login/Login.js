import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'

export default class Login extends Component {
    
    state= {
        user: '',
        password: ''
    }

    validarUsuario = (event) =>{
        event.preventDefault();
        console.log(this.state.user)
        console.log(this.state.password)
        axios.post('http://localhost:8888/login', {
            pk_cedula: parseInt(this.state.user,10) , 
            pass: this.state.password
        })
        .then(response => { 
            alert(response.data.message)
            console.log(response)
        })
        .catch(error => {
            alert(error.response.data.message)
        });
        
    }

    onChange =  (event) =>{
         this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div className="contenedor contenido">
                <div className="cubierta"></div>
                <div className="login">
                    <form className="formulario">
                        <h1>Login</h1>
                        <div className="texto">
                            <input type="text" name="user" placeholder="Nombre Usuario" onChange={this.onChange}/>
                        </div>
                        <div className="texto">
                            <input type="password" name="password" placeholder="contraseña" onChange={this.onChange}/>
                        </div>
                        <div>
                            <select className="tipo_usuario">
                                <option value="cliente">Cliente</option>
                                <option value="cajero">Cajero</option>
                                <option value="administrador">Administrador</option>
                            </select>
                        </div>
                        <input type="submit" className="boton" value="Entrar" onClick={this.validarUsuario}/>
                        <div className="nueva_cuenta">
                            ¿No tienes cuenta?
                            <Link className="link" to="/Registro"> Registrarse</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
