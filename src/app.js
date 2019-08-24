import React from 'react';
import ReactDOM from 'react-dom';
import {StoreProvider} from 'easy-peasy';
import store from './store/index';
import Root from './Root';


ReactDOM.render((
    <StoreProvider store={store}>
        <Root />
    </StoreProvider>
), document.getElementById('root'));