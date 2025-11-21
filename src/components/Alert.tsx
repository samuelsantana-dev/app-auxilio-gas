import { Ionicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface AlertProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp?: string;
  icon?: ReactNode;
}

export function AlertComponent({ variant, title, message, timestamp, icon }: AlertProps) {
  const styles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      iconColor: '#059669',
      defaultIcon: 'checkmark-circle'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      iconColor: '#dc2626',
      defaultIcon: 'close-circle'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      iconColor: '#d97706',
      defaultIcon: 'warning'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      iconColor: '#2563eb',
      defaultIcon: 'information-circle'
    }
  };

  const style = styles[variant];

  return (
    <View className={`${style.bg} ${style.border} rounded-2xl p-5 mb-4 border`}>
      <View className="flex-row items-start">
        <View className="flex-row items-center flex-1">
          {icon || (
            <Ionicons name={style.defaultIcon as any} size={24} color={style.iconColor} />
          )}
          <Text className={`font-bold text-lg ml-3 ${style.text} flex-1`}>
            {title}
          </Text>
        </View>
      </View>
      
      <Text className={`${style.text} mt-2 text-base leading-6`}>
        {message}
      </Text>
      
      {timestamp && (
        <Text className={`${style.text} text-sm mt-3 opacity-70`}>
          {timestamp}
        </Text>
      )}
    </View>
  );
}