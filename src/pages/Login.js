import React ,{useCallback} from 'react';
import {useStoreActions} from 'easy-peasy';

export default function Login(props){
    const setLogin = useStoreActions(actions=>actions.auth.setLogin);
    const onSetLogin = ()=>{
        setLogin();
        props.history.push('/');
    }

    return (
      <button onClick={onSetLogin}>login</button>
    );
  }