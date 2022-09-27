import * as ActionTypes from "../action/ActionTypes"

const userPlaylistReducer = (
    state = localStorage.getItem('userPlaylist') ? JSON.parse(localStorage.getItem('userPlaylist')) : [] ,
     action) => {
    switch(action.type){
        case ActionTypes.ADD_USER_PLAYLIST : 
             return(action.payload);
        default: 
              return state;      
    }
}

export default userPlaylistReducer;