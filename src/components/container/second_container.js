import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Center from 'react-center';


// USER FRONT END PAGES IMPORTS //

import UserMainPage from '../user_front_end_pages/user-main-page';
import SettingsPage from '../user_front_end_pages/settings-page';
import UserSideBarMenu from '../user_front_end_pages/user-sidebar-menu';

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
                    <Switch>
                        <Route exact path="/user" render={() => < UserMainPage />} />
                        <Route path="/user/user_settings" render={() => < SettingsPage />} />
                    </Switch>
                </div>
            </div>

        )
    }
}

export default SecondContainer