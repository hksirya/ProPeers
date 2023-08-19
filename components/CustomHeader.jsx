import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ title, onDMPress }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onDMPress} style={styles.dmIcon}>
        <Ionicons name="paper-plane-outline" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dmIcon: {
    padding: 5,
  },
});

export default CustomHeader;
