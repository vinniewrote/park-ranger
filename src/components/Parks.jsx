import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'
import Nav from './Navigation'

class Parks extends Component {
  constructor() {
  super();
  this.state = {
    message: "Please login to log a park visit",
    isLoggedIn: null
  }
}

componentDidMount() {
  if (this.state.isLoggedIn) {
    console.log('already logged in')
  }
}
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        
        <Nav />
      </div>
    )
  }
}

export default Parks
