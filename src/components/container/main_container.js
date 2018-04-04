import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Center from 'react-center';

import Container from './container'
import SecondContainer from './second_container';


class MainContainer extends React.Component {
    render() {
        return (
            <div>

                <HashRouter basename="/onus" >
                    <Switch>
                        <Route path="/home" component={<Container />} />
                        <Route path="/user" render={() => < SecondContainer />} />
                    </Switch>
                </HashRouter>

            </div>
        )
    }
}

export default MainContainer