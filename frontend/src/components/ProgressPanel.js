import React, { Component } from 'react';
import {Card, Collapse} from '@material-ui/core';

export class ProgressPanel extends Component {
    state = {
        open: false
    }
    toggle = () => {
        this.setState(state => ({
            open: !state.open
        }));
    }
    render() {
        let d = this.props.data;
        return (
        <Card className="upcoming-panel" onClick={this.toggle}>
            <div className="panel-time">
                {parseInt(d['Time Arrival'].substr(0, 2))%12 + d['Time Leave'].substr(2, 3)}
                <br />
                -
                <br />
                {parseInt(d['Time Leave'].substr(0, 2))%12 + d['Time Leave'].substr(2, 3)}
            </div>
            <div className="panel-description">
                <span>{d['Name']}</span>
                <br />
                <br />
                {d['UserDestinationA']} to {d['UserDestinationB']}
                <br />
            </div>
            <Collapse className="expand" in={this.state.open}>
                Dimensions: { d['Dimensions']}
                <br />
                <br />
                {d['Description']}
            </Collapse>
        </Card>
        )
    }
}

export default ProgressPanel
