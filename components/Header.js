import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert} from 'react-native';


export default class AppHeader extends Component{

  render(){
    return(
        <Header
          leftComponent={this.props.show ?
            <Icon name='bars' type='font-awesome' color='#56538c'  onPress={() => this.props.navigation.toggleDrawer()} iconStyle={[{marginTop:5}]}/> :   <Icon name='arrow-left' type='font-awesome' color='#56538c'  onPress={() =>   this.props.navigation.navigate("HomeScreen")} iconStyle={[{marginTop:5}]}/>}
          centerComponent={{ text: this.props.title, style: { color: '#56538c', fontSize:20,fontWeight:"bold", marginTop:5} }}
          backgroundColor = {this.props.color}
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
  