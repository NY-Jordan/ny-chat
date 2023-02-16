import React from 'react';
import { actionTypes } from '../UserActions';

const initialState = {
    name: "login",
    user : null,
    Authenticated : false,
    error : false,
}



const UserLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_ACTION_SUCCESS :
            return {user : action.payload.user, Authenticated: true, error : false, } 
        case actionTypes.LOGIN_ACTION_FAILED: 
            return {...state, error: action.payload.error } 
        default:
            return {...state};
    }
};


export default UserLoginReducer;