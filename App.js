import * as React from "react";

import {

    StyleSheet,

  

    View,
TouchableOpacity,
    Text
} from "react-native";
import { DrawerActions } from '@react-navigation/native';
import LoginScreen from "./screens/loginScreen.js";

import AskQuestionsScreen from "./screens/askQuestionScreen.js";
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import WelcomeScreen from "./screens/welcomeScreen.js";
import SignUpScreen from "./screens/signUpScreen.js"
import AnswersScreen from "./screens/answersScreen.js"
import { DrawerNavigator } from './components/drawerNavigator'
import AnswerInputScreen from "./screens/answerInputScreen.js";
import SearchScreen from "./screens/searchScreen.js";


export default function App() {
    return (
      <AppContainer/>
    );
  }





const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen: WelcomeScreen},
    LoginScreen:{screen: LoginScreen},
    SignUpScreen:{screen: SignUpScreen},
    DrawerNavigator:{screen: DrawerNavigator},
    AnswerInputScreen: {screen: AnswerInputScreen},
    AnswersScreen:{screen: AnswersScreen},
    SearchScreen: {screen: SearchScreen}
  })
  
  const AppContainer =  createAppContainer(switchNavigator);