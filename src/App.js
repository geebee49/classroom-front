import './App.css';
import { ReactDOM } from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import login from './components/login';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <div>
        <Route path='/login' component={login}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
