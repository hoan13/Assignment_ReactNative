import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const UserProfile = {
  name: "John Doe",
  image: require("../assets/homeavatar.png"),
};

const Data_Following = [
  {
    idUser: 1,
    user: {
      name: "User1",
      image: require("../assets/homeavatar.png"),
    },
  },
  {
    idUser: 2,
    user: {
      name: "User2",
      image: require("../assets/homeavatar.png"),
    },
  },
  {
    idUser: 3,
    user: {
      name: "User3",
      image: require("../assets/homeavatar.png"),
    },
  },
];

const UserProfileScreen = () => {
  const [followingList, setFollowingList] = useState(Data_Following);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image source={banner} style={{ width: "100%", height: 250 }} />
        <View
          style={{ position: "absolute", marginLeft: "90%", marginTop: "6%" }}
        >
          <TouchableOpacity onPress={() => setshowModel(true)}>
            <Ionicons
              name="menu"
              size={35}
              style={{ marginTop: 20, marginEnd: 15, color: "white" }}
            />
          </TouchableOpacity>
          <Modal
            visible={showModel}
            animationType="slide"
            transparent={true} // Để có nền trong suốt
            onRequestClose={() => setshowModel(false)} // Để có thể đóng modal bằng cách bấm nút back trên Android
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginEnd: 20,
                marginTop: 40,
              }}
            >
              <View
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text>Menu:</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={{ borderTopWidth: 1 }}
                >
                  <Text style={{ padding: 5 }}>Đăng xuất</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ borderTopWidth: 1 }}
                  onPress={() => setshowModel(false)}
                >
                  <Text style={{ padding: 5 }}>Đóng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    marginLeft: 16,
    fontSize: 24,
  },
  userCell: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
  },
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  followButton: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  followButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default UserProfileScreen;
