import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CustomHeader from "../../../assets/components/CustomHeader";

export default function MainScreen() {
  const [type] = useState("main");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomHeader type={type} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
