import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useNavigation } from "@react-navigation/native";
export default function PickupScreen({ route }) {
  const [showmodal, setShowmodal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState([]);
  const navigation = useNavigation();
  const { cart, total, dispatch } = route.params;
  const date = selectedDate.toString();
  const times = [
    { id: "0", time: "08:00 AM" },
    { id: "1", time: "09:00 AM" },
    { id: "2", time: "10:00 AM" },
    { id: "3", time: "11:00 AM" },
    { id: "4", time: "12:00 PM" },
    { id: "5", time: "01:00 PM" },
    { id: "6", time: "02:00 PM" },
    { id: "7", time: "03:00 PM" },
    { id: "8", time: "04:00 PM" },
    { id: "9", time: "05:00 PM" },
    { id: "10", time: "06:00 PM" },
  ];
  const deliveryTime = [
    { id: "0", name: "1-2 Days" },
    { id: "1", name: "1-3 Days" },
    { id: "2", name: "1-4 Days" },
    { id: "3", name: "2-3 Days" },
    { id: "4", name: "2-5 Days" },
    { id: "5", name: "2-7 Days" },
    { id: "6", name: "3-5 Days" },
    { id: "7", name: "4-8 Days" },
  ];

  const proceedToOrder = () => {
    if (selectedDate && selectedTime && selectedDelivery) {
      navigation.navigate("order", {
        cart,
        total,
        dispatch,
        selectedTime,
        date,
        delivery,
      });
    }
  };
  const proceedToCart = () => {
    if (!selectedTime || !selectedDate || !selectedDelivery) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Ok Pressed"),
            style: "cancel",
          },
          { text: "Ok", onPress: () => console.log("ok pressed") },
        ],
        { cancelable: false }
      );
    }

    setShowmodal(true);
  };
  const checkoutModalContext = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 16,
          borderWidth: 1,
          height: 700,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <TouchableOpacity
          onPress={proceedToOrder}
          style={{
            backgroundColor: "black",
            padding: 11,
            width: 200,
            borderRadius: 10,
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: 18,
              marginBottom: 10,
              color: "white",
              marginRight: 40,
            }}
          >
            CHECKOUT
          </Text>
          <Text style={{ color: "white", marginBottom: 8 }}>${total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <>
      <Modal
        animationType="slide"
        visible={showmodal}
        transparent={true}
        onRequestClose={() => setShowmodal(false)}
      >
        {checkoutModalContext()}
      </Modal>
      <SafeAreaView style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 15,
            marginTop: 35,
            marginBottom: 3,
            color: "gray",
          }}
        >
          Enter Address
        </Text>
        <TextInput
          style={{
            borderColor: "gray",
            borderRadius: 9,
            borderWidth: 0.7,
            padding: 20,
            paddingVertical: 60,
            marginHorizontal: 10,
          }}
          onChangeText={(text) => setAddress(text)}
        />
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 15,
            marginVertical: 5,
            color: "gray",
          }}
        >
          Pickup Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-05-10").toString()}
          endDate={new Date("2023-05-30")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          selectedTextStyle={styles.selectedTextStyle}
          unselectedTextStyle={styles.unselectedTextStyle}
          selectedItemBackgroundColor="#fd5c63"
          unselectedItemBackgroundColor="white"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 15,
            marginVertical: 5,
            color: "gray",
          }}
        >
          Select Time
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: "white",
          }}
        >
          {times.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={
                selectedTime.includes(time.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "white",
                      borderWidth: 0.7,
                      backgroundColor: "#fd5c63",
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "#fd5c63",
                      borderWidth: 0.7,
                      backgroundColor: "white",
                      color: "white",
                    }
              }
              onPress={() => setSelectedTime(time.time)}
            >
              <Text
                style={
                  selectedTime.includes(time.time)
                    ? {
                        color: "white",
                        fontWeight: "bold",
                      }
                    : {
                        color: "#fd5c63",
                        fontWeight: "bold",
                      }
                }
              >
                {time.time}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 15,

            marginVertical: 5,
            color: "gray",
          }}
        >
          Delivery Time
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: "white",
          }}
        >
          {deliveryTime.map((day, i) => (
            <TouchableOpacity
              key={i}
              style={
                delivery.includes(day.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "white",
                      borderWidth: 0.7,
                      backgroundColor: "#fd5c63",
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "#fd5c63",
                      borderWidth: 0.7,
                      backgroundColor: "white",
                      
                      color: "white",
                    }
              }
              onPress={() => setDelivery(day.name)}
            >
              <Text
                style={
                  delivery.includes(day.name)
                    ? {
                        color: "white",
                        fontWeight: "bold",
                      }
                    : {
                        color: "#fd5c63",
                        fontWeight: "bold",
                      }
                }
              >
                {day.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
      {total === 0 ? null : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 10,
            backgroundColor: "black",
            shadowOffset: { width: 1, height: 1 },
            shadowColor: "black",
            shadowOpacity: 0.3,
            justifyContent: "space-between",
            marginTop: 220,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <View>
            {cart.length === 1 ? (
              <Text
                style={{
                  color: "#fd5c63",
                  fontWeight: "bold",
                }}
              >
                {cart.length} item
              </Text>
            ) : (
              <Text
                style={{
                  color: "#fd5c63",
                  fontWeight: "bold",
                }}
              >
                {cart.length} items | ${total}
              </Text>
            )}
            <Text
              style={{
                color: "#fd5c63",
                fontWeight: "bold",
              }}
            >
              Extra charges may apply.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 10,
            }}
            onPress={proceedToCart}
          >
            <Text
              style={{
                color: "#fd5c63",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Proceed to Cart
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  selectedTextStyle: {
    color: "white",
  },
  unselectedTextStyle: {
    color: "#fd5c63",
  },
});
