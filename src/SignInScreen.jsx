import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import React from "react";
import {
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Text,
} from "native-base";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Center flex={1}>
        <VStack space={3} alignItems="center">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{ color: "warmGray.50" }}
          >
            Welcome
          </Heading>
          <Heading
            size="xs"
            fontWeight="medium"
            color="coolGray.600"
            _dark={{ color: "warmGray.200" }}
          >
            Sign in to continue!
          </Heading>
          <FormControl style={styles.FormControl}>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input style={styles.input} type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" style={styles.button}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{ color: "warmGray.200" }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  formControl: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    width: "100%",
  },
});

export default SignInScreen;
