import React from "react";
import { View } from "react-native";
import { Badge } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

const tabBarIcon = ({ focused, color, size, route }) => {
  let iconName;
  let badgeCount = 2; // Số thông báo của bạn

  if (route.name === "Notification") {
    iconName = focused ? "notifications-sharp" : "notifications-outline";
    badgeCount = 5; // Giả sử bạn có 5 thông báo
  }

  return (
    <View>
      <Ionicons name={iconName} size={size} color={color} />
      {badgeCount > 0 && (
        <Badge
          value={badgeCount}
          containerStyle={{ position: "absolute", top: -4, right: -4 }}
        />
      )}
    </View>
  );
};

export default tabBarIcon;
