import { compose, withState } from 'recompose';

import SplashScreen from './SplashView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  SplashScreen,
);
