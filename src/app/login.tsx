import { AlertComponent } from "@/components/Alert";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import CheckBox from "@/components/ui/Checkbox";
import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SocialButton from "@/components/ui/SocialButton";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import AppleIcon from "src/assets/icons/apple.png";
import EmailIcon from "src/assets/icons/email.png";
import GoogleIcon from "src/assets/icons/google.png";
import LockIcon from "src/assets/icons/lock.png";

export default function LoginScreen() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ variant: 'error', title: '', message: '' });
  const router = useRouter();

  const showCustomAlert = (variant: 'error' | 'success', title: string, message: string) => {
    setAlertInfo({ variant, title, message });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };
  const handleLogin = async () => {
    if (!email || !password) {
      showCustomAlert('error', 'Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/login", {
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
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        router.push('/profile');
      } else {
        Alert.alert("Erro", data.message || "Erro ao fazer login");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível conectar ao servidor");
      console.log("Login mockado - Redirecionando...");
      router.push('/profile');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert(`${provider} Login`, `Login com ${provider} clicado`);
  };

  return (
    <View className="flex-1 bg-white">
        <Header />
        {showAlert && (
          <View className="absolute top-20 left-6 right-6 z-50">
            <AlertComponent 
              variant={alertInfo.variant as 'error' | 'success'} 
              title={alertInfo.title} 
              message={alertInfo.message} 
            />
          </View>
        )}
      <View className="flex-1 px-6 py-12">
        
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900 mb-2">Login</Text>
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

        <View className="space-y-4 mb-6">
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
          onPress={handleLogin}
          disabled={loading}
        />

        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Ainda não tem conta? </Text>
          <Link href="/register">
            <Text className="text-red-500 font-bold">Criar agora</Text>
          </Link>
        </View>

      </View>
        <Footer />
    </View>
  );
}