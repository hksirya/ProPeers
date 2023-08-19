import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SessionCard from "../components/SessionCard";

const Sessions = () => {
  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 20 }}>
        <Text style={{ fontWeight: 600, fontSize: 26 }}>Book Now </Text>
        <SessionCard
          imageSource="https://ncube-digest.com/wp-content/uploads/2022/07/Android-development-services.jpg"
          title="Android Developer"
        />
        <SessionCard
          imageSource="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/72AYgWguyRFfesCrDJi8w8/35b0d50e819d179b4d99b5f8e44fb416/GettyImages-1255905368.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="
          title=" Web developer "
        />
        <SessionCard
          imageSource="https://miro.medium.com/v2/resize:fit:1400/1*Gdqb5aUjGZaYod_WN4CPUg.jpeg"
          title="ML Specialist"
        />
        <SessionCard
          imageSource="https://i.ytimg.com/vi/ueNT-w7Oluw/maxresdefault.jpg"
          title="CP specialist"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default Sessions;
