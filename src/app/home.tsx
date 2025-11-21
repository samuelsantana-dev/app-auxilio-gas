import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SecundayButton from "@/components/SecundayButton";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import Logo from "src/assets/images/icone-gas.png";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <View className="flex-1 px-6 justify-center">
        
        <View className="items-center mb-8">
          <Image
            source={Logo}
            className="w-32 h-2 mb-6"
            resizeMode="contain"
            style={{ maxWidth: 150, maxHeight: 300 }}
          />
          
          <Text className="text-3xl font-bold text-red-500 text-center mb-2">
            Auxílio Gás
          </Text>
          
          <Text className="text-lg text-gray-600 text-center">
            Seu combustível para estudar
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-base text-gray-700 text-center leading-6">
            Explore todos os guias e benefícios do auxílio estudantil Vale Gás. 
            Foque nos estudos sem preocupações.
          </Text>
        </View>

        <View className="space-y-4">
          <Link href="/login" asChild>
            <PrimaryButton title="Fazer Login" />
          </Link>

          <Link href="/register" asChild>
              <SecundayButton title="Criar Conta" />
          </Link>
        </View>
      </View>
      <Footer />
    </View>
  );
}