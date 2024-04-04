/* eslint-disable react/jsx-key */
import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from "native-base";

import React from "react-native";

const SignInScreen = () => {
  const statusArray = [
    {
      status: "success",
      title: "Selection successfully moved!",
    },
    {
      status: "error",
      title: "Please try again later!",
    },
    {
      status: "info",
      title: "We are going live in July!",
    },
    {
      status: "warning",
      title: "Poor internet connection.",
    },
  ];

  return (
    <Stack space={3} w="100%" padding={10} maxW="400">
      {statusArray.map((status) => {
        return (
          <Alert w="100%" key={status.title} status={status.status}>
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    {status.title}
                  </Text>
                </HStack>
                <IconButton
                  variant="unstyled"
                  _focus={{
                    borderWidth: 0,
                  }}
                  icon={<CloseIcon size="3" />}
                  _icon={{
                    color: "coolGray.600",
                  }}
                />
              </HStack>
            </VStack>
          </Alert>
        );
      })}
    </Stack>
  );
};

export default SignInScreen;
