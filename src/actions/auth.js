import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';
import axios from 'axios';

export const login = (creds) => async(dispatch) => {

    const body = JSON.stringify(creds);

    // Headers
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    };

    await axios
        .post('http://twk.herokuapp.com/api/v1/auth/signin', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type:LOGIN_FAIL,
                payload: err.response
            })
        });
}


// LOGOUT USER
export const logout = () => dispatch => {

    dispatch({
        type: LOGOUT_SUCCESS,
        payload: "Successfully logged out!"
      });
  };