import React, { Component }  from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav className="pr-nav">
        <button className="btn"><Link to='/journal'>Journal</Link></button>
        <button className="btn"><Link to='/parks'>Parks</Link></button>
        <button className="btn"><Link to='/login'>Login</Link></button>
      </nav>

    )
  }
}

export default Navigation
