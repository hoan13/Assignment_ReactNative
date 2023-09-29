import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View,Image } from "react-native";

const PhotoScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const json = await response.json();
      // console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              elevation={5}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 10,
                marginVertical: 10,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
              }}
            >
              <Image
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  alignContent: "center",
                }}
                source={{ uri: item.url }}
              />
              <View style={{ flex: 6, flexDirection: "column", padding: 5 }}>
                <Text>id: {item.id}</Text>
                <Text style={{}}>title: {item.title}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default PhotoScreen;
