import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './compos/privacy/login';
import Info from './compos/privacy/info';
import Helper from './compos/features/helper';



function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/help' component={Helper} />
          <Route exact path='/login' component={Login}/>
        <Route exact path='/Protected' component={Info} />
      </div>
    </Router>
  );
}

export default App;
