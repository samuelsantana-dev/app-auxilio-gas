import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

import CheckBox from "@/components/ui/Checkbox";
import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SocialButton from "@/components/ui/SocialButton";
import AppleIcon from "src/assets/icons/apple.png";
import EmailIcon from "src/assets/icons/email.png";
import GoogleIcon from "src/assets/icons/google.png";
import LockIcon from "src/assets/icons/lock.png";
import UserIcon from "src/assets/icons/user.png";

export default function CreateAccountScreen() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso", "Register realizado com sucesso!");
        router.push('/profile');
      } else {
        Alert.alert("Erro", data.message || "Erro ao fazer Register");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível conectar ao servidor");
      console.log("Register mockado - Redirecionando...");
      router.push('/profile');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialRegister = (provider: string) => {
    Alert.alert(`${provider} Register`, `Register com ${provider} clicado`);
  };

  return (
    <View className="flex-1 bg-white">
      <Header />
      <View className="flex-1 px-6 py-12">
        
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900 mb-2">Crie sua conta</Text>
          <Text className="text-gray-600 text-base">Bem-vindo de volta!</Text>
        </View>

        <View className="flex-row justify-center space-x-4 mb-8">
          <SocialButton 
            icon={GoogleIcon} 
            background="bg-white border border-gray-300" 
          />
          <SocialButton 
            icon={AppleIcon} 
            background="bg-black" 
          />
        </View>

        <View className="mb-2">
          <Text className="text-gray-500 text-sm mb-3 text-center">ou use seu email</Text>
        </View>

        <View className="space-y-5 mb-6">

          <InputField
            icon={UserIcon}
            placeholder="Digite seu nome de usuário"
            value={user}
            onChangeText={setUser}
          />

          <InputField
            icon={EmailIcon}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />

          <InputField
            icon={LockIcon}
            placeholder="Digite sua senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View className="flex-row justify-between items-center mb-6">
          <CheckBox
            checked={checked}
            onPress={() => setChecked(!checked)}
            label="Lembrar de mim"
          />
          
        </View>

        <PrimaryButton 
          title={loading ? "Entrando..." : "Entrar"} 
          onPress={handleRegister}
          disabled={loading}
        />

        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Ja tem uma conta ? </Text>
          <Link href="/login">
            <Text className="text-red-500 font-bold">Faça login</Text>
          </Link>
        </View>

      </View>

      <Footer />
    </View>
  );
}