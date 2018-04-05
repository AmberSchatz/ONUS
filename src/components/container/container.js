import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Center from 'react-center';
import SecondContainer from './second_container';


// FRONT END PAGES IMPORTS //
import TopBar from '../front_end_pages/top-bar';
import Home from '../front_end_pages/home';
import About from '../front_end_pages/about';
import Blog from '../front_end_pages/blog';
import SignIn from '../front_end_pages/sign-in';
import SignUP from '../front_end_pages/sign-up';
// FRONT END PAGES IMPORT END //

// USER FRONT END PAGES IMPORTS //
// import UserMainPage from '../user_front_end_pages/user-main-page';
// import SettingsPage from '../user_front_end_pages/settings-page';

// USER FRONT END PAGES IMPORTS END //



class Container extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <TopBar />



                <div>
                    <div className="container" >
                        <Switch>
                            <Route path="/about" render={() => <About id="about" />} />
                            <Route path="/blog" render={() => <Blog id="blog" />} />
                            <Route path="/sign_in" render={() => <SignIn id="sign-in" />} />
                            <Route path="/sign_up" render={() => <SignUP id="sign-up" />} />
                        </Switch>
                    </div>
                </div>

            </div>

        )
    }
}

export default Container