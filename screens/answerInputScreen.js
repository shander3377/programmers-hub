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
import AppHeader from "../components/Header";
import * as Animatable from "react-native-animatable";
import db from "../config"
export default class AnswerInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     topic: this.props.navigation.getParam("qtopic"),
     descreption: this.props.navigation.getParam("qdescreption"),
     ans: "dgsfsda"
    };
  }
  setTheState = (data)=>{
    this.setState({data: data})
    console.warn(this.state.data)
  }
upload = () =>{
    db.collection("answers").add({
        ans: this.state.ans
    })
    console.warn(this.state.topic)
    db.collection("unanswered-question").where("qtopic", "==", this.state.topic).get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.warn(doc.id)
db.collection("unanswered-question").doc(doc.id).delete()

      


      });
    });
}


  render() {
    return (

       
        <View style={{ flex: 1 , backgroundColor: "white"}}>
             <Animatable.View animation="fadeInLeftBig">
             <AppHeader
            title={"Answer Input"}
            navigation={this.props.navigation}
            color="black"
          />
          </Animatable.View>
{/* <Text style={styles.requestbuttontxt}>{this.state.language}</Text>
<Text style={styles.requestbuttontxt}>{this.state.msg}</Text>
<Text style={styles.requestbuttontxt}>{this.props.navigation.getParam("topic")}</Text> */}
{/* <Text>{this.state.data.ans}</Text>
<Text>{this.state.data.qtopic}</Text> */}
<View style={{backgroundColor:"black", height: 200}}>
<Animatable.View animation="fadeInRightBig">
 <Text style={{marginTop: 20, marginLeft: 125, fontSize: 40, color: 'white'}}>{this.state.topic}</Text>
 <Text style={{marginTop: 20, marginLeft: 100, fontSize: 15, color: 'white'}}>{this.state.descreption}</Text>
 </Animatable.View>
 </View>
 <Animatable.View animation="fadeInDownBig">
 <TextInput

              style={{ width: "100%",
              height: 50,
              padding: 10,
              borderColor: "#FFFFFF",
              borderRadius: 10,
              borderWidth: 3,
              fontSize: 18,
              backgroundColor: "black",
              marginTop: 30,
              height: 200,
         borderRadius: 25,
              color: "#FFFFFF"}}
              maxLength={100}
              placeholder={"Type Your Answer Here ..."}
             onChangeText={()=>this.setState({ans: text})}
              placeholderTextColor={"#56538c"}
              multiline={true}
              textAlignVertical= "top"
            />
            </Animatable.View>
            <Animatable.View animation="fadeInUpBig">
<TouchableOpacity onPress={()=>this.upload()} style={{  marginLeft: 90,

marginTop: 40,
width:200,
height: 50,
backgroundColor: "black",
borderRadius: 5}}><Text style={{color: "#56538c", marginLeft: 60, fontSize: 20, marginTop: 8}}>Submit</Text></TouchableOpacity>
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
