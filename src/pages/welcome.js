import { useEffect} from "react";
import "../styles/welcome.css";
import { Link, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function Welcome() {
  
  useEffect(() => {

    const firebaseConfig = {
      apiKey: "AIzaSyACJ2vAvJjkmQ9jTqFpJXwnp8ihPtsPf4g",
      authDomain: "classroom-28b00.firebaseapp.com",
      projectId: "classroom-28b00",
      storageBucket: "classroom-28b00.appspot.com",
      messagingSenderId: "713913150411",
      appId: "1:713913150411:web:3349338b3ab7f5623b644e",
      measurementId: "G-RWPK1JNJKH"
    };

    initializeApp(firebaseConfig);

  }, []);

  const history = useHistory();

  return (
    <div className="welcome-welcome">
      <h1 className="welcome-heading">CLASSROOM 2.0</h1>
      <div className="welcome-btns">
        <Link to="/login">
          <button className="welcome-login">Login </button>
        </Link>
        <button className="welcome-google" onClick={() => {
                const auth = getAuth();
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider)
                  .then((res) => {
                    console.log(res);               
                      
                      history.replace("/mainpage","urlhistory");
                  })
                  .catch((err) => console.log(err));
              }}>
          <FcGoogle
            style={{
              height: "1.5rem",
              width: "1.5rem",
              marginRight: "1rem"
            }}
          />
          <div>Sign in with Google</div>
        </button>
      </div>
      <div className="welcome-signuprow">
        <i>New User? </i>
        <Link to="/signup" className="welcome-sign">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Welcome;

