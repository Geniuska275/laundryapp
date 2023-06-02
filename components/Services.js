import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Laundry",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
    },
    {
      id: 2,
      name: "Washing",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
    },
    {
      id: 3,
      name: "Cleaning",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
    },
    {
      id: 4,
      name: "Wash & Iron",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 20,
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "black",
              shadowOpacity: 0.1,
              borderRadius: 7,
              elevation: 5,
            }}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 70, height: 70 }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold", marginTop: 10 }}
            >
              {service.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
