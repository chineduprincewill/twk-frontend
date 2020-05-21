import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

class Roles extends Component {

    static propTypes = {
        auth: PropTypes.object,
        logout: PropTypes.func
    }

    render() {

        const { auth } = this.props;

        let userRole;

        if(auth.user.data.role === 'admin'){
            userRole = <>
                <li className="nav-item">
                    <Link to="/users"
                    className="nav-link btn btn-link btn-sm text-light mr-3"
                    >
                        Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/articles"
                    className="nav-link btn btn-link btn-sm text-light mr-3"
                    >
                        Articles
                    </Link>
                </li>
            </>

        }

        else if(auth.user.data.role === 'employee'){
            userRole = <div>
                <li className="nav-item">
                    <Link to="/articles"
                    className="nav-link btn btn-link btn-sm text-light mr-3"
                    >
                        Articles
                    </Link>
            </li>
          </div>
        }

        return (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <div className="dropdown mr-3">
              <button className="btn btn-link text-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {auth.user.data.role} <i className="fa fa-user"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span className="dropdown-item">{auth.user.data.userID}</span>
              </div>
            </div>
            <li className="nav-item">
                <Link to="/dashboard"
                className="nav-link btn btn-link btn-sm text-light mr-3"
                >
                    Dashboard
                </Link>
            </li>
            { userRole }
            <li className="nav-item">
              <button
                onClick={this.props.logout}
                className="nav-link btn btn-danger btn-sm text-dark"
                title="logout"
              >
                <i className="fa fa-power-off"></i>
              </button>
            </li>
          </ul>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Roles);
