import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AskQuestionsScreen from "../screens/askQuestionScreen.js";
import CheckErrorsScreen from "../screens/checkErrorsScreen.js";
import ForHireScreen from "../screens/forHireScreen.js";
import SearchScreen from "../screens/searchScreen.js";
import HomeScreen from "../screens/homeScreen"
import { Icon } from "react-native-elements";
export const DrawerNavigator = createDrawerNavigator({
    AskQuestionsScreen : {
    screen : AskQuestionsScreen,
    navigationOptions:{
      drawerIcon:<Icon name="home" type="entypo"/>
    }
    },
    CheckErrorsScreen:{
      screen: CheckErrorsScreen,
      navigationOptions:{
        drawerIcon:<Icon name="settings" type="ionicons"/>
      }
    },
    ForHireScreen: {
      screen: ForHireScreen,
      navigationOptions:{
        drawerIcon:<Icon name="gift" type="fontawesome5"/>
      }
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions:{
        drawerIcon:<Icon name="notifications" type="ionicons"/>
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions:{
        drawerIcon:<Icon name="home" type="ionicons"/>
      }
    }
  },

  {
    initialRouteName : 'HomeScreen'
  })