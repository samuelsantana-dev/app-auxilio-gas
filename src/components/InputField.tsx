import { Image, TextInput, View } from "react-native";

interface Props {
  icon: any;
  placeholder: string;
  secureTextEntry?: boolean;
  rightIcon?: any;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function InputField({
  icon,
  placeholder,
  secureTextEntry = false,
  rightIcon,
  value,
  onChangeText,
}: Props) {
  return (
    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4 h-12 w-full">
      <Image source={icon} style={{ width: 20, height: 20, marginRight: 12 }} />

      <TextInput
        placeholder={placeholder}
        className="flex-1 text-gray-700 text-base"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9ca3af"
      />

      {rightIcon && (
        <Image source={rightIcon} style={{ width: 20, height: 20 }} />
      )}
    </View>
  );
}