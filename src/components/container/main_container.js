import React from 'react';

import { Link, Switch, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Center from 'react-center';

import Container from './container'
import SecondContainer from './second_container';


class MainContainer extends React.Component {
    render() {
        return (
            <div>

                {/* <Container /> */}
                <SecondContainer />

                {/* <HashRouter basename="/onus" >


                    <Switch>
                        <Route path="/onus" component={<Container />} />
                        <Route path="/user" component={< SecondContainer />} />
                    </Switch>

                </HashRouter> */}

            </div>
        )
    }
}

export default MainContainer