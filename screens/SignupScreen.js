import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { auth } from "../config/firebase";
export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onHandleSignup = () => {
    if (email !== " " && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate("Login");
          console.log("signed up successfully");
        })
        .catch((err) => Alert.alert("sign up failed", err.message));
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
          }}
        >
          LaundryAPP.
        </Text>
      </View>
      <View style={styles.whitesheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          placeholder="Enter Email"
          keyboardType="email-address"
          textContentType="emailAdress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          keyboardType="email-address"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            alignSelf: "center",
            padding: 5,
          }}
        >
          <Text style={{ color: "grey", fontSize: 16, fontWeight: "600" }}>
            Already Signed up ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#fd5c63",
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: 7,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fd5c63",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fd5c63",
    alignSelf: "center",
    paddingBottom: 24,
    fontFamily: "Grotesk",
  },
  input: {
    backgroundColor: "white",
    height: 58,
    marginBottom: 28,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#fd5c63",
    borderWidth: 1,
    padding: 12,
    width: "75%",
    color: "gray",
    fontWeight: "bold",
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whitesheet: {
    width: "100%",
    height: "70%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#fd5c63",
    paddingHorizontal: 30,
    paddingVertical: 8,
    width: "75%",
    elevation: 4,
  },
});
