import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import React, { createContext, useEffect, useReducer, useState } from "react";
import Products from "../components/Products";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";

export default function AboutScreen({ route }) {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const navigation = useNavigation();
  const { item } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: item.name });
  }, []);
  const currencies = [
    { key: "$", value: "USD" },
    { key: "EUR", value: "EUR" },
    { key: "NGN", value: "NGN" },
  ];
  const select = (val) => {
    setSelectedCurrency(val);
  };

  const cartreducer = (cart, action) => {
    switch (action.type) {
      case "Add":
        console.log(action.payload);
        const itemPresen = cart.find((item) => item.id === action.payload.id);
        if (itemPresen) {
          itemPresen.quantity++;
        } else {
          return [...cart, { ...action.payload, quantity: 1 }];
        }
      case "increment":
        const newCart = cart.filter((item) => item.id != action.payload.id);
        const itemPrese = cart.find((item) => item.id === action.payload.id);
        return [...newCart, { ...itemPrese, quantity: itemPrese.quantity + 1 }];

      case "decrement":
        const itemPresent = cart.find((item) => item.id === action.payload.id);
        if (itemPresent.quantity == 1) {
          itemPresent.quantity = 0;
          const removeItem = cart.filter(
            (item) => item.id !== action.payload.id
          );
          cart = removeItem;
        } else {
          itemPresent.quantity--;
        }
      default:
        return cart;
    }
  };
  const [cart, dispatch] = useReducer(cartreducer, item.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const whatsapp = (number) => {
    Linking.openURL(`http://wa.me/${number}`);
  };
  return (
    <>
      <ImageBackground
        source={item.logo}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.opacity}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              height: "15%",
              backgroundColor: "#fd5c63",
            }}
          ></View>
          {total >= 1 ? (
            <Text
              style={{
                backgroundColor: "white",
                color: "#fd5c63",
                marginTop: -15,
                position: "absolute",
                borderRadius: 10,
                padding: 10,
                left: 280,
                top: 100,
                fontWeight: "bold",
                shadowOffset: { width: 1, height: 1 },
                shadowColor: "black",
                shadowOpacity: 0.1,
              }}
            >
              total:${total}
            </Text>
          ) : null}
          {cart.length >= 1 ? (
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                marginTop: -25,
                backgroundColor: "white",
                borderColor: "white",
                borderWidth: 2,
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                left: 20,
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

          <View
            style={{
              alignSelf: "center",
              borderColor: "#fd5c63",
              borderWidth: 4,
              width: 110,
              height: 110,
              borderRadius: 55,
              marginTop: -76,
              backgroundColor: "white",
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
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "white",
              }}
            />
            <Text
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor:
                  item.DeliveryMode === "Delivery" ? "green" : "blue",
                position: "absolute",
                bottom: 2,
                left: 75,
                borderColor: "white",
                borderWidth: 2,
              }}
            ></Text>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="location-on" size={24} color="red" />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                {item.city}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
              onPress={() => whatsapp(item.phone)}
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
            </TouchableOpacity>
          </View>

          <Divider
            width={1.8}
            style={{ marginHorizontal: 5, marginVertical: 5 }}
          />
          {/* <View
            style={{
              padding: 10,
              backgroundColor: "white",
              opacity: 0.8,
            }}
          >
            <SelectList
              data={currencies}
              defaultOption={{ key: "$", value: "USD" }}
              setSelected={(val) => select(val)}
              placeholder={"Select Currency"}
              search={false}
            />
          </View> */}
          <Products
            products={item.products}
            cart={cart}
            dispatch={dispatch}
            orders={item.orders}
          />
        </View>
      </ImageBackground>

      {total === 0 ? null : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 10,
            backgroundColor: "black",
            shadowOffset: { width: 1, height: 1 },
            shadowColor: "black",
            shadowOpacity: 0.1,
            justifyContent: "space-between",
            marginBottom: 0,
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
                {cart.length} items
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
            onPress={() =>
              navigation.navigate("Pickup", { cart, total, dispatch })
            }
          >
            <Text
              style={{
                color: "#fd5c63",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Proceed to Pick up
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: -100,
    borderWidth: 4,
    borderColor: "white",
  },
  card: {
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  cardContent: {
    flexDirection: "row",
    padding: 10,
  },
  appContainer: {
    flex: 1,
  },
  opacity: {
    opacity: 0.3,
  },
});
