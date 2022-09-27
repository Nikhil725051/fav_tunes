import * as ActionTypes from "../action/ActionTypes"

const songReducer = (state = [], action) => {
    switch(action.type){
        case ActionTypes.ADD_SONG : 
             return(action.payload);
        default: 
              return state;      
    }
}

export default songReducer;