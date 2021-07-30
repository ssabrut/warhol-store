import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

type login = StackNavigationProp<RootStackParamList, "Login">;

export default function Login() {
  const navigation = useNavigation<login>();

  const Login = () => {
    const [username, setUsername] = useState("");
    const [usernameFocused, setUsernameFocused] = useState(false);
    const isFormUsernameFocused = usernameFocused ? styles.formFocused : styles.form;
    
    const isFormEmptyStyle = username == "" ? styles.loginBtnDisabled : styles.loginBtn;
    const disableBtn = username == "" ? true : false;

    return (
      <View style={styles.loginForm}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={[isFormUsernameFocused, { marginBottom: 10 }]} 
          placeholder="e.g johndoe@gmail.com" 
          onChangeText={(username) => setUsername(username)} 
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => setUsernameFocused(false)} />
        <Text style={{ textAlign: "left", marginStart: 4, fontSize: 13, marginBottom: 8 }}>By clicking next, an email will sent to your email address along with <Text style={{ color: "#0314AC" }}>OTP-code.</Text></Text>
        <TouchableOpacity style={isFormEmptyStyle} disabled={disableBtn} onPress={() => navigation.navigate("LoginVerify")}>
          <Text style={styles.loginText}>Next</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
          <Text style={styles.swtichAuthText}>Don't have an account? <Text style={styles.span}>Register</Text></Text>
        </TouchableWithoutFeedback>
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
  },
  loginForm: {
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
  forgotText: {
    textAlign: "right",
    marginHorizontal: 4,
    color: "#0314AC",
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#0314AC",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 16
  },
  loginBtnDisabled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#C9C2CA",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 16
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.75,
  },
  swtichAuthText: {
    textAlign: "center"
  },
  span: {
    color: "#0314AC"
  }
});
