import React from "react";
import { useSelector } from "react-redux";
import './favourites.css'


export default function Favourites(){

    const {favourites} = useSelector((state) => state);

    return (<>
    <h1 className="favouritesHeading">Favourites</h1>
    <div className="favourites">
        {favourites.length===0
        ?
        <p className="favouritesText">All your favourites will appear here.</p>
        :
        favourites.map((song) => {
            return(
                <div className="favouritesItem">
                <img className="itemImg" src={song?.images?.background}></img>
                <p className="itemTitle text-center">{song?.title}</p>
                </div>
            );
        })
      }
    </div>
    </>);
}