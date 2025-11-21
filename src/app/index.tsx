import { View } from "react-native";
import HomeScreen from "./home";
import LoginScreen from "./login";
import CreateAccountScreen from "./register";

export default function Index() {
  return (
    <View>
         {/* <BackButton /> */}
      <HomeScreen />
      <CreateAccountScreen />
      <LoginScreen />
    </View>
  );
}
