import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class Journal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h3>Look at your stats</h3>
          {this.props.userLists.map((userList, key) =>
            <div key={key}>
              <p>{userList.coasters.coaster}</p>
            </div>
          )}
      </div>
    )
  }
}

export default Journal
