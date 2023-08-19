import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import CustomHeader from "../components/CustomHeader";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Questions from "./Questions";
import Sessions from "./Sessions";
import CreatePost from "./CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          header: () => {
            return <CustomHeader title="Pro Peers" />;
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => <Feather name="home" size={24} color="black" />,
          }}
          name="Feed"
          component={HomePage}
        />

        <Tab.Screen
          name="Ask!"
          component={Questions}
          options={{
            tabBarIcon: () => (
              <SimpleLineIcons name="puzzle" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="add-circle-outline" size={24} color="black" />
            ),
          }}
          name="Create"
          component={CreatePost}
        />

        <Tab.Screen
          name="Session"
          component={Sessions}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="add-task" size={24} color="black" />
            ),
          }}
        />
      </Tab.Group>

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={24} color="black" />
          ),
        }}
        name="Profile"
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
