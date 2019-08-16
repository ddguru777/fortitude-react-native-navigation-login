import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

import Splash from 'react-native-smart-splash-screen';


export default class HomeScreen extends React.Component {
  componentDidMount() {
    console.log('========= splash view constructor ============  ');
    Splash.close({
      animationType: Splash.animationType.scale,
      duration: 850,
      delay: 500
    });
  }
  _openArticle = article => {
    this.props.navigation.navigate({
      routeName: 'Login',
      params: { ...article },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title = "Home" onPress={() => this._openArticle("item")}/>
        </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  }
});
