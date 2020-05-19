import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App-home">
        <div className="container">
            <div className="row p-5">
                <div className="col-lg-5 col-md-11 col-sm-11">
                    <h1 className="mt-3">Our Team App</h1>
                    <p className="mt-3">
                    Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way. This concept is seen within the greater framework of a team, which is a group of interdependent individuals who work together towards a common goal.
                    </p>
                    <Link to="/login" className="btn btn-success mt-3"> Click to Access <i className="fa fa-angle-double-right"></i> </Link>
                </div>
                <div className="col-lg-7 col-md-11 col-sm-11">
                    
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
