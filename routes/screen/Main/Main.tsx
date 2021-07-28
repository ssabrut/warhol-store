import React from "react";

import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

type main = StackNavigationProp<RootStackParamList, "Main">;

export default function MainScreen() {
  const navigation = useNavigation<main>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Main Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Auth")} />
    </View>
  );
}
