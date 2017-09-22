import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class RestaurantSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h3>Select Your Restaurant</h3>
        {this.props.restaurants.map((restaurant, key) =>
          <div key={key} className="coasterCard">
            <h3>{restaurant.restaurantName}</h3>
            <p>{restaurant.restaurantLocation}</p>
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

export default RestaurantSelect
