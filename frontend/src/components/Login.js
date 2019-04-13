import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import '@material-ui/core';
import './styles/login.css';
import {Typography} from '@material-ui/core';

export class Login extends Component {
    responseGoogle = () => {
        setTimeout(() => {
            this.props.history.push('./dash');
        }, 2000);
    }
    render() {
        return (
            <div class="login-page">
                <Typography variant="h2">Delivrr</Typography>
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default withRouter(Login);
