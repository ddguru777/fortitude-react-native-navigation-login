import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

// import { createStackNavigator, createAppContainer } from 'react-navigation';

import Splash from 'react-native-smart-splash-screen';
// import AppNavigator from '../navigation/RootNavigation';

// const MainNavigator = createStackNavigator( {
//   Home: {screen: AppNavigator},
//   Auth: {screen: LoginScreen}
// });

export default class LoginScreen  extends React.Component {


  componentDidMount() {
    console.log('========= login view constructor ============  ');
    Splash.close({
      animationType: Splash.animationType.scale,
      duration: 850,
      delay: 500
    });
  }

  _openHome() {
    // this.props.navigation.navigate({
    //   routeName: 'Home',
    //   params: { ...home },
    // });
    // alert('openhome');
    // return <AppNavigator />;

    this.props.navigation.navigate('Home', {});
  };

  _openArticle = article => {
    this.props.navigation.navigate({
      routeName: 'Main',
      params: { ...article },
    });
  };
  
  render () {
    return (
      <View style={styles.container}>
        <Button title = "Login" onPress={() => this._openArticle("item")}/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  }
});
