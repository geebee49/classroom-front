import React from "react";
import './styles/signup.css';
import { TextField} from "@material-ui/core";
import { useState } from "react";



const Login=()=>{ 
    const [email, setemail] = useState("");
    const [pwd, setpwd] = useState("")
    return (
    <div className="signup">
      <div className="sign">
        <h1>Sign-In</h1>
        <button className="student-btn">Student</button>
        <button className="teacher-btn">Teacher</button>
        <br />
        
        <TextField id="outlined-basic" value={email} onChange={(e)=>{setemail(e.target.value);}} label="Email" variant="outlined" type="email"/>
        <br /><br/>
        <TextField id="outlined-basic" value={pwd} onChange={(e)=>{setpwd(e.target.value);}} label="Password"variant="outlined" type="password"/>
        <br />
        <button className="submit-btn">login</button>
      </div>
    </div>
  );
 }

 export default Login;
