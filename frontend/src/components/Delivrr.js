import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import './styles/schedule.css';

class Delivrr extends React.Component {
  state = {
    name: '',
    departure: '',
    arrival: '',
    trip: '',
    airport1: '',
    airport2: '',
    description: '\n\n\n',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

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
            value={this.state.address1}
            onChange={this.handleChange('address1')}
          />

          <TextField
            className="address margin"
            variant="outlined"
            label="Arrival Date"
            value={this.state.address2}
            onChange={this.handleChange('address2')}
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

        </div>
      </div>
    );
  }
}

Delivrr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Delivrr;