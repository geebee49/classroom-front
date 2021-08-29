import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login';
import Student from './components/edit';
import Signup from './components/signup';
import Welcome from './components/welcome';
import Studentpage from './components/student-mainpage';
import Login_teacher from './components/login-teacher';
import Join from './components/join';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <div>
        <Route path='/login' component={Login}></Route>
        <Route path='/edit' component={Student}></Route>
        <Route path='/join' component={Join}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/welcome' component={Welcome}></Route>
        <Route path='/mainpage' component={Studentpage}></Route>
        <Route path='/teacherlogin' component={Login_teacher}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
