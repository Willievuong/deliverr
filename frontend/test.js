const axios = require('axios');
const URL = 'http://127.0.0.1:5000/posttrip';
axios.defaults.headers.post['Content-Type'] = 'application/JSON';

var data = {
  "Name": "Trip back to the great wild",
  "UserID": 1,
  "TID": 0,
  "UserDestinationA": "Kansas" ,
  "UserDestinationB": "Airport 2",
  "Time Leave": "15:30:00",
  "Time Arrival": "15:30:00",
  "Weight": 12,
  "Dimensions": "12 x 12 x 12",
  "Description": "This is like a really long description so it doesn't look absolutely disgusting"
}

const API = {
  getPackage(){

  },

  getURL(){
    return axios.get(URL);
  },

  saveTrip(){
    return axios.post(URL, data).then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
      //console.log(error);
    });;
  }

}

// API.getURL().then((result)=>{
//   console.log(result['data'])
// });

API.saveTrip().then((result) =>{
  console.log(result);
})

// export default API; 