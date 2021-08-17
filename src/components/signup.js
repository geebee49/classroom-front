import React from "react";
import './styles/signup.css';
import { TextField} from "@material-ui/core";



const signup=()=>{ 
    return (
    <div className="signup">
      <div className="sign">
        <h1>Sign-Up</h1>
        <button className="student-btn">Student</button>
        <button className="teacher-btn">Teacher</button>
        <br />
        
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
        <br/><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
        <br/><br/>
        <TextField id="outlined-basic" label="Re-Enter Password" variant="outlined" type="password"/>
        <br/><br/>
        <button className="submit-btn">Sign Up</button>
      </div>
    </div>
  );
 }

 export default signup;
