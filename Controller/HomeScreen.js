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
import LoginScreen from "./LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPostScreen from "./NewPostScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = ({}) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "AllPostsScreen") {
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
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="AllPostsScreen"
          component={AllPostsScreen}
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
          component={SetingScreen}
          options={{
            headerShown: true,
            tabBarLabel: "Menu",
            title: "Tài khoản",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
