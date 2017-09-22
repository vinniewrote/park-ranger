import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class AttractionSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }
  handleSelect(key) {
    const currentUser = this.props.currentUser;
    database.ref('userStories/'+ currentUser.uid + '/attractions').push({
      attraction: key
    })
  }

  handleDeselect(key) {
    const currentUser = this.props.currentUser;
    database.ref('userStories/'+ currentUser.uid + '/attractions').update({
      attraction: null
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Select Your Attraction</h3>
        {this.props.attractions.map((attraction, key) =>
          <div key={key} className="coasterCard">
            <h3>{attraction.attractionName}</h3>
            <p>{attraction.attractionLocation}</p>
            <div className='logride'>
              <button className="btn log" onClick={()=> {this.handleSelect(attraction.attractionName)}}>+</button>
              <button className="btn undo" onClick={()=> {this.handleDeselect(attraction.attractionName)}}>-</button>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default AttractionSelect
