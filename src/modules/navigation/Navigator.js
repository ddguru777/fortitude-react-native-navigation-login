import React from 'react';

// import AuthScreen from '../containers/AuthScreen';
import AppNavigator from './RootNavigation';

export default function NavigatorView() {
  // if (authState.isLoggedIn || authState.hasSkippedLogin) {
  //     return <AppNavigator />;
  // }
  // return <AuthScreen />;
  console.disableYellowBox = true;
  return <AppNavigator />;
}
