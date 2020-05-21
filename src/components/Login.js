import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import '../App.css';
import loginIcon from '../images/loginIcon.png';

import { login } from '../actions/auth';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        errors: PropTypes.array,
        loginErr: PropTypes.string,
        login: PropTypes.func
    }

  onChange = e => this.setState({
    [e.target.name] : e.target.value
  });

  onSubmit = e => {
      e.preventDefault();

      const creds = {
          email: this.state.email,
          password: this.state.password
      }

      this.props.login(creds);
  }
  
  render() {

    if(this.props.isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    const { email, password } = this.state;

    return (
      <div className="App-login">
        <div className="container">
            <div className="row">
                <div className="left-div col-lg-6 col-md-11 col-sm-11 p-5">
                    <img src={loginIcon} alt="login icon" className="mt-5" width="300px" />
                    <p className="signin-text mt-1">
                        Sign in to access the user friendly and flexible features of our App. The experience will be worth having as 
                        we have fore-speculated what you will be needing and implemented it. 
                    </p>
                    <p className="signin-text">
                        <i className="text-warning">Dive in to explore</i>
                    </p>
                </div>
                <div className="right-div  col-lg-6 col-md-11 col-sm-11 p-5">
                    <i className="fa fa-power-off fa-2x mt-5"></i>
                    <p className="text text-danger text-center">
                        { this.props.loginErr }
                    </p>
                    <form onSubmit={this.onSubmit} className="mt-3">
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email"
                                name="email" 
                                className="form-control" 
                                onChange={this.onChange} 
                                value={email}
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
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-block mt-5">Login</button>
                        </div>
                    </form>
                    <p className="text-info text-center">
                        If you do not have an account with us, please contact the Administrator on +234 80 4444 5557
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.auth.errors,
    loginErr: state.auth.loginErr
});

export default connect(mapStateToProps, { login })(Login);
