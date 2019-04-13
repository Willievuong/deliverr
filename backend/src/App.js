import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase;

var provider = new firebase.auth.FacebookAuthProvider();


class App extends Component {
  const action = () => {
      firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
     // ...
    }).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // The email of the user's account used.
     var email = error.email;
     // The firebase.auth.AuthCredential type that was used.
     var credential = error.credential;
     // ...
    });
  }


  render() {
    return (
      <div className="App">
          <button onClick={action}> Login </button>
      </div>
    );
  }
}

export default App;
