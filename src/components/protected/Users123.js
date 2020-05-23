import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getUsers } from '../../actions/users';
import { logout } from '../../actions/auth';
import '../../App.css';

class Users extends Component {

    static propTypes = {
        users: PropTypes.array,
        userinfo: PropTypes.object,
        getUsers: PropTypes.func,
        error: PropTypes.object,
        logout: PropTypes.func
    }

    componentDidMount(){
        this.props.getUsers();
    }

    render() {

        if(this.props.userinfo.data.role !== 'admin'){
            this.props.logout();
        }

        const data = Array.from(this.props.users.data);
        //console.log(data);

        return (
        <div className="container">
            <h3 className="page-header">Users</h3>
        
        <div className="col-12">
            <Link to="/add-user" className="btn btn-warning text-dark float-right m-3"><i className="fa fa-plus"></i> <i className="fa fa-user"></i></Link>
        </div>

                <table className="table table-hover table-responsive">
                    <thead>
                        <tr>
                        <th>Last name</th>
                        <th>First name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th />
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                        <tr key={user.id}>                      
                            <td>{user.lastname}</td>
                            <td>{user.firstname}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.jobrole}</td>
                            <td>{user.department}</td>
                            <td>
                            <button
                                className="btn btn-link btn-sm"
                            >
                                <i className="fa fa-edit"></i>
                            </button>
                            <button
                                className="btn btn-link btn-sm text-danger"
                            >
                                <i className="fa fa-remove"></i>
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    error: state.users.error,
    userinfo: state.auth.user
});

export default connect(mapStateToProps, { getUsers, logout })(Users);
