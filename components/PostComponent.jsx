import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const PostComponent = ({ username, name, image, postContent, verified }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        {/* User Avatar */}
        <View style={styles.avatar}>
          <Image
            source={{
              uri: image,
            }}
            style={{ width: 45, aspectRatio: 1, borderRadius: 25 }}
          />
        </View>

        {/* User Information */}
        <View style={styles.userInfoText}>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginRight: 4,
                justifyItem: "center",
              }}
            >
              <Text style={styles.username}>{name}</Text>
              {verified && (
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png",
                  }}
                  style={{ width: 16, aspectRatio: 1 }}
                />
              )}
            </View>
            <Text style={styles.handle}>@{username}</Text>
          </View>
          <Entypo
            style={{ marginLeft: "auto" }}
            name="dots-three-horizontal"
            size={18}
            color="gray"
          />
        </View>
      </View>

      {/* Post Content */}
      <Text style={styles.postText}>{postContent}</Text>
      <Text style={{ color: "gray", fontWeight: "400" }}>
        Posted 1 hour ago
      </Text>

      {/* Post Actions */}
      <View style={styles.postActions}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <AntDesign
            onPress={() => setIsLiked(!isLiked)}
            name={isLiked ? "heart" : "hearto"}
            size={24}
            color={isLiked ? "red" : "black"}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </View>
        <Entypo name="share-alternative" size={20} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "lightgray",
    marginRight: 10,
  },
  userInfoText: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  handle: {
    color: "gray",
  },
  postText: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 10,
  },
  postActions: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PostComponent;
