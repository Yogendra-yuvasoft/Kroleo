import * as NavigationActions from './navigation';
import * as SignInActions from './signin';
import * as RegistrationAction from './registration';
import * as DashboardAction from './dashboard';

export const ActionCreators = Object.assign({},
  NavigationActions,
  SignInActions,
  RegistrationAction,
  DashboardAction
);
