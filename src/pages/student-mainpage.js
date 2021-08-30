
import React from 'react';
import MiniDrawer from '../components/student-sidebar';
import Classes from '../components/classes';
import '../styles/student.css';

export default function Studentpage() {
  return(
    <div className="studentpg">
    <MiniDrawer/>
    <div className="student-page" >
          <div className="intro">
            <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/mammootty_1340_29-07-2016_11-43-24.jpg"  alt="Greatest actor after mohanlal" width="50px" height=" 50px"/>
            <h2>Welcome Mammooka</h2>
          </div>
          <div className="class-div">
          <Classes />
          </div>
          </div>
      </div>

  )
};
      
    