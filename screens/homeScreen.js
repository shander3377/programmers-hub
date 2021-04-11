import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

import AppHeader from "../components/Header";
import Newsapi from "newsapi"
import * as Animatable from "react-native-animatable";
import {SearchBar} from "react-native-elements"
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
     news: []
    };

  }
setTheState = (data) =>{
  this.setState({news: data})
  console.warn(this.state.news)
}
getNews= async() =>{
  const newsapi = new Newsapi('7a3ccb65f4934c9aaacbfe6c57a9eed3');
  newsapi.v2.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
  }).then(response => {
 
    setTimeout(()=>  this.setTheState(response), 1000)

  });

}
componentDidMount(){
  this.getNews()
}

keyExtractor = (item, index) => index.toString()

renderItem = ({item,index}) =>{
    return (
      <ListItem
        key={index}

        title={item.name}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        subtitle={item.description}
        bottomDivider
      />
    )
}
  render() {
    return (
      <View>
        <Animatable.View animation="fadeInLeftBig">
             <AppHeader
            title={"Home"}
            navigation={this.props.navigation}
            color="black"
            show={true}
          />
          </Animatable.View>
          <Animatable.View animation="fadeInRightBig">
      <TextInput
              style={styles.textinput}
              placeholder={"Type here to Search ..."}
              onFocus={()=>this.props.navigation.navigate("SearchScreen")}
              placeholderTextColor={"#56538c"}
            />
</Animatable.View>
<FlatList
                          keyExtractor={this.keyExtractor}
                          data={this.state.news}
                          renderItem={this.renderItem}
                      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 390,
    height: 300,
 marginTop: -121
  },
  textinput: {
    width: "100%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "black",
    color: "#FFFFFF"
  },
});
