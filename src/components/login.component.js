import React, { Component } from 'react';
import firebase from 'firebase'
import './App.css';

import { Router } from 'react-router-dom';

var config = {
  apiKey: "AIzaSyCuRXcvrYUFE9uKVmwPjTugOsZ1U6ezqXQ",
  authDomain: "weblogin-ugm.firebaseapp.com",
  databaseURL: "https://weblogin-ugm.firebaseio.com",
  projectId: "weblogin-ugm",
  storageBucket: "weblogin-ugm.appspot.com",
  messagingSenderId: "744131421435",
  appId: "1:744131421435:web:c48dfd6b4b5431a8d1bc5e",
  measurementId: "G-3L39G900EY"
};

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
class Login extends Component {
  state = {user : []}
  onBtnLoginClick = () => {
    firebase.auth().signInWithPopup(provider)
    .then((res) => {
      this.setState()
    })
    .catch((err) => {
      console.log(err)
    })
  }
  onBtnLogoutClick = () => {
    firebase.auth().signOut()
    .then((res) => this.setState({user : []}))
    .catch((err) => console.log(err))
  }
  render() {
    return (
      // <Router>
      //   <Router path="/home" component={Home} />
      // </Router>
      <div>
        <div style={{display : 'flex', justifyContent: 'center', marginTop:'300px'}}>
          {
          this.state.user.length == 0
          ?
          <input type='button' value='login with google' onClick={this.onBtnLoginClick} />
        : 
        <div>
          <img src={this.state.user.photoURL} alt='broken' width="200px"/>
          <p>{this.state.user.displayName} </p>
          <input type='button' value='log out' onClick={this.onBtnLogoutClick}/>
        </div>}
        </div>
      </div>
    )
  }
}

export default Login;