import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, HashRouter , Link, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Container from './components/container/container';
import SecondContainer from './components/container/second_container';
import { store } from './components/redux/store/index';


const app = document.getElementById('app');


ReactDOM.render((<Provider store={store} >
    <HashRouter basename="/onus" >
        <Switch>
            <Route  path="/home" component={<Container />} />
            <Route  path="/user" render={() => < SecondContainer />} />
        </Switch>
    </HashRouter>
</Provider>), app)




