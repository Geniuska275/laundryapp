import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Feather, Entypo } from "@expo/vector-icons";
import { useState, useEffect, useContext } from "react";
import { Image } from "react-native";
import { TextInput } from "react-native";
import * as Location from "expo-location";
import Services from "../components/Services";
import Stores from "../stores";
import { data } from "../data/stores";
import constants from "expo-constants";
import { StoreContext } from "../Context/StoreContext";
const HomeScreen = ({ navigation }) => {
  const [address, setAddress] = useState("Nigeria,Oyo State,Ibadan");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("ibadan");
  const [search, setSearch] = useState("");
  const [laundry, setLaundry] = useState([]);
  const [LocationServicesEnabled, setLocationServicesEnabled] = useState(false);
  useEffect(() => {
    getCurrentLocation();
    checkIfLoctionEnabled();
  }, []);
  useEffect(() => {
    const result = data.filter((store) => store.DeliveryMode === activeTab);
    console.log(result);
  }, [activeTab]);
  useEffect(() => {
    const result = data.filter((store) => store.city === city);
    setLaundry(result);
  }, [city]);

  function searcher(search) {
    setCity(search);
  }
  const checkIfLoctionEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location Services not enabled",
        "Please Enable the Location services ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    // get permission//
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Allow App to use the Location", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    // getting coordinates//
    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log(response);
      // get the address from thr response//
      for (let item of response) {
        let address = `${item.country} ${item.city} ${item.street}`;
        setCity(item.city);
        setAddress(address);
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        marginTop: constants.statusBarHeight,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          padding: 10,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "black",
          shadowOpacity: 0.1,
        }}
      >
        <MaterialIcons name="location-on" size={24} color="red" />
        <View>
          <Text
            style={{
              fontWeight: "900",
            }}
          >
            Home
          </Text>
          <Text
            style={{
              color: "gray",
            }}
          >
            {address}
          </Text>
        </View>

        <TouchableOpacity
          style={{ marginLeft: "auto", marginRight: 10 }}
          onPress={() => navigation.openDrawer("profileStack")}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          margin: 10,
          padding: 10,
          borderWidth: 0.8,
          borderColor: "#c0c0c0",
        }}
      >
        <TextInput
          placeholder="search stores by Location..."
          style={{ color: "gray", width: 300 }}
          onChangeText={(text) => setCity(text)}
        />
        <TouchableOpacity onPress={() => searcher(search)}>
          <Feather name="search" color="#fd5c63" size={24} />
        </TouchableOpacity>
      </View>
      <Services />
      {laundry.length == 0 ? (
        <Text
          style={{
            textAlign: "center",
            color: "#fd5c63",
            fontWeight: "bold",
          }}
        >
          No Store matches your location,you can search...
        </Text>
      ) : (
        <Stores data={laundry} navigation={navigation} />
      )}
      <Stores data={laundry} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
