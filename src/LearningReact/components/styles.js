import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignContent: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  header: {},
  title: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5
  },
  author: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: "#C5C5C5"
  },
  descriptionContainer: {
    borderTopWidth: 2,
    borderColor: "#DFDFDF",
    borderRadius: 5,
    marginTop: 20
  },
  description: {
    fontSize: 14,
    padding: 5
  }
});

export default styles;
