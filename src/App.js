import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Navigation from './components/Navigation'
import UserLogin from './components/UserLogin'
import Journal from './components/Journal'
import Parks from './components/Parks'
import ParkDetails from './components/ParkDetails'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={UserLogin} />
          <Route path='/login' component={UserLogin} />
          <Route path='/journal' component={Journal} />
          <Route path='/parks' component={Parks} />
          <Route path='/parks/:parkId' component={ParkDetails}></Route>
        </div>
      </HashRouter>
    );
  }
}

export default App;
