import './App.css';
import { ReactDOM } from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import login from './components/login';
import Student from './components/edit';
import signup from './components/signup';
import Welcome from './components/welcome';
<<<<<<< HEAD
import MiniDrawer from './components/bleh';
=======
>>>>>>> 516f62c64b2f550489e2d0d5587f085431b6bdbc


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <div>
        <Route path='/login' component={login}></Route>
        <Route path='/edit' component={Student}></Route>
        <Route path='/signup' component={signup}></Route>
        <Route path='/welcome' component={Welcome}></Route>
<<<<<<< HEAD
        <Route path='/mainpage' component={MiniDrawer}></Route>
        
=======
>>>>>>> 516f62c64b2f550489e2d0d5587f085431b6bdbc
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
