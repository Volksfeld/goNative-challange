import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Post = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Post;
