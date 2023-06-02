import { View, Text } from "react-native";
import React, { useState } from "react";

import DeliveryButton from "./DeliveryButton";

export default function Deliverytabs({activeTab,setActiveTab}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        padding: 10,
      }}
    >
      <DeliveryButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <DeliveryButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
