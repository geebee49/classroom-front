import { useState } from "react";
import { TextField } from "@material-ui/core";
import "../styles/edit.css";
import MiniDrawer from "../components/student-sidebar";


const Student = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="editPage">
      <MiniDrawer/>
      <div className="edit">
        <div className="header">
        <img src="user.png" alt="bleh" width="40px" height="40px"/>
        <h1>EDIT PROFILE</h1>
        </div>
        <div className="bio">
          <div className="textfields">
          <TextField id="outlined-basic" label="Enter your Name" variant="outlined" value={name} onChange={(e) => { setName(e.target.value);}}/>
        <br/><br/>
        <TextField id="outlined-basic" label="Enter New Password" variant="outlined" type="password" value={email} onChange={(e) => { setEmail(e.target.value);}}/>
        <br/><br/>
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" value={phone} onChange={(e) => { setPhone(e.target.value);}}/>
        <br/><br/>
        <button className="save-btn">Save Changes</button>
          </div >
          <div className="dp">
            <img className="image-edit" src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/mammootty_1340_29-07-2016_11-43-24.jpg" alt="xyz" width="250px" height="250px"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;