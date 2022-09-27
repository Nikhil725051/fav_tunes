import * as ActionTypes from "../action/ActionTypes"

const featuredPlaylistReducer = (state = [], action) => {
    switch(action.type){
        case ActionTypes.ADD_FEATURED_PLAYLIST : 
             return(action.payload);
        default: 
              return state;      
    }
}

export default featuredPlaylistReducer;