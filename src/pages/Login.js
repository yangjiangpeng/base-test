import React ,{useCallback} from 'react';
import {useStoreActions} from 'easy-peasy';

export default function Login(){
    const setLogin = useStoreActions(actions=>actions.auth.setLogin);
    const onSetLogin = ()=>{
        setLogin();
    }

    return (
      <button onClick={onSetLogin}>login</button>
    );
  }