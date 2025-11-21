import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export function Footer() {
  return (
    <View className="w-full flex-row items-center justify-between px-8 py-4 border-t border-gray-200 mb-6">
      
      <Link href="/" asChild>
        <Pressable className="items-center flex-1">
          <Ionicons name="home" size={24} color="#dc2626"/>
          <Text className="text-xs text-red-600 font-medium mt-1">Início</Text>
        </Pressable>
      </Link>
    
    <Link href="/benefits" asChild>
      <Pressable className="items-center flex-1">
        <Ionicons name="document-text" size={24} color="#9ca3af"/>
        <Text className="text-xs text-gray-500 mt-1">Benefícios</Text>
      </Pressable>
    </Link>

      <Link href="/alerts" asChild>
        <Pressable className="items-center flex-1">
          <Ionicons name="notifications" size={24} color="#9ca3af"/>
          <Text className="text-xs text-gray-500 mt-1">Alertas</Text>
        </Pressable>
      </Link>

      <Link href="/profile" asChild>
        <Pressable className="items-center flex-1">
          <Ionicons name="person" size={24} color="#9ca3af"/>
          <Text className="text-xs text-gray-500 mt-1">profile</Text>
        </Pressable>
      </Link>

    </View>
  );
}