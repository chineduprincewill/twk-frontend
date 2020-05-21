import { GET_USERS, GET_USERS_FAIL, ADD_USER, ADD_USER_FAILED } from '../actions/types';

const initialState = {
    isAdded: false,
    users: [],
    error:{},
    adderror:{}
}

export default function (state=initialState, action) {
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                isAdded: false,
                users: action.payload
            }
        case GET_USERS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case ADD_USER:
            return{
                ...state,
                isAdded: true
            }
        case ADD_USER_FAILED:
            return{
                ...state,
                adderror: action.payload
            }
        default:
            return state
    }
}