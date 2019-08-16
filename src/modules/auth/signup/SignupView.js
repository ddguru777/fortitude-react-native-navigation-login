import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import { colors, fonts } from '../../../styles';
import strings from '../../../styles/strings';
import imageLogo from "../../../../assets/images/logo.png";
import RNSTextInput from "../../../components/TextInput";
import RNSButton from "../../../components/Button";


export default class SignupScreen  extends React.Component {


  componentDidMount() {
    console.log('========= signup view constructor ============  ');
  }

  handleSignupPress = () => {
    this.props.navigation.navigate({
      routeName: 'Home',
    });
  };
  
  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {/* <Image source={imageLogo} style={styles.logo} /> */}
        <View style={styles.form}>
          <RNSTextInput
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <RNSTextInput
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry
          />
          <RNSTextInput
            placeholder={strings.CFRMPASSWORD_PLACEHOLDER}
            secureTextEntry
          />
          <RNSButton caption = {strings.SIGNUP} onPress={this.handleSignupPress} bgColor={colors.green} style={{marginTop:5}}/>
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
