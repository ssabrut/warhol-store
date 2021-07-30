import React from "react";

import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";

export default function CustomHeader({ type }: { type: any }) {
  const HeaderType = (): JSX.Element | undefined => {
    if (type == "cart") {
      return (
        <View style={[styles.container, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
          <StatusBar />
          <Text style={styles.cartLabel}>Your cart</Text>
          <TouchableOpacity>
            <Image style={styles.icon} source={require("./../icons/like.png")} />
          </TouchableOpacity>
        </View>
      );
    } else if (type == "main") {
      return (
        <View style={styles.container}>
          <StatusBar />
          <Text>Main</Text>
        </View>
      );
    } else if (type == "profile") {
      return (
        <View style={[styles.container, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
          <StatusBar />
          <Text style={styles.cartLabel}>Profile</Text>
          <TouchableOpacity>
            <Image style={styles.icon} source={require("./../icons/settings.png")} />
          </TouchableOpacity>
        </View>
      );
    }
  };

  return <HeaderType />;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: StatusBar.currentHeight,
    left: 0,
    width: "100%",
    height: 72,
    borderBottomWidth: 0.25,
    borderBottomColor: "#aaa",
    backgroundColor: "#fff",
    paddingHorizontal: 32,
  },
  cartLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#525252",
  },
});
