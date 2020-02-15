import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default class Login extends Component {
    
    

    render() {
        return (
            <div className="contenedor contenido">
                <div className="cubierta"></div>
                <div className="login">
                    <form className="formulario">
                        <h1>Login</h1>
                        <div className="texto">
                            <input type="text" placeholder="Nombre Usuario"/>
                        </div>
                        <div className="texto">
                            <input type="password" placeholder="contraseña"/>
                        </div>
                        <div>
                            <select className="tipo_usuario">
                                <option value="cliente">Cliente</option>
                                <option value="cajero">Cajero</option>
                                <option value="administrador">Administrador</option>
                            </select>
                        </div>
                        <input type="submit" className="boton" value="Entrar" />
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
