import React, { Component } from 'react';
import './styles/UpcomingPanel.css';
import {Card, Collapse} from '@material-ui/core';

export class UpcomingPanel extends Component {
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
                {parseInt(d['TimeA'].substr(0, 2))%12 + d['TimeA'].substr(2, 3)}
                <br />
                -
                <br />
                {parseInt(d['TimeL'].substr(0, 2))%12 + d['TimeL'].substr(2, 3)}
            </div>
            <div className="panel-description">
                <span>{d['Name']}</span>
                <br />
                <br />
                {d['UserDestA']} to {d['UserDestB']}
                <br />
            </div>
            <Collapse className="expand" in={this.state.open}>
                Dimensions: { d['Dimen']}
                <br />
                <br />
                {d['Desc']}
            </Collapse>
        </Card>
        )
    }
}

export default UpcomingPanel;
