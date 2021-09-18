import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
export default function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] =useState("");
    const hiddenButton = (e) => {
        e.preventDefault();
        setInput("");
        setImageUrl("");
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                      <input value = {input} onChange = {(e) => setInput(e.target.value)} className = "messageSender__input" placeholder = "What's on your mind?"/>
                      <input value = {imageUrl} onChange = {e => setImageUrl(e.target.value)} placeholder = "image URL (optional)"/>
                      <button onClick = {hiddenButton} type = "submit">Hidden Button</button>
                </form>
                
            </div>
            <div className="messageSender__bottom">
                <div className = "messageSender__option">
                   <VideocamIcon style = {{color:"red"}}/>
                   <h3>Live Video</h3>
                </div>
                <div className = "messageSender__option">
                   <PhotoLibraryIcon style = {{color: "green"}}/>
                   <h3>Photo/Video</h3>
                </div>
                <div className = "messageSender__option">
                    <InsertEmoticonIcon style = {{color: "yellow"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}