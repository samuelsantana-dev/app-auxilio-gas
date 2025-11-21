import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

export default function BenefitsScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <Header />
      
      <ScrollView className="flex-1 px-6">
        <Text className="text-2xl font-bold text-gray-900 mt-6 mb-4">Benefícios Disponíveis</Text>
        
        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
          <View className="flex-row items-center">
            <Ionicons name="flame" size={24} color="#dc2626" />
            <Text className="font-bold text-lg ml-3">Vale Gás Básico</Text>
          </View>
          <Text className="text-gray-600 mt-2 mb-3">1 botijão de 13kg por mês</Text>
          <Text className="text-red-500 font-semibold">Valor: R$ 120,00/mês</Text>
        </View>

        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
          <View className="flex-row items-center">
            <Ionicons name="restaurant" size={24} color="#dc2626" />
            <Text className="font-bold text-lg ml-3">Vale Gás Família</Text>
          </View>
          <Text className="text-gray-600 mt-2 mb-3">2 botijões de 13kg por mês</Text>
          <Text className="text-red-500 font-semibold">Valor: R$ 220,00/mês</Text>
        </View>

        <View className="bg-white rounded-2xl p-5 shadow-sm">
          <View className="flex-row items-center">
            <Ionicons name="school" size={24} color="#dc2626" />
            <Text className="font-bold text-lg ml-3">Bolsa Auxílio</Text>
          </View>
          <Text className="text-gray-600 mt-2 mb-3">Complemento para materiais</Text>
          <Text className="text-red-500 font-semibold">Valor: R$ 80,00/mês</Text>
        </View>

        <View className="bg-red-50 rounded-xl p-4 mt-6">
          <Text className="font-semibold text-red-700">Como solicitar?</Text>
          <Text className="text-red-600 text-sm mt-1">
            Entre em contato com a secretaria da sua instituição de ensino
          </Text>
        </View>
      </ScrollView>
      
      <Footer />
    </View>
  );
}