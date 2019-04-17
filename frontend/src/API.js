const axios = require('axios');
const URL = 'http://127.0.0.1:5000';
axios.defaults.headers.post['Content-Type'] = 'application/JSON';

var tripData =  {
  "Desc":"",
  "Dimen":"12 x 12 x 12",
  "Name":"The Journey",
  "TID":2,
  "TimeA":"Now",
  "TimeL":"Later",
  "UserDestA":"SAI",
  "UserDestB":"LAX",
  "UserID":2,
  "Weight":12
}

var packageData = {
  "DName":"Alisa Rogers",
  "Desc":"Chocolate",
  "Dimen":"12 x 12 x 12",
  "PackageDID":1,
  "PackageID":0,
  "PLA":"123 Street",
  "PLB":"321 Street",
  "PackageName":"Awake Chocolate",
  "Received":0,
  "ReceiverID":2,
  "ReceiverName":"Will Tran",
  "SendeeID":0,
  "SendeeName":"Stanley Lee",
  "Sent":1,
  "TID":0,
  "Weight":12,
  "AdresseeEmail": "stanleylee91776@gmail.com",
  "AdresseePhone":"6262728111"
}

var userAcc = {
  "Drating":4.5,
  "Email":"stl005@ucsd.edu",
  "facebookUserId":0,
  "Name":"Stanley Lee",
  "Phone":"+16262728111",
  "SRRating":4.7,
  "UserID":0
}

const API = {
  getDatabase(){
    return axios.get(URL);
  },
  getProfile(id){
    return axios.get(URL + '/profile/' + id);
  },
  getPackage(id){
    return axios.get(URL+ '/package/' + id);
  },
  getTripInfo(id){
    return axios.get(URL + '/travel/' + id); 
  },
  getUserTrip(id){
    return axios.get(URL + '/travelInfo/' + id);
  },
  getPackageA(id){
    return axios.get(URL + '/getpackageA' + id);
  },
  getPackageB(id){
    return axios.get(URL + '/getpackageB' + id);
  },
  getPackageC(id){
    return axios.get(URL + '/getpackageC' + id);
  },
  getMail(id){
    return axios.get(URL + '/getmail/' + id);
  },
  addMail(body){
    return axios.post(URL + '/postmail', body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });; 
  },
  addUser(body){
    return axios.post(URL + '/postuser', body
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    );
  },
  addTrip(body){
    return axios.post(URL + '/posttrip', body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });; 
  }, 
  addPackage(body){
    return axios.post(URL + '/postcreatepack', body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  },
  updatePackage(id, body){
    return axios.post(URL + '/updatepackage/' + id, body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  },
  updateMail(id, body){
    return axios.post(URL + '/updatemail/ + id', body) 
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

// API.getDatabase().then((result)=>{
//   console.log(result['data'])
// });

export default API; 