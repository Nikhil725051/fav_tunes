import * as ActionCreators from "../action/ActionCreators";
import axios from "axios";



export const fetchSongs = () => (dispatch) => {

  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: {key: '484129036', locale: 'en-US'},
    headers: {
      'X-RapidAPI-Key': '172fdc7bddmsh9af7a61493fbeedp181d42jsnd76cb64ca8ab',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  axios(options).then(function (response) {
	dispatch(ActionCreators.addSongs(response.data.tracks));
  }).catch(function (error) {
	console.error(error.message);
  });

 }