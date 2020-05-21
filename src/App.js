import React from 'react';
import { HashRouter as Router,  Route, Switch} from 'react-router-dom';
import { Provider} from 'react-redux';

import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Header from './components/common/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/protected/Dashboard';
import Users from './components/protected/Users';
import Adduser from './components/protected/Adduser';
import Roles from './components/common/Roles';
//import './App.css';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path='/roles' component={Roles} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/users" component={Users} />
            <PrivateRoute path="/add-user" component={Adduser} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
