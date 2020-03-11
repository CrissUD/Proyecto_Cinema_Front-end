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

class App extends Component {

  state= {
    login: true
  }

  render(){
    return (
      <div className="App">
        <Router>
          {this.state.login ? (<NavUsuario/>): (<div/>)}
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
                <Login
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
                <Perfil
                />
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
                <Cartelera
                />
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
                <DescripcionPelicula
                />
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
                <CantidadBoletas
                />
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
