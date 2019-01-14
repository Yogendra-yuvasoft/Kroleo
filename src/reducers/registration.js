import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

export const userRegistration = createReducer({}, {
    [types.CREATE_USER_REGISTRATION_SUCCESS] (state, action) {

    return {
        ...state,
        register: action.payload.response.data,
        success: true,
        error: false,
        message: 'successfully login'
       }
    },


    [types.CREATE_USER_REGISTRATION_ERROR] (state, action) {
    return {
        ...state,
        register: action.payload,
        success: false,
        error: true,
        message: 'error'
       }
    }


});