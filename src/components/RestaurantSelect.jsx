import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class RestaurantSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }
  handleSelect(key) {
    const currentUser = this.props.currentUser;
    database.ref('userStories/'+ currentUser.uid + '/restaurants').push({
      restaurant: key
    })
  }

  handleDeselect(key) {
    const currentUser = this.props.currentUser;
    database.ref('userStories/'+ currentUser.uid + '/restaurants').update({
      restaurant: null
    })
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
              <button className="btn log" onClick={()=> {this.handleSelect(restaurant.restaurantName)}}>+</button>
              <button className="btn undo" onClick={()=> {this.handleDeselect(restaurant.restaurantName)}}>-</button>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default RestaurantSelect
