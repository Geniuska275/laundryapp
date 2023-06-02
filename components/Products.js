import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import Product from "./product";

export default function Products({ products, cart, dispatch,orders }) {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <Product
              item={item}
              cart={cart}
              dispatch={dispatch}
              products={products}
              orders={orders}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
