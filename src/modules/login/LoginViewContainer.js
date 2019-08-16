import { compose, withState } from 'recompose';

import LoginScreen from './LoginView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  LoginScreen,
);
