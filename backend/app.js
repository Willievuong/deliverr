//Express
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')({origin: true});
var config = require('./config')
var fbconfig = require('./fbconfig')
var sendgridApi = require ('./sendgridApi')

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
});

// ALL THE POSTS

app.post('/postmail', (req, res) => {
  var profile = req.body
  console.log(profile)
  firebase.database().ref('EmailLink/' + makeid(5)).set({
    PackageID: profile["PackageID"],
    Clicked: profile["Clicked"]
  }).then(() => {
    res.send("It wooorks")
  });
});

app.post('/updatemail/:mailid', (req, res) => {
  var profile = req.body
  firebase.database().ref('EmailLink/' + req.params.mailid).set({
    PackageID: profile["PackageID"],
    Clicked: profile["Clicked"]
  }).then(() => {
    res.send("It wooorks")
  });
});

app.post('/postuser', (req, res) => {
  var accList = {}
  var i = 0
  firebase.database().ref('/UserAccount').once('value', (data) => {
  accList = data.val(); }).then(() => {

  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){
        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  //res.send(array)
  }).then(()=>{
    var newTid = i + 1;
    var profile = req.body;
    console.log("In last part")

    firebase.database().ref('UserAccount/' + i.toString()).set({
      Drating: profile["Drating"],
      Email: profile["Email"],
      facebookUserId: profile["facebookUserId"],
      Name: profile["Name"],
      Phone: profile["Phone"],
      SRRating: profile["SRRating"],
      UserID: makeid(5)
    }).then(() => {
      res.send("It wooorks")
    });
  })

});

app.post('/posttrip', (req, res) => {
  var accList = {}
  var i = 0
  firebase.database().ref('/TravelInformation').once('value', (data) => {
  accList = data.val(); }).then(() => {

  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){
        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  //res.send(array)
  }).then(()=>{
    var newTid = i + 1;
    var profile = req.body;
    console.log("In last part")

    firebase.database().ref('TravelInformation/' + i.toString()).set({
      Desc: profile["Desc"],
      Dimen: profile["Dimen"],
      Name: profile["Name"],
      TID: makeid(5),
      TimeA: profile["TimeA"],
      TimeL: profile["TimeL"],
      UserDestA: profile["UserDestA"],
      UserDestB: profile["UserDestB"],
      UserID: profile["UserID"],
      Weight: profile["Weight"]
    }).then(() => {
      res.send("It wooorks")
    });
  })

});

app.post('/postcreatepack', (req, res) => {
  var accList = {}
  var i = 0
  firebase.database().ref('/TravelInformation').once('value', (data) => {
  accList = data.val(); }).then(() => {

  var loopBool = true
  while(loopBool) {
    if (accList[i.toString()]){
        i++;
    }else{
      loopBool = false;
      break;
    }
  }
  //res.send(array)
  }).then(()=>{
    var newTid = i + 1;
    var profile = req.body;
    console.log("In last part")
    firebase.database().ref('Package/' + i.toString()).set({
      DName: profile["DName"],
      Desc:  profile["Desc"],
      Dimen:  profile["Dimen"],
      PackageDID:  profile["Package DID"],
      PackageID: makeid(5),
      PLA: profile["PLA"],
      PLB: profile["PLB"],
      PackagName: profile["Package Name"],
      Received: profile["Received"],
      ReceiverID: profile["Receiver ID"],
      ReceiverName: profile["Receiver Name"],
      SendeeID: profile["Sendee ID"],
      SendeeName: profile["Sendee Name"],
      Sent: profile["Sent"],
      TID: profile["TID"],
      Weight: profile["Weight"]
    }).then(() => {
      res.send("It wooorks")
    });
  })

});

app.post('/updatepackage/:packageindex', (req, res) => {
  var profile = req.body
  firebase.database().ref('package/' + req.params.packageindex).set({
      DName: profile["DName"],
      Desc:  profile["Desc"],
      Dimen:  profile["Dimen"],
      PackageDID:  profile["Package DID"],
      PackageID: profile["PackageID"],
      PLA: profile["PLA"],
      PLB: profile["PLB"],
      PackagName: profile["Package Name"],
      Received: profile["Received"],
      ReceiverID: profile["Receiver ID"],
      ReceiverName: profile["Receiver Name"],
      SendeeID: profile["Sendee ID"],
      SendeeName: profile["Sendee Name"],
      Sent: profile["Sent"],
      TID: profile["TID"],
      Weight: profile["Weight"]
  }).then(() => {
    res.send("It wooorks")
  });
});


app.listen(5000, () => {
  console.log('Server is running. On Port 5000');
  //sendgridApi("wpvuong@ucsd.edu", "Whoooa", "Drew Che", "https://c9a7fd17.ngrok.io");
});
