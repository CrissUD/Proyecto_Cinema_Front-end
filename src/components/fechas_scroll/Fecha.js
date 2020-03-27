import React, { Component } from 'react';
import './Fecha.css'

export default class Fecha extends Component {

    
    /*changeColor = () =>{
        document.getElementById("button_date").style.background= "#71a0da";
    }*/

    enviarFecha = () =>{
        var fecha= this.props.date.year+'-0'+this.props.date.month+'-'+this.props.date.day
        this.props.consultarFunciones(this.props.id , fecha)
    }

    render() {
        
        const{day, dayText, monthText} = this.props.date;
        return (
            <div className="button_date_div">
                <button id="button_date" className="button_date" onClick={this.enviarFecha}>
                    <div className="date_name">
                        <p>{dayText}</p>
                    </div>
                    <div className="date_number">
                        <p>{day}</p>
                    </div>
                    <div className="date_month">
                        <p>{monthText}</p>
                    </div>
                </button>
            </div>
        )
    }
}
