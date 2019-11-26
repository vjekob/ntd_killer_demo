import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { bindComponentToItemDispatch } from "../redux/itemReducer";
import { TinderSwiper } from "../components/TinderSwiper";

export class UnboundHomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <View style={styles.container}>
      <TinderSwiper onLike={() => this.props.swipe()} onNope={() => this.props.swipe()} />
    </View>
  }
}

export const HomeScreen = bindComponentToItemDispatch(UnboundHomeScreen);

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363636",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  match: {
    flex: 1,
    padding: 40,
  },
  matchInner: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  matchCaption: {
    fontSize: 32,
    marginBottom: 64
  },
  matchImage: {
    marginBottom: 64,
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: "transparent",
    shadowOffset: { width: 0, height: 0, },
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.4,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height
  }
});
