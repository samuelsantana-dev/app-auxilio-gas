import Constants from 'expo-constants';
import { View } from "react-native";
import '../style/style.css';
import HomeScreen from "./home";

export default function Index() {

  const statusBarHeight = Constants.statusBarHeight;


  return (
    <View className="flex-1">
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        {/* <Header/> */}

      </View>
      <HomeScreen />
    </View>
  );
}
