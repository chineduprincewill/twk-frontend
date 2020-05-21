import { GET_USERS, GET_USERS_FAIL, ADD_USER, ADD_USER_FAILED } from './types';

import axios from 'axios';

export const getUsers = () => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    };

    await axios
        .get('http://twk.herokuapp.com/api/v1/auth', config)
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_USERS_FAIL,
                payload: err.response
            });
        })
}

// ADD NEW USER

export const addUser = (userData) => async(dispatch) => {

    const body = JSON.stringify(userData)

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    await axios
        .post('http://twk.herokuapp.com/api/v1/auth/signup', body, config)
        .then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: ADD_USER_FAILED,
                payload: err.response
            });
        })
}




