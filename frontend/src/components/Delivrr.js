import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import './styles/schedule.css';
import swal from 'sweetalert';
import {Button} from '@material-ui/core';
import API from '../API';

var URL = require('./URL')
const url = URL + 'posttrip';
class Delivrr extends React.Component {
    state = {
        name: '',
        trip: '',
        address1: '',
        weight: '',
        address2: '',
        date1: '',
        date2: '',
        dimensions: '',
        description: '\n\n\n',
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    sendInfo = () => {
        let body = {
            "Desc": this.state.trip,
            "Dimen": this.state.dimensions,
            "Name": this.state.name,
            "TimeA": this.state.date1,
            "TimeL": this.state.date2,
            "UserDestA":this.state.address1,
            "UserDestB": this.state.address2,
            "UserID":0,
            "Weight":this.state.weight
        };
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(body)
        // }).then(resp => {
        //     swal("Success!", "Submitted info!", "success");
        // }).catch(err => {alert("u done goofed");})
        API.addTrip(body).then(() =>{
            console.log("Success in Posting Trip")
        }).catch((error) =>{
            console.log(error);
        })

    };
    render() {
        return (
        <div>
            <div className="container">
                <div className="row align-items-start">
                    <p className="title-top">Delivrr</p>
                    <p className="description">Enter Flight &<br />Luggage Info</p>
                    <hr size="1" width="90%" className="line"></hr>
                </div>

                <p className="addressee">Flight Info.</p>

                <TextField
                    className="name margin"
                    variant="outlined"
                    label="Trip Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
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
                    className="address margin"
                    variant="outlined"
                    label="Departure Date"
                    value={this.state.date1}
                    onChange={this.handleChange('date1')}
                />

                <TextField
                    className="address margin"
                    variant="outlined"
                    label="Arrival Date"
                    value={this.state.date2}
                    onChange={this.handleChange('date2')}
                />

                <hr size="1" width="60%" className="line"></hr>

                <p className="addressee">Package Info.</p>

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
                <div className="submit-button">
                    <Button variant="outlined" className="submit" onClick={this.sendInfo}>submit</Button>
                </div>
            </div>
        </div>
        );
    }
}
export default Delivrr;