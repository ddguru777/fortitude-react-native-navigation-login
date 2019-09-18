import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated
} from 'react-native';

import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL, IMAGE_HEIGHT_LOGIN } from '../../../styles/common'; 
import { colors, fonts } from '../../../styles';
import strings from '../../../styles/strings';
import imageLogo from "../../../../assets/images/logo.png";
import RNSTextInput from "../../../components/TextInput";
import RNSButton from "../../../components/Button";

import Splash from 'react-native-smart-splash-screen';

export default class LoginScreen  extends React.Component {

  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT_LOGIN);
  }

  componentDidMount() {
    console.log('========= login view constructor ============  ');
    Splash.close({
      animationType: Splash.animationType.scale,
      duration: 850,
      delay: 500
    });
  }

  componentWillMount () {
    if (Platform.OS=='ios'){
     this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
     this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }else{
     this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
     this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }
   }
 
  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_LOGIN,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_LOGIN,
    }).start();
  };
  
  handleSignupPress = () => {
    this.props.navigation.navigate({
      routeName: 'Home',
    });
  };

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
      <View style={{flex:1,alignItems:'center'}}>
        <Animated.Image source={imageLogo} style={[styles.logo_login, { height: this.imageHeight }]} />
        <ScrollView style={{flex:1}}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          {/* <Image source={imageLogo} style={styles.logo} /> */}

          {/* <View style={styles.form}> */}
            <RNSTextInput
              placeholder={strings.EMAIL_PLACEHOLDER}
              style={styles.input}
            />
            <RNSTextInput
              placeholder={strings.PASSWORD_PLACEHOLDER}
              style={styles.input}
              secureTextEntry
            />
          {/* </View> */}
          </KeyboardAvoidingView>
        </ScrollView>
        <View>
          <RNSButton caption = {strings.LOGIN} onPress={this.handleLoginPress} style={styles.register}/>
          <RNSButton caption = {strings.SIGNUP} onPress={this.handleSignupPress} bgColor={colors.green} style={styles.register}/>
        </View>
      </View>
    );
  };
}
