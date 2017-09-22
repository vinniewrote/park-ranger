import React, { Component }  from 'react'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Navigation from './Navigation'

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Park Ranger</h2>
        </div>
        <p className="App-intro">
          Welcome to Park Ranger! Tell us a story.
        </p>
        <Navigation />
      </div>
    )
  }
}

export default Layout
