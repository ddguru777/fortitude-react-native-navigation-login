import { compose, withState } from 'recompose';

import ProfileScreen from './ProfileView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  ProfileScreen,
);
