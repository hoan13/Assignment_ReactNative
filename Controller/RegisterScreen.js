import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
const [security, setSecurity] = useState(true);
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../assets/anh-nen-mau-xanh-001.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng Ký Tài Khoản </Text>

        <View style={styles.inputcontainer}>
          <Text style={{ margin: 5 }}>Tên </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập tên "
            onChangeText={(text) => setname(text)}
          />
        </View>

        <View style={styles.inputcontainer}>
          <Text style={{ margin: 5 }}>Tên Tài khoản</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập tên tài khoản"
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputcontainer}>
          <Text style={{ margin: 5 }}>Mật khẩu</Text>
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

        <View style={styles.inputcontainer}>
          <Text style={{ margin: 5 }}>Nhập lại mật khẩu</Text>
          <View
            style={[
              styles.textInput,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <TextInput
              style={{ flex: 1 }}
              value={password2}
              secureTextEntry={security}
              placeholder="Nhập lại mật khẩu"
              onChangeText={(text) => setPassword2(text)}
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

        <TouchableOpacity
          title="Đăng ký"
          onPress={() => {}}
          style={styles.button}
        >
          <Text style={styles.textButton}> Đăng Ký</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Text>Tôi đã có tài khoản ! </Text>
          <Text style={{ color: "blue", marginLeft: 5 }} onPress={handleLogin}>
            Đăng Nhập
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

export default RegisterScreen;
