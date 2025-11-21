import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Logo from "src/assets/images/icone-gas.png";

export default function HomeScreen() {
  return (
    <View className="h-full w-full flex flex-col items-center justify-center" >

      <Image
        source={Logo}
        className="w-32 h-32 mb-8"
        resizeMode="contain"
      />

      <Text>
        Bem-vindo ao  <Text className="text-3xl font-bold text-red-500 mt-1 mb-4">
        Auxílio Gás
      </Text>
      </Text>

      

      <Text className="text-center text-gray-600 text-base px-6">
        Explore todos os guias para o auxílio estudantil Vale Gas...
      </Text>

      <Link href="/login" asChild>
        <TouchableOpacity className="mt-10 bg-red-700 w-64 py-4 rounded-full items-center">
          <Text className="text-white font-semibold text-base">
            Faça login para continuar →
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/register" className="mt-4">
        <Text className="text-gray-700 underline">Criar Conta</Text>
      </Link>
    </View>
  );
}
