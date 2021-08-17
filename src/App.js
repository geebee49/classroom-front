import './App.css';
import { ReactDOM } from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import login from './components/login';
import Student from './components/edit';
import signup from './components/signup';
import Welcome from './components/welcome';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <div>
        <Route path='/login' component={login}></Route>
        <Route path='/edit' component={Student}></Route>
        <Route path='/welcome' component={Welcome}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
