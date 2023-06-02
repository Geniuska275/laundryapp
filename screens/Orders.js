import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { OrderContext } from "../Context/OrderContext";
import Order from "../components/Order";
import { Ionicons } from "@expo/vector-icons";
import constants from "expo-constants";
import Test from "../components/text";

export default function Orders({ navigation }) {
  const { orders, dispatch } = useContext(OrderContext);
  const { stores } = useContext(StoreContext);
  console.log(stores);

  return (
    <SafeAreaView
      style={{
        marginTop: constants.statusBarHeight,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "black",
          shadowOpacity: 0.1,
          marginBottom: 10,
          backgroundColor: "white",
          padding: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#fd5c63" }}>
          ORDERS {orders.length == 0 ? " " : <Text>({orders.length})</Text>}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons
            name="arrow-forward"
            color="#fd5c63"
            size={24}
            style={{ fontWeight: "bold" }}
          />
        </TouchableOpacity>
      </View>
      {orders.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fd5c63" }}>
            Hello <Text style={{ color: "black" }}>Kingsley</Text>,You have no
            orders.
          </Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          renderItem={({ item }) => (
            <Order order={item} cart={item.cart} dispatch={dispatch} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
