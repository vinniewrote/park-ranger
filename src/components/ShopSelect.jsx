import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class ShopSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }
  handleSelect(key) {
    const currentUser = this.props.currentUser;
    database.ref('userStories/'+ currentUser.uid + '/shops').push({
      shop: key
    })
  }

  handleDeselect(key) {
    const currentUser = this.props.currentUser;
    database.ref('userStories/'+ currentUser.uid + '/shops').update({
      shop: null
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Select Your Restaurant</h3>
        {this.props.shops.map((shop, key) =>
          <div key={key} className="coasterCard">
            <h3>{shop.shopName}</h3>
            <p>{shop.shopLocation}</p>
            <div className='logride'>
              <button className="btn log" onClick={()=> {this.handleSelect(shop.shopName)}}>+</button>
              <button className="btn undo" onClick={()=> {this.handleDeselect(shop.shopName)}}>-</button>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default ShopSelect
