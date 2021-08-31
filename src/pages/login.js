import '../styles/signup.css';
import { TextField} from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login=()=>{ 
    const [email, setemail] = useState("");
    const [pwd, setpwd] = useState("");
    return (
    <div className="signup">
      <div className="sign">
        <h1>Sign-In</h1>
        <button className="student-btn">Student</button>
        <Link to="/teacherlogin"> <button className="teacher-btn">Teacher</button></Link>
        <br />
        
        <TextField id="outlined-basic" value={email} onChange={(e)=>{setemail(e.target.value);}} label="Email" variant="outlined" type="email"/>
        <br /><br/>
        <TextField id="outlined-basic" value={pwd} onChange={(e)=>{setpwd(e.target.value);}} label="Password"variant="outlined" type="password"/>
        <br />
        <button className="submit-btn"
        onClick={
          console.log("clicked")
        }
        >login</button>
      </div>
    </div>
  );
 }

 export default Login;
 //signin

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
