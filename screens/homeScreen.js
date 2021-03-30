import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";


export default class HomeScreen extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//      news: []
//     };

//   }
// getNews= async() =>{
//   let news = await googleNewsAPI.getNews(googleNewsAPI.TOP_NEWS, null, "en-GB");
//   this.setState({news: news.items})
// }
// componentDidMount(){
//   this.getNews()
// }

// keyExtractor = (item, index) => index.toString()

// renderItem = ({item,index}) =>{
//     return (
//       <ListItem
//         key={index}

//         title={item.title}
//         titleStyle={{ color: 'black', fontWeight: 'bold' }}
//         subtitle={"Source: " + item.source}
//         bottomDivider
//       />
//     )
// }
  render() {
    return (
      <View>
<TouchableOpacity onPress={this.props.navigation.navigate("SearchScreen")}>
<Image
                            source={{uri: "https://static.thenounproject.com/png/2161479-200.png"}}
                        ></Image>
</TouchableOpacity>
{/* <FlatList
                 keyExtractor={this.keyExtractor}
                 data={this.state.news}
                 renderItem={this.renderItem}
               /> */}
      </View>
    );
  }
}


