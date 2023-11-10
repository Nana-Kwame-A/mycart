import React from "react";
import { Pressable, TextInput, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bell, Heart, User } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import {  Input, Paragraph, View, XStack, YStack } from "tamagui";
import { profile } from "./ProfileData";

export default function Header() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
    const [search, setSearch] = React.useState("");


  const getCurrentHour = new Date().getHours();

  let hello;

  if (getCurrentHour >= 5 && getCurrentHour < 12) {
    hello = "Good morning 👋";
  } else if (getCurrentHour >= 12 && getCurrentHour < 15) {
    hello = "Good afernoon ☀️";
  } else {
    hello = "Good evening "
  }

  console.log("Image URL:", profile.picture);


    return (
      <YStack
        alignItems="center"
        flex={1}
        // zIndex={100}
        // position="absolute"
        top={insets.top + 30}
        // justifyContent="space-between"
      >
        <XStack
          zIndex={100}
          bg="transparent"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          space="$5"
          px="$4"
          paddingBottom="$4"
        >
          <XStack
            alignItems="center"
            space="$3"
          >
            <Pressable
              onPress={() => {
                router.push("/main/profile");
              }}
            >
              <Image
                source={{ uri: profile.picture }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100
                }}
                onError={(error) =>
                  console.log("Image Error:", error.nativeEvent.error)
                }
              />
            </Pressable>
            <YStack>
              <Paragraph>{hello}</Paragraph>
              <Paragraph size={"$6"}>{profile.name}</Paragraph>
            </YStack>
          </XStack>
          <XStack
            space="$3"
            alignItems="center"
            justifyContent="center"
          >
            <Pressable
              onPress={() => {
                router.push("/main/profile");
              }}
            >
              <Bell />
            </Pressable>

            <Pressable
              onPress={() => {
                router.push("/main/(home)/wishlist");
              }}
            >
              <Heart />
            </Pressable>
          </XStack>
        </XStack>
        <Input
          bg="#d4d4d4"
          placeholder="Search"
          px="$5"
          // mb="$2"
          width="$20"
          // paddingTop="$2"
          justifyContent="center"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </YStack>
    );
}
