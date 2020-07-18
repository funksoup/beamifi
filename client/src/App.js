import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login'; 
import Chat from './components/Chat/Chat';
import Alerts from './components/layout/Alerts';  
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState'; 
import setAuthToken from './utils/setAuthToken';
import './App.css';

// // import react-admin components
// import { Admin, Resource } from 'react-admin';
// import Dashboard from './container/Dashboard' 


if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
  <AuthState>
  <ContactState>
  <AlertState>
    <Router>
      <Fragment>
        <Navbar />
          <div className="container">
          <Alerts />
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} /> 
              {/* <Route path="/dashboard" component={Dashboard}/> */}
              <Route path="/chat" component={Chat} />
            </Switch>
          </div>
      </Fragment>
    </Router>
    </AlertState>
  </ContactState>
  </AuthState>
  );
}

export default App;