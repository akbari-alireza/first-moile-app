import { View, Text, Image, FlatList, StyleSheet, ScrollView, AsyncStorage } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons, Entypo, MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function Posts() {
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [connection, setConnection] = useState(true);

    useEffect(() => {
        getProducts();
        getImgages();
    }, []);
    const getImgages = async () => {
        try {
            if (connection) {
                const { data } = await axios.get("https://fakestoreapi.com/products");
                setImages(data); // داده را مستقیم ذخیره کن
                await AsyncStorage.setItem("images", JSON.stringify(data));
            } else {
                const cacheImages = await AsyncStorage.getItem("images");
                if (cacheImages) {
                    setImages(JSON.parse(cacheImages));
                }
            }
        } catch (error) {
            console.log("Error fetching images:", error);
        }
    };

    const getProducts = async () => {
        try {
            if (connection) {
                const { data } = await axios.get("https://dummyjson.com/products");
                setProducts(data.products);
                await AsyncStorage.setItem("products", JSON.stringify(data.products));
            } else {
                const cacheProducts = await AsyncStorage.getItem("products");
                if (cacheProducts) {
                    setProducts(JSON.parse(cacheProducts));
                }
            }
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    const renderItems = ({ item }) => {
        // پیدا کردن تصویر مرتبط با پست
        const imageForPost = images.find(img => img.id === item.id);

        return (
            <View>
                {/* User Info */}
                <View style={styles.user_name}>
                    <View style={styles.profile}>
                        <View style={styles.border_profile}>
                            <Image style={styles.profile_img} source={{ uri: item.thumbnail }} />
                        </View>
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                                {item.brand ? item.brand : "Unknown User"} <MaterialCommunityIcons name="check-decagram" size={15} color="dodgerblue" />
                            </Text>

                            <Text style={{ fontSize: 11 }}>{item.tags ? item.tags[1] : "No Tags"}</Text>
                        </View>
                    </View>
                    <Entypo name="dots-three-horizontal" size={14} color="black" />
                </View>

                {/* Product Image */}
                <View>
                    <Image source={{ uri: item.thumbnail }} style={post.posts} />

                </View>

                {/* Like, Comment, Share */}
                <View style={share.share}>
                    <View style={share.icon}>
                        <MaterialIcons name="favorite" size={24} color="red" />
                        <FontAwesome5 name="comment" size={24} color="black" />
                        <FontAwesome5 name="telegram-plane" size={24} color="black" />
                    </View>
                    <FontAwesome name="bookmark-o" size={24} color="black" />
                </View>

                {/* Description */}
                <View style={disc.disc}>
                    <Text style={disc.like}>{item.stock} K Likes</Text>
                    <Text style={{ fontSize: 13 }}>
                        <Text style={{ fontWeight: "bold" }}>{item.brand} </Text>
                        {item.description}
                        <Text style={{ color: "#2e61f0" }}> #{item.tags[0]} #{item.tags[1]}</Text>
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <FlatList data={products} renderItem={renderItems} keyExtractor={(item) => item.id.toString()} nestedScrollEnabled={true} />
    );
}

const styles = StyleSheet.create({
    user_name: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    profile: {
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
        width: 35,
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 10,
    },
    icon: {
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
    },
});
