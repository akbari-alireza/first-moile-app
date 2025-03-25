import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { FlatList } from "react-native";


const data = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
]
const renderItem = ({item}) =>{
  {/* data */}
  <View>
  {/* username */}
  <View style={styles.user_name}>
    <View style={styles.profile}>
      <View style={styles.border_profile}>
        <Image
          style={styles.profile_img}
          source={require("./assets/alireza/profile.png")}
        />
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: "13" }}>
          {item.title}{" "}
          <MaterialCommunityIcons
            name="check-decagram"
            size={15}
            color="dodgerblue"
          />
        </Text>
        <Text style={{ fontSize: "11" }}>Paghman-Kabul</Text>
      </View>
    </View>
    <Entypo name="dots-three-horizontal" size={14} color="black" />
  </View>
  {/* Posts */}
  <View>
    <ScrollView horizontal={true} style={post.scroll_post}>
      <View style={post.post}>
        <Image
          source={{uri: item.url}}
          style={post.posts}
        />
        <View style={post.number_of}>
          <Text style={post.number}>1/3</Text>
        </View>
        <View style={post.dots}>
          <View style={post.current_photo}></View>
          <View style={post.dot}></View>
          <View style={post.dot}></View>
        </View>
      </View>
      <View style={post.post}>
        <Image
          source={{uri: item.url}}
          style={post.post}
        />
        <View style={post.number_of}>
          <Text style={post.number}>2/3</Text>
        </View>
        <View style={post.dots}>
          <View style={post.dot}></View>
          <View style={post.current_photo}></View>
          <View style={post.dot}></View>
        </View>
      </View>
      <View style={post.post}>
        <Image
          source={{uri: item.url}}
          style={post.post}
        />
        <View style={post.number_of}>
          <Text style={post.number}>3/3</Text>
        </View>
        <View style={post.dots}>
          <View style={post.dot}></View>
          <View style={post.dot}></View>
          <View style={post.current_photo}></View>
        </View>
      </View>
    </ScrollView>
  </View>
  {/* share */}
  <View style={share.share}>
    <View style={share.icon}>
      <MaterialIcons name="favorite" size={24} color="red" />
      <FontAwesome5 name="comment" size={24} color="black" />
      <FontAwesome5 name="telegram-plane" size={24} color="black" />
    </View>
    <View>
      <FontAwesome name="bookmark-o" size={24} color="black" />
    </View>
  </View>
  {/* disc */}
  <View style={disc.disc}>
    <Text style={disc.like}>100 Likes</Text>
    <Text style={{ fontSize: 13 }}>
      <Text style={{ fontSize: "12", fontWeight: "bold" }}>
        alirezaakbari.cs{" "}
      </Text>
      Desir is the starting point of all goals.
      <Text style={{ color: "#2e61f0" }}>
        #ToloTV #RoDarRo #alirezaakbari.cs
      </Text>
    </Text>
    <Text style={{ fontSize: "12", color: "lightgray" }}>
      Now . <Text style={{ color: "black" }}>See Translation</Text>
    </Text>
  </View>
</View>
}

export default function App({item}) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(537);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  

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
          {/* <FontAwesome name="plus-square-o" size={24} color="black" /> */}
          <MaterialIcons name="favorite-border" size={24} color="black" />
          {/* <Image source={require("./assets/messenger")}/> */}
          <Image
                  style={{ width: 20, height: 20, }}
                  source={require("./assets/messenger.png")}
                />
          {/* <FontAwesome5 name="telegram-plane" size={24} color="black" /> */}
        </View>
      </View>
     
      {/* Posts */}
      <ScrollView showsVerticalScrollIndicator={false} >
         {/* story */}
      <View>
        <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
          <View style={storys.scroll_story}>
            {/* My Story */}
            <View style={storys.storys}>
              <View style={storys.my_story}>
                <Image
                  style={storys.story_img}
                  source={require("./assets/alireza/profile.png")}
                />
                <Ionicons
                  style={storys.add}
                  name="add-circle"
                  size={26}
                  color="black"
                />
              </View>
              <Text style={{ fontSize: 13, color: "gray" }}>Your Story</Text>
            </View>
            {/* Following Story */}
            <View style={storys.storys}>
              <View style={storys.border_story}>
                <Image
                  style={storys.story_img}
                  source={require("./assets/instagram.avif")}
                />
              </View>
              <Text>Instagram</Text>
            </View>
            {/* Following Story */}
            <View style={storys.storys}>
              <View style={storys.border_story}>
                <Image
                  style={storys.story_img}
                  source={require("./assets/figma.png")}
                />
              </View>
              <Text>Figma</Text>
            </View>
            {/* Following Story */}
            <View style={storys.storys}>
              <View style={storys.border_story}>
                <Image
                  style={storys.story_img}
                  source={require("./assets/GitHub-Symbol.png")}
                />
              </View>
              <Text>GitHub</Text>
            </View>
            {/* Following Story */}
            <View style={storys.storys}>
              <View style={storys.border_story}>
                <Image
                  style={storys.story_img}
                  source={require("./assets/linkedin.png")}
                />
              </View>
              <Text>linkedin</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      
        {/* alireza */}
        <View>
          {/* username */}
          <View style={styles.user_name}>
            <View style={styles.profile}>
              <View style={styles.border_profile}>
                <Image
                  style={styles.profile_img}
                  source={require("./assets/alireza/profile.png")}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: "13" }}>
                  alirezaakbari.cs{" "}
                  <MaterialCommunityIcons
                    name="check-decagram"
                    size={15}
                    color="dodgerblue"
                  />
                </Text>
                <Text style={{ fontSize: "11" }}>Tolo TV</Text>
              </View>
            </View>
            <Entypo name="dots-three-horizontal" size={14} color="black" />
          </View>
          {/* Posts */}
          <View>
            <ScrollView horizontal={true} style={post.scroll_post}>
              <View style={post.post}>
                <Image
                  source={require("./assets/alireza/RoDarRo (11).jpg")}
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
                  source={require("./assets/alireza/RoDarRo (3).jpg")}
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
          {/* share */}
          <View style={share.share}>
            <View style={share.icon}>
              <TouchableOpacity onPress={toggleLike}>
                <MaterialIcons
                  name={liked ? "favorite" : "favorite-border"}
                  size={24}
                  color={liked ? "red" : "black"}
                />
              </TouchableOpacity>
              {/* <MaterialIcons name="favorite" size={24} color="red" /> */}
              <FontAwesome5 name="comment" size={24} color="black" />
              <FontAwesome5 name="telegram-plane" size={24} color="black" />
            </View>
            <View>
              <FontAwesome name="bookmark-o" size={24} color="black" />
            </View>
          </View>
          {/* disc */}
          <View style={disc.disc}>
            <Text style={disc.like}>{likes + 530} Likes</Text>
            <Text style={{ fontSize: 13 }}>
              <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                alirezaakbari.cs{" "}
              </Text>
              Desir is the starting point of all goals.
              <Text style={{ color: "#2e61f0" }}>
                #ToloTV #RoDarRo #alirezaakbari.cs
              </Text>
            </Text>
            <Text style={{ fontSize: 13, color: "lightgray" }}>
              Now . <Text style={{ color: "black" }}>See Translation</Text>
            </Text>
          </View>
        </View>
        <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {/* alireza */}
        <View>
          {/* username */}
          <View style={styles.user_name}>
            <View style={styles.profile}>
              <View style={styles.border_profile}>
                <Image
                  style={styles.profile_img}
                  source={require("./assets/alireza/profile.png")}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: "13" }}>
                  alirezaakbari.cs{" "}
                  <MaterialCommunityIcons
                    name="check-decagram"
                    size={15}
                    color="dodgerblue"
                  />
                </Text>
                <Text style={{ fontSize: "11" }}>Paghman-Kabul</Text>
              </View>
            </View>
            <Entypo name="dots-three-horizontal" size={14} color="black" />
          </View>
          {/* Posts */}
          <View>
            <ScrollView horizontal={true} style={post.scroll_post}>
              <View style={post.post}>
                <Image
                  source={require("./assets/alireza/Ali Reza 000.png")}
                  style={post.posts}
                />
                <View style={post.number_of}>
                  <Text style={post.number}>1/3</Text>
                </View>
                <View style={post.dots}>
                  <View style={post.current_photo}></View>
                  <View style={post.dot}></View>
                  <View style={post.dot}></View>
                </View>
              </View>
              <View style={post.post}>
                <Image
                  source={require("./assets/alireza/Ali Reza 0000.jpg")}
                  style={post.post}
                />
                <View style={post.number_of}>
                  <Text style={post.number}>2/3</Text>
                </View>
                <View style={post.dots}>
                  <View style={post.dot}></View>
                  <View style={post.current_photo}></View>
                  <View style={post.dot}></View>
                </View>
              </View>
              <View style={post.post}>
                <Image
                  source={require("./assets/alireza/1695184764572.jpg")}
                  style={post.post}
                />
                <View style={post.number_of}>
                  <Text style={post.number}>3/3</Text>
                </View>
                <View style={post.dots}>
                  <View style={post.dot}></View>
                  <View style={post.dot}></View>
                  <View style={post.current_photo}></View>
                </View>
              </View>
            </ScrollView>
          </View>
          {/* share */}
          <View style={share.share}>
            <View style={share.icon}>
              <MaterialIcons name="favorite" size={24} color="red" />
              <FontAwesome5 name="comment" size={24} color="black" />
              <FontAwesome5 name="telegram-plane" size={24} color="black" />
            </View>
            <View>
              <FontAwesome name="bookmark-o" size={24} color="black" />
            </View>
          </View>
          {/* disc */}
          <View style={disc.disc}>
            <Text style={disc.like}>100 Likes</Text>
            <Text style={{ fontSize: 13 }}>
              <Text style={{ fontSize: "12", fontWeight: "bold" }}>
                alirezaakbari.cs{" "}
              </Text>
              Desir is the starting point of all goals.
              <Text style={{ color: "#2e61f0" }}>
                #ToloTV #RoDarRo #alirezaakbari.cs
              </Text>
            </Text>
            <Text style={{ fontSize: "12", color: "lightgray" }}>
              Now . <Text style={{ color: "black" }}>See Translation</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* Footer */}
      <View style={footer.footer}>
        <Entypo name="home" size={26} color="black" />
        <Feather name="search" size={26} color="black" />
        <FontAwesome name="plus-square-o" size={26} color="black" />
        <MaterialCommunityIcons
          name="movie-open-play"
          size={26}
          color="black"
        />
        <FontAwesome6 name="user-circle" size={26} color="black" />
      </View>
    </View>
  );
}
const gradientStyles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 5,
  }
});
const storys = StyleSheet.create({
  scroll_story: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  my_story: {
    paddingBottom: 7,
    position: "relative",
  },

  add: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 2,
    left: 43,
    padding: 1,
    borderRadius: 50,
  },
  storys: {
    display: "flex",
    alignItems: "center",
  },

  border_story: {
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 50,
    padding: 3,
  },
  story_img: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
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
    alignItems: "center",
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
    padding: 2,
  },
  profile_img: {
    width: 32,
    height: 32,
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
    height: 440,
  },
  post: {
    position: "relative",
    width: 380,
    height: 440,
    resizeMode: "cover",
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
  number: {
    color: "white",
    fontSize: 12,
    fontWeight: "semibold",
  },
  dots: {
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
  dot: {
    width: 6,
    height: 6,
    backgroundColor: "white",
    borderRadius: 50,
    margin: 3,
  },
  current_photo: {
    width: 6,
    height: 6,
    backgroundColor: "#0a88d1",
    borderRadius: 50,
    margin: 3,
  },
});
const share = StyleSheet.create({
  share: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});
const disc = StyleSheet.create({
  disc: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  like: {
    fontWeight: "bold",
    marginTop: 5,
  },
});
const footer = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    height: 60,
  },
});
