import * as ActionTypes from "../action/ActionTypes"
import { songs } from "../../testData";

const favouritesReducer = (
    state = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [] ,
    action) => {
    switch(action.type){
        case ActionTypes.ADD_FAVOURITES : 
             return(action.payload);
        default: 
              return state;      
    }
}

export default favouritesReducer;