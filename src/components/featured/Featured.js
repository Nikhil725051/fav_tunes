import React from "react";
import {useSelector} from 'react-redux';
import List from "../list/List"

export default function Featured(){
    const {featuredPlaylist} = useSelector((state) => state);

    return(<List type={"playlist"} title={"Featured playlists"} items = {featuredPlaylist}></List>);
}

