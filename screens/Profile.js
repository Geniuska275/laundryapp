import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Linking,
  Platform,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Card, Title } from "react-native-paper";
import { FontAwesome, Fontisto, Entypo } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
function Cards({ text, size, color, icon, onPress }) {
  return (
    <Card style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <Ionicons
          name={icon}
          color={color}
          size={size}
          style={{ marginLeft: 10 }}
        />
        <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 20 }}>
          {text}
        </Text>
      </View>
    </Card>
  );
}
const Profile = () => {
  const phoneDial = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:+2348134200746");
    } else {
      Linking.openURL("tel:+2348134200746");
    }
  };
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      }}
      resizeMode="cover"
      style={styles.appContainer}
      imageStyle={styles.opacity}
    >
      <View style={styles.root}>
        <LinearGradient
          colors={["#fd5c63", "#fd5c63"]}
          style={{ height: "20%" }}
        />
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Title style={{ fontWeight: "bold", fontFamily: "Grotesk" }}>
            KINGSLEY AIGBOJIE
          </Title>
        </View>
        <Cards
          icon="call"
          color="#fd5c63"
          text="+2348134200746"
          size={20}
          onPress={phoneDial}
        />
        <Cards
          icon="school"
          color="#fd5c63"
          text="AMBROSE ALLI UNIVERSITY"
          size={20}
        />

        <Card
          style={styles.card}
          onPress={() => {
            Linking.openURL("mailto:ehichoyablessing4484@gmail.com");
          }}
        >
          <View style={styles.cardContent}>
            <Entypo
              name="mail"
              color="#fd5c63"
              size={20}
              style={{ marginLeft: 10, fontFamily: "Grotesk" }}
            />
            <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 18 }}>
              ehichoyablessing4484@gmail.com
            </Text>
          </View>
        </Card>
        <Cards
          icon="location"
          color="#fd5c63"
          text="EDO STATE,NIGERIA"
          size={20}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: -100,
    borderWidth: 6,
    borderColor: "white",
  },
  card: {
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  cardContent: {
    flexDirection: "row",
    padding: 10,
  },
  appContainer: {
    flex: 1,
  },
  opacity: {
    opacity: 0.3,
  },
  card: {
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  cardContent: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
  },
});
export default Profile;
