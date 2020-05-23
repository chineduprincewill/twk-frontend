import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addUser } from '../../actions/users';
 

class Adduser extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
        jobrole: "",
        department: "",
        address: ""
    }

    static propTypes = {
        error: PropTypes.object,
        isAdded: PropTypes.bool,
        addUser: PropTypes.func
    }


    onChange = (e) => this.setState({
        [e.target.name] : e.target.value
    })

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            jobrole: this.state.jobrole,
            department: this.state.department,
            address: this.state.address
        }

        this.props.addUser(userData);
    }

    render() {

        if(this.props.isAdded){
            return <Redirect to="/users" />
        }

        const { firstname, lastname, email, password, gender, jobrole, department, address } = this.state;
        return (
           <div className="App-login">
            <div className="container">
                <h3 className="page-header">Users</h3>
                <div className="col-12 p-3">
                    <Link to="/users" className="btn btn-warning float-right">Users</Link>
                </div>
                
                          
                    <form onSubmit={this.onSubmit} className="mt-3">
                        <p className="text text-danger text-center">
                            { this.props.error.data !== undefined ? this.props.error.data.error : "" }
                        </p>
                        <div className="row">
                            <div className="col-lg-6 p-5">
                                <div className="form-group">
                                    <label>First name</label>
                                    <input 
                                        type="text"
                                        name="firstname" 
                                        className="form-control" 
                                        onChange={this.onChange} 
                                        value={firstname}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Last name</label>
                                    <input 
                                        type="text"
                                        name="lastname" 
                                        className="form-control" 
                                        onChange={this.onChange} 
                                        value={lastname}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email"
                                        name="email" 
                                        className="form-control" 
                                        onChange={this.onChange} 
                                        value={email}
                                        required
                                    />
                                </div>
        
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password"
                                        name="password" 
                                        className="form-control" 
                                        onChange={this.onChange} 
                                        value={password}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 p-5">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select 
                                        className="form-control"
                                        name="gender"
                                        onChange={this.onChange}
                                        value={gender}
                                        required
                                    >
                                        <option value=""></option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Job role</label>
                                    <select 
                                        className="form-control"
                                        name="jobrole"
                                        onChange={this.onChange}
                                        value={jobrole}
                                        required
                                    >
                                        <option value=""></option>
                                        <option value="employee">employee</option>
                                        <option value="admin">admin</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Department</label>
                                    <select 
                                        className="form-control"
                                        name="department"
                                        onChange={this.onChange}
                                        value={department}
                                        required
                                    >
                                        <option value=""></option>
                                        <option value="IT">IT</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Address</label>
                                    <input 
                                        type="text"
                                        name="address" 
                                        className="form-control" 
                                        onChange={this.onChange} 
                                        value={address}
                                    />
                                </div>
        
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success float-right mt-3">Create user</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.adderror,
    isAdded: state.users.isAdded
});

export default connect(mapStateToProps, { addUser })(Adduser);
