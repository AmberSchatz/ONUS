import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoxLink from '../box-link';
import BoxLinkSmall from '../box-link-sm';
import Title from '../title';
import Header from '../header';
import DataDashboard from '../data-dashboard';


class JournalDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:'3-3-18',
            dayOfWeek: 'Monday',
        }
    }
    render() {
        return (
<div className="row">
                <div className="col-md-12">
                    <Header headerText={this.state.dayOfWeek} />
                    <p>{this.state.date}</p>
                </div>


                <div className="row">

                    <div className="card col-md-3 entryCard" >
                        <div>
                            <h3>Water</h3>
                            <p>user saved data</p>
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Exercise</h3>
                            <p>user saved data</p>
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Diet</h3>
                            <p>user saved data</p>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Steps</h3>
                            <p>user saved data</p>
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Sleep</h3>
                            <p>user saved data</p>
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Meditation</h3>
                            <p>user saved data</p>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="card col-md-3 entryCard">
                        <div>
                            <h3>Budget</h3>
                            <p>user saved data</p>
                        </div>
                    </div>

                    <div className="card col-md-6 positivityCard">
                        <div>
                            <h3>Positivity</h3>
                            <p>user saved data</p>
                        </div>
                    </div>

                </div>

                < div className="row" >
                    <div className="col-md-12">
                        <DataDashboard />
                    </div>
                </div >

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


export default connect(mapStateToProps)(JournalDay);