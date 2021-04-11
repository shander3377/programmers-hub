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
import AppHeader from "../components/Header";
import firebase from 'firebase'
import { SearchBar, ListItem, Input } from "react-native-elements";
import stringSimilarity from "string-similarity"
import db from "../config"
import { createAnimatableComponent } from "react-native-animatable";
import * as Animatable from "react-native-animatable";
export default class AnswersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     language:this.props.navigation.getParam("language"),
     topic: this.props.navigation.getParam("topic"),
     descreption: this.props.navigation.getParam("descreption"),
     docId: '',
     msg: "mhm",
    data: []
    };
  }
  setTheState = (data)=>{
    this.setState({data: data})
    console.warn(this.state.data)
  }
getAnswers = () =>{
    db.collection("answers").where("qlanguage","==", this.state.language).get().then((snapshot) => {
        snapshot.forEach((doc) => {
      var checkNo = stringSimilarity.compareTwoStrings(
               this.state.topic,
               doc.data().qtopic
              )
              console.warn(checkNo)
            
              if(checkNo >= 0.6){
                setTimeout(()=>  this.setTheState(doc.data()), 1000);
              } else {
                this.setState({msg: "no"})
              }
        


        });
      });
      console.warn(this.state.data)
}
componentDidMount = () =>{
    this.getAnswers()
}
keyExtractor = (item, index) => index.toString()

renderItem = ( {item, i} ) =>{
    return (
        // <ListItem
        //     key={i}
        //     title={"Title:"}
        //     titleStyle={{ color: "black", fontWeight: "bold" }}
        //     subtitle={`Description`}
  
        //     bottomDivider
        // />
        <Text style={{color: "black"}}>mhm</Text>
    );
}
noAnswer = () =>{
  db.collection("unanswered-question").add({
    qtopic: this.state.topic,
    language: this.state.language,
    descreption: this.state.descreption,
    qdate: new Date() 
  })
  Alert.alert(
    "Upload to unanswered-questions list!",
    "Check back later to find an answer to your question",
    [
      { text: "OK", onPress: () => this.props.navigation.navigate("HomeScreen") }
    ]
  );
  
}
  render() {
    if(this.state.data.length === 0){
      return(
        <View>
               <Animatable.View animation="fadeInLeftBig">
             <AppHeader
            title={"Answer Screen"}
            navigation={this.props.navigation}
            color="black"
            show={false}
          />
          </Animatable.View>
      <Animatable.View animation="flipInX">
        <Text>Uh Oh, We couldnt find an answer to your question. </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("AskQuestionsScreen")}>
          <Text style={{color: 'blue', textDecorationLine: 'underline'}}>Try Rephrasing it</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={()=>{this.noAnswer()}}>
        <Text style={{color: 'blue', textDecorationLine: 'underline'}}>Or Upload this question to unanswered questions list</Text>
        </TouchableOpacity>
        </Animatable.View>
      </View>
      )
    } else {
    return (

       
        <View style={{ flex: 1 , backgroundColor: "white"}}>
{/* <Text style={styles.requestbuttontxt}>{this.state.language}</Text>
<Text style={styles.requestbuttontxt}>{this.state.msg}</Text>
<Text style={styles.requestbuttontxt}>{this.props.navigation.getParam("topic")}</Text> */}
{/* <Text>{this.state.data.ans}</Text>
<Text>{this.state.data.qtopic}</Text> */}
       <Animatable.View animation="fadeInLeftBig">
             <AppHeader
            title={"Answer Screen"}
            navigation={this.props.navigation}
            color="black"
            show={false}
          />
          </Animatable.View>
<FlatList
                          keyExtractor={this.keyExtractor}
                          data={this.state.data}
                          renderItem={this.renderItem}
                      />
            </View>
          
     
     
     
    );
}
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
