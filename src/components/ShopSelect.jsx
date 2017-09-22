import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import {firebase, database, auth} from './Firebase'

class ShopSelect extends Component {
  constructor(props) {
    super(props);
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
            <button>i rode it</button>
            <button>undo</button>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default ShopSelect
