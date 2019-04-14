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

function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

firebase.initializeApp({
 credential: firebase.credential.cert(serviceAccount),
 databaseURL: "https://deliverr-it-bitch.firebaseio.com"
});

app.get('/', (req, res) => {
  return cors(req, res, () => {
		 firebase.database().ref('/').once("value", (data) => {res.send(data);});

	});
})

app.get('/profile/:userid', (req, res) => {
  return cors(req, res, () => {
    console.log(req.params.userid)
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

app.get('/travelInfo/:userid', (req, res) => {
  var userid = req.params.userid;
  var array = [];
  var accList = {}
  firebase.database().ref('/TravelInformation').once('value', (data) => {
  accList = data.val(); }).then(() => {
  var i = 0
  var loopBool = true
  while(loopBool) {
    console.log("Helo")
    console.log(accList)
    console.log(accList[i.toString()])
    if (accList[i.toString()]){

      if(accList[i.toString()]["UserID"] == userid){
        console.log(accList[i.toString()])
        array.push(accList[i.toString()])
      }

        i++;
    }else{
      loopBool = false;
      break;
    }
  }


  res.send(array)});
});

app.get('/getpackageA/:sendeeid', (req, res) => {
  var sendeeid = req.params.sendeeid;
  var array = [];
  var accList = {}
  firebase.database().ref('/Package').once('value', (data) => {
  accList = data.val(); }).then(() => {
  var i = 0
  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){

      if(accList[i.toString()]["Sendee ID"] == sendeeid){
        console.log(accList[i.toString()])
        array.push(accList[i.toString()])
      }

        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  res.send(array)});
});

app.get('/getpackageB/:deliverid', (req, res) => {
  var deliverid = req.params.deliverid;
  var array = [];
  var accList = {}
  firebase.database().ref('/Package').once('value', (data) => {
  accList = data.val(); }).then(() => {
  var i = 0
  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){

      if(accList[i.toString()]["Package DID"] == deliverid){
        console.log(accList[i.toString()])
        array.push(accList[i.toString()])
      }

        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  res.send(array)});
});

app.get('/getpackageC/:recieverid', (req, res) => {
  var recieverid = req.params.recieverid;
  var array = [];
  var accList = {}
  firebase.database().ref('/Package').once('value', (data) => {
  accList = data.val(); }).then(() => {
  var i = 0
  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){

      if(accList[i.toString()]["Receiver ID"] == recieverid){
        console.log(accList[i.toString()])
        array.push(accList[i.toString()])
      }
        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  res.send(array)});
});

app.post('/addprofile', (req, res) => {
  var profile = req.body
  console.log(profile)
  return cors(req, res, () => {
    firebase.database().ref('/UserAccount').set({
    "Drating" : profile["Drating"],
    "Email" : profile["Email"],
    "FB Token" : "TEST WORKS",
    "Name" : profile["Name"],
    "Phone" : profile["Phone"],
    "SR Rating" : 4.7,
    "UserID" : makeid(5)
    })
  })
});
// app.post('/addprofile', (req, res) => {
//   // res.send(req.body)
//   var body = req.body
//   return cors(req, res, () => {

//     var newPostKey = firebase.database().ref().child('UserAccount').push().key;
//     var updates = {};
//     updates[UserAccount/UserID/ + newPostKey] = postData
//     firebase.database().ref('UserAccount').set(body, function(error) {
//       if (error) {
//         // The write failed...
//       } else {
//         // Data saved successfully!
//         res.send("Success")
//       }
//     });
//   });
// });


app.listen(5000, () => {
  console.log('Server is running. On Port 5000');
});
