import React, { Component }  from 'react'
import Navigation from './Navigation'

class Journal extends Component {
  render() {
    return (
      <div className="App">
        Begin a journal entry
        <Navigation />
      </div>
    )
  }
}

export default Journal
