import React from 'react';
import Apiclient from '../../helper/Apiclient';
import { useDispatch } from "redux"


export const  actionTypes = {
    REGISTER_USER_ACTION_SUCCESS : "AUTH_USER_ACTION_SUCCESS" ,
    REGISTER_ACTION_FAILED : "AUTH_USER_ACTION_FAILED",
    LOGIN_ACTION_FAILED : "LOGIN_ACTION_FAILED",
    LOGIN_USER_ACTION_SUCCESS : "LOGIN_USER_ACTION_SUCCESS" ,
}


export const registerSuccess = (user) => ({
        type : actionTypes.REGISTER_USER_ACTION_SUCCESS,
        payload : {user : user}
});


export const registerFailed = (error) => ({
    type : actionTypes.REGISTER_ACTION_FAILED,
    payload : {error : error}
});

export const loginSuccess = (user) => ({
    type : actionTypes.LOGIN_USER_ACTION_SUCCESS,
    payload : {user : user}
});


export const loginFailed = (error) => ({
type : actionTypes.LOGIN_ACTION_FAILED,
payload : {error : error}
});

