import React from 'react';
import Ask from '../components/ask';
import LeaveClassroom from '../components/leave';
import ButtonGroup from '../components/buttonGroup';
import LockClassroom from '../components/lock';
import Styles from "../styles/teacherVideo.css";
import Columns from "react-columns";

export default function TeacherVideo(){
    return (
        <div>
            <Columns columns="2">
            <div className="videoScreen">
            
            </div>
            <div className="teacher-video">

            </div>
            <div className="chat">

            </div>
            </Columns>
            <LeaveClassroom />
            <Ask />
            <ButtonGroup />
            <LockClassroom />
        </div>
    );
}