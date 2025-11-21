import { Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
}

export default function PrimaryButton({ title, onPress, disabled }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-red-700 py-4 rounded-full items-center w-full mb-6"
      disabled={disabled}
    >
      <Text className="text-white font-semibold text-base">{title}</Text>
    </TouchableOpacity>
  );
}
