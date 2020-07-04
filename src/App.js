import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './views/LandingPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render ={()=><LandingPage/>}
        />
      </Switch>
    </Router>
  );
}

export default App;
