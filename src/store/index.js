import { action, createStore} from 'easy-peasy';

const model ={
    auth:{
        isAuthed:false,
        setLogin: action(state=>{
            state.isAuthed = true;
        }),
        setLogout:action((state)=>{
            return {
                ...state,
                isAuthed:false
            }
        }),
    },
} 
export default createStore(model);