import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  const openExternalLink = () => {
    const url = "https://github.com/Febrian0614"; // Replace with your external URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <ScrollView>
      <View style={styles.titleArea}>
        <Text style={styles.title}></Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("./assets/profile.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={openExternalLink}>
          <Text style={{ color: "blue" }}>My GitHub Page</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image source={{ require }} style={styles.image} />
          <Text style={styles.title}>Nama: {route.params.name}</Text>
          <Text style={styles.description}>
            Email: febrian.abirin123@gmail.com
          </Text>
          <Text style={styles.description}>
            Alamat: JL Teluk cendrawasih RT 3 RW 3
          </Text>
          <Text style={styles.description}>Nomor Telepon: 087702910765</Text>
        </View>
      </View>
      <View style={{marginBottom: 6}}>
        <Text>
          Nama saya Febrian Abirin Ardevansyah,saya berdomisili Malang Jawa
          Timur,lahir pada 6 Februari 2007,saya sangat tertarik pada bidang
          Mobile Dev dan ingin mengembangkan nya
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("./assets/2.jpg")} style={styles.image} />
          <Text style={styles.caption}>membuat Halaman utama </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require("./assets/ss(40).png")} style={styles.image} />
          <Text style={styles.caption}>membuat game BRICK</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("./assets/layout.jpg")} style={styles.image} />
          <Text style={styles.caption}>membuat halaman layout</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontsize: 40,
  },
  titleArea: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 0,
    elevation: 3,
    padding: 2,
  },

  cardContent: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
  },
  container: {
    flexDirection: "row", // Set layout to horizontal
    justifyContent: "space-around", // Add space between images
  },
  imageContainer: {
    alignItems: "center", // Center items in each container
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    marginBottom: 10, // Add margin between image and caption
  },
  caption: {
    fontSize: 16,
  },
});
export default ProfileScreen;
