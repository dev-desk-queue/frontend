import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './compos/privacy/login';
import Info from './compos/privacy/info';
import Helper from './compos/features/helper';





function App() {
  return (
    <Router>
    {console.log(localStorage.getItem("token"))}
      <div className="App">
        
        <Route path='/signin' component={Info} />
        <Route exact path='/login' component={Login}/>
        {/* <Route exact path='/info' component={} /> */}
        <Route exact path='/help' component={Helper} />
      </div>
    </Router>
  );
}

export default App;
