import './App.css';

import React, { Component } from 'react'
import NavbarC from './components/NavbarC';
import News from './components/News';



export default class App extends Component {
 
  render() {
    return (
      <div>
     <NavbarC/>
     <News/>
      </div>
    )
  }
}
