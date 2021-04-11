import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import firebase from "firebase";
function cacheImages(images) {
    return images.map((image) => {
        if (typeof image === "string") {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}
export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkTextInput: false,
            password: "",
            email: "",
            secureTextEntry: true,
            imageIsReady: false,
        };
    }
  userLogin = async (email, password) => {
      if (email && password) {
          try {
              const response = await firebase
                  .auth()
                  .signInWithEmailAndPassword(email, password);
              if (response) {
                  this.props.navigation.navigate("HomeScreen");
              }
          } catch (error) {
              Alert.alert(error.message);
          }
      } else {
          Alert.alert("enter email and password");
      }
  };
  async _loadAssetsAsync() {
      const imageAssets = cacheImages([require("../assets/bg.jpg")]);

      await Promise.all([...imageAssets]);
  }
  textInputChange(text) {
      if (text.length !== 0) {
          this.setState({
              checkTextInput: true,
              email: text,
          });
      } else {
          this.setState({
              checkTextInput: false,
          });
      }
  }
  secureTextEntry() {
      this.setState({
          secureTextEntry: !this.state.secureTextEntry,
      });
  }
  render() {
      if (!this.state.isReady) {
          return (
              <AppLoading
                  startAsync={this._loadAssetsAsync}
                  onFinish={() => this.setState({ isReady: true })}
                  onError={console.warn}
              />
          );
      }
      return (
          <View style={styles.container}>
              <View style={StyleSheet.absoluteFill}>
                  <Image
                      source={require("../assets/bg.jpg")}
                      style={{ flex: 1, height: null, width: null }}
                  />
              </View>
              <View style={styles.header}></View>

              <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                  <Text style={styles.footerText}>E-MAIL</Text>
                  <View style={styles.animation}>
                      <FontAwesome5 name="user-circle" color="#56538c" size={20} />
                      <TextInput
                          placeholder="Your Email-ID"
                          style={styles.textInput}
                          onChangeText={(text) => this.textInputChange(text)}
                      />
                      {this.state.checkTextInput ? (
                          <Animatable.View animation="bounceIn">
                              <Feather name="check-circle" color="green" size={20} />
                          </Animatable.View>
                      ) : null}
                  </View>

                  <Text style={[styles.footerText, { marginTop: 35 }]}>Password</Text>
                  <View style={styles.animation}>
                      <FontAwesome5 name="lock" color="#56538c" size={20} />
                      {this.state.secureTextEntry ? (
                          <TextInput
                              secureTextEntry={true}
                              placeholder="Your Password"
                              style={styles.textInput}
                              value={this.state.password}
                              onChangeText={(text) => this.setState({ password: text })}
                          />
                      ) : (
                          <TextInput
                              placeholder="Your Password"
                              style={styles.textInput}
                              value={this.state.password}
                              onChangeText={(text) => this.setState({ password: text })}
                          />
                      )}
                      <TouchableOpacity onPress={() => this.secureTextEntry()}>
                          {this.state.secureTextEntry ? (
                             <Feather name="eye-off" color="gray" size={20} />
                             ) : (
                                 <Feather name="eye" color="#8682ab" size={20} />
                             )}
                      </TouchableOpacity>
                  </View>
                  <Text style={{ color: "#009bd1", marginTop: 15 }}>
            Forgot Password?
                  </Text>
                  <View style={styles.button}>
                      <TouchableOpacity
                          onPress={() => {
                              this.userLogin(this.state.email, this.state.password);
                          }}
                          style={styles.signIn}
                      >
                          <LinearGradient
                              colors={["#5db8fe", "#39cff2"]}
                              style={styles.signIn}
                          >
                              <Text style={[styles.signinText, { color: "white" }]}>
                  Sign In
                              </Text>
                          </LinearGradient>
                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={() => this.props.navigation.navigate("SignUpScreen")}
                          style={[
                              styles.signIn,
                              {
                                  borderColor: "#4dc2f8",
                                  borderWidth: 1,
                                  marginTop: 15,
                                  borderRadius: 77,
                              },
                          ]}
                      >
                          <Text
                              style={[
                                  styles.signinText,
                                  {
                                      color: "#4dc2f8",
                                  },
                              ]}
                          >
                Sign Up
                          </Text>
                      </TouchableOpacity>
                  </View>
              </Animatable.View>
          </View>
      );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b8b8b8",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 25,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: "black",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    headerText: {
        color: "#05375a",
        fontSize: 18,
    },
    footerText: {
        color: "#56538c",
        fontSize: 18,
    },
    animation: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: "#b8b8b8",
    },
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    signinText: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
