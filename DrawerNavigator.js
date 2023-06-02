import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DetailsScreen from "./screens/DetailsScreen";
import ProductScreens from "./screens/ProductScreens";
import PickupScreen from "./screens/PickupScreen";
import CartScreen from "./screens/CartScreen";
import { cartContext } from "./Context/CartContext";
import Profile from "./screens/Profile";
import Orders from "./screens/Orders";
import CustomDrawer from "./components/CustomDrawer";
import {
  Ionicons,
  FontAwesome5,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import Login from "./screens/LoginScreen";
import Signup from "./screens/SignupScreen";
import { auth } from "./config/firebase";
import Tester from "./screens/Tester";
export default function DrawerStack() {
  const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Grotesk",
          fontSize: 15,
          fontWeight: "bold",
        },
        drawerActiveBackgroundColor: "#fd5c63",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
      }}
    >
      <drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={22} />
          ),
        }}
      />
      <drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <drawer.Screen
        name="orders"
        component={Orders}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={22} color={color} />
          ),
        }}
      />
      <drawer.Screen
        name="facebook"
        component={Tester}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={22} color={color} />
          ),
        }}
      />
    </drawer.Navigator>
  );
}
function AboutStack() {
  const Tabs = createMaterialTopTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="details" component={DetailsScreen} />
      <Tabs.Screen name="products" component={ProductScreens} />
    </Tabs.Navigator>
  );
}
export function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions}
      />

      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "Store",
        }}
      />
      <Stack.Screen
        name="Pickup"
        component={PickupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
