import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function DeliveryButton({
  text,
  textColor,
  bgColor,
  setActiveTab,
  activeTab,
}) {
  return (
    <TouchableOpacity
      style={{
        textAlign: "center",
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 16,
        fontWeight: "bold",
        backgroundColor: activeTab === text ? "#fd5c63" : "white",
        fontSize: 16,
        marginHorizontal: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "black",
        shadowOpacity: 0.3,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? "white" : "#fd5c63",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
