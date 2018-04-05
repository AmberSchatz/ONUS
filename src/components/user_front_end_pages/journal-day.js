import React, { Component } from 'react';
import BoxLink from './box-link';
import BoxLinkSmall from './box-link-sm';
import Title from './title';
import Header from './header';
import DataDashboard from './data-dashboard';


class JournalDay extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Header />
                    <p>date: Day of the week</p>
                </div>


                <div className="row">

                <div className="card col-md-3 entryCard" >
                    <div className="container">
                        <h3>Water</h3>
                        <p>user saved data</p>                       
                    </div>

                </div>

                <div className="card col-md-3 entryCard">
                    <div className="container">
                        <h3>Exercise</h3>
                        <p>user saved data</p>                       
                    </div>
                </div>

                <div className="card col-md-3 entryCard">
                    <div className="container">
                        <h3>Diet</h3>
                        <p>user saved data</p>                       
                    </div>
                </div>

                <div className="row">

                    <div className="card col-md-3 entryCard">
                        <div className="container">
                            <h3>Steps</h3>
                            <p>user saved data</p>                       
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div className="container">
                            <h3>Sleep</h3>
                            <p>user saved data</p>                       
                        </div>
                    </div>

                    <div className="card col-md-3 entryCard">
                        <div className="container">
                            <h3>Meditation</h3>
                            <p>user saved data</p>                       
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="card col-md-3 entryCard">
                        <div className="container">
                            <h3>Budget</h3>
                            <p>user saved data</p>                       
                        </div>
                    </div>

                    <div className="card col-md-6 positivityCard">
                        <div className="container">
                            <h3>Positivity</h3>
                            <p>user saved data</p>                       
                        </div>
                    </div>

                </div>

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

export default JournalDay;