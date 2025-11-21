import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface HeaderProps {
  showBackButton?: boolean;
  onBackPress?: () => void;
  title?: string;
}

export function Header({ showBackButton = true, onBackPress, title = "Auxílio Gás" }: HeaderProps) {
  return (
    <View className="pt-10 bg-white"> 
      
    <View className="w-full flex-row items-center justify-between px-4 py-4 pt-10 bg-white">

      <View className="flex-1 items-center mx-4">
        <Text className="text-xl font-bold text-gray-900 text-center">
          {title}
        </Text>
        <Text className="text-sm text-gray-500 mt-1">
          Seu combustível para estudar
        </Text>
      </View>

      <View className="w-12 h-12 bg-gray-100 rounded-2xl flex justify-center items-center opacity-50">
        <Ionicons name="person" size={24} color="#6b7280"/>
      </View>
    </View>
    </View>
  );
}