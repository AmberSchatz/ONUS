import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Container from './components/container';
import {store} from './components/redux/store/index';

const app = document.getElementById('app');


ReactDOM.render((<Provider store={store} >
    <BrowserRouter>
        <Container />
    </BrowserRouter>
</Provider>),app)

