import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { axios } from 'axios';

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


class Container extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>

                <Route path="/" component={TopBar} />

                <div>
                    <div className="container" >

                        <Switch>

                            <Route path="/about" component={About} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/sign_in" component={SignIn} />
                            <Route path="/sign_up" component={SignUp} />
                            <Route path = "/user" component={userMainPage} />
                            
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container