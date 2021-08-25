import React from 'react';
import Ask from './ask';
import LeaveClassroom from './leave';
export default function TeacherVideo(){
    return (
        <div>
            <LeaveClassroom />
            <Ask />
        </div>
    );
}