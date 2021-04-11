import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SearchBar, ListItem } from 'react-native-elements';
import db from "../config.js"
import AppHeader from "../components/Header";
import * as Animatable from "react-native-animatable";
export default class SearchScreen extends Component {

constructor(props){
  super(props)
this.state= {
  search: "",
  data: [],
  lastVisibleData: null
}
}
getData = () => {
  db.collection("user")
    .limit(10)
    .get()
    .then(snapshot => {
      snapshot.docs.map(doc => {
        this.setState({
          data: [...this.state.data, doc.data()],
          lastVisibleData: doc
        });
      });
    });
};
componentDidMount = async () => {
  this.getData();
};
  updateSearch = (search) => {
    this.setState({ search });
    console.warn(this.state.search)
  };
  handleSearch = async text => {
    var enteredText = text.toUpperCase().split("");
    

    console.log(text)
    this.setState({
      data: []
    });
    if (!text) {
      this.getData();
    }
    db.collection("user").where("language", "==", text).get().then(snapshot => {
      snapshot.docs.map(doc => {
        this.setState({
          data: [...this.state.data, doc.data()],
          lastVisibleData: doc
        });

      });
      console.warn(this.state.data)
    });
  }
  fetchMoreData = async text => {
    var enteredText = text.toUpperCase().split("");
    text = text.toUpperCase();
console.warn(lastVisibleData)
    const { lastVisibleData, data } = this.state;
      const query = await db
        .collection("user")
        .where("language", "==", text)
        .startAfter(lastVisibleData)
        .limit(10)
        .get();
      query.docs.map(doc => {
        this.setState({
          data: [...this.state.data, doc.data()],
          lastVisibleData: doc
        });
        console.warn(this.state.data)
      });
  };
  renderItem = ({ item, i }) => {
    return(
      <ListItem
      key={i}
      title={"item.first_name:"}
      titleStyle={{ color: "black", fontWeight: "bold" }}
      subtitle={`item.email_id`}

      bottomDivider
  />
    );
  };
  render() {
    return (
      <View>
        <Animatable.View animation="fadeInLeftBig">
          <AppHeader
            title={"Search Screen"}
            navigation={this.props.navigation}
            color="black"
            show={true}
          />
     </Animatable.View>
          <Animatable.View animation="fadeInRightBig">
      <SearchBar
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={this.state.search}
      />
            </Animatable.View>
            <Animatable.View animation="fadeInUpBig">
      <TouchableOpacity onPress={()=>this.handleSearch(this.state.search)} style={styles.scanbutton}><Text style={{color: "#56538c", marginLeft: 60, fontSize: 20, marginTop: 8}}>Search</Text></TouchableOpacity>
      </Animatable.View>
      <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => this.fetchMoreData(this.state.search)}
            onEndReachedThreshold={0.7}
          />
      </View>
    );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4"
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF"
  },
  scanbutton: {
    marginLeft: 85,

    marginTop: 10,
    width:200,
    height: 50,
    backgroundColor: "black",
borderRadius: 5
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
    fontFamily: "Rajdhani_600SemiBold"
  },
  lowerContainer: {
    flex: 0.8,
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 20,
    fontFamily: "Rajdhani_600SemiBold"
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Rajdhani_600SemiBold"
  },
  lowerLeftContaiiner: {
    alignSelf: "flex-end",
    marginTop: -40
  },
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  transactionText: {
    fontSize: 20,

    fontFamily: "Rajdhani_600SemiBold"
  },
  date: {
    fontSize: 12,
    fontFamily: "Rajdhani_600SemiBold",
    paddingTop: 5
  }
});