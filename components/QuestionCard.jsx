import { StyleSheet, Text, View, Image } from "react-native";

const QuestionCard = ({ imageSource, heading, subheading }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subheading}>{subheading}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
  },
  textContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subheading: {
    fontSize: 16,
    color: "#666",
  },
});
export default QuestionCard;
