import React, { Component } from 'react'
import './Registro.css'

export default class Registro extends Component {

    subirImagenUsuario = (event) =>{
        const previewContainer = document.getElementById("image_preview");
        const previewImage = previewContainer.querySelector(".image_preview_image");
        const previewDefaultText = previewContainer.querySelector(".span_preview");
        const file= event.target.files[0]
        if (file){
            const reader = new FileReader();
            previewDefaultText.style.display = "none";
            previewImage.style.display = "block";
            reader.addEventListener("load", function() {
                previewImage.setAttribute("src", this.result)
            });
            reader.readAsDataURL(file);
        }
        else{
            previewDefaultText.style.display = null;
            previewImage.style.display = null;
            previewImage.setAttribute("src", "")
        }
    }

    render() {
        return (
            <div className="registrer">
                <div className="container_registrer">
                    <div className="row_registrer">
                        <div className="form_registrer">
                            <form className="form">
                                <h1>REGISTRO DE USUARIO</h1>
                                <h5>Ingresa tus Datos Personales</h5>
                                <div className="row_form">
                                    <div className="form_half">
                                        <p>Nombres</p>
                                        <input type="text" className="input_half" placeholder="Ingrese nombres"/>
                                    </div>
                                    <div className="form_half">
                                        <p>Apellidos</p>
                                        <input type="text" className="input_half" placeholder="Ingrese apellidos"/>
                                    </div>
                                </div>
                                <div className="row_form">
                                    <div className="form_half">
                                        <p>Tipo de Documento</p>
                                        <select className="tipo_documento">
                                            <option value="cedula">Cedula de Ciudadania</option>
                                            <option value="targeta">Targeta de Identidad</option>
                                            <option value="extrangeria">Cedula de Extrangeria</option>
                                        </select>
                                    </div>
                                    <div className="form_half">
                                        <p>Numero Documento</p>
                                        <input type="text" className="input_half" placeholder="Ingrese numero de documento"/>
                                    </div>
                                </div>
                                <div className="email_form">
                                    <p>Correo Electronico</p>
                                    <input type="email" className="input_complete" placeholder="Ingrese email"/>
                                </div>
                                <div className="row_form">
                                    <div className="form_half">
                                        <p>Numero de Telefono</p>
                                        <input type="text" className="input_half" placeholder="Ingrese numero telefonico"/>
                                    </div>
                                    <div className="form_half">
                                        <p>Direccion de Residencia</p>
                                        <input type="text" className="input_half" placeholder="Ingrese direccion"/>
                                    </div>
                                </div>
                                <h5>Ingresa tus datos de Usuario</h5>
                                <div className="row_form">
                                    <div className="form_half">
                                        <p>Nombre de Usuario</p>
                                        <input type="text" className="input_half" placeholder="Ingrese nombre usuario"/>
                                    </div>
                                    <div className="form_half">
                                        <p>Clave de Usuario</p>
                                        <input type="password" className="input_half" placeholder="Ingresecontraseña"/>
                                    </div>
                                </div>
                                <div className="image_user">
                                    <p>Suba la imagen de perfil</p>
                                    <input type="file" 
                                           name="inpFile" 
                                           id="inpFile" 
                                           className="inpFile" 
                                           onChange={this.subirImagenUsuario}/>
                                    <div className="image_preview" id="image_preview">
                                        <img className="image_preview_image" src="" alt="img_preview"/>
                                        <span className="span_preview">
                                            Previa de Imagen
                                        </span>
                                    </div>
                                </div>
                                <div className="button_form">
                                    <button className="button_search">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="background">
                            <img className="img_background" src={require("../../resources/img/background.png")} alt="background_register"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
