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
    pelicula_escogida: false,
    list_movies: [],
    list_snakcs: [],
    persona: {},
    cliente: {},
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

  obtenerDatosUsuarioIngresado = async (persona, cliente) =>{
      await this.setState({persona: persona, cliente: cliente, login: true});
  }

  obtenerPeliculaEscogida = async (pelicula) =>{
    await this.setState({pelicula: pelicula, pelicula_escogida: true});
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
                  (<DescripcionPelicula login={this.state.login} pelicula={this.state.pelicula}/>): (<div/>)}
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
                {this.state.login ? (<CantidadBoletas/>): (alert('necesita ingresar con usuario para continuar'))}
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
                <SeleccionSillas
                />
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
                <ResumenCompra
                />
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
