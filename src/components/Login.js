import React, { Component } from 'react';
import '../App.css';
import loginIcon from '../images/loginIcon.png';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

  onChange = e => this.setState({
    [e.target.name] : e.target.value
  });
  
  render() {

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

export default Login;
