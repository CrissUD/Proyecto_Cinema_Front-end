import React, { Component } from 'react';
import SubMenu from './SubMenu'
import './HorariosMenu.css';

export default class HorariosMenu extends Component {

    state = {
        funcionesEstacion: [],
        funcionesAmericas: [],
        funcionesCentral: [],
        funcionesTitan: [],
        funcionesUnicentro:[],
        funcionesEmbajador:[]
    }

    async componentDidMount(){
        this.props.list_funciones.map(async funcion =>{
            if(funcion.v_nombre === "GRAN ESTACIÓN"){
                await this.setState(state => {
                    const funcionesEstacion = [...state.funcionesEstacion, funcion];
                    return {
                        funcionesEstacion
                    };
                });
            }
            else if(funcion.v_nombre === "TITAN"){
                await this.setState(state => {
                    const funcionesTitan = [...state.funcionesTitan, funcion];
                    return {
                        funcionesTitan
                    };
                });
            }
            else if(funcion.v_nombre === "UNICENTRO"){
                await this.setState(state => {
                    const funcionesUnicentro = [...state.funcionesUnicentro, funcion];
                    return {
                        funcionesUnicentro
                    };
                });
            }
            else if(funcion.v_nombre === "PLAZA CENTRAL"){
                await this.setState(state => {
                    const funcionesCentral = [...state.funcionesCentral, funcion];
                    return {
                        funcionesCentral
                    };
                });
            }
            else if(funcion.v_nombre === "LAS AMÉRICAS"){
                await this.setState(state => {
                    const funcionesAmericas = [...state.funcionesAmericas, funcion];
                    return {
                        funcionesAmericas
                    };
                });
            }
            else if(funcion.v_nombre === "EMBAJADOR"){
                await this.setState(state => {
                    const funcionesEmbajador = [...state.funcionesEmbajador, funcion];
                    return {
                        funcionesEmbajador
                    };
                });
            }
        })
    }

    async UNSAFE_componentWillReceiveProps(){
        await this.setState({
            funcionesEstacion: [],
            funcionesAmericas: [],
            funcionesCentral: [],
            funcionesTitan: [],
            funcionesUnicentro:[],
            funcionesEmbajador:[]
        })
        this.props.list_funciones.map(async funcion =>{
            if(funcion.v_nombre === "GRAN ESTACIÓN"){
                await this.setState(state => {
                    const funcionesEstacion = [...state.funcionesEstacion, funcion];
                    return {
                        funcionesEstacion
                    };
                });
            }
            else if(funcion.v_nombre === "TITAN"){
                await this.setState(state => {
                    const funcionesTitan = [...state.funcionesTitan, funcion];
                    return {
                        funcionesTitan
                    };
                });
            }
            else if(funcion.v_nombre === "UNICENTRO"){
                await this.setState(state => {
                    const funcionesUnicentro = [...state.funcionesUnicentro, funcion];
                    return {
                        funcionesUnicentro
                    };
                });
            }
            else if(funcion.v_nombre === "PLAZA CENTRAL"){
                await this.setState(state => {
                    const funcionesCentral = [...state.funcionesCentral, funcion];
                    return {
                        funcionesCentral
                    };
                });
            }
            else if(funcion.v_nombre === "LAS AMÉRICAS"){
                await this.setState(state => {
                    const funcionesAmericas = [...state.funcionesAmericas, funcion];
                    return {
                        funcionesAmericas
                    };
                });
            }
            else if(funcion.v_nombre === "EMBAJADOR"){
                await this.setState(state => {
                    const funcionesEmbajador = [...state.funcionesEmbajador, funcion];
                    return {
                        funcionesEmbajador
                    };
                });
            }
        })
    }

    render() {
        return (
            <div className="middle">
                <div className="menu">
                    <div className="item" >
                        <input id="item1" type="checkbox" value="teatro1"/>
                        <label htmlFor="item1" className="btn">
                            <img className="theater_img" src={require("../../resources/img/gran_estacion.png")}  alt="gran_estacion_img"/>
                            Cine Distrito Gran Estacion
                        </label>
                        <div className="submenu">
                            <div className="btn_submenu">
                                <SubMenu 
                                    funciones={this.state.funcionesEstacion}
                                    recibirHoraTeatro={this.props.recibirHoraTeatro}
                                    teatro={'Gran Estacion'}
                                    panel={this.props.panel} 
                                    panelBackground={this.props.panelBackground}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="item" id="plaza_americas">
                        <input id="item2" type="checkbox" value="teatro2"/>
                        <label htmlFor="item2" className="btn">
                            <img className="theater_img plaza_amr" src={require("../../resources/img/plaza_americas.png")}  alt="plaza_americas_img"/>
                            Cine Distrito Plaza Americas
                        </label>
                        <div className="submenu">
                            <div className="btn_submenu">
                                <SubMenu 
                                    funciones={this.state.funcionesAmericas}
                                    recibirHoraTeatro={this.props.recibirHoraTeatro}
                                    teatro={'Plaza Americas'}
                                    panel={this.props.panel} 
                                    panelBackground={this.props.panelBackground}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="item" id="plaza_central">
                        <input id="item3" type="checkbox" value="teatro3"/>
                        <label htmlFor="item3" className="btn">
                            <img className="theater_img" src={require("../../resources/img/plaza_central.png")}  alt="plaza_central_img"/>
                            Cine Distrito Plaza Central
                        </label>
                        <div className="submenu">
                            <div className="btn_submenu">
                                <SubMenu 
                                    funciones={this.state.funcionesCentral}
                                    recibirHoraTeatro={this.props.recibirHoraTeatro}
                                    teatro={'Plaza Central'}
                                    panel={this.props.panel} 
                                    panelBackground={this.props.panelBackground}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="item" id="titan_plaza">
                        <input id="item4" type="checkbox" value="teatro4"/>
                        <label htmlFor="item4" className="btn">
                            <img className="theater_img" src={require("../../resources/img/titan_plaza.png")}  alt="titan_img"/>
                            Cine Distrito Titan Plaza
                        </label>
                        <div className="submenu">
                            <div className="btn_submenu">
                                <SubMenu 
                                    funciones={this.state.funcionesTitan}
                                    panel={this.props.panel} 
                                    recibirHoraTeatro={this.props.recibirHoraTeatro}
                                    teatro={'Titan Plaza'}
                                    panelBackground={this.props.panelBackground}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="item" id="unicentro">
                        <input id="item5" type="checkbox" value="teatro5"/>
                        <label htmlFor="item5" className="btn">
                            <img className="theater_img" src={require("../../resources/img/unicentro.png")}  alt="unicentro_img"/>
                            Cine Distrito Unicentro
                        </label>
                        <div className="submenu">
                            <div className="btn_submenu">
                                <SubMenu 
                                    funciones={this.state.funcionesUnicentro}
                                    recibirHoraTeatro={this.props.recibirHoraTeatro}
                                    teatro={'Unicentro'}
                                    panel={this.props.panel} 
                                    panelBackground={this.props.panelBackground}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="item" id="plaza_central">
                        <input id="item6" type="checkbox" value="teatro3"/>
                        <label htmlFor="item6" className="btn">
                            <img className="theater_img" src={require("../../resources/img/embajador.png")}  alt="plaza_central_img"/>
                            Cine Distrito Embajador
                        </label>
                        <div className="submenu">
                            <div className="btn_submenu">
                                <SubMenu 
                                    funciones={this.state.funcionesEmbajador}
                                    recibirHoraTeatro={this.props.recibirHoraTeatro}
                                    teatro={'Embajador'}
                                    panel={this.props.panel} 
                                    panelBackground={this.props.panelBackground}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
