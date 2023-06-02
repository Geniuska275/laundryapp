import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Store({ item, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("About", { item })}>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "black",
          shadowOpacity: 0.1,
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderColor: "#fd5c63",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            source={{
              uri: item.logo,
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
          />
          <Text
            style={{
              backgroundColor:
                item.DeliveryMode === "Delivery" ? "green" : "blue",
              width: 20,
              height: 20,
              borderRadius: 10,
              borderColor: "white",
              borderWidth: 2,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          ></Text>
        </View>

        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontWeight: "bold", fontSize: 20, width: 120 }}
          >
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="whatsapp" size={24} color="#fd5c63" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "gray",
                marginLeft: 5,
              }}
            >
              {item.phone}
            </Text>
          </View>
        </View>
        {/* button */}
        <View
          style={{
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: "#fd5c63",
              borderWidth: 2,
              borderRadius: 8,
              padding: 10,
              backgroundColor: "#fd5c63",
              marginLeft: 40,
            }}
            onPress={() => navigation.navigate("About", { item })}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Patronise
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
