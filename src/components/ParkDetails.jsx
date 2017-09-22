import React, { Component }  from 'react'
import ReactRouter from 'react-router'
import { Link } from 'react-router'
import { browserHistory } from 'react-router-dom'

class ParkDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div>
          <p>Park Details here</p>

            <h3>{this.props.parks.parkName}</h3>
            <p>{this.props.parks.parkCity}, {this.props.parks.parkState} {this.props.parks.parkCountry}</p>

        </div>
    );
  }
}
export default ParkDetails;
