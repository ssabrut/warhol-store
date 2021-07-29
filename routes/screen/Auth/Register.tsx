import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import DropDownPicker from 'react-native-dropdown-picker';
import { RootStackParamList } from "../../RootStackParamList";

type register = StackNavigationProp<RootStackParamList, "Register">;

export default function Register() {
  const navigation = useNavigation<register>();

  const Register = () => {
    const [fullName, setFullName] = useState("");
    const [fullNameFocused, setFullNameFocused] = useState(false);
    const isFullNameFocused = fullNameFocused ? styles.formFocused : styles.form;

    const [dateOfBirth, setDateOfBirth] = useState("");
    const [dateOfBirthFocused, setDateOfBirthFocused] = useState(false);
    const isDateOfBirthFocused = dateOfBirthFocused ? styles.formFocused : styles.form;

    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
    const isPhoneNumberFocused = phoneNumberFocused ? styles.formFocused : styles.form;
    
    const [open, setOpen] = useState(false);
    const [gender, setGender] = useState(null);
    const [item, setItem] = useState([
      {label: "Male", value: "male"},
      {label: "Female", value: "female"},
    ]);
    const isFormEmptyStyle = fullName == "" || dateOfBirth == "" || gender == null || phoneNumber == "" ? styles.registerBtnDisabled : styles.registerBtn;
    const disableBtn = fullName == "" || dateOfBirth == "" || gender == null || phoneNumber == "" ? true : false;

    return (
      <View style={styles.registerForm}>
        <Text style={styles.label}>Full name</Text>
        <View style={[isFullNameFocused, { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }]}>
          <TextInput 
            style={{ width: "90%" }}
            placeholder="e.g John Doe"
            onFocus={() => setFullNameFocused(true)}
            onBlur={() => setFullNameFocused(false)}
            onChangeText={(fullName) => setFullName(fullName)} />
          <Image style={styles.icon} source={require("./../../../assets/icons/person.png")} />
        </View>
        <Text style={styles.label}>Gender</Text>
        <DropDownPicker
          style={[styles.form, { marginBottom: 24 }]}
          open={open}
          value={gender}
          items={item}
          setOpen={setOpen}
          setValue={setGender}
          setItems={setItem}
          placeholder="Select gender" />
        <Text style={styles.label}>Date of birth</Text>
        <View style={[isDateOfBirthFocused, { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }]}>
          <TextInput 
            style={[, { width: "90%" }]} 
            placeholder="DD/MM/YYYY"
            onFocus={() => setDateOfBirthFocused(true)}
            onBlur={() => setDateOfBirthFocused(false)}
            onChangeText={(dateOfBirth) => setDateOfBirth(dateOfBirth)} />
          <Image style={styles.icon} source={require("./../../../assets/icons/calendar.png")} />
        </View>
        <Text style={styles.label}>Phone Number</Text>
        <View style={[isPhoneNumberFocused, { flexDirection: "row", justifyContent: "space-between", marginBottom: 32 }]}>
          <TextInput
            style={{ width: "90%" }} 
            placeholder="e.g 0812-XXXX-XXXX"
            onFocus={() => setPhoneNumberFocused(true)}
            onBlur={() => setPhoneNumberFocused(false)}
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)} />
          <Image style={styles.icon} source={require("./../../../assets/icons/telephone.png")} />
        </View>
        <TouchableOpacity style={isFormEmptyStyle} disabled={disableBtn} onPress={() => navigation.navigate("RegisterAcc")}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <Text style={styles.swtichAuthText}>Already have an account? <Text style={styles.span}>Login</Text></Text>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Register />
      </View>
    </ScrollView>
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
  swtichAuthText: {
    textAlign: "center"
  },
  span: {
    color: "#0314AC"
  }
});
