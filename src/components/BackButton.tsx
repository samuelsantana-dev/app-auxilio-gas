import { useRouter } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

import BackIcon from "src/assets/icons/back.png";

export default function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="absolute top-12 left-6 p-2 rounded-full bg-gray-100"
    >
      <Image
        source={BackIcon}
        style={{ width: 22, height: 22 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
