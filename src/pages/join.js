import { useState } from "react";
import { TextField } from "@material-ui/core";
import "../styles/join.css";
import MiniDrawer from "../components/student-sidebar";


const Join = () => {
  const [name, setName] = useState("");
  return (
    <div className="joinPage">
        <MiniDrawer/>
        <div className="join">
            <div className="headerJoin">
                <img src="add.png" alt="bleh" width="40px" height="40px"/>
                <h1>JOIN A CLASSROOM</h1>
            </div>
            <div className="code">
                <h3>Enter Your Classroom Code</h3>
                <div className="textfieldsJoin">
                    <TextField id="outlined-basic" label="Enter your Classroom Code" variant="outlined" value={name} onChange={(e) => { setName(e.target.value);}}/>
                    <br/><br/>
                    <button className="join-btn">Join</button>
                </div >
            </div>
        </div>
    </div>
  );
};

export default Join;