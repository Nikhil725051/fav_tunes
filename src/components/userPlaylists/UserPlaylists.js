import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreatePlaylistInput from "../createPlaylistInput/createPlaylistInput";
import './userPlaylists.css';


export default function UserPlaylists(){


    const [isInputModalOpen, setInputModalOpen] = useState(false);
    const {userPlaylists} = useSelector((state) => state);

    console.log(userPlaylists);

    return(<div className="userPlaylists">
        <button className="createNew" onClick={() => setInputModalOpen(true)}><span className="addBtn">+</span>Create a new playlist</button>
        {
            setInputModalOpen
            &&
            <CreatePlaylistInput
             isInputModalOpen={isInputModalOpen}
             setInputModalOpen={setInputModalOpen}>
            </CreatePlaylistInput>
        }
        {
            userPlaylists.map((playlist) => {
                return(
                    <div className="userPlaylistItems">
                    <img
                     className="playlistImage"
                      src={playlist?.songs.length>0
                      ? 
                      playlist?.songs[0]?.images?.background 
                      :
                      "https://via.placeholder.com/500.png?text=Add%20+songs"}>
                      </img>
                   <div className="playlistText">
                     <span>{playlist?.playlistName}</span>
                     <span>{playlist?.songs.length} songs</span>
                   </div>
                    <Link to={`/${userPlaylists.indexOf(playlist)}`} className="addSongsBtn">+ Add Songs</Link>
                </div>
                );
            })
        }
    </div>);
}


