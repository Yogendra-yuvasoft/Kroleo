import * as NavigationActions from './navigation';
import * as SignInActions from './signin';
import * as RegistrationAction from './registration';

export const ActionCreators = Object.assign({},
  NavigationActions,
  SignInActions,
  RegistrationAction
);
