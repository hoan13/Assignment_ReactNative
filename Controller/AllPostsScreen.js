import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const AllPostsScreen = ({ navigation, route }) => {
  const user = route.params && route.params.user ? route.params.user : {};
  const { avatar } = user;

  const URL_API = "https://652670e2917d673fd76c44ab.mockapi.io/api/articles";
  const [refresh, setRefresh] = useState(false);

  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const CloneData = async () => {

  //       const response = await axios.get(URL_API);
  //       setData(response.data);

  //   };
  //   CloneData();
  //   const interval = setInterval(() => {
  //     CloneData();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  const getPostBai = async () => {
    try {
      const response = await fetch(URL_API);

      const json = await response.json();
      setData([...json]);
      setRefresh(![...refresh]);
    } catch (error) {
      // console.error("lỗi :" + error);
    } finally {
      // setLoading(false);
    }
  };

  const deleteData = (id) => {
    fetch(`${URL_API}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => console.error(error));
  };

  const confirmDelete = (id) => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn muốn xóa không?",
      [
        {
          text: "Không",
          style: "cancel",
        },
        { text: "Có", onPress: () => deleteData(id) },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    getPostBai();
  }, [refresh]);

  return (
    <SafeAreaView>
      <View style={styles.postContainer}>
        <View style={styles.vungpost}>
          <View style={styles.imgnv}>
            <Image
              source={{ uri: avatar }}
              style={styles.imgnv} // Thay đổi kích thước theo nhu cầu của bạn
            />
          </View>
          {user.admin ? (
            <>
              <TouchableOpacity
                onPress={() => navigation.push("NewPost")}
                style={styles.inputSearch}
              >
                <Text style={{ padding: 10, position: "absolute" }}>
                  Bạn đang nghĩ gì?
                </Text>
              </TouchableOpacity>
              <View style={styles.stthuvienimg}>
                <Ionicons
                  name="image-outline"
                  size={30}
                  style={styles.thuvienimg}
                  onPress={() => navigation.push("NewPost")}
                />
              </View>
            </>
          ) : (
            <View style={styles.vungpost}>
              <Text style={{ fontSize: 20, textAlign: "center" }}>
                {user.name}
              </Text>
            </View>
          )}
        </View>
      </View>

      <FlatList
        style={styles.container}
        data={data}
        extraData={refresh}
        renderItem={({ item }) => (
          <View style={styles.itemPost}>
            <View style={styles.bovung}>
              <View style={styles.horizontalView}>
                <Image source={{ uri: item.avatar }} style={styles.anhngdang} />
                <Text style={styles.tenngdang}>{item.name}</Text>

                <View style={styles.horizontalView}>
                  {item.username !== route.params.username && (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("EditPost", { item: item })
                      }
                    >
                      <Ionicons name="create" size={32} color="blue" />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                    <Ionicons name="close" size={32} color="red" />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={styles.txttd}>{item.tieude}</Text>
                <Text style={styles.txtbl}>{item.noidung}</Text>
              </View>
              {item.anh ? (
                <View>
                  <Image
                    source={{ uri: item.anh }}
                    style={styles.postanhdang}
                  />
                </View>
              ) : null}
              <View style={styles.statsRow}>
                <Text style={styles.statsText}>
                  {item.soluotlike || 0} Likes
                </Text>
                <Text style={styles.statsText}>
                  {item.comments || 0} Comments
                </Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.horizontalIcon}>
                <TouchableOpacity style={styles.spacingIconHert}>
                  <Ionicons name="ios-heart" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.spacingIconComment}>
                  <Ionicons name="chatbubble-outline" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.spacingIconShare}>
                  <Ionicons name="arrow-redo-outline" size={32} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A9A9A9",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  vungpost: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  imgnv: {
    width: 40,
    height: 40,
    borderColor: "black",
    borderWidth: 0.2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputSearch: {
    position: "relative",
    marginLeft: 10,
    backgroundColor: "white",
    width: "80%",
    height: 30,
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
  },
  thuvienimg: {
    alignItems: "center",
    alignSelf: "center",
  },
  stthuvienimg: {
    width: "10%",
    backgroundColor: "white",
    position: "relative",
    borderRadius: 3,
  },

  container: {
    width: "100%",
    height: "89%",
    backgroundColor: "#D3D3D3",
  },
  itemPost: {
    position: "relative",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
  },
  bovung: {
    margin: 10,
  },
  anhngdang: {
    width: 40,
    height: 40,
    borderColor: "black",
    borderWidth: 0.2,
    borderRadius: 20,
    alignItems: "center",
    margin: 10,
  },
  tenngdang: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
    position: "absolute",
    left: 60,
  },

  horizontalView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  txttd: {
    width: "98%",
    color: "blue",
    fontSize: 20,
  },
  txtbl: {
    width: "94%",
    alignContent: "center",
    justifyContent: "center",
    margin: 5,
    padding: 10,
    fontSize: 16,
  },

  postanhdang: {
    width: "101%",
    height: 200,
    alignSelf: "center",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "98%",
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "black",
  },

  statsText: {
    marginBottom: 5,
  },

  imageUser: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
  },

  postInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  postButton: {
    color: "blue",
    fontSize: 16,
  },
  horizontalIcon: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
  spacingIconHert: {
    width: "33.33%",
    alignItems: "flex-start",
  },
  spacingIconComment: {
    width: "33.33%",
    alignItems: "center",
  },
  spacingIconShare: {
    width: "33.33%",
    alignItems: "flex-end",
  },
  tabpost: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "black",
    marginBottom: 10,
    marginTop: 10,
  },
  buttonpost: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    borderRadius: 5,
  },
  textpost1: {
    flex: 1,
    textAlign: "left",
  },
  textpost2: {
    flex: 1,
    textAlign: "right",
  },
});

export default AllPostsScreen;
