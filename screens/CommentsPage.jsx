import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const COMMENTS = [
  { id: "1", username: "user1", comment: "Awesome photo!" },
  { id: "2", username: "user2", comment: "Love it!" },
  { id: "3", username: "user3", comment: "Great shot!" },
  // Add more comments
];

const CommentsScreen = () => {
  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/640px-Black_colour.jpg",
        }} // Replace with user's profile picture
      />
      <ListItem.Content>
        <ListItem.Title>{item.username}</ListItem.Title>
        <ListItem.Subtitle>{item.comment}</ListItem.Subtitle>
      </ListItem.Content>
      <Ionicons name="heart-outline" size={18} color="black" />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={COMMENTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CommentsScreen;
