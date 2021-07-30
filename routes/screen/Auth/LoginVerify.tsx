import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

type loginVerify = StackNavigationProp<RootStackParamList, "LoginVerify">;

export default function LoginVerify() {
  const navigation = useNavigation<loginVerify>();

  const LoginVerify = () => {
    const [otp, setOtp] = useState("");
    const [otpFocused, setOtpFocused] = useState(false);
    const isOtpFocused = otpFocused ? styles.formFocused : styles.form;

    const isFormEmptyStyle = otp == "" ? styles.loginBtnDisabled : styles.loginBtn;
    const disableBtn = otp == "" ? true : false;

    return (
      <View style={styles.verifyForm}>
        <Text style={styles.label}>OTP-Code</Text>
        <View style={[isOtpFocused, { flexDirection: "row", justifyContent: "space-between", marginBottom: 32 }]}>
          <TextInput
            style={{ width: "90%" }}
            placeholder="6-digit code"
            onFocus={() => setOtpFocused(true)}
            onBlur={() => setOtpFocused(false)}
            onChangeText={(otp) => setOtp(otp)} />
          <Image style={styles.icon} source={require("./../../../assets/icons/otp.png")} />
        </View>
        <TouchableOpacity style={isFormEmptyStyle} disabled={disableBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback>
          <Text style={{ textAlign: "center" }}>Don't get an email? <Text style={{ color: "#0314AC" }}>Resend OTP.</Text></Text>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginVerify />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  verifyForm: {
    width: "85%",
    marginTop: 48,
  },
  label: {
    marginBottom: 8,
    marginStart: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#AAAAAA",
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
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#0314AC",
    borderRadius: 8,
    marginBottom: 16
  },
  loginBtnDisabled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#C9C2CA",
    borderRadius: 8,
    marginBottom: 16
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.75,
  },
});
