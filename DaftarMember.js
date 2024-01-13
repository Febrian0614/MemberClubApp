
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import axios from "axios";

const DaftarMember = ({ navigation }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setMembers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("DetailMember", { member: item })}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "lightblue" : "grey",
        },
        styles.wrapperCustom,
      ]}
    >
      <View
        style={{ padding: 5, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>{item.name}</Text>
      </View>
    </Pressable>
  );

  return (
    <View>
      <FlatList
        data={members}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});

export default DaftarMember;
