import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class UserStats extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
          <h3>Select Your Coaster</h3>
          {this.props.setlists.map((setlist, key) =>
            <p>{setlist.coaster}</p>
          )}
      </div>
    )
  }
}

export default UserStats
