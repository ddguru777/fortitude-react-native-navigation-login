import { compose, withState } from 'recompose';

import ScheduleScreen from './ScheduleView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  ScheduleScreen,
);
