import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';

const styles = StyleSheet.create({
    container: {
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

var i = 0;

const DATA_LISTNV = [
    // { name: 'Devin', sdt: '098762888' },
    // { name: 'Dan', sdt: '088299289' },
    // { name: 'Dominic', sdt: '090989900' },
    // { name: 'Jackson', sdt: '088990088' },
    // { name: 'James', sdt: '098779989' },
    // { name: 'Joel', sdt: '098787899' },
    // { name: 'John', sdt: '078997899' },
];

const HomeScreen = ({ navigation }) => {

    const listNV = DATA_LISTNV;

    console.log('rerender ' + (++i))

    const [rerender, setRerender] = useState(true);

    let receiveData = (data) => {
        console.log(data)
        alert(`Du lieu nhan ve: ${data.ten} - ${data.tuoi} - ${data.diemTB}`)
    }

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList
            style={{}}
            data={listNV}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  alert(`${item.name} - ${item.sdt}`);
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "green",
                  }}
                >
                  <Text style={styles.item}>{item.name}</Text>
                  <Text style={styles.item}>{item.sdt}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              title="Add"
              onPress={() => {
                listNV.push({ name: "Long", sdt: "0987555889" });

                setRerender(!rerender);
              }}
              style={{ marginHorizontal: 10 }}
            />

            <Button
              title="Delete"
              onPress={() => {
                listNV.splice(0, 1);

                setRerender(!rerender);
              }}
              style={{ marginHorizontal: 10 }}
            />
          </View>

          <Button
            title="Chuyển màn hình 1"
            onPress={() => {
              navigation.navigate("Profile", {
                name: "Long",
                tuoi: 20,
                mssv: "PH11131",
                onGoBack: receiveData,
              });
            }}
          />

          <Button
            title="Chuyển màn hình 2"
            onPress={() => {
              navigation.navigate("MovieScreen");
            }}
          />
          <Button
            title="Chuyển màn hình 3 Photo"
            onPress={() => {
              navigation.navigate("PhotoScreen");
            }}
          />
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen
