import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';

import {TextField, Button} from '@material-ui/core';
import swal from 'sweetalert';
import './styles/schedule.css';
import API from '../API';

var URL = require('./URL')
const url = URL;
class Schedule extends React.Component {
  state = {
    name: '',
    password: '',
    weight: '',
    dimensions: '',
    email: '',
    phone1: '',
    phone2: '',
    address1: '',
    address2: '',
    description: '\n\n\n',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  sendInfo = () => {
    // let body = {
    //     "Desc": this.state.trip,
    //     "Dimen": this.state.dimensions,
    //     "Name": this.state.name,
    //     "TimeA": this.state.date1,
    //     "TimeL": this.state.date2,
    //     "UserDestA":this.state.address1,
    //     "UserDestB": this.state.address2,
    //     "UserID":0,
    //     "Weight":this.state.weight
    // };

    var body = {
      "DName":"Alisa Rogers",
      "Desc":this.state.description,
      "Dimen":"12 x 12 x 12",
      "PackageDID":1,
      "PackageID":0,
      "PLA": this.state.address1,
      "PLB":this.state.address2,
      "PackageName": this.state.name,
      "Received":0,
      "ReceiverID":2,
      "ReceiverName":"Will Tran",
      "SendeeID":0,
      "SendeeName":"Stanley Lee",
      "Sent":1,
      "TID":0,
      "Weight":12,
      "AdresseeEmail": this.state.email,
      "AdresseePhone":this.state.phone2
    }    
    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body)
    // }).then(resp => {
    //     swal("Success!", "Submitted info!", "success");
    // }).catch(err => {alert("u done goofed");})
    API.addPackage(body).then(() =>{
      console.log("Adding Package is Successful");
    }).catch((error) =>{
      console.log(error);
    })
  }
  render() {
    return (
      
      <div>
        <div className="container">
          <div className="row align-items-start">
            <p className="title-top">Schedule Delivery</p>
            <p className="description">Enter Package &<br/>Addressee Info</p>
            <hr size="1" width="90%" className="line"></hr>
          </div>

          <p className="addressee">Addressee Info.</p>

          <TextField
            className="name margin"
            variant="outlined"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
          />

          <TextField
            className="weight margin"
            variant="outlined"
            label="Phone"
            value={this.state.phone2}
            onChange={this.handleChange('phone2')}
          />

          <hr size="1" width="90%" className="line"></hr>

          <p className="addressee">Package Info.</p>

          <TextField
            className="name margin"
            variant="outlined"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
          />

          <TextField
            className="weight margin"
            variant="outlined"
            label="Weight"
            value={this.state.weight}
            onChange={this.handleChange('weight')}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />

          <TextField
            className="name margin"
            variant="outlined"
            label="Dimension"
            value={this.state.dimensions}
            onChange={this.handleChange('dimensions')}
            InputProps={{
              endAdornment: <InputAdornment position="end">in.</InputAdornment>,
            }}
          />

          <TextField
            className="weight margin"
            variant="outlined"
            label="Sender Phone"
            value={this.state.phone1}
            onChange={this.handleChange('phone1')}
          />

          <TextField
            className="address margin"
            variant="outlined"
            label="Origin City"
            value={this.state.address1}
            onChange={this.handleChange('address1')}
          />

          <TextField
            className="address margin"
            variant="outlined"
            label="Destination City"
            value={this.state.address2}
            onChange={this.handleChange('address2')}
          />

          <TextField
            multiline
            className="descriptions margin"
            variant="outlined"
            label="Description"
            value={this.state.description}
            onChange={this.handleChange('description')}
          />
            <div className="submit-button">
                <Button variant="outlined" className="submit" onClick={this.sendInfo}>submit</Button>
            </div>
        </div>
      </div>
    );
  }
}

export default Schedule;