import { Image, TouchableOpacity } from "react-native";

interface Props {
  icon: any;
  background: string;
}

export default function SocialButton({ icon, background }: Props) {
  return (
    <TouchableOpacity
      className={`w-12 h-12 rounded-full ${background} items-center justify-center`}
    >
      <Image source={icon} style={{ width: 22, height: 22, borderRadius: 30 }} />
    </TouchableOpacity>
  );
}
