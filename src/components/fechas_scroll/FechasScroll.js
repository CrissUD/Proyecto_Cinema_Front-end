import React, { Component } from 'react';
import Fecha from './Fecha'
import moment from 'moment';
import './FechasScroll.css';

export default class FechasScroll extends Component {

    state = {
        x_position: 1
    }

    assignDates = () =>{
        require('moment');
        require('moment/locale/es')
        var currentDate= moment();
        var list= [];
        for(var i=0 ; i<=20 ; i++){
            var date= {
                id: i,
                day: currentDate.clone().add(i, 'day').format('D'),
                dayText: currentDate.clone().add(i, 'day').format('dddd'),
                month: currentDate.clone().add(i, 'day').format('M'),
                monthText: currentDate.clone().add(i, 'day').format('MMM'),
                year: currentDate.clone().add(i, 'day').format('YYYY')
            }
            list.push(date)
        }
        return(
            <React.Fragment>
                {list.map((date) => (
                    <Fecha 
                        key={date.id} 
                        date={date} 
                        consultarFunciones={this.props.consultarFunciones}
                        id={this.props.id}/>
                ))}
            </React.Fragment>
        )
        
    }

    moveToRight = async () =>{
        if(this.state.x_position> -80){
            await this.setState({x_position: this.state.x_position-4}) 
            document.getElementById("scroll").style.transform = "translateX("+this.state.x_position+"%)";
        }   
    }

    moveToLeft = async () =>{
        if(this.state.x_position < 1){
            await this.setState({x_position: this.state.x_position+4}) 
            document.getElementById("scroll").style.transform = "translateX("+this.state.x_position+"%)";
        }   
    }

    render() {
        return (
            <div  className="scroll_date">
                <div className="button_left_div"> 
                    <button className="button_left" onClick={this.moveToLeft}>
                        <img className="button_img" src={require("../../resources/img/atras.png")}  alt="atras_img"/>
                    </button>
                </div>
                <div  id="scroll" className="scroll_content">
                    {this.assignDates()}
                </div>
                <div className="button_right_div"> 
                    <button className="button_right" onClick={this.moveToRight}>
                        <img className="button_img" src={require("../../resources/img/adelante.png")}  alt="adelante_img"/>
                    </button>
                </div>
            </div>
        )
    }
}
