import React from "react";
import '../styles/signup.css';
import { TextField} from "@material-ui/core";
import { useState } from "react";



const Signup=()=>{ 
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
    return (
    <div className="signup">
      <div className="sign">
        <h1>Sign-Up</h1>
        <button className="student-btn">Student</button>
        <button className="teacher-btn">Teacher</button>
        <br />
        
        <TextField id="outlined-basic" value={email} onChange={(e)=>{setemail(e.target.value)}} label="Email" variant="outlined" type="email"/>
        <br/><br/>
        <TextField id="outlined-basic" value={pwd} onChange={(e)=>{setpwd(e.target.value)}} label="Password" variant="outlined" type="password"/>
        <br/><br/>
        <TextField id="outlined-basic" label="Re-Enter Password" variant="outlined" type="password"/>
        <br/><br/>
        <button className="submit-btn">Sign Up</button>
      </div>
    </div>
  );
 }

 export default Signup;
