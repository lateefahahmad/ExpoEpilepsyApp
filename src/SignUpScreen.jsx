import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SignUpScreen = () => {
  // add all fields here e.g first name etc
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignIn = () => {
    // Your sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.SignUpContainer}>
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#000000"
        // fix
        onChangeText={setFirstName}
        value={firstName} // change to first name referencing useState above
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#000000"
        // fix
        onChangeText={setSurname}
        value={surname}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#000000"
        // fix
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 20,
  },

  input: {
    // sign up input boxes
    width: "80%",
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    width: 200, // Adjust width as needed
    height: 50, // Adjust height as needed
    borderRadius: 10, // Adjust border radius as needed
    borderWidth: 2, // Border width
    borderColor: "black", // Border color
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
  },
});

export default SignUpScreen;
