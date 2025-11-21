import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  checked: boolean;
  onPress: () => void;
  label: string;
}

export default function CheckBox({ checked, onPress, label }: Props) {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center mb-6">
      <View
        className={`w-5 h-5 rounded border mr-2 ${
          checked ? "bg-red-700 border-red-700" : "border-gray-400"
        }`}
      />
      <Text className="text-blue-600">{label}</Text>
    </TouchableOpacity>
  );
}
