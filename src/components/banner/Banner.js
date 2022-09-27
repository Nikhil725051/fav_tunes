import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import './banner.css';


export default function Banner(){
    return(<div className="banner">
        <img className="bannerImg" src="audio_player.svg"></img>
        <div className="bannerText">
          <h3 className="bannerHeading">Your favourite tunes</h3>
          <p>
              All <FontAwesomeIcon icon={faSun} color={"yellow"}/> and all <FontAwesomeIcon icon={faMoon} color={"black"}/>
          </p>
        </div>
    </div>);
}