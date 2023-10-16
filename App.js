import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Controller/LoginScreen";
import HomeScreen from "./Controller/HomeScreen";
import RegisterScreen from "./Controller/RegisterScreen";
import UserProfileScreen from "./Controller/UserProfileScreen";
import SettingsScreen from "./Controller/SettingScreen";
import NewPostScreen from "./Controller/NewPostScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        
        <Stack.Screen
          name="Profile"
          component={UserProfileScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Setting" options={{ headerShown: false }}>
          {(props) => <SettingsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
