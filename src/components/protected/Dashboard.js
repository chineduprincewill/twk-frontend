import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../App.css'

class Dashboard extends Component {

    static propTypes = {
        user: PropTypes.object
    }

    render() {

        const { user } = this.props;

        let adminRoles;

        if(user.data.role === 'admin'){
            adminRoles = <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Users</h5>
                        <i className="fa fa-user fa-2x"></i>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer">
                        <Link to="/users" className="btn btn-dark btn-block">Manage Users</Link>
                    </div>
                </div>
            </div>
        }

        return (
        <div className="container">
            <h3 className="page-header">Dashboard</h3>
            
            <div className="row p-5">
                { adminRoles }
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Articles</h5>
                            <i className="fa fa-user fa-2x"></i>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <Link to="/articles" className="btn btn-dark btn-block">Manage Articles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);
