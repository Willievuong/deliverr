import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import './styles/schedule.css';

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
        
        </div>
      </div>
    );
  }
}

export default Schedule;