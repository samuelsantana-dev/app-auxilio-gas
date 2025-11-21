import { Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function SecundayButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className=" border-red-500 py-4 rounded-full items-center w-full mb-6 border-2"
    >
      <Text className="text-red-500 font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
}
