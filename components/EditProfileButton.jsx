import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const EditProfileButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1, // Set flex to 1 to take available space
    backgroundColor: "white",
    borderColor: "#dbdbdb",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EditProfileButton;
