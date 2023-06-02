import { View, Text, FlatList } from "react-native";
// import { stores } from "./data/stores";

import Store from "./components/Store";

export default function Stores({ data, navigation }) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Store
              phone={item.phone}
              name={item.name}
              image={item.logo}
              id={item.id}
              item={item}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
