import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import { addSongToFavourites } from "../../../redux/thunks/addSongToFavourites";
import "../list.css";
import { useDispatch } from "react-redux";

export default function FavouriteButton(props){

    const dispatch = useDispatch();


    const [isHeartClicked, setHeartClicked] = useState(false);

    const addFavourite = (song) => {

       dispatch(addSongToFavourites(song))
        //chnage the color of heart button
        setHeartClicked(!isHeartClicked);
    }
    return (  <span className="addToFavourite" onClick={() => addFavourite(props.song)}>
    {
        isHeartClicked 
        ?
        <FontAwesomeIcon icon={faHeart} color={"red"}></FontAwesomeIcon>
        :
        <FontAwesomeIcon icon={farHeart}></FontAwesomeIcon>
    }
</span>);
}
