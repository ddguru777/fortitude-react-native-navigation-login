import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
