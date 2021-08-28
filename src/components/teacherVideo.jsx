import React from 'react';
import Ask from './ask';
import LeaveClassroom from './leave';
import ButtonGroup from './buttonGroup';
import LockClassroom from './lock';
export default function TeacherVideo(){
    return (
        <div>
            <LeaveClassroom />
            <Ask />
            <ButtonGroup />
            <LockClassroom />
        </div>
    );
}