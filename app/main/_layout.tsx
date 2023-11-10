import React from "react";
import {
  Home,
  ShoppingBag,
  ShoppingCart,
  User,
  Wallet
} from "@tamagui/lucide-icons";
import { Tabs, useSegments } from "expo-router";
import { useRouter } from "expo-router";
import { Button, Paragraph, View } from "tamagui";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { profile } from "../../components/ProfileData";


export default function HomeLayout() {
  const insets  = useSafeAreaInsets()
  const segment = useSegments();
  const router = useRouter();
const hideTab =
    segment[segment.length - 1] === "profile";
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: hideTab ? "none" : "flex",
          alignItems: "center",
          position: "absolute",
          paddingBottom: insets.bottom + 10,
          bottom: 0,
          left: 0,
          right: 0,
          height: 60
        }
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              alignItems="center"
              justifyContent="center"
              paddingTop="$4"
            >
              <Home color={focused ? "lightblue" : "black"} />
              <Paragraph
                size="$1"
                color={focused ? "lightblue" : "black"}
              >
                Home
              </Paragraph>
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              alignItems="center"
              justifyContent="center"
              paddingTop="$4"
            >
              <ShoppingBag color={focused ? "lightblue" : "black"} />
              <Paragraph
                size="$1"
                color={focused ? "lightblue" : "black"}
              >
                Cart
              </Paragraph>
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              alignItems="center"
              justifyContent="center"
              paddingTop="$4"
            >
              <ShoppingCart color={focused ? "lightblue" : "black"} />
              <Paragraph
                size="$1"
                color={focused ? "lightblue" : "black"}
              >
                Orders
              </Paragraph>
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              alignItems="center"
              justifyContent="center"
              paddingTop="$4"
            >
              <Wallet color={focused ? "lightblue" : "black"} />
              <Paragraph
                size="$1"
                color={focused ? "lightblue" : "black"}
              >
                Wallet
              </Paragraph>
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              alignItems="center"
              justifyContent="center"
              paddingTop="$3"
            >
              {/* <User color={focused ? "lightblue" : "black"} /> */}

              <Image
                source={{ uri: profile.picture }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100
                }}
              />
              <Paragraph
                size="$1"
                color={focused ? "lightblue" : "black"}
              >
                Profile
              </Paragraph>
            </View>
          )
        }}
      />
    </Tabs>
  );
}
