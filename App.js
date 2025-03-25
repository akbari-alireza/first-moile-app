import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.con_logo}>
          <Image source={require("./assets/logo.jpg")} style={styles.logo} />
          <Fontisto name="angle-down" size={12} color="black" />
        </View>
        <View style={styles.right_header}>
          <FontAwesome name="plus-square-o" size={24} color="black" />
          <MaterialIcons name="favorite-border" size={24} color="black" />
          <FontAwesome5 name="telegram-plane" size={24} color="black" />
        </View>
      </View>
      <View style={styles.user_name}>
        <View style={styles.profile}>
          <View style={styles.border_profile}>
            <Image
              style={styles.profile_img}
              source={require("./assets/profile.png")}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>alirezaakbari.cs</Text>
            <Text>Tolo TV</Text>
          </View>
        </View>
        <Entypo name="dots-three-horizontal" size={14} color="black" />
      </View>
      {/* Posts */}
      <View>
        <ScrollView horizontal={true} style={post.scroll_post}>
          <View style={post.post}>
            <Image
              source={require("./assets/RoDarRo (11).jpg")}
              style={post.posts}
            />
            <View style={post.number_of}>
              <Text style={post.number}>1/2</Text>
            </View>
            <View style={post.dots}>
              <View style={post.current_photo}></View>
              <View style={post.dot}></View>
            </View>

          </View>
          <View style={post.post}>
            <Image
              source={require("./assets/RoDarRo (3).jpg")}
              style={post.posts}
            />
            <View style={post.number_of}>
              <Text style={post.number}>2/2</Text>
            </View>
            <View style={post.dots}>
              <View style={post.dot}></View>
              <View style={post.current_photo}></View>
            </View>

          </View>
        </ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    paddingTop: 40,

    // justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e7e8",
    paddingBottom: 6,
  },
  right_header: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  con_logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  logo: {
    width: 130,
    height: 40,
  },
  user_name: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  border_profile: {
    borderWidth: 1,
    borderColor: "orange",
    // borderColor: " #f9ce34,  #ee2a7b and  #6228d7",
    borderRadius: 50,
    padding: 3,
  },
  profile_img: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
const post = StyleSheet.create({
  scroll_post: {
    width: "100%",
    marginTop: 10,
    gap: 10,
    // height: 500,
  },
  posts: {
    width: 380,
    height: 500,
    
  },
  post: {
    position: "relative",
    // width: 380,
    // height: 500,
  },
  number_of: {
    position: "absolute",
    backgroundColor: "#212120",
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    top: 20,
    right: 20,
    paddingHorizontal: 4,
    paddingVertical: 2,
    opacity: 0.9,
  },
  number:{
    color: "white",
    fontSize: 12,
    fontWeight: "semibold",
  },
  dots:{
zIndex: 1,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    left: 20,
  },
  dot:{
    width: 8,
    height: 8,
    backgroundColor: "white",
    borderRadius: 50,
    margin: 5,
  },
  current_photo:{
    width: 8,
    height: 8,
    backgroundColor: "#0a88d1",
    borderRadius: 50,
    margin: 5,
  }

});
