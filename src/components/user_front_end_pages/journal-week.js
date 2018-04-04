import React, { Component } from 'react';
import BoxLink from './box-link';
import BoxLinkSmall from './box-link-sm';
import Title from './title';
import Header from './header';
import DataDashboard from './data-dashboard';


class JournalWeek extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Header />
                    <p>Week of: date</p>
                    
                </div>
                <div className="row">
                    <BoxLink />
                    <BoxLink />
                    <BoxLink />
                    <BoxLink />
                    <BoxLink />
                    <BoxLink />
                    <BoxLink />
                </div>

                CHART COMPONENTS NEEDED HERE
                <div className="row">
                <div className="">
                <DataDashboard/>
                </div>
                </div>

            </div>
        )
    }
}

export default JournalWeek;