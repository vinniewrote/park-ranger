import React, { Component }  from 'react'
import {firebase, database, auth, fbProvider, googleProvider, twitterProvider} from './Firebase'
import Nav from './Navigation'
import ParkSelect from './ParkSelect'
import CoasterSelect from './CoasterSelect'
import AttractionSelect from './AttractionSelect'
import RestaurantSelect from './RestaurantSelect'
import ShopSelect from './ShopSelect'
import Journal from './Journal'
import UserStats from './UserStats'

const defaultMessaging = {
  message: "Welcome. Please login for the full Park Ranger experience",
  user: "i dont know you. login so we can meet"
};

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      ...defaultMessaging,
      isLoggedIn: null,
      coasters: [],
      attractions: [],
      restaurants: [],
      shops: [],
      setlists: []
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((isLoggedIn) => {
      this.setState({message: "Thank you for logging in", isLoggedIn})
      console.log('youre still logged in homie', isLoggedIn)
      this.getCoasterInfo();
      this.getAttractionInfo();
      this.getRestaurantInfo();
      this.getShopInfo();
      this.getUserData();
    })

  }

  componentDidUpdate(prevProps, prevState) {
    const prevLoggedIn = prevState && prevState.isLoggedIn;
    const loggedIn = this.state.isLoggedIn;
  }
  getUserData() {
    database.ref('userStories/'+ this.state.isLoggedIn.uid).on('value', snap => {
      console.log(snap.val())
      this.setState({setlists: snap.val()})
    });
  }

  getCoasterInfo() {
    console.log('fetching database data')
    database.ref('parks/0/coasters').on('value', snap => {
      console.log(snap.val())
      this.setState({coasters: snap.val()})
    });
  }

  getAttractionInfo() {
    database.ref('parks/0/attractions').on('value', snap => {
      console.log(snap.val())
      this.setState({attractions: snap.val()})
    });
  }

  getRestaurantInfo() {
    database.ref('parks/0/restaurants').on('value', snap => {
      console.log(snap.val())
      this.setState({restaurants: snap.val()})
    });
  }

  getShopInfo() {
    database.ref('parks/0/shops').on('value', snap => {
      console.log(snap.val())
      this.setState({shops: snap.val()})
    });
  }

loginWithFacebook() {
  auth.signInWithPopup(fbProvider).then(function(result) {
    var token = result.credential.accessToken;
    this.setState({user: result.user, isLoggedIn: true});
  }.bind(this));
};

  loginWithGoogle() {
    auth.signInWithPopup(googleProvider).then(function(result) {
      var token = result.credential.accessToken;
      this.setState({user: result.user, isLoggedIn: true});
  }.bind(this));
};

  loginWithTwitter() {
    auth.signInWithPopup(twitterProvider).then(function(result) {
      var token = result.credential.accessToken;
      this.setState({user: result.user, isLoggedIn: true});
    }.bind(this));
  };

  logOut() {
    auth.signOut().then(function() {
      this.setState({user: null, isLoggedIn: false, ...defaultMessaging});
    }.bind(this));
  };
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        {!this.state.isLoggedIn &&
        <div>
          <h5>{this.state.user}</h5>
          <button className="btn auth"onClick={this.loginWithFacebook.bind(this)}>Login with Facebook</button>
          <button className="btn auth"onClick={this.loginWithGoogle.bind(this)}>Login with Google</button>
          <button className="btn auth" onClick={this.loginWithTwitter.bind(this)}>Login with Twitter</button>
        </div>
        }

        {this.state.isLoggedIn &&
          <div>
            <UserStats setlists={this.state.setlists}/>
            <h5>{this.state.isLoggedIn.displayName}</h5>
            <h5>{this.state.isLoggedIn.email}</h5>
            <img className="avatar" src={this.state.isLoggedIn.photoURL} alt={this.state.isLoggedIn.displayName}/>
            <button className="btn auth" onClick={this.logOut.bind(this)}>Log Out</button>
            <CoasterSelect coasters={this.state.coasters} currentUser={this.state.isLoggedIn}/>
            <AttractionSelect attractions={this.state.attractions}/>
            <RestaurantSelect restaurants={this.state.restaurants}/>
            <ShopSelect shops={this.state.shops}/>
          </div>
        }

      </div>

    )
  }
}

export default UserLogin
