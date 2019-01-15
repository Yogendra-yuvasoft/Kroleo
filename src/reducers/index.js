import { combineReducers } from 'redux';
import * as NavigationReducers from './navigation';
import * as SignInReducers from './signin';
import * as RegisterReducer from './registration';
import * as DashboardReducer from './dashboard';

export default combineReducers(Object.assign(
  NavigationReducers,
  SignInReducers,
  RegisterReducer,
  DashboardReducer
));
