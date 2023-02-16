import React from 'react';
import UserAuthReducer from './user/reducer/UserLoginReducer';
import { combineReducers, } from "redux"
import UserLoginReducer from './user/reducer/UserLoginReducer';
import UserRegisterReducer from './user/reducer/UserRegisterReducer';

 const RootReducer = 
    combineReducers({
        login: UserLoginReducer,
        register: UserRegisterReducer,
    });


export default RootReducer;