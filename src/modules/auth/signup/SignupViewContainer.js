import { compose, withState } from 'recompose';

import SignupScreen from './SignupView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  SignupScreen,
);
