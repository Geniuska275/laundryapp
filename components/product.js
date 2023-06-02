import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";

export default function Product({ item, dispatch, cart }) {
  console.log(cart);
  const addToCart = () => {
    dispatch({ type: "Add", payload: item });
  };
  const increment = () => {
    dispatch({ type: "increment", payload: item });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: item });
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "black",
        shadowOpacity: 0.1,
        margin: 10,
        padding: 20,
        borderRadius: 7,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 70, height: 70, borderRadius: 35 }}
      />
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ color: "gray", fontWeight: "bold" }}>${item.price}</Text>
      </View>
      {cart.some((c) => c.id === item.id) ? (
        <TouchableOpacity
          style={{
            borderColor: "#fd5c63",
            borderWidth: 2,
            borderRadius: 8,
            padding: 10,
            backgroundColor: "black",
          }}
          onPress={decrement}
        >
          <Text style={{ color: "#fd5c63", fontWeight: "bold" }}>Remove</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            borderColor: "#fd5c63",
            borderWidth: 2,
            borderRadius: 8,
            padding: 10,
            backgroundColor: "#fd5c63",
          }}
          onPress={addToCart}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
