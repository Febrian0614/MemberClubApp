import { Button, Text, View, StyleSheet } from "react-native";

const HalamanUtama = ({ navigation }) => {
  const users = [
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
  ];
  const handleLogout = () => {
    // Implement any additional logout logic if needed
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View>
        <Button
          style={styles.button}
          title="profile"
          onPress={() => navigation.navigate("Profile", { name: "Febrian Abirin Ardevansyah" })}
        />
        <Button
          style={styles.button}
          title="data member"
          onPress={() => navigation.navigate("DaftarMember")}
        ></Button>
        <Button title="keluar" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // Arrange buttons horizontally
  },
  menu: {
    flex: 5,
    // padding: 3,
  },
  menuItem: {
    borderWidth: 3,
    borderColor: "#cccccc",
    // padding: 8,
  },
   button: {
    width: 100,
    height: 100,
    backgroundColor: 'blue', // Set your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Add margin between buttons
  },
  buttonText: {
    color: 'white', // Set your desired text color
  },
});

export default HalamanUtama;
