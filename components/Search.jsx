import React, { useState, useEffect } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 14 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 14,
          backgroundColor: "rgba(211, 211, 211, 0.2)",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "gainsboro",
          flex: 1,
          marginRight: 8,
        }}
      >
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
          style={{ flex: 1, marginLeft: 10, fontSize: 16 }}
          placeholder="Search.."
        />
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="bell-check-outline"
          size={28}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
