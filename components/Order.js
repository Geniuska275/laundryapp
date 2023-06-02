import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Divider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import constants from "expo-constants";
import { StoreContext } from "../Context/StoreContext";

export default function Order({ order, cart, dispatch }) {
  return (
    <SafeAreaView
      style={{
        marginTop: constants.statusBarHeight,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          marginHorizontal: 15,
          padding: 10,
          marginTop: 10,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "black",
          shadowOpacity: 0.1,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "gray",
            textAlign: "center",
            padding: 10,
          }}
        >
          Order Number: {order.referenceNumber}
        </Text>
        <Divider width={0.5} color="gray" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "gray" }}>Created_at:</Text>
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            {order.date}
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Items
        </Text>
        {cart.map((product, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                marginVertical: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "gray" }}>
                {product.name}
              </Text>
              <Text style={{ fontWeight: "bold", color: "gray" }}>
                ${product.price}
              </Text>
            </View>
          </View>
        ))}
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Duration
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            marginVertical: 8,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            Expected Delivery within:
          </Text>
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            {order.deliveryTime}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            marginVertical: 8,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            Delivery Time:
          </Text>
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            {order.selectedTime}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            Delivery Fee:
          </Text>
          <Text style={{ fontWeight: "bold", color: "#fd5c63" }}>
            {order.deliveryFee}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            marginVertical: 12,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>TOTAL:</Text>
          <Text style={{ fontWeight: "bold", color: "black" }}>
            ${order.total}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "black",
              justifyContent: "center",
              marginHorizontal: 18,
              marginVertical: 20,
              borderRadius: 8,
              width: 200,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              PAY NOW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#fd5c63",
              justifyContent: "center",
              marginHorizontal: 18,
              marginVertical: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => dispatch({ type: "REMOVE", payload: order })}
          >
            <Ionicons name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
