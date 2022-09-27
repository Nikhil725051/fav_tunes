import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { addToPlaylist } from "../../../redux/thunks/addToPlaylist";
import { useParams} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import '../list.css';

export default function AddToPlaylistBtn(props){

     const {playlistIndex} = useParams();

    const [showModal, setShowModal] = useState(false);

    const [added, setAdded] = useState(false);

    const dispatch = useDispatch();

    const {userPlaylists} = useSelector((state) => state)

    const addSongToPlaylist = () =>{
       

        if(userPlaylists.length===0 || playlistIndex===undefined){
            setShowModal(true);
        } else{
            new Promise((resolve, reject) => {
              dispatch(addToPlaylist(props.song, playlistIndex));
              return resolve();
            })
            .then(() => {
              setAdded(true);
            })
        }
    }

    const handlePlaylistClick = (song, index) => {
        setShowModal(!showModal);
        new Promise((resolve, reject) => {
          dispatch(addToPlaylist(song, index));
          return resolve();
         
        })
        .then(() => {
          setAdded(true);
        })
      
    }

    return (<> 
      {
        added
        ?
        <span className="addToPlaylist"><FontAwesomeIcon icon={faCheck} color={"green"}></FontAwesomeIcon></span>
        :
        <span onClick={() => addSongToPlaylist()} className="addToPlaylist">+</span>
      }
      <Modal centered show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
            <Modal.Title>Choose playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            userPlaylists.length===0
            ?
            <p>
            You have not created any playlist yet.
             Click on playlist button on the sidebar to create a playlist.
           </p>
           :
           <div className="choosePlaylists">
            {
                userPlaylists.map((playlist) => {
                    return(
                      <p className="choosePlaylistName"
                       role="button"
                       key={userPlaylists?.indexOf(playlist)}
                       onClick={() => handlePlaylistClick(props.song, userPlaylists?.indexOf(playlist))}>
                        {playlist?.playlistName}
                        </p>
                      );
                })
            }
        </div>
          }
        </Modal.Body>
      </Modal>
   </>
  
    );
}