import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class ParkSelect extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h3>Select Your Park</h3>

        {this.props.parks.map((park, key) =>

            <button className="btn parks" key={key}>
              <Link to={`/parks/${park.parkId}`}>
              <h3>{park.parkName}</h3>
              <p>{park.parkCity}, {park.parkState} {park.parkCountry}</p>
              </Link>
            </button>

        )}

      </div>
    )
  }
}

export default ParkSelect
