import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import * as ActionTypes from '../actions/ActionTypes';

const DEF_AUTH = {
    currentUser: null,
    isLoggingIn: false,
    loading: false,
    error: null
};

const AuthReducer = (state = DEF_AUTH, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_PENDING:
            return {
                ...state,
                loading:true,
                currentUser:null,
                isLoggingIn:false
            }
        case ActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                currentUser: action.data,
                isLoggingIn: true
            }
        case ActionTypes.LOGIN_FAILURE:
            return{
                ...state,
                loading:false,
                error: "Try later"
            }
        case ActionTypes.REFRESH:
            return{
                ...state,
                error:null,
                loading:false
            }
        case ActionTypes.LOGOUT:
            return{
                ...state,
                error:null,
                loading:false,
                currentUser:null,
                isLoggingIn:false
            }
        default:
            return {
                ...state
            }
    }
};

const persistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['isLoggingIn','loading','error'],
    whitelist: ['currentUser']
};

export default persistReducer(persistConfig, AuthReducer);