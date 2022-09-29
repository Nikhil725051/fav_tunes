import * as ActionCreators from "../action/ActionCreators";
import axios from "axios";



export const fetchFeaturedPlaylist = () => (dispatch) => {

  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  axios(options).then(function (response) {
	dispatch(ActionCreators.addFeaturedPlaylist(response.data.tracks));
  }).catch(function (error) {
	console.error(error.message);
  });

 }