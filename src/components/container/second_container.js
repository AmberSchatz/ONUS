import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Center from 'react-center';


// USER FRONT END PAGES IMPORTS //

import UserMainPage from '../user_front_end_pages/user-main-page';
import SettingsPage from '../user_front_end_pages/settings-page';
import UserSideBarMenu from '../user_front_end_pages/user-sidebar-menu';

import JournalDirectory from '../user_front_end_pages/journal_front_end/journal-directory';
import PlannerDirectory from '../user_front_end_pages/planner_front_end_pages/planner-directory';


// USER FRONT END PAGES IMPORTS END //



class SecondContainer extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div   >
                <UserSideBarMenu />

                <div className="container-fluid">
                    <HashRouter  basename="/user" >
                        <Switch>
                            <Route path="/home" render={() => < UserMainPage />} />
                            <Route path="/settings" render={() => < SettingsPage />} />
                        </Switch>
                    </HashRouter>
                    <div className="col-md-12">
                        <JournalDirectory />
                        <PlannerDirectory />
                    </div>
                </div>
            </div>

        )
    }
}

export default SecondContainer