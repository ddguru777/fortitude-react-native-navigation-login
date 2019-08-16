import { compose, withState } from 'recompose';

import SplashScreen from './LoginView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  SplashScreen,
);
