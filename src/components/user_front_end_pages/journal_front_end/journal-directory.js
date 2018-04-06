import React, { Component } from 'react';
import Center from 'react-center';

import Title from '../title';
import JournalMain from './journal-main';
import JournalMonth from './journal-month';
import JournalWeek from './journal-week';
import JournalDay from './journal-day';
import NewEntry from '../new-entry';



class JournalDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Center>
                    <div style={{ paddingBottom: 170 }} >
                        <h1 style={{ fontSize: 80 }} id="front-pageText"  >Journal</h1>
                    </div>
                </Center>
                <div className="row">
                    <div className="col-md-10 col-md-offset-2">
                        {/* <JournalMain /> */}
                        {/* <JournalMonth /> */}
                        {/* <JournalWeek /> */}
                        <JournalDay />
                        {/* <NewEntry/> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default JournalDirectory;