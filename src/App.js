import React from 'react';
import { HashRouter as Router,  Route, Switch} from 'react-router-dom';
import { Provider} from 'react-redux';

import Header from './components/common/Header';
import Home from './components/Home';
import Login from './components/Login';
//import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
