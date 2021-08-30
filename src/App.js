import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './pages/login';
import Student from './pages/edit';
import Signup from './pages/signup';
import Welcome from './pages/welcome';
import Studentpage from './pages/student-mainpage';
import Login_teacher from './pages/login-teacher';
import Join from './pages/join';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <div>
        <Route path='/login' component={Login}></Route>
        <Route path='/edit' component={Student}></Route>
        <Route path='/join' component={Join}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/' component={Welcome}></Route>
        <Route path='/mainpage' component={Studentpage}></Route>
        <Route path='/teacherlogin' component={Login_teacher}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
