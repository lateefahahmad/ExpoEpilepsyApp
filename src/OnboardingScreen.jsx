import React from "react";
import { OnboardFlow } from "react-native-onboard";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <OnboardFlow
      onDone={() => navigation.navigate("SignIn")}
      pages={[
        {
          title: "Welcome to EpiTrack",
          subtitle: "Excited to start your EpiTracking journey?",
          imageUri: "https://frigade.com/img/example1.png",
        },
        {
          title: "Self-Management",
          subtitle:
            "Take your independence back by tracking your epilepsy and behavioral patterns",
          imageUri: "https://frigade.com/img/example2.png",
        },
        {
          title: "Upload real-time to cloud",
          subtitle:
            "Save you and your neurologist time by uploading your data real-time to the cloud",
          imageUri: "https://frigade.com/img/example2.png",
        },
      ]}
      type={"fullscreen"}
    />
  );
};

export default OnboardingScreen;
