import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";

import React, { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const LoginScreen = (props) => {
  const {navigation} = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setchecked] = useState(false);
  const [security, setSecurity] = useState(true);

  const handleLogin = () => {
      fetch("https://652670e2917d673fd76c44ab.mockapi.io/api/users")
        .then((response) => response.json())
        .then((data) => {
          const user = data.find(
            (user) => user.username === username && user.password === password
          );
          if (user) {
            navigation.navigate("Home", { user: user });
            // console.log(JSON.stringify("dữ liêu là :" + user));
          } else {
            Alert.alert("thông báo", "tài khoản và mật khẩu không chính xác");
          }
        });
  };
  const tapToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={require("../assets/anh-nen-mau-xanh-001.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.texthello}>Tin Tức F</Text>
        <Image
          source={require("../assets/anhtt-removebg-preview.png")}
          style={styles.imglogo}
        />
        <View style={styles.inputcontainer}>
          <Text style={{ marginLeft: 5 }}>Tên Tài khoản</Text>
          <TextInput
            value={username}
            style={styles.textInput}
            placeholder="Nhập tên tài khoản"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={{ marginLeft: 5 }}>Mật khẩu</Text>
          <View
            style={[
              styles.textInput,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <TextInput
              style={{ flex: 1 }}
              value={password}
              secureTextEntry={security}
              placeholder="Nhập mật khẩu"
              onChangeText={(text) => setPassword(text)}
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

        <View style={styles.bottominput}>
          <View style={{ flexDirection: "row" }}>
            <Checkbox
              style={{ marginHorizontal: 5 }}
              value={checked}
              onValueChange={() => {
                setchecked(!checked);
              }}
            />
            <Text>Nhớ mật khẩu</Text>
          </View>
          <Text style={{ color: "red", fontWeight: "600" }}>
            Quên mật khẩu?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
            marginVertical: 20,
          }}
          onPress={handleLogin}
        >
          <Text style={styles.button}>Đăng nhập</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Text>Chưa có tài khoản ? </Text>
          <Text style={{ color: "blue" }} onPress={tapToRegister}>
            Đăng ký ngay
          </Text>
        </View>
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
  imglogo: {
    position: "relative",
    width: "40%",
    height: "20%",
    marginTop:80
  },
  container: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
  },
  texthello: {
    position:'absolute',
    fontSize: 24,
    fontWeight: "700",
    paddingVertical: 40,
  },

  inputcontainer: {
    position: "relative",
    marginHorizontal: 30,
    width: "85%",
    padding: 10,
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "gray",
  },
  bottominput: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "#0E64D2",
  },
});

export default LoginScreen;
