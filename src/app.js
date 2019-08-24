import React from 'react';
import ReactDOM from 'react-dom';
import {StoreProvider} from 'easy-peasy';
import store from './store/index';
import Router from './Router';


ReactDOM.render((
    <StoreProvider store={store}>
        <Router />
    </StoreProvider>
), document.getElementById('root'));