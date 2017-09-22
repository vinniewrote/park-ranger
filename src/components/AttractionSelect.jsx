import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class AttractionSelect extends Component {
  constructor(props) {
    super(props);
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
            <button>i rode it</button>
            <button>undo</button>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default AttractionSelect
