import React, { Component } from 'react';
import Center from 'react-center';

import Title from '../title';
import JournalMain from './journal-main';
import JournalMonth from './journal-month';
import JournalWeek from './journal-week';
import JournalDay from './journal-day';


class JournalDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="col-md-3 col-md-offset-6" style={{ marginRight: 20, marginTop: 50 }}>
                    <Title />
                </div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-2">
                        {/* <JournalMain /> */}
                        {/* <JournalMonth /> */}
                        {/* <JournalWeek /> */}
                        <JournalDay/>

                    </div>
                </div>

            </div>
        )
    }
}

export default JournalDirectory;