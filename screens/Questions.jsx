import { ScrollView, StyleSheet, Text, View } from "react-native";
import QuestionCard from "../components/QuestionCard";

const Questions = () => {
  return (
    <ScrollView>
      <View
        style={{ padding: 20, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontWeight: 600, fontSize: 22 }}>
          Let's Help you get your query resolved{" "}
        </Text>
        <QuestionCard
          imageSource="https://www.easyuni.my/media/uploads/2019/12/26/psychology-course.jpg"
          heading="Connect"
          subheading="Describe your query and we will connect you with the right mentor"
        />
        <QuestionCard
          imageSource="https://leverageedu.com/blog/wp-content/uploads/2020/03/BA-Psychology.png"
          heading="Discover"
          subheading="Decide mentors yourself to resolve your query"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default Questions;
