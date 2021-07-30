import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";

import BottomNavigation from "./screen/Navigation/BottomNavigation";
import Login from "./screen/Auth/Login";
import LoginVerify from "./screen/Auth/LoginVerify";
import Register from "./screen/Auth/Register";
import RegisterAcc from "./screen/Auth/RegisterAcc";
import RegisterVerify from "./screen/Auth/RegisterVerify";

const Stack = createStackNavigator<RootStackParamList>();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="LoginVerify" component={LoginVerify} options={{ title: "Verify your Login" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />
        <Stack.Screen name="RegisterAcc" component={RegisterAcc} options={{ title: "Create your Account" }} />
        <Stack.Screen name="RegisterVerify" component={RegisterVerify} options={{ title: "Verify your Account" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
