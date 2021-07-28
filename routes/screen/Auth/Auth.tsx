import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

type auth = StackNavigationProp<RootStackParamList, "Auth">;

export default function Auth() {
  const navigation = useNavigation<auth>();

  const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
      <View style={styles.loginForm}>
        <Text>Email</Text>
        <TextInput style={styles.form} placeholder="e.g johndoe@gmail.com" onChangeText={(username) => setUsername(username)} />
        <Text>Password</Text>
        <TextInput style={styles.form} placeholder="e.g johndoe123" onChangeText={(password) => setPassword(password)} />
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login />
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
  loginForm: {
    width: "85%",
  },
  form: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  loginBtn: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});
