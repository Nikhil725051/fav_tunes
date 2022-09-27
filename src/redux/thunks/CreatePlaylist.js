import * as ActionCreators from "../action/ActionCreators";




export const createPlaylist = (playlistName) => (dispatch) => {

   var playlist = null;
   if(!localStorage.getItem('userPlaylist')){
    playlist = [
        {
            playlistName: playlistName,
            songs: []
        }
    ]

    localStorage.setItem('userPlaylist', JSON.stringify(playlist))
    dispatch(ActionCreators.addUserPlaylist(playlist));
   }else{
    playlist = JSON.parse(localStorage.getItem('userPlaylist'));
    playlist.push({
        playlistName: playlistName,
        songs: []
    });
    localStorage.setItem('userPlaylist', JSON.stringify(playlist))
    dispatch(ActionCreators.addUserPlaylist(playlist));
   }
}