import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class CoasterSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }
  handleSelect(key) {
    const currentUser = this.props.currentUser;
    database.ref('userStories/'+ currentUser.uid + '/coasters').push({
      coaster: key
    })
  }

  handleDeselect(key) {
    const currentUser = this.props.currentUser;
    database.ref('userStories/'+ currentUser.uid + '/coasters').update({
      coaster: null
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Select Your Coaster</h3>
        {this.props.coasters.map((coaster, key) =>
          <div key={coaster.coasterID} className="coasterCard">
            <h3>{coaster.coasterName}</h3>
            <p>{coaster.coasterLocation}</p>
            <div className='logride'>
            <button className="btn log" onClick={()=> {this.handleSelect(coaster.coasterName)}}>+</button>
            <button className="btn undo" onClick={()=> {this.handleDeselect(coaster.coasterName)}}>-</button>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default CoasterSelect
