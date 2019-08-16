import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

import strings from '../../../styles/strings';
import colors from '../../../styles/colors';
import RNSButton from "../../../components/Button";

export default class ProfileScreen extends React.Component {
  componentDidMount() {
    console.log('========= profile view constructor ============  ');
    
  }
  
  _openAuth = () => {
    this.props.navigation.navigate({
      routeName: 'Auth',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <RNSButton caption = {strings.LOGOUT} onPress={this._openAuth} bgColor={colors.pink} />
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
