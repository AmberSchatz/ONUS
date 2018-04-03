import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Center from 'react-center';

// FRONT END PAGES IMPORTS //
import TopBar from './front_end_pages/top-bar';
import Home from './front_end_pages/home';
import About from './front_end_pages/about';
import Blog from './front_end_pages/blog';
import SignIn from './front_end_pages/sign-in';
import SignUP from './front_end_pages/sign-up';
// FRONT END PAGES IMPORT END //

// USER FRONT END PAGES IMPORTS //
import UserMainPage from './user_front_end_pages/user-main-page';
import SettingsPage from './user_front_end_pages/settings-page';

// USER FRONT END PAGES IMPORTS END //



class Container extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <Switch>
                        <Route exact path="/" render={() => <TopBar />} />
                    </Switch>

                    <div className="container" >
                        <Switch>
                            {/* <Route exact path="/" render={() => <Home title="Welcome" />} /> */}
                            <Route path="/about" render={() => <About title="About" />} />
                            <Route path="/blog" render={() => <Blog title="Blog" />} />
                            <Route path="/sign_in" render={() => <SignIn title="Sign In" />} />
                            <Route path="/sign_up" render={() => <SignUP title="Sign Up" />} />
                        </Switch>

                    </div>
                </div>
                <Switch>
                    <Route path="/user_main" render={() => < UserMainPage />} />
                    <Route path="/user_settings" render={() => < SettingsPage />} />
                </Switch>
            </div>

        )
    }
}

export default Container