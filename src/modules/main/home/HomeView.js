import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

import styles from '../../../styles/common'; 
import strings from '../../../styles/strings';
import colors from '../../../styles/colors';

import Splash from 'react-native-smart-splash-screen';
import RNSButton from "../../../components/Button";

export default class HomeScreen extends React.Component {
  componentDidMount() {
    console.log('========= splash view constructor ============  ');
    Splash.close({
      animationType: Splash.animationType.scale,
      duration: 850,
      delay: 500
    });
  }
  
  _openAuth = () => {
    this.props.navigation.navigate({
      routeName: 'Auth',
    });
  };

  handlePressProfile = () => {
    this.props.navigation.navigate({
      routeName: 'ProfileNavi',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <RNSButton caption = {strings.PROFILE} onPress={this.handlePressProfile}/>
        <RNSButton caption = {strings.LOGOUT} onPress={this._openAuth} bgColor={colors.pink} />
      </View>
    );
  };
}
