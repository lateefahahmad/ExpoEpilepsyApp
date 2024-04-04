import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
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

export default function App() {
  return (
    <NavigationContainer>
      {/* ADD ICONS  */}
      <Drawer.Navigator initialRouteName="Splash Screen">
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

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="SplashScreen">
//           <Stack.Screen name="Splash Screen" component={SplashScreen} />
//           <Stack.Screen name="SignUp" component={SignUpPage} />
//           <Stack.Screen name="SignIn" component={SignInPage} />
//           <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//         {/* <TabBar /> */}
//       </NavigationContainer>
//     </NativeBaseProvider>
//   );
// }
