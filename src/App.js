import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbaro from './Aferoj/Navbaro'
import Sekcio from './Aferoj/Sekcio'
import './Stiloj/App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbaro />
        </>
      </Router>
    )
  }
}

export default App
