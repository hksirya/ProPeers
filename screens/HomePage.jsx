import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
import React from "react";
import PostComponent from "../components/PostComponent";
import SearchBar from "../components/Search";
import Banner from "../components/Banner";

const fakeData = [
  {
    username: "john_doe",
    name: "John Doe",
    image:
      "https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs=",
    postContent: "How do you approach problem-solving?",
    verified: "true",
  },
  {
    username: "jane_smith",
    name: "Jane Smith",
    image: "https://via.placeholder.com/150/3498DB/FFFFFF?text=JS",
    postContent: "What's your favorite travel destination?",
  },
  {
    username: "michael_jones",
    name: "Michael Jones",
    image:
      "https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs=",
    postContent: "What's the best book you've read recently?",
  },
  {
    username: "sarah_williams",
    name: "Sarah Williams",
    image:
      "https://i.pinimg.com/736x/9b/47/bb/9b47bb3bb4f6c7e4eec7df0fa8931c3b.jpg",
    postContent: "How do you manage stress in your daily life?",
    verified: "true",
  },
  {
    username: "alexander_wilson",
    name: "Alexander Wilson",
    image:
      "https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs=",
    postContent: "What's your favorite hobby?",
  },
  {
    username: "olivia_thompson",
    name: "Olivia Thompson",
    image:
      "https://i.pinimg.com/736x/9b/47/bb/9b47bb3bb4f6c7e4eec7df0fa8931c3b.jpg",
    postContent: "What's your go-to comfort food?",
  },
  {
    username: "james_anderson",
    name: "James Anderson",
    image:
      "https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs=",
    postContent: "How do you stay motivated in your work?",
  },
  {
    username: "emily_davis",
    name: "Emily Davis",
    image:
      "https://i.pinimg.com/736x/9b/47/bb/9b47bb3bb4f6c7e4eec7df0fa8931c3b.jpg",
    postContent: "What's your favorite type of music?",
    verified: "true",
  },
  {
    username: "daniel_robinson",
    name: "Daniel Robinson",
    image:
      "https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs=",
    postContent: "How do you handle time management?",
  },
  {
    username: "ava_thomas",
    name: "Ava Thomas",
    image:
      "https://i.pinimg.com/736x/9b/47/bb/9b47bb3bb4f6c7e4eec7df0fa8931c3b.jpg",
    postContent: "What's a skill you want to learn in the future?",
  },
];

const renderPost = ({ item }) => (
  <PostComponent
    username={item.username}
    name={item.name}
    image={item.image}
    postContent={item.postContent}
    verified={item.verified}
  />
);

const headerList = () => {
  return (
    <View>
      <SearchBar />
      <Banner />
    </View>
  );
};
const HomePage = () => {
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={headerList}
        data={fakeData}
        renderItem={renderPost}
        keyExtractor={(item) => item.username}
      />
    </SafeAreaView>
  );
};

export default HomePage;
