import React from "react";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Image, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RootStackParamList } from "../../RootStackParamList";

import MainScreen from "../Main/Main";
import Cart from "../Main/Cart";
import Profile from "../Main/Profile";

type bottomNavigation = StackNavigationProp<RootStackParamList, "BottomNavigation">;
const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  const navigation = useNavigation<bottomNavigation>();

  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      barStyle={{
        height: 64,
        backgroundColor: "#fff",
        borderTopWidth: 0.25,
        borderTopColor: "#aaa",
        justifyContent: "center",
        alignItems: "center",
      }}
      activeColor="#0314AC"
      inactiveColor="#525252"
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image style={{ width: 24, height: 24, tintColor: focused ? "#0314AC" : "#525252" }} resizeMode="contain" source={require("./../../../assets/icons/home.png")} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image style={{ width: 24, height: 24, tintColor: focused ? "#0314AC" : "#525252" }} resizeMode="contain" source={require("./../../../assets/icons/cart.png")} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image style={{ width: 24, height: 24, tintColor: focused ? "#0314AC" : "#525252" }} resizeMode="contain" source={require("./../../../assets/icons/person.png")} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
