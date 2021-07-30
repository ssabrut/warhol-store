import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

type registerAcc = StackNavigationProp<RootStackParamList, "RegisterAcc">;

export default function RegisterAcc() {
  const navigation = useNavigation<registerAcc>();

  const Register = () => {
    const [email, setEmail] = useState("");
    const [emailFocused, setEmailFocused] = useState(false);
    const isEmailFocused = emailFocused ? styles.formFocused : styles.form;

    const [username, setUsernmae] = useState("");
    const [usernameFocused, setUsernameFocused] = useState(false);
    const isUsernameFocused = usernameFocused ? styles.formFocused : styles.form;

    const isFormEmptyStyle = email == "" || username == "" ? styles.registerBtnDisabled : styles.registerBtn;
    const disableBtn = email == "" || username == "" ? true : false;

    return (
      <View style={styles.registerForm}>
        <Text style={styles.label}>Email</Text>
        <View style={[isEmailFocused, { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }]}>
          <TextInput 
            style={{ width: "90%" }} 
            placeholder="e.g johndoe@gmail.com"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            onChangeText={(email) => setEmail(email)} />
          <Image style={styles.icon} source={require("./../../../assets/icons/email.png")} />
        </View>
        <Text style={styles.label}>Username</Text>
        <View style={[isUsernameFocused, { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }]}>
          <TextInput
            style={{ width: "90%" }}
            placeholder="e.g johndoe123"
            onFocus={() => setUsernameFocused(true)}
            onBlur={() => setUsernameFocused(false)}
            onChangeText={(username) => setUsernmae(username)} />
          <Image style={styles.icon} source={require("./../../../assets/icons/username.png")} />
        </View>
        <TouchableOpacity style={isFormEmptyStyle} disabled={disableBtn} onPress={() => navigation.navigate("RegisterVerify")}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>By clicking next, an email will sent to your email address along with <Text style={{ color: "#0314AC" }}>OTP-code.</Text></Text>
      </View>
    );
  }

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
    borderRadius: 8,
  },
  formFocused: {
    borderWidth: 1,
    borderColor: "#0314AC",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#AAAAAA",
  },
  registerBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#0314AC",
    borderRadius: 8,
    marginBottom: 16
  },
  registerBtnDisabled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#C9C2CA",
    borderRadius: 8,
    marginBottom: 16
  },
  nextText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.75,
  },
});
