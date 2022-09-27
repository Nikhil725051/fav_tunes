import * as ActionTypes from "./ActionTypes";

export const addSongs = (songs) => ({
    type: ActionTypes.ADD_SONG,
    payload: songs
});

export const addFeaturedPlaylist = (featuredPlaylist) => ({
    type: ActionTypes.ADD_FEATURED_PLAYLIST,
    payload: featuredPlaylist
});

export const addUserPlaylist = (playlist) => ({
    type: ActionTypes.ADD_USER_PLAYLIST,
    payload: playlist
});

export const addAutoCompleteResults = (autoCompleteResults) => ({
    type: ActionTypes.ADD_AUTOCOMPLETE_RESULTS,
    payload: autoCompleteResults
});

export const addFavourites = (favourites) => ({
    type: ActionTypes.ADD_FAVOURITES,
    payload: favourites
});


