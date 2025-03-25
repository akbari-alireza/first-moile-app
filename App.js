import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  return (
    <View style={styles.container}>
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
            <Image style={styles.profile_img} source={require("./assets/profile.png")}/>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>alirezaakbari.cs</Text>
            <Text>Tolo TV</Text>
          </View>
        </View>
        <Entypo name="dots-three-horizontal" size={14} color="black" />
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
    borderRadius: 50,
    padding: 3,
  },
  profile_img: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
