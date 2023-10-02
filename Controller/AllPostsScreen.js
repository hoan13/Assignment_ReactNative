import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Data_ListPost = [
  {
    idUser: 0,
    user: {
      name: "Admin",
      image: require("../assets/anh_nen_ng.png"),
    },
    content: "hay",
    heart: false,
  },
];

const AllPostsScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState("");
  const [posts, setPosts] = useState(Data_ListPost);
  const [nextId, setNextId] = useState(Data_ListPost.length + 1); // Sử dụng biến đếm để theo dõi idUser tiếp theo
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handlePress = () => {
    navigation.navigate("NewPost");
  };

  const toggleHeart = (post) => {
    const updatedPosts = posts.map((p) => {
      if (p.idUser === post.idUser && p.content === post.content) {
        if (p.heart) {
          setLikeCount(likeCount - 1);
        } else {
          setLikeCount(likeCount + 1);
        }
        return { ...p, heart: !p.heart };
      } else {
        return p;
      }
    });

    setPosts(updatedPosts);
  };

  return (
    <SafeAreaView>
      <View style={styles.postContainer}>
        <View style={styles.vungpost}>
          <View style={styles.imgnv}>
            <Ionicons
              name="people"
              size={30}
              color="black"
              onPress={() => navigation.navigate("User")}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewPost")}
            style={styles.inputSearch}
          >
            <Text style={{ padding: 10, position: "absolute" }}>
              Bạn đang nghĩ gì?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stthuvienimg}>
          <Ionicons name="image-outline" size={30} style={styles.thuvienimg} />
        </View>
      </View>

      <FlatList
        style={styles.container}
        data={posts}
        renderItem={({ item: userPost }) => (
          <View style={styles.userCell}>
            <View style={styles.horizontalView}>
              <Image source={userPost.user.image} style={styles.imageUser} />
              <Text style={styles.userName}>{userPost.user.name}</Text>
            </View>
            <FlatList
              data={posts.filter((post) => post.idUser === userPost.idUser)}
              renderItem={({ item: post }) => (
                <View style={styles.cell}>
                  <Text>{post.content}</Text>
                  <View style={styles.tabpost}>
                    <TouchableOpacity
                      style={styles.buttonpost}
                      onPress={handlePress}
                    >
                      <Text style={styles.textpost1}>{likeCount} Likes</Text>
                      <Text style={styles.textpost2}>
                        {commentCount} Comments
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.horizontalIcon}>
                    <TouchableOpacity
                      style={styles.spacingIconHert}
                      onPress={() => toggleHeart(post)}
                    >
                      {post.heart ? (
                        <Ionicons name="ios-heart" size={32} color="red" />
                      ) : (
                        <Ionicons
                          name="ios-heart-outline"
                          size={32}
                          color="black"
                        />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.spacingIconComment}>
                      <Ionicons
                        name="chatbubble-outline"
                        size={32}
                        color="black"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.spacingIconShare}>
                      <Ionicons
                        name="arrow-redo-outline"
                        size={32}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D3D3D3",
  },
  userCell: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
  },
  cell: {
    backgroundColor: "white",
    margin: 10,
  },
  horizontalView: {
    flexDirection: "row",
    margin: 20,
  },

  verticalView: {
    flexDirection: "column",
    margin: 10,
  },
  imageUser: {
    width: 40,
    height: 40,
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
  },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A9A9A9",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
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
  imgnv: {
    width: 40,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  vungpost: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
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
    width:'10%',
    backgroundColor:'white',
    position: "relative",
    borderRadius:3,
  },
});

export default AllPostsScreen;
