import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';

import colors from './colors';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT_LOGIN = window.width / 3 * 2;
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: colors.white,
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.WHITE
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 90,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:30
  },
  logo_login: {
    height: IMAGE_HEIGHT_LOGIN,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:30
  },
  register:{
    marginBottom:30, 
    width:window.width -90,
  },
  login:{
    marginBottom:30, 
    width:window.width -90,
  }
});
