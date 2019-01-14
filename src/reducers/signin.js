

import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

export const userLogin = createReducer({}, {
    [types.CREATE_USER_LOGIN_SUCCESS] (state, action) {

    return {
        ...state,
        login: action.payload.response.data,
        success: true,
        error: false,
        message: 'successfully login'
       }
    },


    [types.CREATE_USER_LOGIN_ERROR] (state, action) {
    return {
        ...state,
        login: action.payload,
        success: false,
        error: true,
        message: 'error'
       }
    }


});
