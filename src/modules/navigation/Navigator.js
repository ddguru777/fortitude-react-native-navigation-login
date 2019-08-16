import React,  {Component} from 'react';

import {
  createAppContainer, 
  createSwitchNavigator
} from 'react-navigation';

// import AppNavigator from './MainNavigation';
import AuthNavigator from './AuthNavigation';
import MainTabNavigator from './MainTabNavigator';

const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      Auth: {
        screen: AuthNavigator
      },
      Main: {
        screen: MainTabNavigator
      }
    },
    {
      initialRouteName: signedIn ? "Main" : "Auth"
    }
  );
};

const AppContainer = createAppContainer(createRootNavigator(false));

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (<AppContainer />);
  }
}