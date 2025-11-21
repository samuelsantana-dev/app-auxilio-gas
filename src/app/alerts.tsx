import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

export default function AlertsScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <Header />
      
      <ScrollView className="flex-1 px-6">
        <Text className="text-2xl font-bold text-gray-900 mt-6 mb-4">alerts e Notificações</Text>
        
        <View className="bg-yellow-50 rounded-2xl p-5 mb-4 border border-yellow-200">
          <View className="flex-row items-center">
            <Ionicons name="warning" size={24} color="#d97706" />
            <Text className="font-bold text-lg ml-3 text-yellow-800">Atenção</Text>
          </View>
          <Text className="text-yellow-700 mt-2">
            Seu próximo pagamento será em 5 dias. Esteja com a documentação em dia.
          </Text>
          <Text className="text-yellow-600 text-sm mt-2">Hoje, 09:30</Text>
        </View>

        <View className="bg-blue-50 rounded-2xl p-5 mb-4 border border-blue-200">
          <View className="flex-row items-center">
            <Ionicons name="information" size={24} color="#2563eb" />
            <Text className="font-bold text-lg ml-3 text-blue-800">Informação</Text>
          </View>
          <Text className="text-blue-700 mt-2">
            Novo posto de retirada disponível na Zona Leste.
          </Text>
          <Text className="text-blue-600 text-sm mt-2">Ontem, 14:15</Text>
        </View>

        <View className="bg-green-50 rounded-2xl p-5 mb-4 border border-green-200">
          <View className="flex-row items-center">
            <Ionicons name="checkmark-circle" size={24} color="#059669" />
            <Text className="font-bold text-lg ml-3 text-green-800">Confirmação</Text>
          </View>
          <Text className="text-green-700 mt-2">
            Seu benefício foi renovado com sucesso para o próximo semestre.
          </Text>
          <Text className="text-green-600 text-sm mt-2">05/12/2024</Text>
        </View>

        <View className="bg-red-50 rounded-2xl p-5 border border-red-200">
          <View className="flex-row items-center">
            <Ionicons name="alert-circle" size={24} color="#dc2626" />
            <Text className="font-bold text-lg ml-3 text-red-800">Importante</Text>
          </View>
          <Text className="text-red-700 mt-2">
            Documentação pendente para validação do benefício.
          </Text>
          <Text className="text-red-600 text-sm mt-2">01/12/2024</Text>
        </View>
      </ScrollView>
      
      <Footer />
    </View>
  );
}