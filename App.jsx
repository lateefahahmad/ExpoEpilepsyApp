import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons
import SignInScreen from "./src/SignInScreen";
import HomeScreen from "./src/HomeScreen";
import SignUpScreen from "./src/SignUpScreen";
import SplashScreen from "./src/SplashScreen";
import SeizureTracker from "./src/SeizureTracker";
import MyInfoScreen from "./src/MyInfoScreen";
import AboutScreen from "./src/AboutScreen";
import Analytics from "./src/Analytics";
// import TabBar from "./src/TabBar";

const Drawer = createDrawerNavigator();

// Define mapping between route names and corresponding Ionicons
const routeIcons = {
  Home: "home",
  "Seizure Tracker": "analytics",
  "My Information": "person",
  Analytics: "bar-chart",
  "About FAQ": "information-circle",
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Splash Screen"
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            const iconName = routeIcons[route.name]; // Get the corresponding icon name for the current route

            // Return the Ionicons component with the appropriate icon name
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        drawerStyle={{
          // Customize the drawer style to display the icon in the header for the initial navigation tab
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerRight: () => <Ionicons name="menu" size={24} color="black" />,
        }}
      >
        <Drawer.Screen name="Splash Screen" component={SplashScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Seizure Tracker" component={SeizureTracker} />
        <Drawer.Screen name="My Information" component={MyInfoScreen} />
        <Drawer.Screen name="Analytics" component={Analytics} />
        <Drawer.Screen name="About FAQ" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
