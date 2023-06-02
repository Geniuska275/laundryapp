import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import React from "react";

export default function Cards({ text, size, color, icon, onPress }) {
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

const styles = StyleSheet.create({
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
