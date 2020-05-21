import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    user: {},
    errors:[],
    loginErr:''
}

export default function (state=initialState, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.data.token);
            return{
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_FAIL:
            return{
                ...state,
                loginErr: action.payload
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return{
                ...state,
                token: null,
                user: {},
                isAuthenticated: false,
                errors: [],
                loginErr:''
            }
        default:
            return state
    }
}