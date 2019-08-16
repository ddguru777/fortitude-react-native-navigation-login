import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { colors, fonts } from '../../../styles';
import strings from '../../../styles/strings';
import imageLogo from "../../../../assets/images/logo.png";
import RNSTextInput from "../../../components/TextInput";
import RNSButton from "../../../components/Button";

import Splash from 'react-native-smart-splash-screen';

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

    this.props.navigation.navigate('Home', {});
  };

  handleLoginPress = () => {
    this.props.navigation.navigate({
      routeName: 'Main',
    });
  };

  handleSignupPress = () => {
    this.props.navigation.navigate({
      routeName: 'Signup',
    });
  };
  
  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <RNSTextInput
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <RNSTextInput
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry
          />
          <RNSButton caption = {strings.LOGIN} onPress={this.handleLoginPress}/>
          <RNSButton caption = {strings.SIGNUP} onPress={this.handleSignupPress} bgColor={colors.green} style={{marginTop:5}}/>
          {/* <Button
            // label={strings.LOGIN}
            // onPress={this.handleLoginPress}
          /> */}
        </View>
      </KeyboardAvoidingView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    marginTop: 30,
    width: "70%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});
