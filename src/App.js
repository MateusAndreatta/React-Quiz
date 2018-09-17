import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'

import Inicio from './Home/Inicio';
import Categorias from './Jogo/Categorias';
import Perguntas from './Jogo/Perguntas';
import Resultado from './Jogo/Resultado';
import Ranking from './Jogo/Ranking';
import Header from './Jogo/Header';


//<img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route path='/' exact component={Inicio}/>
          <Route path='/categorias' component={Categorias}/>
          <Route path='/perguntas' component={Perguntas}/>
          <Route path='/resultado' component={Resultado}/>
          <Route path='/ranking' component={Ranking}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
