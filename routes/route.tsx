import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";

import MainScreen from "./screen/Main/Main";
import Login from "./screen/Auth/Login";
import Register from "./screen/Auth/Register";

const Stack = createStackNavigator<RootStackParamList>();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
