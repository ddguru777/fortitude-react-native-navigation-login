/* eslint-disable import/no-unresolved */
import React from 'react';
import { 
  Image, 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native';

import { 
  createBottomTabNavigator, 
  createStackNavigator 
} from 'react-navigation';

import { colors, fonts } from '../../styles';

import HomeScreen from '../main/home/HomeViewContainer';
import ScheduleScreen from '../main/schedule/ScheduleViewContainer';
import ProfileScreen from '../main/profile/ProfileViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconSchedule = require('../../../assets/images/tabbar/schedule.png');
const iconProfile = require('../../../assets/images/tabbar/profile.png');
const headerBackground = require('../../../assets/images/topBarBg.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  headerCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});

defaultNavigationOptions = () => ({
  titleStyle: {
    fontFamily: fonts.primaryLight,
  },
  headerStyle: {
    backgroundColor: colors.primary,
    borderBottomWidth: 0,
  },
  headerBackground: (
    <Image
      style={{ flex: 1 }}
      source={headerBackground}
      resizeMode="cover"
    />
  ),
  headerTitleStyle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
  },
  headerTintColor: '#222222',
  headerLeft: props => (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        paddingLeft: 25,
      }}
    >
      <Image
        source={require('../../../assets/images/icons/arrow-back.png')}
        resizeMode="contain"
        style={{
          height: 20,
        }}
      />
    </TouchableOpacity>
  ),
});

// Navigation Controller for Home Tab
export const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Fortitude',
        headerLeft: null
      },
    },
    ProfileNavi: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
      },
    }
  },{
    defaultNavigationOptions: defaultNavigationOptions
  },
)

// Navigation Controller for Schedule Tab
export const ScheduleNavigator = createStackNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        title: 'Schedule',
        headerLeft: null
      },
    },
    ProfileNavi: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
      },
    }
  },{
    defaultNavigationOptions: defaultNavigationOptions
  },
)

// Navigation Controller for Profile Tab
export const ProfileNavigator = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        headerLeft: null
      },
    }
  },{
    defaultNavigationOptions: defaultNavigationOptions
  },
)
// Create a tab bar controller
export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator
    },
    Schedule: {
      screen: ScheduleNavigator
    },
    Profile: {
      screen: ProfileNavigator
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Schedule':
            iconSource = iconSchedule;
            break;
          case 'Profile':
            iconSource = iconProfile;
            break;
          default:
            iconSource = iconHome;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  },
);
