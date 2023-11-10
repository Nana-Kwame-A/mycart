import React from "react";
import { Pressable, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Paragraph, ScrollView, View, XStack } from "tamagui";

const ScreenHeader = (props) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
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
          <ArrowLeft size="$2"/>
        </Pressable>
        <Paragraph
          size="$6"
          style={{ fontWeight: "bold" }}
        >
          {props.name}
        </Paragraph>
      </XStack>
    </View>
  );
};

export default ScreenHeader;
