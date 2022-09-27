import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAutoCompleteResults } from "../../redux/thunks/fetchAutoCompleteResults";
import './searchBar.css';


export default function SearchBar(){


    const [emptyInput, setInputEmpty] = useState(true);
    const dispatch = useDispatch();
    const {autoCompleteResults} = useSelector((state) => state);
    console.log(autoCompleteResults)
    const handleInputChange = (e) => {
      if(e.target.value)
      {
        dispatch(fetchAutoCompleteResults(e.target.value));
        setInputEmpty(false);
      }else{
        setInputEmpty(true);
      }
    }

    return(<div className="SearchBar">
       <div className="searchBarItem">
         <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass}></FontAwesomeIcon>
         <input name="searchSong" onChange={(e) => handleInputChange(e)} className="searchInput" placeholder="What do you want to listen to?"></input>
       </div>
      {
        !emptyInput
        &&
        <div className="searchResults">
          {
            autoCompleteResults?.map((result) => {
              return(
                <span key={autoCompleteResults.indexOf(result)} className="songName">{result?.term}</span>
              );
            })
          }
        </div>
      }
    </div>)
}