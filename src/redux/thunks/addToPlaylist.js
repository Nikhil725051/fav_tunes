import * as ActionCreators from "../action/ActionCreators";


export const addToPlaylist = (song, playlistIndex) => (dispatch) => {
    const playlists = JSON.parse(localStorage.getItem('userPlaylist'))
    playlists[playlistIndex]?.songs.push(song)
    localStorage.setItem('userPlaylist', JSON.stringify(playlists));
    dispatch(ActionCreators.addUserPlaylist(playlists));
}