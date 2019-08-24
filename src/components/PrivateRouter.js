import React from 'react';
import { Route,Redirect} from 'react-router-dom';
import {useStoreState} from 'easy-peasy';

export default({ component: Component, ...rest }) =>{
    const isAuted = useStoreState(state=>state.auth.isAuthed);
    console.log(isAuted);
    return (
      <Route
        {...rest}
        render={props =>
          isAuted ? (
            <Component {...props} />
          ) : (
 
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }