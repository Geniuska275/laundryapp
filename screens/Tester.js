import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Tester() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: constants.statusBarHeight,
      }}
    >
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          padding: 10,
          marginTop: 10,
          fontSize: 20,
        }}
      >
        People you may know
      </Text>
      <Divider width={0.6} />

      <ScrollView>
        <View>
          <TouchableOpacity style={styles.container}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                elevation: 4,
              }}
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
                <Text
                  style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}
                >
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
          <Divider width={1.8} />
        </View>
        <View>
          <TouchableOpacity style={styles.container}>
            <Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1684244454957-4bc101e57b41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                elevation: 4,
              }}
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
                  Ehichoya Blessing
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
                <Text
                  style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}
                >
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
          <Divider width={1.8} />
        </View>
        <View>
          <TouchableOpacity style={styles.container}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                elevation: 4,
              }}
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
                  Peter Stewart
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
                <Text
                  style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}
                >
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
          <Divider width={1.8} />
        </View>
        <View>
          <TouchableOpacity style={styles.container}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                elevation: 4,
              }}
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
                  Omozokpia Kelvin
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
                <Text
                  style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}
                >
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
          <Divider width={1.8} />
        </View>
        <View>
          <TouchableOpacity style={styles.container}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1685052386750-902a081b99da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                elevation: 4,
              }}
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
                  Ewaen Lydia
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
                <Text
                  style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}
                >
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
          <Divider width={1.8} />
        </View>
        <View>
          <TouchableOpacity style={styles.container}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1685052388280-d8a42aee6610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                elevation: 4,
              }}
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
                  Blessing Aigbojie
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
                <Text
                  style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}
                >
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
          <Divider width={1.8} />
        </View>
        <View>
          <TouchableOpacity style={styles.container}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1678162115265-6a4e74a2b152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                elevation: 4,
              }}
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
                  Stella Aigbojie
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
                <Text
                  style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}
                >
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
          <Divider width={1.8} />
        </View>
        <View>
          <TouchableOpacity style={styles.container}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1684255209547-62386d720532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                elevation: 4,
              }}
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
                  Esther Aigbojie
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
                <Text
                  style={{ fontSize: 12, color: "gray", fontWeight: "bold" }}
                >
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
          <Divider width={1.8} />
        </View>
      </ScrollView>
    </SafeAreaView>
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
