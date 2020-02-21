import React, { Component } from 'react';
import SubMenu from './SubMenu'
import './HorariosMenu.css';

export default class HorariosMenu extends Component {
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
                                <SubMenu panel={this.props.panel} panelBackground={this.props.panelBackground}/>
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
                                <SubMenu panel={this.props.panel} panelBackground={this.props.panelBackground}/>
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
                                <SubMenu panel={this.props.panel} panelBackground={this.props.panelBackground}/>
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
                                <SubMenu panel={this.props.panel} panelBackground={this.props.panelBackground}/>
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
                                <SubMenu panel={this.props.panel} panelBackground={this.props.panelBackground}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
