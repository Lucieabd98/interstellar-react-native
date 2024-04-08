import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  Image,
  StyleSheet,
} from "react-native";

import Constants from "expo-constants";

import logo from "./assets/logoimdb.png";
import filmImg from "./assets/film.jpg";
import matthew from "./assets/matthew.jpg";
import anne from "./assets/anne.jpg";
import jessica from "./assets/jessica.jpg";
import mackenzie from "./assets/mackenzie.jpg";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#1D1D1D" }}>
      <ScrollView vertical={true}>
        <View
          style={{
            marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
          }}
        >
          <View
            style={{
              backgroundColor: "#393939",
              height: 60,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Image
              source={logo}
              style={{
                width: 50,
                height: 25,
                marginLeft: 10,
              }}
            />
          </View>
          <View style={{ backgroundColor: "#212121", padding: 10 }}>
            <View>
              <Text style={{ color: "white", fontSize: 30 }}>Interstellar</Text>
              <Text
                style={{ color: "white", fontSize: 12, marginVertical: 10 }}
              >
                2014 PG-13 2h49min Adventure, Drama, Sci-Fi
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  source={filmImg}
                  style={{ width: "100%", height: 200, resizeMode: "contain" }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  gap: 10,

                  justifyContent: "space-around",
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 14 }}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <Pressable
                  style={{
                    backgroundColor: "#0177BD",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    + ADD TO WATCHLIST
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 30,
                paddingHorizontal: 20,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Entypo name="star" size={24} color="yellow" />
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  8.6/10
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Entypo name="star-outlined" size={24} color="white" />
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  RATE THIS
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "white",
                    backgroundColor: "#61C74F",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                  }}
                >
                  74
                </Text>
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  METASCORE
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#212121",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                alignItems: "center",
                paddingVertical: 20,
              }}
            >
              <Text style={{ color: "white", fontSize: 30 }}>
                Top Billed Cast
              </Text>
              <Pressable
                onPress={() => {
                  alert("pressable touched");
                }}
              >
                <Text style={{ color: "#0177BD" }}>SEE ALL</Text>
              </Pressable>
            </View>
            <ScrollView horizontal={true} contentContainerStyle={{ gap: 10 }}>
              <View
                style={{
                  overflow: "hidden",
                  backgroundColor: "#2A2A2A",
                }}
              >
                <Image
                  source={matthew}
                  style={{ height: 200, width: 200, resizeMode: "contain" }}
                ></Image>
                <Text
                  style={{
                    width: 200,
                    color: "white",
                    textAlign: "center",
                    fontSize: 15,
                  }}
                >
                  Matthew McConaughey
                </Text>
                <Text
                  style={{
                    width: 200,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Cooper
                </Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A" }}>
                <Image
                  source={anne}
                  style={{ height: 200, width: 200, resizeMode: "contain" }}
                ></Image>
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 15 }}
                >
                  Anne Hathaway
                </Text>
                <Text
                  style={{
                    width: 200,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Brand
                </Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A" }}>
                <Image
                  source={jessica}
                  style={{ height: 200, width: 200, resizeMode: "contain" }}
                ></Image>
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 15 }}
                >
                  Jessica Chastain
                </Text>
                <Text
                  style={{
                    width: 200,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Cooper
                </Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A" }}>
                <Image
                  source={mackenzie}
                  style={{ height: 200, width: 200, resizeMode: "contain" }}
                ></Image>
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 15 }}
                >
                  Mackenzie Foy
                </Text>
                <Text
                  style={{
                    width: 200,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Cooper
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={{ padding: 20, gap: 20 }}>
            <View>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Director
              </Text>
              <Text style={{ color: "white" }}>Christopher Nolan</Text>
            </View>
            <View>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Writers
              </Text>
              <Text style={{ color: "white" }}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
          <StatusBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
