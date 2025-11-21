import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

import CheckBox from "src/components/Checkbox";
import InputField from "src/components/InputField";
import PrimaryButton from "src/components/PrimaryButton";
import SocialButton from "src/components/SocialButton";

import AppleIcon from "src/assets/icons/apple.png";
import EmailIcon from "src/assets/icons/email.png";
import GoogleIcon from "src/assets/icons/google.png";
import LockIcon from "src/assets/icons/lock.png";

export default function LoginScreen() {
  const [checked, setChecked] = useState(false);

  return (
    <View className="h-full w-full px-6 flex flex-col gap-3 items-center justify-between py-12">

      <View className="items-center">
        <Text className="text-3xl font-bold mb-1">Login</Text>
        <Text className="text-gray-600">Bem-vindo de volta!</Text>
      </View>

      <View className="flex-row space-x-4 mb-6">
        <SocialButton icon={GoogleIcon} background="bg-blue-500" />
        <SocialButton icon={AppleIcon} background="bg-black" />
      </View>

      <InputField
        icon={EmailIcon}
        placeholder="Digite seu email"
      />

      <InputField
        icon={LockIcon}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <CheckBox
        checked={checked}
        onPress={() => setChecked(!checked)}
        label="Lembrar de mim"
      />

      <PrimaryButton title="Entrar" />

      <Text className="text-gray-600 mt-2">
        Ainda não tem conta?
        <Link href="/register">
          <Text className="text-black font-bold"> Criar agora</Text>
        </Link>
      </Text>

    </View>
  );
}
