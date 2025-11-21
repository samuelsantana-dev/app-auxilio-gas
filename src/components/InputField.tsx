import { Image, TextInput, View } from "react-native";

interface Props {
  icon: any;
  placeholder: string;
  secureTextEntry?: boolean;
  rightIcon?: any;
}

export default function InputField({
  icon,
  placeholder,
  secureTextEntry = false,
  rightIcon,
}: Props) {
  return (
    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4 h-12 w-full">
      <Image source={icon} style={{ maxWidth: 20, maxHeight: 20, marginRight: 10, marginLeft: 10, margin: 5 }} />

      <TextInput
        placeholder={placeholder}
        className="flex-1 text-gray-700 ml-2"
        secureTextEntry={secureTextEntry}
      />

      {rightIcon && (
        <Image source={rightIcon} style={{ width: 20, height: 20 }} />
      )}
    </View>
  );
}
