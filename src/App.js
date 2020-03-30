import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navegacion from './components/Navegacion';
import PiePagina from './components/PiePagina';
import Inicio from './components/inicio/Inicio';
import Login from './components/login/Login';
import Registro from './components/registro/Registro';
import NavUsuario from './components/navegacion_usuario/NavUsuario';
import Perfil from './components/perfil/Perfil';
import Cartelera from './components/cartelera/Cartelera';
import DescripcionPelicula from './components/descripcion_pelicula/DescripcionPelicula';
import CantidadBoletas from './components/cantidad_boletas/CantidadBoletas';
import SeleccionSillas from './components/seleccion_sillas/SeleccionSillas';
import ResumenCompra from './components/resumen_compra/ResumenCompra'
import Snacks from './components/snacks/Snacks'
import TarjetaCredito from './components/tarjeta_credito/TerjetaCredito'
import axios from 'axios';

class App extends Component {

  state= {
    login: false,
    consulta_p: true,
    consulta_s: true,
    reserva: false,
    boletas:false,
    sillas: false,
    pelicula_escogida: false,
    snacks: false,
    list_movies: [],
    list_snakcs: [],
    objPreReserva: {},
    objReserva:{},
    objBoletas: {},
    objSnacks: {},
    objSillas: {},
    persona: {},
    cliente: {},
    authtoken:{},
    pelicula: {}
  }
  
  async componentDidMount() {
    console.log(this.state.consulta_p)
    if(this.state.consulta_p){
        console.log('paso aqui')
        axios.get('http://localhost:8888/peliculas')
        .then(response => { 
            this.setState({list_movies: response.data, consulta_p:false})
            console.log(this.state.list_movies.data)
        })
        .catch(error => {
            alert(error.response.data.message)
        });   
    }
    if(this.state.consulta_s){
      console.log('paso aqui')
      axios.get('http://localhost:8888/snack')
      .then(response => { 
          this.setState({list_snakcs: response.data, consulta_s:false})
          console.log(this.state.list_snakcs.data)
      })
      .catch(error => {
          alert(error.response.data.message)
      });   
  }
  }

  obtenerDatosUsuarioIngresado = async (persona, cliente, authtoken) =>{
      await this.setState({persona: persona, cliente: cliente, authtoken:authtoken,login: true});
  }

  obtenerPeliculaEscogida = async (pelicula) =>{
    await this.setState({pelicula: pelicula, pelicula_escogida: true});
  }

  consultarDisponibilidad = async (objPreReserva) => {
    await this.setState({objPreReserva: objPreReserva})
    axios.get('http://localhost:8888/reserva/' + objPreReserva.sala + '/' + objPreReserva.funcion + '/' + this.state.persona.data.pk_numero_identificacion, 
      { 
        headers: { authtoken: this.state.authtoken } 
      })
    .then(async response => { 
      var obj={
        reserva: response.data.data[0],
        reservadas: response.data.data[1],
        proceso: response.data.data[2],
        disponibles: response.data.data[3],
      }
      await this.setState({objReserva: obj, reserva:true})
      console.log(this.state.objReserva)
    })
    .catch(error => {
        alert('error.response.data.message')
    });
  }

   recibirCantidadBoletas = async (objBoletas) =>{
    await this.setState({objBoletas: objBoletas, boletas: true})  
  }

  reservarSillas = async (objSillas) =>{
    await this.setState({objSillas: objSillas, sillas: true})  
    this.state.objSillas.sSeleccionadas.map(silla =>{
      axios.post('http://localhost:8888/reserva/silla/', 
      {
        fk_silla: silla.id,
        fk_funcion_sala: this.state.objPreReserva.fun_sala,
        fk_reserva: this.state.objReserva.reserva.id,
        pk_numero_identificacion: this.state.persona.data.pk_numero_identificacion
      },
      { 
        headers: { authtoken: this.state.authtoken } 
      })
    .then(response => { 
      alert(response.data.message)
    })
    .catch(error => {
      alert(error.response.data.message)
    });
    return null
    })
    console.log(this.state.sSeleccionadas)
  }

  reservarSnaks = async (objSnacks) =>{
    await this.setState({objSnacks: objSnacks, snacks: true})  
    console.log(this.state.objSnacks.snaksSeleccionados)
    this.state.objSnacks.snaksSeleccionados.map(snack =>{
      if(snack.numero > 0){
        axios.post('http://localhost:8888/reserva/snack/', 
        {
          fk_reserva: this.state.objReserva.reserva.id,
          fk_snack: snack.id,
          i_cantidad: snack.numero
        },
        { 
          headers: { authtoken: this.state.authtoken } 
        })
        .then(response => { 
          alert(response.data.message)
        })
        .catch(error => {
          alert(error.response.data.message)
        });
      }
    return null
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
          {this.state.login ? (<NavUsuario persona={this.state.persona} />): (<div/>)}
          <Route exact path='/' render={ () => {
            return (
              <div>
                <Navegacion
                />
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/Inicio' render={ () => {
            return (
              <div>
                <Navegacion
                />
                <Inicio
                />
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/Login' render={ () => {
            return (
              <div>
                <Navegacion
                />
                <Login enviarDatos={this.obtenerDatosUsuarioIngresado}
                />
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/Registro' render={ () => {
            return (
              <div>
                <Navegacion
                />
                <Registro 
                />
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/Perfil' render={ () => {
            return (
              <div>
                <Navegacion
                />
                {this.state.login ? (<Perfil persona={this.state.persona} cliente={this.state.cliente}/>): (<div/>)}
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/TarjetaCredito' render={ () => {
            return (
              <div>
                <Navegacion
                />
                {this.state.login ? (<TarjetaCredito persona={this.state.persona} cliente={this.state.cliente}/>): (<div/>)}
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/Cartelera' render={ () => {
            return (
              <div>
                <Navegacion
                />
                {this.state.consulta ? (<div/>): 
                                       (<Cartelera 
                                          list_movies={this.state.list_movies}
                                          obtenerPeliculaEscogida = {this.obtenerPeliculaEscogida}
                                       />)}
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/DescripcionPelicula' render={ () => {
            return (
              <div>
                <Navegacion
                />
                {this.state.pelicula_escogida ? 
                  (<DescripcionPelicula 
                    login={this.state.login} 
                    pelicula={this.state.pelicula}
                    consultarDisponibilidad={this.consultarDisponibilidad}
                  />): (<div/>)}
                <PiePagina 
                />
              </div>
            )}}
          />
          
          <Route path='/Snacks' render={ () => {
            return (
              <div>
                <Navegacion
                />
                {this.state.consulta_s ? (<div/>): 
                                       (<Snacks 
                                          list_snakcs={this.state.list_snakcs}
                                          reservarSnaks={this.reservarSnaks}
                                       />)}
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/CompraBoletas' render={ () => {
            return (
              <div>
                <Navegacion
                />
                {this.state.login && this.state.reserva ? 
                  (<CantidadBoletas 
                    objReserva={this.state.objReserva}
                    recibirCantidadBoletas={this.recibirCantidadBoletas}
                  />): 
                  (<div/>)
                }
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/EscogerAsientos' render={ () => {
            return (
              <div>
                <Navegacion
                />
                {this.state.boletas ? 
                  (<SeleccionSillas
                    objBoletas={this.state.objBoletas}
                    objPreReserva = {this.state.objPreReserva}
                    objReserva={this.state.objReserva}
                    reservarSillas={this.reservarSillas}
                  />): 
                  (<div/>)
                }
                
                <PiePagina 
                />
              </div>
            )}}
          />
          <Route path='/ResumenCompra' render={ () => {
            return (
              <div>
                <Navegacion
                />
                {this.state.snacks ? 
                  (<ResumenCompra
                    objPreReserva= {this.state.objPreReserva}
                    objBoletas= {this.state.objBoletas}
                    objSnacks= {this.state.objSnacks}
                    objSillas = {this.state.objSillas}
                    persona = {this.state.persona}
                    pelicula = {this.state.pelicula}
                  />): 
                  (<div/>)
                }
                
                <PiePagina 
                />
              </div>
            )}}
          />
        </Router>
      </div>
    );
  }
}

export default App;
