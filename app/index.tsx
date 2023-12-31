import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";

import Button from "../components/Button";
import COLORS from "../constants/colors";
import { usePersistStore } from "../zustand/store/persistStore";

export default function Welcome() {
  const router = useRouter();

  const user = usePersistStore();

  console.log(user);

  return (
    <LinearGradient
      style={{
        flex: 1
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/hero1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ]
            }}
          />

          <Image
            source={require("../assets/hero3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" }
              ]
            }}
          />

          <Image
            source={require("../assets/hero3.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" }
              ]
            }}
          />

          <Image
            source={require("../assets/hero2.jpg")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ]
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%"
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: "800",
              color: COLORS.white
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: "800",
              color: COLORS.white
            }}
          >
            Started
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4
              }}
            >
              Looking for a particular product
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white
              }}
            >
              Everything is here
            </Text>
          </View>
          {/* <Button onPress={() => router.push("/Auth/Welcome")}></Button> */}
          <Button
            title="Get Started"
            onPress={() => router.push("/main/(home)/home")}
            style={{
              marginTop: 22,
              width: "100%"
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white
              }}
            >
              Already have an account ?
            </Text>
            <Pressable onPress={() => router.push("/auth/login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
