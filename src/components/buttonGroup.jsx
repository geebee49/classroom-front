import React from "react";
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import Styles from "./styles/buttongroup.css";

export default function(){
    return(
        <div>
            <button className="screenshare"><ScreenShareIcon /></button>
            <button className="voice"><MicOffIcon /></button>
            <button className="video"><VideocamIcon /></button>
        </div>
    );
}