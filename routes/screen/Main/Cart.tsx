import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

import CustomHeader from "../../../assets/components/CustomHeader";

export default function Cart({ navigation: { navigate } }) {
  const [type] = useState("cart");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomHeader type={type} />
      <View style={{ marginTop: 96, marginBottom: 32 }}>
        <Image style={styles.illustration} source={require("./../../../assets/illustrations/empty.png")} />
        <Text style={styles.emptyHeader}>Oops, your cart {"\n"}is empty.</Text>
        <Text style={styles.emptySecHeader}>Let's fill your cart with your {"\n"}dream stuff!</Text>
      </View>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigate("MainScreen")}>
        <Text style={styles.backText}>{"< Back to shopping"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: 240,
    height: 240,
    resizeMode: "contain",
    marginBottom: 32,
  },
  emptyHeader: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    lineHeight: 30,
    textAlign: "center",
  },
  emptySecHeader: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },
  backBtn: {
    width: "85%",
    paddingVertical: 16,
    backgroundColor: "#0314AC",
    borderRadius: 8,
    marginBottom: 16,
  },
  backText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
