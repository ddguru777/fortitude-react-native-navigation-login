import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

import strings from '../../../styles/strings';
import colors from '../../../styles/colors';
import RNSButton from "../../../components/Button";

export default class ScheduleScreen extends React.Component {
  componentDidMount() {
    console.log('========= schedule view constructor ============  ');
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
