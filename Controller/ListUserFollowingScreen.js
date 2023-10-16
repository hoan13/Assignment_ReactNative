import React, { useState } from "react";
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
const Data_Following = [
  {
    idUser: 3,
    user: {
      name: "User1",
      image: require("../assets/anh_nen_ng.png"),
    },
    isFollowing: false,
  },

];

const ListUserFollowingScreen = () => {
  const [followingList, setFollowingList] = useState(Data_Following);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={followingList}
        renderItem={({ item: followingUser }) => (
          <View style={styles.userCell}>
            <View style={styles.horizontalView}>
              <Image
                source={followingUser.user.image}
                style={styles.imageUser}
              />
              <Text style={styles.userName}>{followingUser.user.name}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons
                name="menu"
                size={30}
                style={styles.thuvienimg}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userCell: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  imageUser: {
    width: 40,
    height: 40,
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
  },
  thuvienimg: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    margin: 10,
  },

});

export default ListUserFollowingScreen;


// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// // ... dữ liệu ...

// const ListUserFollowingScreen = () => {
//   const [followingList, setFollowingList] = useState(Data_Following);
//   const [searchText, setSearchText] = useState("");

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.searchInput}
//           value={searchText}
//           onChangeText={setSearchText}
//           placeholder="Tìm kiếm"
//         />
//         <TouchableOpacity>
//           <Image
//             source={require("../assets/search_FILL0_wght400_GRAD0_opsz24.png")}
//             style={styles.searchIcon}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.tabs}>
//         <Text style={styles.tab}>Danh sách bạn bè</Text>
//         <Text style={styles.tab}>Gợi ý</Text>
//       </View>
//       {/* Danh sách bạn bè */}
//       <FlatList
//         data={followingList}
//         renderItem={({ item: followingUser }) => (
//           // ... cell ...
//           <View></View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       {/* Gợi ý */}
//       <FlatList
//         data={suggestedUsers}
//         renderItem={({ item: suggestedUser }) => <View></View>}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   searchBar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     margin: 10,
//   },
//   searchInput: {
//     flex: 1,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 5,
//     marginRight: 10,
//   },
//   searchIcon: {
//     width: 30,
//     height: 30,
//   },
//   tabs: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginVertical: 10,
//   },
//   tab: {
//     fontSize: 20,
//     color: "blue",
//   },
//   // ... các phong cách khác ...
// });

// export default ListUserFollowingScreen;