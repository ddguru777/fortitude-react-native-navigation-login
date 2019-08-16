import React,  {Component} from 'react';

import {
  createAppContainer, 
  createSwitchNavigator
} from 'react-navigation';
import AppNavigator from './RootNavigation';
import AuthNavigator from './AuthNavigation';

const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      Auth: {
        screen: AuthNavigator
      },
      Main: {
        screen: AppNavigator
      }
    },
    {
      initialRouteName: signedIn ? "Main" : "Auth"
    }
  );
};

const AppContainer = createAppContainer(createRootNavigator(true));

export default class App extends Component {
  render() {
    return (<AppContainer />);
  }
}