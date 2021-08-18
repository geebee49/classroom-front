import './App.css';
import { ReactDOM } from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import login from './components/login';
import Student from './components/edit';
import signup from './components/signup';
import Welcome from './components/welcome';
import MiniDrawer from './components/bleh';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <div>
        <Route path='/login' component={login}></Route>
        <Route path='/edit' component={Student}></Route>
        <Route path='/signup' component={signup}></Route>
        <Route path='/welcome' component={Welcome}></Route>
        <Route path='/mainpage' component={MiniDrawer}></Route>
        
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
