import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from "react-native";

import PostComponent from "./components/PostComponent";
import SearchBar from "./components/Search";
import Banner from "./components/Banner";
import ProfilePage from "./screens/ProfilePage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import CustomHeader from "./components/CustomHeader";
import CommentsScreen from "./screens/CommentsPage";
import BottomTabNavigator from "./screens/BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={BottomTabNavigator}
        />

        <Stack.Screen
          name="Profile Page"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
