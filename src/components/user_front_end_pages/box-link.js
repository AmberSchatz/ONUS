import React, { Component } from 'react';
import Center from 'react-center';
import Header from './header';


class BoxLink extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    daysOfWeek() {

        if (this.props.id === '1') {
            return (
                <Header titleText='Monday'/>
            )
        }
        else if (this.props.id === '2') {
            return (
                <Header titleText='Tuesday'/>
            )
        }
        else if (this.props.id === '3') {
            return (
                <Header titleText='Wednesday'/>
            )
        }
        else if (this.props.id === '4') {
            return (
                <Header titleText='Thursday'/>
            )
        }
        else if (this.props.id === '5') {
            return (
                <Header titleText='Friday'/>
            )
        }
        else if (this.props.id === '6') {
            return (
                <Header titleText='Saturday'/>
            )
        }
        else if (this.props.id === '7') {
            return (
                <Header titleText='Sunday'/>
            )
        }

    }
    render() {
        return (
            <div className="col-md-2 card"id="boxLinkStyle">
                <Center>
                <p>{this.daysOfWeek}</p>
                </Center>
            </div>

        )
    }
}

export default BoxLink;