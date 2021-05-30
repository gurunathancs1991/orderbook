// reducers.js

import { UPDATE_DATA, INIT_DATA} from './actions';

const initialState = {
    data: [],
    length: 20,
    delay: 1000,
    timeStamp: null   
}

export default function BookReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch(action.type){

        case INIT_DATA:

            let initData = action.payload.filter((m)=>{return m[2] >0});
            state.data = initData.length > state.length ? initData.slice(0,state.length) : initData;
            break;   

        case UPDATE_DATA:
           
            if(state.timeStamp == null){
                state.timeStamp = new Date().getTime();
                if(state.data.length >= state.length && action.payload.length == 1){
                    if(action.payload[0][2]>0){
                        state.data.unshift(action.payload[0]);
                        state.data.pop();
                        state.data = [...state.data];
                    } else {
                        state.timeStamp = null;
                    }                   
                }
            } else {
                let now = new Date().getTime()
                if(now - state.timeStamp > state.delay){
                    state.timeStamp = null;
                }
            }
           
            break;  
        
    }

    return state
}