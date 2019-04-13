import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationAction, MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/BarChart';
import AddIcon from '@material-ui/icons/Add';
import HistoryIcon from '@material-ui/icons/AttachMoney';
import Login from './components/Login';
import temp from './components/temp';
import './App.css';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            text: {
            backgroundColor: '#77c9d4',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 30,
            padding: '0 30px',
            margin: '20px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 14
            },
        },
        MuiBottomNavigation: {
            root: {
                backgroundColor: '#77c9d4',
            }
        },
        MuiBottomNavigationAction: {
            root: {
                color: '#000000',
            },
            iconOnly: {
                color: '#FF0000'
            },
            wrapper: {
                color: '#FFFFFF ',
            }
        },
    },
    MuiPickers: {
        root: {
            backgroundColor: '#77c9d4'
        },
    },
    typography: {
        useNextVariants: true,
        h2: {
            fontFamily: 'Montserrat',
            color: '#FFFFFF'
        }
    }
});

class App extends Component {
    state = {
        value: 'dash'
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router basename={process.env.PUBLIC_URL}>
                <Route exact strict path='/' render={() => <Login successfulLogin={ this.successfulLogin }/> }/>
                <Route strict path='/:page' render={() => 
                    <div className="page">
                        <Route exact path='/dash' component={temp} />
                        <Route path='/history' component={temp} />
                        <BottomNavigation value={this.state.value} onChange={this.handleChange} className="bottom-nav">
                            <BottomNavigationAction
                                label="Dashboard"
                                value="dash"
                                component={Link}
                                to="/dash"
                                icon={<DashboardIcon />}
                            />
                            <BottomNavigationAction
                                label="Add"
                                value="add"
                                component={Link}
                                to="/add"
                                icon={<AddIcon />}
                            />
                            <BottomNavigationAction
                                label="Spending"
                                value="history"
                                component={Link}
                                to="/history"
                                icon={<HistoryIcon />}
                            />
                        </BottomNavigation>
                    </div>
                    } />
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
