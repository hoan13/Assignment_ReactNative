import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

const NewPostScreen = ({ navigation, route }) => {
  const [anh, setAnh] = useState(null);
  const [tieude, setTieude] = useState("");
  const [noidung, setNoidung] = useState("");

  const user = route.params && route.params.user ? route.params.user : {};
  const { avatar, name, username, id_user } = user;

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    console.log("uri loi : " + result.uri);
    if (!result.canceled) {
      setAnh(result.assets[0].uri);
      console.log("uri : " + result.assets[0].uri);
    }
  };

  const submitPost = async () => {
    // Kiểm tra xem ít nhất một trong ba trường có giá trị không rỗng
    if (!tieude && !noidung && !anh) {
      alert(
        "Vui lòng nhập ít nhất một trong các trường: tiêu đề, nội dung hoặc ảnh!"
      );
      return;
    }
    const URL_API_NOTI = "https://6528e7f6931d71583df28f2f.mockapi.io/api/tk";

    const URL_API = "https://652670e2917d673fd76c44ab.mockapi.io/api/articles";
    const response = await fetch(URL_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
        name,
        username,
        id_user,
        tieude,
        noidung,
        anh,
      }),
    });

    const responsenoti = await fetch(URL_API_NOTI, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
        name,
        id_user,
        tieude,
        noidung,
        anh,
      }),
    });

    if (response.ok && responsenoti.ok) {
      console.log("Post submitted successfully");
      navigation.navigate("AllPostsScreen");
    } else {
      console.error("Failed to submit post");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/arrow_back_FILL0_wght400_GRAD0_opsz24.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "aqua", padding: 10 }}
          onPress={() => {
            submitPost();
          }}
        >
          <Text>Đăng</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.tt}
        multiline
        placeholder="Tiêu đề"
        value={tieude}
        onChangeText={(text) => setTieude(text)}
      />

      <TextInput
        style={styles.nd}
        multiline
        placeholder="Nội dung"
        value={noidung}
        onChangeText={(text) => setNoidung(text)}
      />

      {anh && (
        <View>
          <Image source={{ uri: anh }} style={styles.imgpost} />
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => setAnh(null)}
          >
            <Text style={{ fontSize: 30 }}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.btn}>
        <TouchableOpacity style={styles.btn} onPress={openImagePicker}>
          <ImageBackground
            style={styles.imgbtn}
            source={require("../assets/add_a_photo_FILL0_wght400_GRAD0_opsz24.png")}
          />
          <Text style={{ textAlign: "center", alignSelf: "center" }}>
            Chụp ảnh
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  imgbtn: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  btn: {
    flexDirection: "row",
    alignSelf: "center",
    margin: 10,
  },
  tt: {
    borderColor: "gray",
    borderWidth: 1,
    height: 30,
    position: "relative",
    margin: 10,
    padding: 5,
    marginTop: 10,
  },
  nd: {
    borderColor: "gray",
    borderWidth: 1,
    height: 200,
    position: "relative",
    margin: 10,
    padding: 5,
    marginTop: 10,
  },
  imgpost: {
    width: 300,
    height: 300,
    position: "relative",
    alignSelf: "center",
  },
  deleteButton: {
    position: "absolute",
    justifyContent: "space-between",
    right: 20,
  },
});
