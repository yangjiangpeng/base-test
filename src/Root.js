import React ,{useCallback} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';
import PrivateRouter from './components/PrivateRouter'
import About from './pages/About';
import Login from './pages/Login';
export default function Router(){
    return(
        <BrowserRouter>
           <PrivateRouter path='/' exact component={About}></PrivateRouter>
           <Route path ='/login' component={Login} />
        </BrowserRouter>
    );
}