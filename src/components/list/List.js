import React, {useRef, useState} from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import FavouriteButton from "./actionButtons/FavouriteButton";
import AddToPlaylistBtn from "./actionButtons/AddToPlaylistBtn";
import './list.css';


export default function List(props){


    const scrollList = useRef(null);

    const {userPlaylists} = useSelector((state) => state);

    const ListItems = props.items?.map((item) => {
        return(
            <div key={props.items?.indexOf(item)} className="listItem bounce">
            <img className="listItemImg" src={item?.images?.background}></img>
            {
                props.type==="song"
                &&
                <>
                 <FavouriteButton song={item}></FavouriteButton>
                 <AddToPlaylistBtn
                  song = {item}
                  userPlaylists = {userPlaylists}>
                 </AddToPlaylistBtn>
                </>
            }
            <h3 className="listItemTitle">{item?.title}</h3>
        </div>
        );
    })
   

    return (<div className="list">
        <div className="listHeader">
         <h1>{props.title}</h1>
         <hr></hr>
         <button className="headerBtn" onClick={() => scrollList.current.scrollLeft+=-500}>
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
         </button>
         <button className="headerBtn" onClick={() => scrollList.current.scrollLeft+=500}>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
         </button>
        </div>
        <div className="listItems" ref={scrollList}>
           {ListItems}
        </div>
        </div>);
}