import React from "react";
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import Styles from "./styles/buttongroup.css";

export default function ButtonGroup(){
    const[voice,setVoice]= React.useState(true);
    const[voiceIcon,setVoiceIcon]= React.useState(<MicIcon />);
    const handleVoice = function() {
        if(voice==true){
            setVoiceIcon(<MicOffIcon />);
            setVoice(false);
        }
        else{
            setVoiceIcon(<MicIcon />);
            setVoice(true);
        }
    };
    const[video,setVideo]= React.useState(true);
    const[videoIcon,setVideoIcon]= React.useState(<VideocamIcon />);
    const handleVideo = () => {
        if(video==true){
            setVideoIcon(<VideocamOffIcon />);
            setVideo(false);
        }
        else{
            setVideoIcon(<VideocamIcon />);
            setVideo(true);
        }
    };
    const[screen,setScreen]= React.useState(false);
    const[screenIcon,setScreenIcon]= React.useState(<StopScreenShareIcon />);
    const handleScreen = () => {
        if(screen==true){
            setScreenIcon(<StopScreenShareIcon />);
            setScreen(false);
        }
        else{
            setScreenIcon(<ScreenShareIcon />);
            setScreen(true);
        }
    };
    return(
        <div className="btn-grp">
            <button className="screenshare" onClick={handleScreen}>{screenIcon}</button>
            <button className="voice" onClick={handleVoice}>{voiceIcon}</button>
            <button className="video" onClick={handleVideo}>{videoIcon}</button>
        </div>
    );
}