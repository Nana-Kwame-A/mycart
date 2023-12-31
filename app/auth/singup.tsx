import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Link, useRouter } from "expo-router";

import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import { ACTION_TYPES } from "../../zustand/actionTypes";
import { usePersistStore } from "../../zustand/store/persistStore";

export default function SignUp() {
  const router = useRouter();

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = useState("");

  const signup = usePersistStore((state) => state.signup);
  const actionType = usePersistStore((state) => state.actionType);
  const resetActionType = usePersistStore((state) => state.restActionType);

  console.log(actionType);

  console.log({
    email,
    phone,
    password
  });

  React.useEffect(() => {
    if (actionType === ACTION_TYPES.SIGNUP_SUCCESS) {
      alert("yo i am here");
    }
    resetActionType();
  }, [actionType]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black
            }}
          >
            Create Account
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: COLORS.black
            }}
          >
            idk what to write here yet
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginVertical: 8
            }}
          >
            Email address
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}
          >
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                width: "100%"
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginVertical: 8
            }}
          >
            Mobile Number
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 22
            }}
          >
            <TextInput
              placeholder="+233"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={{
                width: "12%",
                borderRightWidth: 1,
                borderLeftColor: COLORS.grey,
                height: "100%"
              }}
            />

            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              style={{
                width: "80%"
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginVertical: 8
            }}
          >
            Password
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                width: "100%"
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons
                  name="eye-off"
                  size={24}
                  color={COLORS.black}
                />
              ) : (
                <Ionicons
                  name="eye"
                  size={24}
                  color={COLORS.black}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6
          }}
        >
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>I agree to the terms and conditions</Text>
        </View>

        <Button
          title="Sign Up"
          onPress={() => signup(email, phone, password)}
          filled
          style={{
            marginTop: 18,
            marginBottom: 4
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10
            }}
          />
          <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image
              source={require("../../assets/facebook.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image
              source={require("../../assets/google.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Already have an account
          </Text>
          <Pressable onPress={() => router.push("/auth/login")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
