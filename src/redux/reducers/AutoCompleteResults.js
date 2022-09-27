import * as ActionTypes from "../action/ActionTypes"

const autoCompleteResultReducer = (state = [], action) => {
    switch(action.type){
        case ActionTypes.ADD_AUTOCOMPLETE_RESULTS : 
             return(action.payload);
        default: 
              return state;
    }
}

export default autoCompleteResultReducer;