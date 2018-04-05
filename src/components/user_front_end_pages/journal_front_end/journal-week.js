import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoxLink from '../box-link';
import BoxLinkSmall from '../box-link-sm';
import Title from '../title';
import Header from '../header';
import DataDashboard from '../data-dashboard';


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
                    <div>
                        <DataDashboard/>
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }

    console.log (user)
}


export default connect(mapStateToProps)(JournalWeek);