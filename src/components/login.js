import React from "react";
import '../styles/signup.css';
import { TextField} from "@material-ui/core";



const login=()=>{ 
    return (
    <div className="signup">
      <div className="sign">
        <h1>Sign-In</h1>
        <button className="student-btn">Student</button>
        <button className="teacher-btn">Teacher</button>
        <br />
        
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
        <br /><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
        <br />
        <button className="submit-btn">login</button>
      </div>
    </div>
  );
 }

 export default login;
