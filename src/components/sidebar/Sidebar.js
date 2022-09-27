import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBarsStaggered, 
        faMagnifyingGlass, 
        faHeart, 
        faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './sidebar.css'


export default function Sidebar(){
    return(<div className="sidebar">
        <Link to='/' className="sidebarOption">
            <FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon>
            <span className="sideBarText">Home</span>
        </Link>
        <Link to='/search' className="sidebarOption">
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            <span className="sideBarText">Search</span>
        </Link>
        <Link to='/favourites' className="sidebarOption">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            <span className="sideBarText">Favourites</span>
        </Link>
        <Link to='/playlists' className="sidebarOption">
            <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>
            <span className="sideBarText">Playlists</span>
        </Link>
    </div>);
}