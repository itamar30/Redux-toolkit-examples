import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 60,
    borderRadius: 15,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
