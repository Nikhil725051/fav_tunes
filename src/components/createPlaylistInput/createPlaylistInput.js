import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { createPlaylist } from "../../redux/thunks/CreatePlaylist";
import './createPlaylistInput.css'


export default function CreatePlaylistInput({isInputModalOpen, setInputModalOpen}){

    const playlistName = useRef(null);

    const dispatch = useDispatch();


    const handleClick = () => {
        if(playlistName.current.value){
            setInputModalOpen(!isInputModalOpen)
            dispatch(createPlaylist(playlistName.current.value));
        }
    }

    return (
            <Modal show={isInputModalOpen} centered onHide={() => setInputModalOpen(!isInputModalOpen)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create playlist</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="createPlaylistInput">
                       <input type="text" ref={playlistName} className="playlistName" name="playlistName" placeholder="PLAYLIST NAME"></input>
                       <button className="createButton" onClick={handleClick}>Create</button>
                </Modal.Body>
            </Modal>);
}