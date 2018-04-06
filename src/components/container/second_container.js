import React from 'react';

import { Link, Switch, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import Center from 'react-center';


// USER FRONT END PAGES IMPORTS //
import UserSideBarMenu from '../user_front_end_pages/user-sidebar-menu';

import UserMainPage from '../user_front_end_pages/user-main-page';
import SettingsPage from '../user_front_end_pages/settings-page';


import JournalDirectory from '../user_front_end_pages/journal_front_end/journal-directory';
import PlannerDirectory from '../user_front_end_pages/planner_front_end_pages/planner-directory';

// USER FRONT END PAGES IMPORTS END //



class SecondContainer extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <UserSideBarMenu />
                <div>
                    <div className="container">

                        <Switch>
                            <Route path="/user" component={UserMainPage} />
                            <Route path="/settings" component={SettingsPage} />
                            <Route path="/journal_directory" component={JournalDirectory} />
                            <Route path="/planner_directory" component={PlannerDirectory} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
       
    }
}

export default SecondContainer