import './App.css';
import { ReactDOM } from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import Login from './components/login';
import Student from './components/edit';
import signup from './components/signup';
import Welcome from './components/welcome';
import studentpage from './components/student-mainpage';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <div>
        <Route path='/login' component={Login}></Route>
        <Route path='/edit' component={Student}></Route>
        <Route path='/signup' component={signup}></Route>
        <Route path='/welcome' component={Welcome}></Route>
        <Route path='/mainpage' component={studentpage}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
