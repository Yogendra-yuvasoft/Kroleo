import * as types from './types';
import axios from 'axios';
import { AsyncStorage, ReactNative } from "react-native";
import { Actions } from 'react-native-router-flux';

export function createUserLoginSuccess(response) {
   return {
     type: types.CREATE_USER_LOGIN_SUCCESS,
     payload: {
         response
     }
   }
}

export  function createUserLoginError(error){
  return function(dispatch) {  
    dispatch({
      type: types.CREATE_USER_LOGIN_ERROR,
      payload: error
    });
    // to clear error alert in browser we clear errors after 4000ms
   
  };
}

export function userLogin(data) {
  return function (dispatch) {
    axios.post(`http://mydental-be-staging.herokuapp.com/api/users/login`,data)
      .then(function (response) {
        dispatch(createUserLoginSuccess(response))
        AsyncStorage.setItem('user',JSON.stringify(response));
        AsyncStorage.setItem('isAlreadySignIn', JSON.stringify(true));
        Actions.Dashboard()
      })
    .catch(error => { 
       dispatch(createUserLoginError(error.response.data.error)) 
     });
  };
}