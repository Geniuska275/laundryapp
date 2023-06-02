import { View, Text } from "react-native";
import React from "react";

export default function Display() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fd5c63",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#fd5c63",
          }}
        >
          LaundryApp.
        </Text>
      </View>
    </View>
  );
}
