import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const SettingsScreen = ({ navigation, route }) => {
    const user = route.params && route.params.user ? route.params.user : {};
    const { avatar, name, username, id_user } = user;
    console.log("ten: "+ name + 'avatar :'+avatar);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: avatar }}
          onPress={() => navigation.replace("Login")}
        />
        <Text style={styles.profileName}>{name}</Text>
      </View>

      <View style={styles.caidat}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("DoiMK")}
        >
          <Text style={styles.logoutButtonText}>đổi mật khẩu </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dangxuatbtn}>
        <TouchableOpacity
          style={styles.logoutButton}
        >
          <Text style={styles.logoutButtonText}>Đăng Xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: "black",
    paddingVertical: 16,
    paddingHorizontal: 32,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 18,
  },
  dangxuatbtn: {
    flex: 1,
    justifyContent: "flex-end",
  },
  caidat: {
    flex:5,
    backgroundColor:'white',
  },
});

export default SettingsScreen;
