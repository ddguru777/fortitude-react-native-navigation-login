import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Splash from 'react-native-smart-splash-screen';

export default class SplashScreen  extends React.Component {

  constructor() {
    super();
    
    this.state = {
    };
  }

  componentDidMount() {
    console.log('========= splash view constructor ============  ');
    Splash.close({
      animationType: Splash.animationType.scale,
      duration: 850,
      delay: 500
    });
  }

  _openHome = home => {
    this.props.navigation.navigate({
      routeName: 'Home',
      params: { ...home },
    });
  };
  
  render () {
    return (
      <View style={styles.container}>
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
