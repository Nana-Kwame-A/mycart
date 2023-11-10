import React from "react";
import { Pressable, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Paragraph, ScrollView, View, XStack } from "tamagui";
import { profile } from "../../../components/ProfileData";


export default function profilesc() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View flex={1}>
      <View
        flex={1}
        height="$10"
        top={insets.top + 10}
      >
        <XStack
          zIndex={100}
          bg="transparent"
          width="100%"
          height="$5"
          alignItems="center"
          justifyContent="space-between"
          space="$7"
          px="$5"
        >
          <XStack
            alignItems="center"
            space="$3"
          >
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <ArrowLeft />
            </Pressable>
            <Paragraph
              size={"$6"}
              style={{ fontWeight: "bold" }}
            >
              Profile
            </Paragraph>
          </XStack>
          <XStack
            space="$3"
            alignItems="center"
            justifyContent="center"
          >
            <Pressable
              onPress={() => {
                router.push("/main/(profile)/ed");
              }}
            >
              <Paragraph>Edit Profile</Paragraph>
            </Pressable>
          </XStack>
        </XStack>
      </View>
      <View flex={9}>
        <ScrollView style={{ flex: 1, marginTop: insets.top + 20 }}>
          <View
            flex={3}
            alignItems="center"
            padding="2"
          >
            <Image
              source={{ uri: profile.picture }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100
              }}
            />
            <Paragraph size={"$6"}>{profile.name}</Paragraph>
          </View>
          <View flex={7}>
            <Paragraph>Footer</Paragraph>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
