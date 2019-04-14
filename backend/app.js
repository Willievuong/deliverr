//Express
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')({origin: true});
var config = require('./config')
var fbconfig = require('./fbconfig')

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


//LOGIN IS NOT TESTED
app.get('/login', (req, res) => {
  const fbRes = req.body.fbRes;
  const fUid = fbRes.userID;
  const accessToken = fbRes. accessToken;

  axios.get(`https://graph.facebook.com/debug_token?input_token=${accessToken}&access_token=${appId}|${appSecret}`).then(res => {
    if(res.data.data.is_valid){
          //Check Firebase Database
          var accList;
          firebase.database().ref('/UserAccount').once('value', (data) => {
            accList = data.val(); }).then(() => {
              var i = 0
              var loopBool = true
              var userAcc = {}
              while(loopBool) {
                if (accList[i.toString()]){
                  if(accList[i.toString()]["facebookUserId"] == fUid){
                    userAcc = accList[i.toString()]
                    res.status(200).json({ userId: user.id });
                    loopBool = false
                    break;
                  }
                    i++;
                }else{
                  loopBool = false;
                  break;
                }
              }
              res.status(400).json({
                msg: "Authentication failed, User Does Not Exist"
              })
            })

    }
  })

})

app.get('/profile/:userid', (req, res) => {
  var userid = req.params.userid;
  var array = [];
  var accList = {}
  firebase.database().ref('/UserAccount').once('value', (data) => {
  accList = data.val(); }).then(() => {
  var i = 0
  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){
      if(accList[i.toString()]["UserID"] == userid){
        var user = accList[i.toString()]
        res.send(user)
        loopBool = false;
        break;
      }
        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  res.send(array)});
});

app.get('/package/:packageid', (req, res) => {
  var packageid = req.params.packageid;
  var array = [];
  var accList = {}
  firebase.database().ref('/Package').once('value', (data) => {
  accList = data.val(); }).then(() => {
  var i = 0
  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){
      if(accList[i.toString()]["Package ID"] == packageid){
        var user = accList[i.toString()]
        res.send(user)
        loopBool = false;
        break;
      }
        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  res.send(array)});
});

app.get('/travel/:tid', (req, res) => {
  var tid = req.params.tid;
  var array = [];
  var accList = {}
  firebase.database().ref('/TravelInformation').once('value', (data) => {
  accList = data.val(); }).then(() => {
  var i = 0
  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){
      if(accList[i.toString()]["TID"] == tid){
        var user = accList[i.toString()]
        res.send(user)
        loopBool = false;
        break;
      }
        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  res.send(array)});
});

app.get('/travelInfo/:userid', (req, res) => {
  var userid = req.params.userid;
  var array = [];
  var accList = {};
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

app.get('/getmail/:mailid', (req, res) => {
return cors(req, res, () => {
  firebase.database().ref('/EmailLink/' + req.params.mailid).once('value', (data) => {res.send(data);});
  });
}

// app.post('/postmail, (req, res) => {
//   var profile = req.body
//   console.log(profile)

// }

// app.post('/postemail/:recieverid', (req, res) => {
//   var recieverid = req.params.recieverid;
//   var array = [];
//   var accList = {}
//   firebase.database().ref('/Package').once('value', (data) => {
//   accList = data.val(); }).then(() => {
//   var i = 0
//   var loopBool = true
//   while(loopBool) {
//     if (accList[i.toString()]){

//       if(accList[i.toString()]["Receiver ID"] == recieverid){
//         console.log(accList[i.toString()])
//         array.push(accList[i.toString()])
//       }
//         i++;
//     }else{
//       loopBool = false;
//       break;
//     }
//   }
//   res.send(array)});
// });

// app.post('/addprofile', (req, res) => {
//   var profile = req.body
//   console.log(profile)
//   return cors(req, res, (req, res) => {
//     firebase.database().ref('/UserAccount').([{
//     "Drating" : profile["Drating"],
//     "Email" : profile["Email"],
//     "FB Token" : "TEST WORKS",
//     "Name" : profile["Name"],
//     "Phone" : profile["Phone"],
//     "SR Rating" : 4.7,
//     "UserID" : makeid(5)
//     }])

//   })
// });
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

 //   "EmailLink": {
 //     "584A2": {
 //        "PackageID": 0,
 //        "Clicked": 1
 //    },
 //    {
 //        "284A2": {
 //           "PackageID": 1,
 //           "Clicked": 0
 //        }
 //     },
 //     {
 //        "544A2": {
 //           "PackageID": 2,
 //           "Clicked": 0
 //           }
 //     }
 // }
