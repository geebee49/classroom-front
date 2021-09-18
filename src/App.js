import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login";
import Student from "./pages/edit";
import Signup from "./pages/signup";
import Welcome from "./pages/welcome";
import Studentpage from "./pages/student-mainpage";
import Login_teacher from "./pages/login-teacher";
import MiniDrawer from "./components/bleh";
import TeacherInterface from "./pages/teacher-interface";
import LeaveClassroom from "./components/leave";
import PopQuestion from "./components/ask";
import TeacherVideo from "./pages/teacherVideo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/login" component={Login}></Route>
          <Route path="/edit" component={Student}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/welcome" component={Welcome}></Route>
          <Route path="/mainpage" component={Studentpage}></Route>
          <Route path="/teacherlogin" component={Login_teacher}></Route>
          <Route path="/teacher-interface" component={TeacherInterface}></Route>
          <Route path="/teacherVideo" component={TeacherVideo}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

//signinwithpopup

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth();
// signInWithPopup(auth, provider)
// .then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
// const credential = GoogleAuthProvider.credentialFromResult(result);
// const token = credential.accessToken;
// The signed-in user info.
// const user = result.user;
// ...
// }).catch((error) => {
// Handle Errors here.
// const errorCode = error.code;
// const errorMessage = error.message;
// The email of the user's account used.
// const email = error.email;
// The AuthCredential type that was used.
// const credential = GoogleAuthProvider.credentialFromError(error);
// ...
// });
