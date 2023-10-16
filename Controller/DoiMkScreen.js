import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

  

const DoiMkScreen = ({ route }) => {
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [NLpassword, setNLPassword] = useState("");
  const [oldsecurity, setOldSecurity] = useState(true);
  const [security, setSecurity] = useState(true);
  const [security2, setSecurity2] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const user = route.params && route.params.user ? route.params.user : {};
  const { avatar, name, username, id_user,id, password } = user;

  const URL_API = "https://652670e2917d673fd76c44ab.mockapi.io/api/users";

  const handlePasswordChange = () => {
    if (!oldpassword || !newpassword || !NLpassword) {
      Alert.alert("Thông báo", "Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (oldpassword !== password) {
      Alert.alert("Thông báo", "Mật khẩu cũ không chính xác!");
      return;
    }

    if (newpassword !== NLpassword) {
      Alert.alert("Thông báo", "Mật khẩu mới không khớp!");
      return;
    }

    setIsLoading(true);

    fetch(URL_API + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newpassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOldPassword("");
        setNewPassword("");
        setNLPassword("");
        setIsLoading(false);
        Alert.alert("Thông báo", "Thay đổi mật khẩu thành công!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ImageBackground
      source={require("../assets/anh-nen-mau-xanh-001.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đổi Mật Khẩu </Text>

        <View style={styles.inputcontainer}>
          <Text style={{ margin: 5 }}>Mật khẩu cũ</Text>
          <View
            style={[
              styles.textInput,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <TextInput
              style={{ flex: 1 }}
              value={oldpassword}
              secureTextEntry={oldsecurity}
              placeholder="Nhập mật khẩu cũ"
              onChangeText={(text) => setOldPassword(text)}
            />
            <TouchableOpacity onPress={() => setOldSecurity(!oldsecurity)}>
              <Image
                style={{ width: 25, height: 25 }}
                source={
                  security
                    ? require("../assets/visibility_off_FILL0_wght400_GRAD0_opsz48.png")
                    : require("../assets/visibility_FILL0_wght400_GRAD0_opsz48.png")
                }
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ position: "absolute", left: "90%", top: "70%" }}
          >
            <Image />
          </TouchableOpacity>
        </View>

        <View style={styles.inputcontainer}>
          <Text style={{ margin: 5 }}>Mật khẩu mới</Text>
          <View
            style={[
              styles.textInput,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <TextInput
              style={{ flex: 1 }}
              value={newpassword}
              secureTextEntry={security}
              placeholder="Nhập mật khẩu mới"
              onChangeText={(text) => setNewPassword(text)}
            />
            <TouchableOpacity onPress={() => setSecurity(!security)}>
              <Image
                style={{ width: 25, height: 25 }}
                source={
                  security
                    ? require("../assets/visibility_off_FILL0_wght400_GRAD0_opsz48.png")
                    : require("../assets/visibility_FILL0_wght400_GRAD0_opsz48.png")
                }
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ position: "absolute", left: "90%", top: "70%" }}
          >
            <Image />
          </TouchableOpacity>
        </View>

        <View style={styles.inputcontainer}>
          <Text style={{ margin: 5 }}>Nhập lại mật khẩu mới</Text>
          <View
            style={[
              styles.textInput,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <TextInput
              style={{ flex: 1 }}
              value={NLpassword}
              secureTextEntry={security}
              placeholder="Nhập lại mật khẩu mới"
              onChangeText={(text) => setNLPassword(text)}
            />
            <TouchableOpacity onPress={() => setSecurity2(!security2)}>
              <Image
                style={{ width: 25, height: 25 }}
                source={
                  security
                    ? require("../assets/visibility_off_FILL0_wght400_GRAD0_opsz48.png")
                    : require("../assets/visibility_FILL0_wght400_GRAD0_opsz48.png")
                }
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ position: "absolute", left: "90%", top: "70%" }}
          >
            <Image />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          title="Đổi mật khẩu"
          onPress={handlePasswordChange}
          style={styles.button}
        >
          <Text style={styles.textButton}> Đổi mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#0E64D2",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
   margin:10,
  },
  textButton: {
    fontSize: 20,
    color: "white",
  },
  inputcontainer: {
    position: "relative",
    marginHorizontal: 0,
    width: "80%",
    padding: 10,
    justifyContent:'center',
    
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "gray",
  },
});

export default DoiMkScreen;
