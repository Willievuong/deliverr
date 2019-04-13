//Express
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')({origin: true});
var config = require('./config')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors);

var firebase= require("firebase-admin");

var serviceAccount = require("./key.json");

firebase.initializeApp({
 credential: firebase.credential.cert(serviceAccount),
 databaseURL: "https://deliverr-it-bitch.firebaseio.com"
});



app.get('/', (req, res) => {
  //res.send("Hello World");
  //res.send(config);
  return cors(req, res, () => {
		// var userID = req.query.userID;
		// var object;

		// console.log(req.query.userID);

		 firebase.database().ref('/').once("value", (data) => {res.send(data);});

	});
});

app.get('/profile/:userid', (req, res) => {
  //res.send("Hello World");
  //res.send(config);

  return cors(req, res, () => {
		// var userID = req.query.userID;
		// var object;

		// console.log(req.query.userID);
    console.log(req.params.userid)
    // firebase.database().ref('/').once("value", (data) => {res.send(data);});
    firebase.database().ref('/UserAccount/' + req.params.userid).once('value', (data) => {res.send(data);});

	});
});

app.get('/package/:packageid', (req, res) => {
  return cors(req, res, () => {
    firebase.database().ref('/Package/' + req.params.packageid).once('value', (data) => {res.send(data);});
  });
});

app.get('/travel/:tid', (req, res) => {
  return cors(req, res, () => {
    firebase.database().ref('/TravelInformation/' + req.params.tid).once('value', (data) => {res.send(data);});
  });
});

app.listen(5000, () => {
  console.log('Server is running. On Port 5000');
});
