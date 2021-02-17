import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import WelcomeScreen from "./app/screens/welcomeScreen";
import ViewImageScreen from "./app/screens/viewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}
