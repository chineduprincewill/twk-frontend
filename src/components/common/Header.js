import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Roles from './Roles';

class Header extends Component {

    static propTypes = {
        isAuthencitcated: PropTypes.bool
    }

  render() {

    let navlinks;

    if(this.props.isAuthenticated){
        navlinks = <Roles />
    }
    else{
        navlinks = <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <Link to="/login" className="nav-link" title="sign in">
                    <i className="fa fa-power-off"></i>
                </Link>
            </li>
        </ul>
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">TEAM WORK</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    { navlinks }
                </div>
            </nav>
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Header);
