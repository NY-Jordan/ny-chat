import React from 'react';
import Apiclient from '../../helper/Apiclient';
import { useDispatch } from "react-redux";
import {   auth, authSuccessSuccess, authSuccess, registerSuccess, registerFailed, loginSuccess, loginFailed } from './UserActions';
import { Navigate, useNavigate } from 'react-router-dom';



export const UserRegisterAction = (user, dispatch) => {
    const RegisterRequest = Apiclient().post('register',  {
        email : user.email,
        name : user.username,
        password : user.password,
    })
    .then((response) => {
        const res = response.data;
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.user));
                localStorage.setItem('token', res.token);
                const user = {
                    email : res.user.email,
                    username : res.user.name,
                }
                dispatch(registerSuccess(user))
            } else {
                dispatch(registerFailed(res.error))
            }    
    }).catch((e) => { 
        dispatch(registerFailed(e.response.data.message))
    })
    
};


export const UserLoginAction = (user, dispatch) => {
    const RegisterRequest = Apiclient().post('/login', {
        email : user.email,
        password : user.password,
    })
    .then((response) => {
        
        const res = response.data;
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.user));
                localStorage.setItem('token', res.token);
                const user = {
                    email : res.user.email,
                    username : res.user.name,
                }
                dispatch(loginSuccess(user))
            } else {
                dispatch(loginFailed(res.message))
            }    
    }).catch((e) => { 
        dispatch(loginFailed(e.response.data.message))
    })
    
};
