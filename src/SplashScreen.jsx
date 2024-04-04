import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

function SplashScreen({ navigation }) {
  // navigation inside ? {}
  return (
    <View style={styles.container}>
      <Image source={require("./images/epilepsy.png")} style={styles.image} />
      <Text style={styles.text}>EpiTrack</Text>
      <Text style={styles.signInText}>Sign In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    resizeMode: "contain",
    width: 100,
    height: 100,
  },

  text: {
    flex: 1,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },

  signInText: {
    flex: 1,
    fontSize: 25,
    textAlign: "left",
  },
});

export default SplashScreen;
