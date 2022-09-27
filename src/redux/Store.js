import {legacy_createStore as createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk";
import songReducer from "./reducers/songs";
import featuredPlaylistReducer from '../redux/reducers/FeaturedPlaylists';
import userPlaylistReducer from '../redux/reducers/userPlaylist'
import autoCompleteResultReducer from "./reducers/AutoCompleteResults";
import favouritesReducer from "./reducers/favouritesReducer";

const store = createStore(
    combineReducers({
        songs : songReducer,
        featuredPlaylist : featuredPlaylistReducer,
        userPlaylists : userPlaylistReducer,
        autoCompleteResults : autoCompleteResultReducer,
        favourites: favouritesReducer
    }),
    applyMiddleware(thunk)

);

export default store