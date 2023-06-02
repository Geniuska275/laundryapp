import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { auth } from "../config/firebase";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Divider } from "react-native-elements";
import { signOut } from "firebase/auth";
import { OrderContext } from "../Context/OrderContext";
export default function CustomDrawer(props) {
  const { orders } = useContext(OrderContext);
  const onSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "white" }}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: "white",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              borderWidth: 4,
              borderColor: "#fd5c63",
              width: 90,
              height: 90,
              borderRadius: 45,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginTop: 10,
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "black",
              shadowOpacity: 0.1,
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                position: "absolute",
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
              fontFamily: "Grotesk-bold",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            Kingsley Aigbojie
          </Text>
        </View>
        <Divider width={0.5} />
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#ccc",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 5,
          }}
          onPress={onSignOut}
        >
          <Text
            style={{
              fontFamily: "Grotesk",
              fontSize: 18,
              fontWeight: "bold",
              color: "#fd5c63",
            }}
          >
            Logout
          </Text>
          <MaterialIcons name="logout" color="#fd5c63" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
