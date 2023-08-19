import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ProfileHeader = ({ userName }) => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity style={styles.backIcon}>
        <Ionicons name="chevron-back" size={1} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>{userName}</Text>
      <Entypo name="dots-three-horizontal" size={18} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ProfileHeader;
