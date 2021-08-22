import { useState } from "react";
import { TextField } from "@material-ui/core";
import "./styles/edit.css";
import MiniDrawer from "./student-sidebar";


const Student = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="editPage">
        <MiniDrawer/>
      <div className="edit">
        <div className="bio">
          <h1>EDIT PROFILE</h1>
          <div>
          <div className="textfields">
             <TextField
              value={name}
              label="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            /> 
            <TextField
              value={email}
              type="password"
              label="New Password"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              value={phone}
              type="password"
              label="Confirm Password"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/mammootty_1340_29-07-2016_11-43-24.jpg" alt="xyz" width="100px" height="100px"></img>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Student;