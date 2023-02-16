import React from 'react';
import UserRegisterReducer from './user/reducer/UserLoginReducer';
import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from 'redux-thunk';
import RootReducer from './magasin';
export const store = createStore(RootReducer, applyMiddleware(thunk))


