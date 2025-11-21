import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <Header />
      
      <ScrollView className="flex-1 px-6">
        <View className="items-center mt-6 mb-8">
          <View className="w-20 h-20 bg-red-100 rounded-full items-center justify-center">
            <Ionicons name="person" size={32} color="#dc2626" />
          </View>
          <Text className="text-xl font-bold mt-4">João Silva</Text>
          <Text className="text-gray-500">Estudante - Engenharia</Text>
        </View>

        <View className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <Text className="font-bold text-lg mb-4">Informações Pessoais</Text>
          
          <View className="flex-row justify-between py-3 border-b border-gray-100">
            <Text className="text-gray-600">Matrícula</Text>
            <Text className="font-semibold">20240012345</Text>
          </View>
          
          <View className="flex-row justify-between py-3 border-b border-gray-100">
            <Text className="text-gray-600">CPF</Text>
            <Text className="font-semibold">123.456.789-00</Text>
          </View>
          
          <View className="flex-row justify-between py-3 border-b border-gray-100">
            <Text className="text-gray-600">Instituição</Text>
            <Text className="font-semibold">Universidade Federal</Text>
          </View>
          
          <View className="flex-row justify-between py-3">
            <Text className="text-gray-600">Curso</Text>
            <Text className="font-semibold">Engenharia Civil</Text>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-6 shadow-sm">
          <Text className="font-bold text-lg mb-4">Configurações</Text>
          
          <View className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons name="notifications" size={20} color="#6b7280" />
            <Text className="ml-3 flex-1">Notificações</Text>
            <Ionicons name="chevron-forward" size={16} color="#6b7280" />
          </View>
          
          <View className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons name="lock-closed" size={20} color="#6b7280" />
            <Text className="ml-3 flex-1">Privacidade</Text>
            <Ionicons name="chevron-forward" size={16} color="#6b7280" />
          </View>
          
          <View className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons name="help-circle" size={20} color="#6b7280" />
            <Text className="ml-3 flex-1">Ajuda e Suporte</Text>
            <Ionicons name="chevron-forward" size={16} color="#6b7280" />
          </View>
          
          <View className="flex-row items-center py-3">
            <Ionicons name="log-out" size={20} color="#dc2626" />
            <Text className="ml-3 flex-1 text-red-500">Sair da Conta</Text>
          </View>
        </View>
      </ScrollView>
      
      <Footer />
    </View>
  );
}