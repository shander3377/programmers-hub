import * as React from "react";

import {

    StyleSheet,

  

    View,
TouchableOpacity,
    Text
} from "react-native";

import LoginScreen from "./screens/loginScreen.js";

import HomeScreen from "./screens/homeScreen.js";

import WelcomeScreen from "./screens/welcomeScreen.js";
import SignUpScreen from "./screens/signUpScreen.js"
import { DrawerNavigator } from './components/drawerNavigator'
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    CardStyleInterpolators,
    HeaderBackground,
} from "@react-navigation/stack";


const Stack = createStackNavigator();

export default class App extends React.Component {

    render() {

        return (

            <View style={styles.container}>

             
                <NavigationContainer>
                    <Stack.Navigator>
                    <Stack.Screen
                            name="WelcomeScreen"
                            component={WelcomeScreen}
                            options={{
                                cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
                                headerLeft: null,
                                gesturesEnabled: false,
                                title: "Login Screen"
                            }}
                        />
                        <Stack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                            options={{
                                cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
                                headerLeft: null,
                                gesturesEnabled: false,
                                title: "Login Screen",
                                headerStyle: {
                                    backgroundColor: 'black',
                                  },
                                  headerTitleStyle: {
                                  color: "#56538c"
                                  },
                            }}
                        />
                    <Stack.Screen
                            name="SignUpScreen"
                            component={SignUpScreen}
                            options={{
                                cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
                                headerLeft: null,
                                gesturesEnabled: false,
                                title: "Sign Up pScreen"
                            }}
                        />

                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                            options={{
                                cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
                                title: "Home Screen",
                                headerLeft: () => (
                                   <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}>
                                   <Text>open drawer</Text>
                                   </TouchableOpacity>
                                  ),
                            }}
                        />

<Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{
                                cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
            headerShown: false
                            }}
                        />
          
                   

                      
                    </Stack.Navigator>
                 
                </NavigationContainer>
            </View>

        );

    }

}







const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#b8b8b8",

    },

});
