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
import firebase from 'firebase'
import { SearchBar, ListItem, Input } from "react-native-elements";
import stringSimilarity from "string-similarity"
import AppHeader from "../components/Header";
import * as Animatable from "react-native-animatable";
import db from "../config"
export default class GiveAnswersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     docId: '',
     msg: "mhm",
    data: []
    };
  }
  setTheState = (data)=>{
    this.setState({data: data})
    console.warn(this.state.data)
  }
getQuestions = () =>{
    db.collection("unanswered-question").get().then((snapshot) => {
        snapshot.forEach((doc) => {

                setTimeout(()=>  this.setTheState(doc.data()), 1000);
              
        


        });
      });

}
componentDidMount = () =>{
    this.getQuestions()
}
keyExtractor = (item, index) => index.toString()

renderItem = ( {item, i} ) =>{
    return (
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("AnswerInputScreen",{qtopic: item.qtopic, qdescreption: item.descreption})}>
         <ListItem
            key={i}
           title={"Title:"}
            titleStyle={{ color: "black", fontWeight: "bold" }}
          subtitle={`Description`}
  
             bottomDivider/> 
        </TouchableOpacity>
    );
}

  render() {
    if(this.state.data.length === 0){
      return(
        <View>
            <Animatable.View animation="fadeInLeftBig">
             <AppHeader
            title={"Give Answers"}
            navigation={this.props.navigation}
            color="black"
          />
          </Animatable.View>
          <Animatable.View animation="flipInX">
        <Text style={{marginTop: 35}}>Oh, We couldnt find any question for you to answer. Check back later.</Text>
        </Animatable.View>
      </View>
      )
    }
    return (

       
        <View style={{ flex: 1 , backgroundColor: "white"}}>
     <Animatable.View animation="fadeInLeftBig">
             <AppHeader
            title={"Give Answers"}
            navigation={this.props.navigation}
            color="black"
            show={true}
          />
          </Animatable.View>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate("AnswerInputScreen",{qtopic: "mhm", qdescreption: "mhmhmhmhmhmhmmh"})}><Text style={{marginTop:50}}>give answers</Text></TouchableOpacity>
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
