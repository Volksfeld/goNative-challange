import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import Post from "./components/Post";

// DATA ARRAY --------------------------------------------------
const data = [
  {
    title: "Aprendendo React Native",
    author: "Júlio César",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie ultrices justo, et convallis lorem finibus in. Cras eget libero a felis egestas rhoncus. Etiam convallis pharetra orci, eget hendrerit sem feugiat sit amet. Integer quam lectus, scelerisque eu odio vel, pharetra hendrerit odio. Nunc sit amet rutrum velit, dignissim eleifend turpis. "
  },
  {
    title: "Aprendendo React Native",
    author: "Danilo Simas",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie ultrices justo, et convallis lorem finibus in. Cras eget libero a felis egestas rhoncus. Etiam convallis pharetra orci, eget hendrerit sem feugiat sit amet. Integer quam lectus, scelerisque eu odio vel, pharetra hendrerit odio. Nunc sit amet rutrum velit, dignissim eleifend turpis. "
  },
  {
    title: "Aprendendo React Native",
    author: "Lucas Brito",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie ultrices justo, et convallis lorem finibus in. Cras eget libero a felis egestas rhoncus. Etiam convallis pharetra orci, eget hendrerit sem feugiat sit amet. Integer quam lectus, scelerisque eu odio vel, pharetra hendrerit odio. Nunc sit amet rutrum velit, dignissim eleifend turpis. "
  }
];

export default class App extends Component {
  // RENDER --------------------------------------------------
  render() {
    const header = this.renderHeader();
    const content = this.renderContent();

    return (
      <View style={styles.page}>
        {header}
        {content}
      </View>
    );
  }

  // HEADER --------------------------------------------------
  renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.welcome}>goNative App</Text>
      </View>
    );
  }

  // ITEMS  --------------------------------------------------
  renderItems() {
    const items = data.map(function(data) {
      return <Post item={data} />;
    });
    return items;
  }
  // CONTENT --------------------------------------------------
  renderContent() {
    const items = this.renderItems();
    return <ScrollView style={styles.list}>{items}</ScrollView>;
  }
}
