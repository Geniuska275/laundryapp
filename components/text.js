import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Divider } from "react-native-elements";

export default function Test() {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={{ width: 100, height: 100, borderRadius: 50, elevation: 4 }}
        />

        <View
          style={{
            borderRadius: 7,
            backgroundColor: "white",
            padding: 10,
            width: 300,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Kingsley Aigbojie
            </Text>
            <Text style={{ color: "gray" }}>3d</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                marginRight: 5,
              }}
            />
            <Text style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}>
              2 mutual friends
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",

              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 7,
                backgroundColor: "blue",
                paddingHorizontal: 18,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Confirm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 7,
                backgroundColor: "#f0f2f5",
                paddingHorizontal: 18,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <Divider width={0.3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
});
