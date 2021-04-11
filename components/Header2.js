import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert} from 'react-native';


export default class AppHeader extends Component{

  render(){
    return(
        <Header
         
          centerComponent={{ text: this.props.title, style: { color: '#56538c', fontSize:20,fontWeight:"bold", marginTop:5} }}
          backgroundColor = "black"
          containerStyle={styles.style}
        />

)
}

}
const styles = StyleSheet.create({
    style:{
        height: 70
    }
   });
  