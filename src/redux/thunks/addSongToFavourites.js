import * as ActionCreators from "../action/ActionCreators";




export const addSongToFavourites = (song) => (dispatch) => {

   var favourites = [];
   if(!localStorage.getItem('favourites')){
    favourites.push(song);

    localStorage.setItem('favourites', JSON.stringify(favourites))
    dispatch(ActionCreators.addFavourites(favourites));
   }else{
    favourites = JSON.parse(localStorage.getItem('favourites'));
    favourites.push(song);
    localStorage.setItem('favourites', JSON.stringify(favourites))
    dispatch(ActionCreators.addFavourites(favourites));
   }
}