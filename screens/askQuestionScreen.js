import React, { Component } from "react";
import { TextInput } from "react-native";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,

} from "react-native";
import * as Animatable from "react-native-animatable";
import { SearchBar, ListItem, Input } from "react-native-elements";
import db from "../config"
import AppHeader from "../components/Header";
export default class AskQuestionsScreen extends Component {
  constructor() {
    super();
    this.state = {
     language: "",
     topic: "",
     descreption: ""
    };
  }

  render() {
    return (

    
        <View style={{ flex: 1 , backgroundColor: "black"}}>
            <Animatable.View animation="fadeInLeftBig">
            <AppHeader
            title={"Search Screen"}
            navigation={this.props.navigation}
            color="black"
            show={true}
          />
       </Animatable.View>
               <Animatable.View animation="fadeInUpBig">
             
          <View style={styles.form}>
        <TextInput
                              placeholder="Language/Library"
                              style={styles.formTextInput}
               placeholderTextColor="#c7c9c8"
               onChangeText={(text) => {this.setState({language: text})
              console.warn(this.state.language)}}
                          />
  
            <TextInput
                              placeholder="Topic"
                              style={[styles.formTextInput,{height: 70, borderRadius: 30}]}
                          maxLength={50}
                          multiline={true}
                          textAlignVertical= "top"
                          multiline={true}
                          placeholderTextColor="#c7c9c8"
                          onChangeText={(text) =>{ this.setState({topic: text})
                          console.warn(this.state.topic)}}
                          />
                             <TextInput
                              placeholder="Descreption"
                              style={[styles.formTextInput,{height: 150, borderRadius: 25}]}
                          maxLength={100}
                          multiline={true}
                          textAlignVertical= "top"
                          placeholderTextColor="#c7c9c8"
                          onChangeText={(text) => {this.setState({descreption: text}) 
                          console.warn(this.state.descreption)}}
                          />
                          </View>
              <TouchableOpacity
                style={[styles.button, { marginTop:  30, marginLeft: 50}]}
                onPress={() => this.props.navigation.navigate("AnswersScreen",{language: this.state.language, topic: this.state.topic, descreption: this.state.descreption})}
              >
                <Text
                  style={styles.requestbuttontxt}
                >
                  Search
                </Text>
              </TouchableOpacity>
              </Animatable.View>
            </View>
          
     
     
     
    );
  }
}


const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formTextInput: {
    width: "75%",
    height:  50,
    borderWidth: 1,
    padding: 10,
    marginLeft: 50,
    marginTop: 50,
  fontSize: 15,
    borderRadius: 50,
    backgroundColor: "#343635",
  },
  form: {
    borderRadius: 50
  },

  requestbuttontxt:{
    fontSize:  20,
    fontWeight: "bold",
    color: "#343635",
  },
  button: {
    width: "75%",
    height:  60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:  50  ,
    backgroundColor: "#c7c9c8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
