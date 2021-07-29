import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

type registerVerify = StackNavigationProp<RootStackParamList, "RegisterVerify">;

export default function RegisterVerify() {
  const navigation = useNavigation<registerVerify>();

  const RegisterVerify = () => {
    const [otp, setOtp] = useState("");
    const [otpFocused, setOtpFocused] = useState(false);
    const isOtpFocused = otpFocused ? styles.formFocused : styles.form;

    const isFormEmptyStyle = otp == "" ? styles.registerBtnDisabled : styles.registerBtn;
    const disableBtn = otp == "" ? true : false;

    return (
      <View style={styles.verifyForm}>
        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <Text style={styles.verifyTitle}>Verification</Text>
          <Text style={styles.verifyDesc}>Enter the correct OTP-code to create your account.</Text>
        </View>
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
        <TouchableOpacity style={isFormEmptyStyle} disabled={disableBtn} onPress={() => navigation.navigate("Main")}>
          <Text style={styles.registerText}>Register</Text>
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
      <RegisterVerify />
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
  verifyTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center"
  },
  verifyDesc: {
    textAlign: "center",
    width: "60%",
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
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.75,
  },
});
