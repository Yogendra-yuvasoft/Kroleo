import * as types from './types';
import axios from 'axios';
import { ReactNative } from "react-native";
import { Actions } from 'react-native-router-flux';

export function createUserRegistrationSuccess(response) {
   return {
     type: types.CREATE_USER_REGISTRATION_SUCCESS,
     payload: {
         response
     }
   }
}

export  function createUserRegistrationError(error){
  return function(dispatch) {  
    dispatch({
      type: types.CREATE_USER_REGISTRATION_ERROR,
      payload: error
    });
    // to clear error alert in browser we clear errors after 4000ms
   
  };
}

export function userRegistration(data) {
 debugger	
  return function (dispatch) {
    axios.post(`http://mydental-be-staging.herokuapp.com/api/users`,data)
      .then(function (response) {
        dispatch(createUserRegistrationSuccess(response))
       debugger
        Actions.SignIn()
      })
    .catch(error => { 
    	debugger
       dispatch(createUserRegistrationError(error.response.data.error)) 
     });
  };
}