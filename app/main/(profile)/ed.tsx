import React, { useState } from "react";
import { profile } from "../../../components/ProfileData";
import { Pressable, Text, Image, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, Input, Paragraph, ScrollView, View, XStack } from "tamagui";

export default function ed() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [profileName, setProfileName] = useState(profile.name);

  const handleProfileNameChange = (newName) => {
    setProfileName(newName);
  };

  const handleSaveProfile = () => {
    // Update the profile name in the profileData.js file
    profile.name = profileName;
    alert("Profile name saved");
  };

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
          space="$7"
          px="$5"
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
            Edit Profile
          </Paragraph>
        </XStack>
      </View>
      <View
        style={{ padding: 10, paddingTop:50 }}
        flex={9}
        alignItems="center"
      >
        <Input
          bg="#d4d4d4"
          placeholder="Type here to set profile name"
          px="$5"
          mb="$2"
          width="$20"
          paddingTop="$2"
          justifyContent="center"
          value={profileName}
          onChangeText={handleProfileNameChange}
        />
        <Button
          onPress={handleSaveProfile}
          width="$90"
          bg={"lightblue"}
        >
          Save Profile
        </Button>
      </View>
    </View>
  );
}
