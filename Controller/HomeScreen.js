// HomeScreen.js
import React from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import ListUserFollowingScreen from "./ListUserFollowingScreen";
import AllPostsScreen from "./AllPostsScreen";
import SetingScreen from "./SettingScreen";
import Notification from "./Notification";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPostScreen from "./NewPostScreen";
import SettingsScreen from "./SettingScreen";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import EditPostScreen from './EditPostScreen';
import DoiMkScreen from "./DoiMkScreen.js";
import LoginScreen from './LoginScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const AllPostsStack = ({ route }) => {
  const { user } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllPostsScreen"
        component={AllPostsScreen}
        initialParams={{ user: user }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        initialParams={{ user: user }}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPost"
        initialParams={{ user: user }}
        component={NewPostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditPost"
        initialParams={{ user: user }}
        component={EditPostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoiMK"
        initialParams={{ user: user }}
        component={DoiMkScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AllCaiDat = ({ route }) => {
  const { user } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        initialParams={{ user: user }}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoiMK"
        initialParams={{ user: user }}
        component={DoiMkScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

const HomeScreen = ({ route }) => {
    const { user } = route.params;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "trangchu") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "ListUserFollowingScreen") {
                iconName = focused ? "people-circle" : "people-circle-outline";
              } else if (route.name === "Notification") {
                iconName = focused
                  ? "notifications-sharp"
                  : "notifications-outline";
              } else if (route.name === "SetingScreen") {
                iconName = focused ? "menu" : "menu";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="trangchu"
            component={AllPostsStack}
            initialParams={{ user: user }}
            options={{
              headerShown: true,
              tabBarLabel: "Trang Chủ",
              title: "Tin Tức F",
            }}
          />

          <Tab.Screen
            name="ListUserFollowingScreen"
            component={ListUserFollowingScreen}
            options={{
              headerShown: true,
              tabBarLabel: "Bạn Bè",
              title: "Danh sách bạn bè",
            }}
          />
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              headerShown: true,
              tabBarLabel: " Thông báo",
              title: "Thông báo",
            }}
          />
          <Tab.Screen
            name="SetingScreen"
            initialParams={{ user: user }}
            component={AllCaiDat}
            options={{
              headerShown: true,
              tabBarLabel: "Menu",
              title: "Tài khoản",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;


