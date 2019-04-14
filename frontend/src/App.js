import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationAction, MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import ScheduleIcon from '@material-ui/icons/Schedule';
import UpcomingIcon from '@material-ui/icons/CalendarToday';
import HistoryIcon from '@material-ui/icons/History';
import ProgressIcon from '@material-ui/icons/HourglassFull';
import PlaneIcon from './components/Polygon.png';
import Login from './components/Login';
import Schedule from './components/Schedule';
import Upcoming from './components/Upcoming';
import Progress from './components/Progress';
import Delivrr from './components/Delivrr';
import './App.css';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            text: {
            backgroundColor: 'linear-gradient(to bottom, #77c9d4, #65c7c8, #58c4b9, #53c0a6, #57bc90);',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 30,
            padding: '0 30px',
            margin: '20px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: 14
            },
        },
        MuiBottomNavigation: {
            root: {
                backgroundColor: '#58c4b9',
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
        },
        h3: {
            fontSize: 30,
            fontFamily: 'Montserrat',
            color: '#665566'
        }
    }
});

class App extends Component {
    state = {
        value: 'schedule'
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
                        <Route path='/schedule' component={Schedule} />
                        <Route path='/delivrr' component={Delivrr} />
                        <Route path='/progress' component={Progress} />
                        <Route path='/upcoming' component={Upcoming} />
                        <BottomNavigation value={this.state.value} onChange={this.handleChange} className="bottom-nav">
                            <BottomNavigationAction
                                label="Schedule"
                                value="schedule"
                                component={Link}
                                to="/schedule"
                                icon={<ScheduleIcon />}
                            />
                            <BottomNavigationAction
                                label="Delivrr"
                                value="delivrr"
                                component={Link}
                                to="/delivrr"
                                icon={<img src={PlaneIcon} alt="Delivrr"/>}
                            />
                            <BottomNavigationAction
                                label="Upcoming"
                                value="upcoming"
                                component={Link}
                                to="/upcoming"
                                icon={<UpcomingIcon />}
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
