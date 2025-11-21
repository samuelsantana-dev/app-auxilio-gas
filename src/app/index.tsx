import { View } from "react-native";
import '../style/style.css';
import HomeScreen from "./home";

export default function Index() {
  return (
    <View>
         {/* <BackButton /> */}
      <HomeScreen />
      {/* <CreateAccountScreen /> */}
      {/* <LoginScreen /> */}
    </View>
  );
}
