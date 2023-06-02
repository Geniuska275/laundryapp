import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { OrderContext } from "../Context/OrderContext";
import constants from "expo-constants";
export default function CartScreen({ route, navigation }) {
  const { dispatch } = useContext(OrderContext);
  const { cart, total, delivery, selectedTime, date } = route.params;
  function AddOrders() {
    const order = {
      id: Math.random(),
      date: new Date().toLocaleDateString(),
      cart: cart,
      deliveryFee: "Free",
      total: total,
      referenceNumber: Math.floor(Math.random() * 100000000000),
      selectedTime: selectedTime,
      selectedDate: date,
      deliveryTime: delivery,
    };
    dispatch({ type: "ADD", payload: order });
    navigation.navigate("orders");
  }

  return (
    <SafeAreaView
      style={{
        marginTop: constants.statusBarHeight,
        flex: 1,
      }}
    >
      <ScrollView>
        {total === 0 ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fd5c63", fontWeight: "bold" }}>
              Your Cart is Empty
            </Text>
          </View>
        ) : (
          <>
            <SafeAreaView
              style={{
                flexDirection: "row",
                alignItems: "center",
                shadowOffset: { width: 1, height: 1 },
                shadowColor: "black",
                shadowOpacity: 0.1,
                padding: 15,
                justifyContent: "space-between",
                backgroundColor: "white",
                marginTop: 15,
              }}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color="#fd5c63"
                onPress={() => navigation.goBack()}
              />
              {cart.length >= 1 ? (
                <View
                  style={{
                    flexDirection: "row",

                    backgroundColor: "white",
                    borderColor: "#fd5c63",
                    borderWidth: 2,
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  <Entypo
                    name="bucket"
                    size={34}
                    color="#fd5c63"
                    style={{ marginRight: 10 }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      color: "white",
                      backgroundColor: "#fd5c63",
                      fontWeight: "bold",

                      textAlign: "center",
                      bottom: 0,
                      left: 20,
                      borderWidth: 1,
                      borderColor: "white",
                    }}
                  >
                    {cart.length}
                  </Text>
                </View>
              ) : (
                ""
              )}
            </SafeAreaView>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 7,
                marginLeft: 10,
                marginRight: 10,
                padding: 14,
                marginTop: 10,
              }}
            >
              {cart.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 10,
                      flexDirection: "row",
                      borderColor: "#BEBEBE",
                      borderWidth: 0.7,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({ type: "decrement", payload: item })
                      }
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#fd5c63",
                          paddingHorizontal: 6,
                          fontWeight: "bold",
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 19,
                          color: "#fd5c63",
                          paddingHorizontal: 8,
                          fontWeight: "bold",
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({ type: "increment", payload: item })
                      }
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#fd5c63",
                          paddingHorizontal: 6,
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    ${item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  marginHorizontal: 15,
                  marginVertical: 5,
                  color: "gray",
                }}
              >
                Billing Details
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                  margin: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "gray",
                      fontWeight: "bold",
                    }}
                  >
                    Item Total
                  </Text>
                  <Text
                    style={{
                      color: "gray",
                      fontWeight: "bold",
                    }}
                  >
                    ${total}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Delivery Fee | 1.2KM
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#fd5c63",
                    }}
                  >
                    FREE
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={AddOrders}
                style={{
                  padding: 10,
                  backgroundColor: "black",
                  justifyContent: "center",
                  marginHorizontal: 10,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  CHECKOUT
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
