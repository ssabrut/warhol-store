import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

type register = StackNavigationProp<RootStackParamList, "Register">;

export default function Register() {
  const navigation = useNavigation<register>();

  const Register = () => {
    return (  
      <View style={styles.registerForm}>
        <Text style={styles.label}>Full name</Text>
        <TextInput 
          style={[styles.form, {marginBottom: 24}]} 
          placeholder="e.g John Doe" />
        <Text>Gender</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  registerForm: {
    width: "85%",
    marginTop: 32,
  },
  label: {
    marginBottom: 8,
    marginStart: 4,
  },
  form: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
});
