import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserPlaylists from "../../components/userPlaylists/UserPlaylists";
import CreatePlaylistInput from "../../components/createPlaylistInput/createPlaylistInput";
import './playlists.css';


export default function Playlists(){


    const {userPlaylists} = useSelector((state) => state);

    console.log(userPlaylists);

    const [isInputModalOpen, setInputModalOpen] = useState(false);

    return (
       <>
         {
            userPlaylists.length===0
            ?
            <div className="createPlaylist">
                <div>No Playlist created. <br></br>
                  <button className="createBtn" onClick={() => setInputModalOpen(true)}>+ Create a playlist</button>
                </div>
                {isInputModalOpen
                &&
                <CreatePlaylistInput
                isInputModalOpen={isInputModalOpen}
                setInputModalOpen={setInputModalOpen}>
                </CreatePlaylistInput>
                }
            </div>
            :
            <UserPlaylists></UserPlaylists>
         }
    </>);
}