import React from 'react';
import { actionTypes } from '../UserActions';

const initialState = {
    name: "register",
    user : null,
    Authenticated : false,
    error : false,
}



const UserRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER_ACTION_SUCCESS :
            return {user : action.payload.user, Authenticated: true, error : false, } 
        case actionTypes.REGISTER_ACTION_FAILED: 
            return {...state, error: action.payload.error } 
        default:
            return {...state};
    }
};


export default UserRegisterReducer;