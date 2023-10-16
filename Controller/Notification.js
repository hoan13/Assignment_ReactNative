import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";

const Notification = ({route}) => {
const URL_API = "https://6528e7f6931d71583df28f2f.mockapi.io/api/tk";

  const user = route.params && route.params.user ? route.params.user : {};
  const { avatar, name, username, id_user } = user;

  const [data, setData] = useState([]);

  const getNoti = async () => {
    try {
      const response = await fetch(URL_API);

      const json = await response.json();
      setData(json.filter((item) => item.name !== name));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNoti();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.name} vừa thêm bài viết mới</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationItem: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 15,
    margin: 1,
    borderRadius: 10,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default Notification;
