import React from 'react';
import Ask from './ask';
import LeaveClassroom from './leave';
import ButtonGroup from './buttonGroup';
export default function TeacherVideo(){
    return (
        <div>
            <LeaveClassroom />
            <Ask />
            <ButtonGroup />
        </div>
    );
}