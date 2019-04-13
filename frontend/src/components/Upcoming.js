import React, { Component } from 'react';
import {Typography} from '@material-ui/core';
import UpcomingPanel from './UpcomingPanel';
import './styles/upcoming.css';

const data = [
    {
        "Name": "Trip To Paris",
        "UserID": 1,
        "TID": 0,
        "UserDestinationA": "Airport 1",
        "UserDestinationB": "Airport 2",
        "Time Leave": "15:30:00",
        "Time Arrival": "15:30:00",
        "Weight": 12,
        "Dimensions": "12 x 12 x 12",
        "Description": "This is like a really long description so it doesn't look absolutely disgusting"
    },
    {
        "Name": "Trip To Baris",
        "UserID": 1,
        "TID": 0,
        "UserDestinationA": "Airport 1",
        "UserDestinationB": "Airport 2",
        "Time Leave": "15:30:00",
        "Time Arrival": "15:30:00",
        "Weight": 12,
        "Dimensions": "12 x 12 x 12",
        "Description": "Paris"
    },
    {
        "Name": "Trip To Caris",
        "UserID": 1,
        "TID": 0,
        "UserDestinationA": "Airport 1",
        "UserDestinationB": "Airport 2",
        "Time Leave": "15:30:00",
        "Time Arrival": "15:30:00",
        "Weight": 12,
        "Dimensions": "12 x 12 x 12",
        "Description": "Paris"
    },
];
export class Upcoming extends Component {
    state = {
        trips: [<Typography variant="h3" key={1}>No Trips</Typography>],
    };
    componentDidMount(){
        this.display();
    }
    display = () => {
        let newtrips = data.map((e, i) => {
            console.log(e, i );
            return (<UpcomingPanel key={i} data={e}/>);
        });
        this.setState({
            trips: newtrips,
        });
    };
    render() {
        return (
        <div>
            <div className="title-top">
                <Typography variant="h3">UPCOMING</Typography>
            </div>
            <div id="upcoming-list">
                {this.state.trips}
            </div>
        </div>
        )
    }
}

export default Upcoming
