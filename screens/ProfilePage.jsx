import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import EditProfileButton from "../components/EditProfileButton";
import CustomButton from "../components/CustomButton";
import ProfileHeader from "../components/ProfileHeader";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <ProfileHeader userName="hksirya" />
      <View style={{ padding: 20, gap: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/C4D03AQFDJHl2qFg4sQ/profile-displayphoto-shrink_800_800/0/1650198745810?e=1697068800&v=beta&t=AT1nWEV0uA8bgugWwOtIaoH2qlp1N91nv9EPIflzko0",
            }}
            style={{ width: 80, aspectRatio: 1, borderRadius: 100 }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>25</Text>
              <Text style={{ fontSize: 18, fontWeight: 600 }}>Posts</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>250</Text>
              <Text style={{ fontSize: 18, fontWeight: 600 }}>Followers</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>152</Text>
              <Text style={{ fontSize: 18, fontWeight: 600 }}>Following</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <Text style={{ fontSize: 16, fontWeight: 700 }}>
              Harsh Kumar Sirya
            </Text>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png",
              }}
              style={{ width: 16, aspectRatio: 1, alignSelf: "center" }}
            />
          </View>
          <Text style={{ fontSize: 14, color: "gray" }}>@hksirya</Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: 400, lineHeight: 20 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500.
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <EditProfileButton title="Edit Button" />
          <EditProfileButton title="Share Profile" />
        </View>
        <CustomButton title="Become a Pro Peer " />

        <Text style={{ marginTop: 100, fontSize: 20, color: "lightgray" }}>
          Users can add Education , Achievement , Career Here using Top Tabs
          Navigator
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});
export default ProfilePage;
