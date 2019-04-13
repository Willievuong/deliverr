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

var firebase = require('firebase-admin');
firebase.initializeApp(config);



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


app.listen(5000, () => {
  console.log('Server is running. On Port 5000');
});