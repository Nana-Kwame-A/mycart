import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { profile } from "../../../components/ProfileData"; // Update the path based on your project structure
import ScreenHeader from "../../../components/ScreenHeader";

const EditProfileScreen = () => {
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
        <View style={{ padding: 10 }}>
          <TextInput
            style={{
              height: 40,
              marginBottom: 10,
              borderColor: "gray",
              borderWidth: 1
            }}
            placeholder="Type here to set profile name"
            onChangeText={handleProfileNameChange}
            value={profileName}
          />
          <Button
            title="Save Profile"
            onPress={handleSaveProfile}
          />
          <Text style={{ padding: 10, fontSize: 24, marginTop: 20 }}>
            Profile Name: {profileName}
          </Text>
        </View>
    );
};

export default EditProfileScreen;
