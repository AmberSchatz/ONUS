import React, { Component } from 'react';
import BoxLink from '../box-link';
import BoxLinkSmall from '../box-link-sm';
import Title from '../title';
import Header from '../header';
import DataDashboard from '../data-dashboard';


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
                    <button className="btn pull-right">edit</button>
                </div>
                <div className="row">
            
                    COMPONENTS FOR DIFFRENT TYPES OF ENTRYS NEED TO GO HERE
                    
                    ENTRY TEMPLATS NEEDED ARE:
                    DIET
                    EXERCISE
                    WATER INTAKE
                    POSITIVITY 
                    MEDITATION
                    SLEEP
                    BUDGET

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