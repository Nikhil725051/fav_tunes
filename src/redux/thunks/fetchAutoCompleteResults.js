import * as ActionCreators from "../action/ActionCreators";
import axios from "axios";



export const fetchAutoCompleteResults = (searchText) => (dispatch) => {

  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/auto-complete',
    params: {term: searchText, locale: 'en-US'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  axios(options).then(function (response) {
	dispatch(ActionCreators.addAutoCompleteResults(response.data.hints));
  }).catch(function (error) {
	console.error(error.message);
  });

 }