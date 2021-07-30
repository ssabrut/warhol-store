import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

import CustomHeader from "../../../assets/components/CustomHeader";

type profile = StackNavigationProp<RootStackParamList, "Profile">;

export default function Profile() {
  const navigation = useNavigation<profile>();
  const [type] = useState("profile");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomHeader type={type} />
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.authText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate("Register")}>
        <Text style={[styles.authText, { color: "#0314AC" }]}>Register</Text>
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
  loginBtn: {
    width: "85%",
    paddingVertical: 14,
    backgroundColor: "#0314AC",
    borderRadius: 8,
    marginBottom: 16,
  },
  registerBtn: {
    width: "85%",
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#0314AC",
    borderRadius: 8,
    marginBottom: 16,
  },
  authText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
