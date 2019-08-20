import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Animated,
  ScrollView,
  Platform
} from 'react-native';

import strings from '../../../styles/strings';
import { colors, fonts } from '../../../styles';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../../../styles/common'; 
import imageLogo from "../../../../assets/images/logo.png";
import RNSTextInput from "../../../components/TextInput";
import RNSButton from "../../../components/Button";


export default class SignupScreen  extends React.Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
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
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
  };
  
  handleSignupPress = () => {
    this.props.navigation.navigate({
      routeName: 'Home',
    });
  };
  
  render () {
    return (
      <View style={{flex:1,alignItems:'center'}}>
        <Animated.Image source={imageLogo} style={[styles.logo, { height: this.imageHeight }]} />
        <ScrollView style={{flex:1}}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

            <RNSTextInput
              placeholder={strings.EMAIL_PLACEHOLDER}
              style={styles.input}
            />
            <RNSTextInput
              placeholder={strings.PASSWORD_PLACEHOLDER}
              style={styles.input}
              secureTextEntry
            />
            <RNSTextInput
              placeholder={strings.CFRMPASSWORD_PLACEHOLDER}
              style={styles.input}
              secureTextEntry
            />
            
          </KeyboardAvoidingView>
        </ScrollView>
        <View>
          <RNSButton caption = {strings.SIGNUP} onPress={this.handleSignupPress} bgColor={colors.green} style={styles.register}/>
        </View>
      </View>
    );
  };
}